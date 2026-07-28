#!/usr/bin/env python3
"""Prepare, sign, and verify Provider catalog release artifacts."""

import argparse
import base64
import json
import os
from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "native-host"))

from provider_registry import (  # noqa: E402
    ProviderRegistryError,
    ed25519_public_key,
    sign_catalog_envelope,
    verify_catalog_envelope,
)


def private_seed():
    encoded = os.environ.get("PROVIDER_CATALOG_SIGNING_KEY", "").strip()
    if not encoded:
        raise ProviderRegistryError("缺少 PROVIDER_CATALOG_SIGNING_KEY")
    try:
        seed = base64.b64decode(encoded, validate=True)
    except (TypeError, ValueError) as exc:
        raise ProviderRegistryError("Provider catalog 私钥不是有效 Base64") from exc
    if len(seed) != 32:
        raise ProviderRegistryError("Provider catalog 私钥必须是 32 字节 Ed25519 seed")
    return seed


def write_json(path, value):
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def main():
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="command", required=True)

    public = subparsers.add_parser("write-public-key")
    public.add_argument("--output", required=True)

    sign = subparsers.add_parser("sign")
    sign.add_argument("--input", required=True)
    sign.add_argument("--output", required=True)

    verify = subparsers.add_parser("verify")
    verify.add_argument("--input", required=True)
    verify.add_argument("--shared-dir", default=str(ROOT / "shared"))

    args = parser.parse_args()
    if args.command == "write-public-key":
        key = base64.b64encode(ed25519_public_key(private_seed())).decode("ascii")
        write_json(args.output, {
            "algorithm": "Ed25519",
            "publicKey": key,
            "status": "configured",
        })
        return
    if args.command == "sign":
        payload = json.loads(Path(args.input).read_text(encoding="utf-8"))
        write_json(args.output, sign_catalog_envelope(payload, private_seed()))
        return
    envelope = json.loads(Path(args.input).read_text(encoding="utf-8"))
    catalog = verify_catalog_envelope(envelope, args.shared_dir)
    print(
        f"Provider catalog v{catalog['catalogVersion']} verified: "
        f"{len(catalog['adapters'])} adapters"
    )


if __name__ == "__main__":
    try:
        main()
    except (OSError, json.JSONDecodeError, ProviderRegistryError) as exc:
        print(f"Provider catalog operation failed: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc
