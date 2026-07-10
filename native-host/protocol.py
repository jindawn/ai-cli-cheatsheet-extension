"""Native Messaging framing helpers, kept independent from update logic."""

import json
import struct
import sys


def read_native_message(*, max_bytes, error_type=ValueError, stream=None):
    source = stream or sys.stdin.buffer
    raw_length = source.read(4)
    if not raw_length:
        return None
    length = struct.unpack("<I", raw_length)[0]
    if length > max_bytes:
        raise error_type("请求过大")
    payload = source.read(length)
    if len(payload) != length:
        raise error_type("请求数据不完整")
    try:
        return json.loads(payload.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise error_type("请求不是有效 JSON") from exc


def send_native_message(obj, *, stream=None):
    destination = stream or sys.stdout.buffer
    encoded = json.dumps(obj, ensure_ascii=False).encode("utf-8")
    destination.write(struct.pack("<I", len(encoded)))
    destination.write(encoded)
    destination.flush()
