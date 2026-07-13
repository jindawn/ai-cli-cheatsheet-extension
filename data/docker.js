// Generated from validated structured data. Manual edits must follow data/SCHEMA.md.
window.CHEATSHEET_DATA = window.CHEATSHEET_DATA || {};
window.CHEATSHEET_DATA["docker"] = {
  "meta": {
    "id": "docker",
    "name": "Docker",
    "color": "#2496ED",
    "source": "Docker CLI 官方参考完整命令入口；核验于 2026-07-13",
    "builtIn": false,
    "updatePolicy": "version-driven",
    "contentCheckedAt": "2026-07-13",
    "sourceCheckedAt": "2026-07-13",
    "sourceUrl": "https://docs.docker.com/reference/cli/docker/",
    "sourceTier": "official",
    "coverage": "Docker 官方 CLI Reference 列出的全部命令、子命令及可搜索别名；每个命令保留常用关键选项",
    "platforms": [
      "mac",
      "windows",
      "linux"
    ],
    "order": 999,
    "sources": [
      {
        "id": "docker-docs",
        "title": "Docker CLI reference",
        "kind": "official-doc",
        "maintainer": "Docker Inc.",
        "evidenceTier": "first-party",
        "purposes": [
          "command-existence",
          "option-semantics",
          "examples"
        ],
        "resolvedUrl": "https://docs.docker.com/reference/cli/docker/",
        "pageTitle": "Docker CLI | Docker Docs",
        "checkedAt": "2026-07-13",
        "url": "https://docs.docker.com/reference/cli/docker/",
        "lastVerifiedAt": "2026-07-13"
      },
      {
        "id": "docker-help",
        "title": "`docker --help` output",
        "kind": "local-help",
        "maintainer": "Docker Inc.",
        "evidenceTier": "first-party",
        "purposes": [
          "command-existence",
          "option-semantics"
        ],
        "lastVerifiedAt": "2026-07-02",
        "version": "29.0.1"
      }
    ],
    "verificationStatus": "manual",
    "verifiedVersion": "29.0.1",
    "officialCoverage": {
      "scope": "all-command-entrypoints",
      "status": "complete",
      "total": 440,
      "covered": 440,
      "checkedAt": "2026-07-13",
      "sourceIds": [
        "docker-docs"
      ],
      "inventoryHash": "sha256:ae5fdb29c1a4af2792f6247403191b43fdec00658a15154dbb0ce3352c5aee86"
    }
  },
  "items": [
    {
      "cat": "flag",
      "cmd": "docker container run",
      "en": "Run a container",
      "zh": "运行容器",
      "evidenceStatus": "verified",
      "keywords": [
        "container",
        "run",
        "start",
        "image",
        "create"
      ],
      "examples": [
        {
          "value": "docker run hello-world",
          "description": "拉取 hello-world 镜像并创建容器，输出欢迎信息后退出。适合检查 Docker 引擎是否正常工作。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "验证 Docker 安装或测试镜像是否能正常启动",
          "goal": "使用官方 hello-world 镜像运行一个容器",
          "expected": "终端输出 Hello from Docker! 及说明段落",
          "prerequisites": "本地无该镜像时会自动从 Docker Hub 拉取（公开镜像无需登录）"
        }
      ],
      "id": "docker-run",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker run"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker run -d",
      "en": "Run container in detached mode",
      "zh": "后台运行容器",
      "context": "docker run",
      "evidenceStatus": "verified",
      "keywords": [
        "container",
        "run",
        "detached",
        "background",
        "daemon"
      ],
      "examples": [
        {
          "value": "docker run -d --name my-nginx nginx:latest",
          "description": "使用 -d 让容器在后台运行并打印容器 ID，终端立即返回。同时用 --name 为容器命名便于后续管理。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在后台持续运行服务，不阻塞终端",
          "goal": "以后台模式启动一个 Nginx 容器",
          "expected": "返回容器的完整 SHA256 ID，容器在后台运行",
          "prerequisites": "本地存在 nginx:latest 镜像或可访问 Docker Hub"
        }
      ],
      "id": "docker-run-detach",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/ · 选项 -d/--detach",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker run -p",
      "en": "Publish container ports to host",
      "zh": "将容器端口发布到主机",
      "context": "docker run",
      "evidenceStatus": "verified",
      "keywords": [
        "port",
        "publish",
        "expose",
        "mapping",
        "network"
      ],
      "examples": [
        {
          "value": "docker run -d -p 8080:80 nginx:latest",
          "description": "-p 8080:80 表示将宿主机的 8080 端口所有流量转发到容器内部的 80 端口。在主机上访问 http://localhost:8080 即可看到 Nginx 欢迎页。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "启动 Web 服务并让主机（或外部用户）能够访问容器内的端口",
          "goal": "将主机的 8080 端口映射到容器的 80 端口",
          "expected": "通过浏览器或 curl 访问 localhost:8080 时返回 Nginx 欢迎页面",
          "caveat": "主机端口可能已被占用；若被占用会直接报错，可更换数字调整。"
        }
      ],
      "id": "docker-run-publish",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/ · 选项 -p/--publish",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker run -v",
      "en": "Mount a volume or bind mount",
      "zh": "挂载卷或绑定挂载",
      "context": "docker run",
      "evidenceStatus": "verified",
      "keywords": [
        "volume",
        "mount",
        "bind",
        "data",
        "persistence"
      ],
      "examples": [
        {
          "value": "docker run -v \"$(pwd)\":/app alpine ls /app",
          "description": "-v 将当前工作目录绑定挂载至 /app，容器内列出 /app 的内容即为当前主机目录的文件。常用于开发场景实时共享代码。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将主机目录映射到容器内部，实现数据持久化或开发时实时同步文件",
          "goal": "将当前目录挂载到容器的 /app 路径",
          "expected": "终端输出当前主机目录下的文件列表",
          "prerequisites": "在包含文件的目录下执行；Windows PowerShell/CMD 需要用 %cd% 替换 $(pwd)"
        }
      ],
      "id": "docker-run-volume",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/ · 选项 -v/--volume",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker run --name",
      "en": "Assign a name to the container",
      "zh": "为容器指定名称",
      "context": "docker run",
      "evidenceStatus": "verified",
      "keywords": [
        "name",
        "container",
        "id",
        "identify",
        "manage"
      ],
      "examples": [
        {
          "value": "docker run -d --name web nginx:latest",
          "description": "--name 给容器分配友好名称，后续可用 docker stop web 等命令通过名称进行操作。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "为避免使用系统生成的随机容器名，用易读的名称管理容器",
          "goal": "创建一个名为 web 的 Nginx 容器",
          "expected": "返回容器 ID，且 docker ps 的 NAMES 列显示 web",
          "caveat": "容器名称在同一 Docker 引擎上必须唯一；如果重名会报错，需要先删除已有容器或重命名。"
        }
      ],
      "id": "docker-run-name",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/ · 选项 --name",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker run -e",
      "en": "Set environment variables",
      "zh": "设置环境变量",
      "context": "docker run",
      "evidenceStatus": "verified",
      "keywords": [
        "env",
        "variable",
        "config",
        "environment",
        "run"
      ],
      "examples": [
        {
          "value": "docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=secret mysql:8",
          "description": "-e 将环境变量 MYSQL_ROOT_PASSWORD 传入容器，MySQL 镜像依据该变量初始化 root 密码。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器应用需要通过环境变量获取配置，如数据库连接信息",
          "goal": "启动 MySQL 容器并设置 root 密码",
          "expected": "容器成功启动，MySQL 开始接受连接",
          "caveat": "密码在命令中明文可见，可通过 --env-file 从文件读取以避免泄露。"
        }
      ],
      "id": "docker-run-env",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/ · 选项 -e/--env",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker run --rm",
      "en": "Automatically remove container on exit",
      "zh": "退出后自动删除容器",
      "context": "docker run",
      "evidenceStatus": "verified",
      "keywords": [
        "remove",
        "cleanup",
        "temporary",
        "ephemeral",
        "container"
      ],
      "examples": [
        {
          "value": "docker run --rm alpine cat /etc/os-release",
          "description": "--rm 确保容器在命令执行完毕后立即被删除，避免积累大量已停止的测试容器。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "执行一次性命令或测试后不想残留已停止的容器",
          "goal": "临时输出系统版本信息并自动清理容器",
          "expected": "显示 Alpine 的 os-release 内容，且该容器不会出现在 docker ps -a 输出中",
          "caveat": "与 -d 一起使用时容器退出后仍会自动删除，但若容器仍在运行则不会删除；该选项不适用于需要保留容器进行故障排查的场景。；执行前先确认目标，必要时先备份或用预览/ dry-run 方式验证。",
          "warning": "这是高风险操作，执行前请确认目标、先备份或先使用预览/ dry-run 方式验证。"
        }
      ],
      "id": "docker-run-rm",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/run/ · 选项 --rm",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker run --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker build",
      "en": "Build an image from a Dockerfile",
      "zh": "基于 Dockerfile 构建镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "build",
        "image",
        "dockerfile",
        "context",
        "tag"
      ],
      "examples": [
        {
          "value": "docker build .",
          "description": "使用当前目录作为构建上下文，读取 Dockerfile 生成镜像。构建完成后可通过 docker images 查看未命名的 <none> 镜像。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "项目目录中含有 Dockerfile，需要构建成镜像以便运行或分发",
          "goal": "在当前目录下构建镜像",
          "expected": "逐层构建并输出每一层的指令和 ID，最后打印 Successfully built <image-id>",
          "prerequisites": "当前目录存在名为 Dockerfile 的文件"
        }
      ],
      "id": "docker-build",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/build/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker build --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker build -t",
      "en": "Tag the built image",
      "zh": "为构建的镜像添加标签",
      "context": "docker build",
      "evidenceStatus": "verified",
      "keywords": [
        "tag",
        "name",
        "label",
        "build",
        "repository"
      ],
      "examples": [
        {
          "value": "docker build -t my-app:latest .",
          "description": "-t 将生成镜像命名为 my-app，标签为 latest，方便后续 docker run my-app:latest 直接使用。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "构建镜像后希望能用易读的名称（如 my-app:1.0）引用，而非仅靠镜像 ID",
          "goal": "构建并标记为 my-app:latest 镜像",
          "expected": "构建成功后可执行 docker images | grep my-app 看到对应镜像记录"
        }
      ],
      "id": "docker-build-tag",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/build/ · 选项 -t/--tag",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker build --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker image pull",
      "en": "Pull an image from a registry",
      "zh": "从仓库拉取镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "pull",
        "download",
        "registry",
        "image",
        "get"
      ],
      "examples": [
        {
          "value": "docker pull alpine:3.19",
          "description": "从默认 Docker Hub 仓库下载指定标签的 alpine 镜像。若本地已存在该层则会加速下载。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "部署或测试前需要提前获取某个特定版本的镜像，避免运行时等待",
          "goal": "拉取 Alpine Linux 3.19 镜像",
          "expected": "逐层下载并输出 Pull complete，最后显示 Digest 和 Status: Downloaded newer image",
          "caveat": "默认从 Docker Hub 拉取；若使用私有仓库需在镜像名中指定仓库地址。"
        }
      ],
      "id": "docker-pull",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/pull/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker pull --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker pull"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker image push",
      "en": "Push an image to a registry",
      "zh": "将镜像推送到注册中心",
      "evidenceStatus": "verified",
      "keywords": [
        "push",
        "upload",
        "registry",
        "share",
        "publish"
      ],
      "examples": [
        {
          "value": "docker push myusername/my-image:latest",
          "description": "将本地已标记的镜像推送到远程注册中心的 myusername 命名空间下。推送前需通过 docker login 认证。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地构建完成的自定义镜像需要共享给团队或部署到生产环境",
          "goal": "推送 my-image:latest 到 Docker Hub",
          "expected": "输出分层上传进度，结束时显示 latest: digest: sha256:... size: ...",
          "prerequisites": "已使用 docker login 登录目标注册中心",
          "caveat": "镜像名称必须符合仓库格式；推送大量镜像前建议先使用 docker tag 确认标签。"
        }
      ],
      "id": "docker-push",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/push/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker push --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker push"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container ls",
      "en": "List running containers",
      "zh": "列出运行中的容器",
      "evidenceStatus": "verified",
      "keywords": [
        "list",
        "ps",
        "running",
        "container",
        "status"
      ],
      "examples": [
        {
          "value": "docker ps",
          "description": "默认输出容器 ID、使用的镜像、启动命令、创建时间、状态、端口映射和名称。适合快速了解系统运行状态。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "查看当前哪些容器正处于运行状态及其基本信息",
          "goal": "查看所有运行中的容器 ID、名称、端口等",
          "expected": "表格显示所有状态为 Up 的容器信息，若无则返回空表头"
        }
      ],
      "id": "docker-ps",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/ls/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker ps --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker container list",
        "docker container ps",
        "docker ps"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker ps -a",
      "en": "List all containers (including stopped)",
      "zh": "列出所有容器（含已停止的）",
      "context": "docker ps",
      "evidenceStatus": "verified",
      "keywords": [
        "all",
        "ps",
        "stopped",
        "history",
        "container"
      ],
      "examples": [
        {
          "value": "docker ps -a",
          "description": "-a 显示所有状态的容器，Exited (0) 等退出码可帮助诊断容器异常情况。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要排查已退出容器留下的日志，或清理旧容器前核查",
          "goal": "显示所有容器，包括已退出的容器",
          "expected": "包含 STATUS 列为 Exited 或其他状态的容器列表"
        }
      ],
      "id": "docker-ps-all",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/ls/ · 选项 -a/--all",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker ps --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker image ls",
      "en": "List images",
      "zh": "列出本机镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "images",
        "list",
        "repository",
        "tag",
        "size"
      ],
      "examples": [
        {
          "value": "docker images",
          "description": "输出 REPOSITORY, TAG, IMAGE ID, CREATED, SIZE 表格。可帮助决定是否需要清理或更新镜像。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "查看本地已有哪些镜像，是否已包含需要用到的版本",
          "goal": "列出所有本地镜像的仓库、标签和大小",
          "expected": "镜像列表，若无镜像则仅表头行"
        }
      ],
      "id": "docker-images",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/ls/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker images --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker image list",
        "docker images"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container stop",
      "en": "Stop a running container",
      "zh": "停止运行中的容器",
      "evidenceStatus": "verified",
      "keywords": [
        "stop",
        "graceful",
        "shutdown",
        "container",
        "halt"
      ],
      "examples": [
        {
          "value": "docker stop web",
          "description": "docker stop 发送 SIGTERM，等待超时后再发 SIGKILL，使容器有机会执行清理操作。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要停止某个服务容器以释放资源或进行维护",
          "goal": "优雅地停止名为 web 的容器",
          "expected": "终端输出容器名称（如 web），随后容器状态变为 Exited",
          "caveat": "先确认 web 是目标容器并检查其当前请求和任务；若容器不响应 SIGTERM，再考虑使用 docker kill 立即终止。",
          "warning": "停止服务容器会中断它正在处理的请求或后台任务。"
        }
      ],
      "id": "docker-stop",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/stop/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker stop --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker stop"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container start",
      "en": "Start a stopped container",
      "zh": "启动已停止的容器",
      "evidenceStatus": "verified",
      "keywords": [
        "start",
        "stopped",
        "resume",
        "container",
        "begin"
      ],
      "examples": [
        {
          "value": "docker start web",
          "description": "使用容器原有配置（端口、卷挂载等）重新启动，保留之前的文件系统状态。适合恢复临时暂停的服务。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "之前停止的服务容器需要重新上线",
          "goal": "重新启动名为 web 的已停止容器",
          "expected": "输出容器名称（web），容器进入运行状态，可通过 docker ps 确认"
        }
      ],
      "id": "docker-start",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/start/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker start --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker start"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container restart",
      "en": "Restart a container",
      "zh": "重启容器",
      "evidenceStatus": "verified",
      "keywords": [
        "restart",
        "reboot",
        "container",
        "cycle",
        "apply"
      ],
      "examples": [
        {
          "value": "docker restart web",
          "description": "等效于 docker stop 后执行 docker start，但简化操作。容器内进程重新启动，网络映射保持不变。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "应用配置文件更新后需要快速让容器重新加载配置",
          "goal": "重启名为 web 的容器以应用新的环境变量或卷内容",
          "expected": "输出 web，容器先停止再启动，状态最终为 Up",
          "caveat": "restart 会导致短暂的服务中断；若追求零停机建议采用滚动更新。执行前先确认目标容器名称是否正确。",
          "warning": "重启会中断容器内正在处理的请求或任务，执行前请确认影响并备份重要数据。"
        }
      ],
      "id": "docker-restart",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/restart/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker restart --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker restart"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container rm",
      "en": "Remove containers",
      "zh": "删除容器",
      "evidenceStatus": "verified",
      "keywords": [
        "remove",
        "delete",
        "container",
        "cleanup",
        "rm"
      ],
      "examples": [
        {
          "value": "docker rm test-container",
          "description": "删除指定容器；容器必须是已停止状态，否则需要加 -f 强制删除。常用于搭配 docker ps -a 查看后清理。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "测试完成后清理不再需要的已停止容器，释放存储空间",
          "goal": "删除一个名为 test-container 的已停止容器",
          "expected": "输出容器名称 test-container，执行后该容器不再显示于 docker ps -a 列表",
          "caveat": "已删除的容器数据（非卷数据）将不可恢复；删除前确认不需要日志或未备份的文件。",
          "warning": "容器删除后其可写层无法恢复；执行前确认目标，并先备份或用 docker ps -a 检查待删除容器。"
        }
      ],
      "id": "docker-rm",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/rm/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker rm --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker container remove",
        "docker rm"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker image rm",
      "en": "Remove images",
      "zh": "删除镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "remove",
        "delete",
        "image",
        "rmi",
        "cleanup"
      ],
      "examples": [
        {
          "value": "docker rmi my-app:old",
          "description": "移除指定镜像；若该镜像正被某个容器使用（即便已停止）会报错，需先删除相关容器。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "老旧或不再使用的镜像占据磁盘空间，需要清理",
          "goal": "删除标记为 my-app:old 的镜像",
          "expected": "输出 Untagged: my-app:old 及各层删除信息",
          "caveat": "误删基础镜像可能导致其他依赖镜像出现 dangling 层，执行前先用 docker images 确认镜像标签和 ID。",
          "warning": "删除后本机将无法再用该标签创建容器；需要时必须重新拉取或构建镜像。"
        }
      ],
      "id": "docker-rmi",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/rm/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker rmi --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker image remove",
        "docker rmi"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container exec",
      "en": "Run a command in a running container",
      "zh": "在运行中的容器内执行命令",
      "evidenceStatus": "verified",
      "keywords": [
        "execute",
        "command",
        "inside",
        "container",
        "debug"
      ],
      "examples": [
        {
          "value": "docker exec web ls /etc/nginx",
          "description": "执行一次性命令列出目录内容，无需进入交互式终端即可快速探测容器内部环境。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要检查容器内的文件系统或查看运行时状态，如查看某个配置文件",
          "goal": "在名为 web 的容器内列出 /etc/nginx 目录",
          "expected": "输出 /etc/nginx 下的文件列表，如 nginx.conf",
          "prerequisites": "目标容器处于运行状态"
        }
      ],
      "id": "docker-exec",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/exec/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker exec --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker exec"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker exec -it",
      "en": "Open an interactive terminal inside container",
      "zh": "在容器内打开交互式终端",
      "context": "docker exec",
      "evidenceStatus": "verified",
      "keywords": [
        "interactive",
        "tty",
        "shell",
        "exec",
        "terminal"
      ],
      "examples": [
        {
          "value": "docker exec -it web /bin/bash",
          "description": "-i 保持标准输入打开，-t 分配伪终端，组合后提供类似 ssh 的交互式体验。执行后用户的提示符将变为容器内的 shell。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要手动在容器内调试或修改文件，如进入正在运行的应用容器内部排查问题",
          "goal": "在名为 web 的容器中启动 bash 终端",
          "expected": "终端提示符变为 root@<container-id>:/# 或类似，可执行内建命令",
          "prerequisites": "目标容器已安装 /bin/bash，某些精简镜像可能只有 /bin/sh",
          "caveat": "退出终端（exit）时不会停止容器，仅仅是退出 exec 会话。"
        }
      ],
      "id": "docker-exec-it",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/exec/ · 选项 -i -t",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker exec --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container logs",
      "en": "Fetch the logs of a container",
      "zh": "查看容器日志",
      "evidenceStatus": "verified",
      "keywords": [
        "logs",
        "output",
        "stdout",
        "stderr",
        "troubleshoot"
      ],
      "examples": [
        {
          "value": "docker logs web",
          "description": "即时输出该容器启动至今收集到 stdout/stderr 的内容，适合快速审查应用日志。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器运行一段时间后需要检查其输出，以诊断错误或确认正常运行",
          "goal": "查看名为 web 容器的全部已有日志",
          "expected": "终端打印容器的历史日志（可能较多）",
          "caveat": "日志可能非常大量；若只想查看最近行数可结合 --tail 参数。"
        }
      ],
      "id": "docker-logs",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/logs/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker logs --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker logs"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker logs -f",
      "en": "Follow container log output",
      "zh": "持续跟踪容器日志",
      "context": "docker logs",
      "evidenceStatus": "verified",
      "keywords": [
        "follow",
        "stream",
        "logs",
        "monitor",
        "tail"
      ],
      "examples": [
        {
          "value": "docker logs -f web",
          "description": "-f (--follow) 让命令持续输出，当容器产生新内容时立即显示，直到手动 Ctrl+C 终止。常与 --tail 10 组合先看最近行再跟踪。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要实时查看正在运行的容器新产生的日志，类似 tail -f",
          "goal": "实时跟踪名为 web 的容器的日志输出",
          "expected": "新日志实时滚动显示，终止后返回命令提示符",
          "caveat": "需手动 Ctrl+C 退出；长时间跟踪可能占用终端。"
        }
      ],
      "id": "docker-logs-follow",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/logs/ · 选项 -f/--follow",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker logs --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker compose up",
      "en": "Create and start services",
      "zh": "创建并启动 Compose 服务",
      "evidenceStatus": "verified",
      "keywords": [
        "compose",
        "up",
        "stack",
        "services",
        "start"
      ],
      "examples": [
        {
          "value": "docker compose up",
          "description": "读取当前目录的 docker-compose.yml（或 compose.yaml），创建所需网络/卷，启动容器并输出聚合日志。Ctrl+C 可停止。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "项目中通过 docker-compose.yml 定义了一组服务，需要一键启动整个应用栈",
          "goal": "在包含 compose 文件的目录启动所有服务（附加日志）",
          "expected": "每个服务的启动日志输出，最后显示 Attaching to ... 并持续输出",
          "prerequisites": "当前目录存在 docker-compose.yml 并已安装 docker compose 插件",
          "caveat": "该命令会占用终端前台，若需后台运行可添加 -d。"
        }
      ],
      "id": "docker-compose-up",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/up/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker compose up --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker compose up -d",
      "en": "Start services in detached mode",
      "zh": "后台启动 Compose 服务",
      "context": "docker compose up",
      "evidenceStatus": "verified",
      "keywords": [
        "compose",
        "detached",
        "background",
        "services",
        "up"
      ],
      "examples": [
        {
          "value": "docker compose up -d",
          "description": "在每个服务容器启动后立即返回终端，容器在后台持续运行。可用 docker compose ps 查看状态。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "生产环境或长期运行服务需要后台启动，不占用终端",
          "goal": "后台启动 compose 栈",
          "expected": "返回各容器的启动信息后回到命令提示符，服务在后台运行"
        }
      ],
      "id": "docker-compose-up-detach",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/up/ · 选项 -d/--detach",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker compose up --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker compose down",
      "en": "Stop and remove containers, networks",
      "zh": "停止并移除 Compose 资源",
      "evidenceStatus": "verified",
      "keywords": [
        "compose",
        "down",
        "stop",
        "cleanup",
        "remove"
      ],
      "examples": [
        {
          "value": "docker compose down",
          "description": "停止运行中的服务容器并删除它们，同时移除创建的默认网络。挂载的卷默认保留，除非加 -v。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "测试完成或需要彻底清理 Compose 启动的环境，包括网络",
          "goal": "停止并删除由 docker compose up 创建的所有容器和默认网络",
          "expected": "输出 Stopping ... Removing ... 过程，最后回到命令提示符",
          "caveat": "执行前确认当前目录对应正确的 Compose 项目；默认保留卷数据，增加 -v 会删除数据卷且不可恢复。",
          "warning": "该项目的服务容器会停止并被删除，对外服务会中断。"
        }
      ],
      "id": "docker-compose-down",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/down/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker compose down --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker network ls",
      "en": "List networks",
      "zh": "列出网络",
      "evidenceStatus": "verified",
      "keywords": [
        "network",
        "ls",
        "list",
        "bridge",
        "overlay"
      ],
      "examples": [
        {
          "value": "docker network ls",
          "description": "显示 NETWORK ID, NAME, DRIVER, SCOPE 信息，方便识别默认 bridge、host、none 和自定义网络。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查容器间网络通信问题或确认当前有哪些自定义网络",
          "goal": "列出当前 Docker 引擎上所有的网络",
          "expected": "表格列出所有网络，默认至少包含 bridge, host, none"
        }
      ],
      "id": "docker-network-ls",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/ls/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker network ls --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker network list"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker volume ls",
      "en": "List volumes",
      "zh": "列出卷",
      "evidenceStatus": "verified",
      "keywords": [
        "volume",
        "ls",
        "list",
        "storage",
        "data"
      ],
      "examples": [
        {
          "value": "docker volume ls",
          "description": "输出 VOLUME NAME 和 DRIVER，辅助识别未使用的孤儿卷以执行清理。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "检查数据卷使用情况，或确认哪些命名卷可以安全清理",
          "goal": "列出系统中所有 Docker 数据卷",
          "expected": "卷列表，若无则仅表头"
        }
      ],
      "id": "docker-volume-ls",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/ls/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker volume ls --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker volume list"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker system prune",
      "en": "Remove unused data",
      "zh": "清理未使用的数据",
      "evidenceStatus": "verified",
      "keywords": [
        "prune",
        "clean",
        "disk",
        "space",
        "dangling"
      ],
      "examples": [
        {
          "value": "docker system prune",
          "description": "删除所有已停止的容器、未使用的网络、dangling 镜像和悬空构建缓存。执行前会提示确认。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker 磁盘占用过高，需要清理停止的容器、未使用的网络、悬空镜像和构建缓存",
          "goal": "一键清理不再需要的系统资源",
          "expected": "提示确认后会列出被删除的资源，并显示 reclaimed space 大小",
          "caveat": "默认只删除 dangling 镜像，不会删除任何容器使用的镜像。",
          "warning": "此操作不可逆，会删除停止的容器（其文件系统将丢失）。建议先运行 docker system df 查看空间使用。"
        }
      ],
      "id": "docker-system-prune",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/system/prune/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker system prune --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker system prune -a",
      "en": "Remove all unused data (including images)",
      "zh": "清理所有未使用的数据（含未使用的镜像）",
      "context": "docker system prune",
      "evidenceStatus": "verified",
      "keywords": [
        "prune",
        "all",
        "images",
        "disk",
        "aggressive"
      ],
      "examples": [
        {
          "value": "docker system prune -a",
          "description": "在默认 prune 基础上，额外删除所有未被至少一个容器使用的镜像（不仅仅是 dangling）。必须确认。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "希望彻底释放磁盘空间，包括所有未被任何容器引用的镜像",
          "goal": "删除所有未使用的镜像及停止的容器、网络",
          "expected": "删除大量镜像和容器，释放较大空间",
          "caveat": "若要同时删除所有未使用的卷，加 --volumes。",
          "warning": "会删除大量本地镜像，下次运行容器时需重新下载；执行前务必确认哪些镜像仍需保留。"
        }
      ],
      "id": "docker-system-prune-all",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/system/prune/ · 选项 -a/--all",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker system prune --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container cp",
      "en": "Copy files between container and host",
      "zh": "在容器和主机之间复制文件",
      "evidenceStatus": "verified",
      "keywords": [
        "copy",
        "file",
        "transfer",
        "host",
        "container"
      ],
      "examples": [
        {
          "value": "docker cp mycontainer:/app/output.txt ./output.txt",
          "description": "支持双向复制：容器到主机（如上）和主机到容器。容器不需要处于运行状态（已停止也可）。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "scenario-derived",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要从容器中导出日志或配置文件到主机，或向容器内导入数据",
          "goal": "将容器内 /app/output.txt 复制到主机当前目录",
          "expected": "无输出表示成功，当前目录出现 output.txt",
          "prerequisites": "容器 ID 或名称已知，且主机路径有写入权限",
          "caveat": "复制目录时会平铺内容，谨慎使用以避免覆盖同名文件。"
        }
      ],
      "id": "docker-cp",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/cp/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker cp --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "aliases": [
        "docker cp"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker inspect",
      "en": "Return low-level object info",
      "zh": "查看容器/镜像等对象的底层详情",
      "evidenceStatus": "verified",
      "keywords": [
        "inspect",
        "detail",
        "json",
        "config",
        "debug"
      ],
      "examples": [
        {
          "value": "docker inspect my-container",
          "description": "以 JSON 输出对象的完整底层信息（网络、挂载、环境变量、入口命令等），容器和镜像通用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "容器行为异常，需要确认实际生效的挂载和网络配置。",
          "goal": "查看 my-container 的完整配置。",
          "expected": "输出该对象的 JSON 详情，可配合 --format 提取字段"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/inspect/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker inspect --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-inspect"
    },
    {
      "cat": "flag",
      "cmd": "docker container stats",
      "en": "Live resource usage",
      "zh": "实时查看容器资源占用",
      "evidenceStatus": "verified",
      "keywords": [
        "stats",
        "cpu",
        "memory",
        "monitor",
        "usage"
      ],
      "examples": [
        {
          "value": "docker stats",
          "description": "实时滚动显示各运行容器的 CPU、内存、网络与磁盘 IO 占用，类似容器版 top；Ctrl+C 退出",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "宿主机负载升高，想找出占资源的容器。",
          "goal": "实时监控全部容器的资源使用。",
          "expected": "终端持续刷新每个容器的资源占用表格"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/stats/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker stats --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-stats",
      "aliases": [
        "docker stats"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker image tag",
      "en": "Tag an image",
      "zh": "为镜像打标签",
      "evidenceStatus": "verified",
      "keywords": [
        "tag",
        "rename",
        "registry",
        "version"
      ],
      "examples": [
        {
          "value": "docker tag myapp:latest registry.example.com/team/myapp:v1.2",
          "description": "为已有镜像创建一个新标签（不复制数据），推送到私有仓库前通常先按仓库地址打标签",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "构建好的本地镜像需要推送到私有 registry。",
          "goal": "给 myapp:latest 追加带仓库前缀的标签。",
          "expected": "docker images 中出现同一 IMAGE ID 的两个标签"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/tag/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker tag --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-tag",
      "aliases": [
        "docker tag"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker compose ps",
      "en": "List Compose containers",
      "zh": "列出 Compose 项目的容器状态",
      "evidenceStatus": "verified",
      "keywords": [
        "compose",
        "ps",
        "status",
        "services"
      ],
      "examples": [
        {
          "value": "docker compose ps",
          "description": "列出当前 Compose 项目各服务容器的状态、端口映射和健康检查结果",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "compose up 之后想确认所有服务是否正常运行。",
          "goal": "查看本项目全部服务的运行状态。",
          "expected": "输出服务名、状态（running/exited/healthy）与端口的表格",
          "prerequisites": "需在包含 compose.yaml 的项目目录中执行。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/ps/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker compose ps --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-compose-ps"
    },
    {
      "cat": "flag",
      "cmd": "docker compose logs",
      "en": "View Compose service logs",
      "zh": "查看 Compose 服务日志",
      "evidenceStatus": "verified",
      "keywords": [
        "compose",
        "logs",
        "follow",
        "debug",
        "tail"
      ],
      "examples": [
        {
          "value": "docker compose logs -f web",
          "description": "持续跟踪指定服务的日志输出；省略服务名则聚合显示全部服务，-f 表示 follow",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "web 服务启动失败，需要边重启边看日志定位原因。",
          "goal": "实时跟踪 web 服务的日志。",
          "expected": "终端持续输出该服务的新日志行，Ctrl+C 停止跟踪",
          "prerequisites": "需在包含 compose.yaml 的项目目录中执行。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/logs/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker compose logs --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-compose-logs"
    },
    {
      "cat": "flag",
      "cmd": "docker image prune",
      "en": "Remove unused images",
      "zh": "清理未使用的镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "prune",
        "image",
        "dangling",
        "clean",
        "space"
      ],
      "examples": [
        {
          "value": "docker image prune",
          "description": "删除全部 dangling 镜像（无标签且不被引用）；加 -a 会扩大到所有未被容器使用的镜像",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "反复构建后累积了大量 <none> 镜像占用磁盘。",
          "goal": "清理悬空镜像释放空间。",
          "expected": "提示确认后删除 dangling 镜像并显示回收的空间",
          "caveat": "先用 `docker images -f dangling=true` 检查将被删除的清单，再决定是否加 -a。",
          "warning": "删除的镜像不可恢复；-a 会连带删除当前没有容器使用的全部镜像。",
          "riskLevels": [
            "deleteOrOverwrite"
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/prune/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker image prune --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-image-prune"
    },
    {
      "cat": "flag",
      "cmd": "docker container prune",
      "en": "Remove stopped containers",
      "zh": "清理全部已停止的容器",
      "evidenceStatus": "verified",
      "keywords": [
        "prune",
        "container",
        "stopped",
        "clean"
      ],
      "examples": [
        {
          "value": "docker container prune",
          "description": "删除所有处于停止状态的容器；容器可写层里的文件会随之丢失",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "调试后残留了大量退出状态的一次性容器。",
          "goal": "一次清理全部已停止容器。",
          "expected": "提示确认后删除所有停止的容器并显示回收空间",
          "caveat": "先用 `docker ps -a` 检查停止容器里是否还有需要 `docker cp` 取出的文件。",
          "warning": "已停止容器的文件系统内容会一并删除，不可恢复。",
          "riskLevels": [
            "deleteOrOverwrite"
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/prune/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker container prune --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-container-prune"
    },
    {
      "cat": "flag",
      "cmd": "docker volume prune",
      "en": "Remove unused volumes",
      "zh": "清理未被引用的卷",
      "evidenceStatus": "verified",
      "keywords": [
        "prune",
        "volume",
        "data",
        "clean"
      ],
      "examples": [
        {
          "value": "docker volume prune",
          "description": "删除所有未被任何容器引用的卷；卷中的数据（数据库文件等）会永久丢失",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "反复起停项目后残留了大量匿名卷。",
          "goal": "清理不再被引用的卷。",
          "expected": "提示确认后删除未使用的卷并显示回收空间",
          "caveat": "先用 `docker volume ls` 检查清单，确认没有仍需保留数据的卷（必要时先备份）。",
          "warning": "卷里的数据会永久删除且无法恢复——数据库卷被误删等同于丢库。",
          "riskLevels": [
            "deleteOrOverwrite"
          ]
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/prune/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker volume prune --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-volume-prune"
    },
    {
      "cat": "flag",
      "cmd": "docker system df",
      "en": "Show Docker disk usage",
      "zh": "查看 Docker 磁盘占用",
      "evidenceStatus": "verified",
      "keywords": [
        "disk",
        "usage",
        "space",
        "df",
        "size"
      ],
      "examples": [
        {
          "value": "docker system df",
          "description": "按镜像、容器、卷、构建缓存分类统计磁盘占用与可回收空间，是执行 prune 前的检查步骤",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "磁盘快满了，想先弄清 Docker 各类资源占了多少。",
          "goal": "查看磁盘占用分布。",
          "expected": "输出四类资源的总量、活跃量与 RECLAIMABLE 可回收空间"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/system/df/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker system df --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-system-df"
    },
    {
      "cat": "flag",
      "cmd": "docker login",
      "en": "Authenticate to a registry",
      "zh": "登录镜像仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "login",
        "registry",
        "auth",
        "credential",
        "push"
      ],
      "examples": [
        {
          "value": "docker login registry.example.com",
          "description": "向指定 registry 认证（省略地址则登录 Docker Hub）；推送私有镜像前需要先登录",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "official",
          "sourceIds": [
            "docker-docs",
            "docker-help"
          ],
          "scenario": "要向公司私有 registry 推送镜像。",
          "goal": "登录 registry.example.com。",
          "expected": "输入凭据后提示 Login Succeeded，后续 push/pull 携带认证",
          "caveat": "凭据会保存在本机凭据存储（或 ~/.docker/config.json）；共享机器上用完请检查并执行 docker logout。"
        }
      ],
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/login/",
          "checkedAt": "2026-07-02"
        },
        {
          "sourceId": "docker-help",
          "claims": [
            "existence"
          ],
          "locator": "docker login --help（本机 Docker 29.0.1）",
          "checkedAt": "2026-07-02"
        }
      ],
      "id": "docker-login"
    },
    {
      "cat": "flag",
      "cmd": "docker",
      "en": "The base command for the Docker CLI.",
      "zh": "Docker CLI 顶层入口，管理所有容器、镜像、网络、数据卷等 Docker 资源",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker --help",
          "description": "不带参数运行 docker 将列出所有可用的管理命令和子命令分组，帮助快速定位所需功能",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维人员首次接触 Docker 或需要快速浏览可用的命令空间时，从顶层入口了解全局命令结构",
          "goal": "列出 Docker CLI 所有可用的管理命令与子命令",
          "expected": "终端打印出 Management Commands 和 Commands 两大分组，涵盖 container、image、network、volume、builder 等所有子命令空间"
        }
      ],
      "id": "docker-official-d548c5b83fa61d8e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker builder",
      "en": "Manage builds",
      "zh": "管理 Docker 构建过程，包括构建器实例、构建缓存和构建历史",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "builder",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker builder --help",
          "description": "列出 builder 命名空间下所有子命令，包括 build、prune 等管理构建的能力",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看构建缓存占用、清理旧构建缓存或管理多架构构建器实例时，通过 builder 空间统一操作构建生命周期",
          "goal": "查看构建管理相关的所有可用操作",
          "expected": "终端列出 docker builder 的所有子命令及其简要说明，如 build、prune、du 等"
        }
      ],
      "id": "docker-official-1744cb9ef1de70de",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/builder/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker buildx",
      "en": "Docker Buildx",
      "zh": "Docker 增强构建工具集，支持多平台构建、构建缓存导入导出和并行构建",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "buildx",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx --help",
          "description": "列出 buildx 命名空间下的子命令，包含 bake、build、create、ls 等高级构建功能",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为多个 CPU 架构（如 amd64 和 arm64）同时构建镜像，或使用远程构建器加速构建时，通过 buildx 管理构建器实例和执行跨平台构建",
          "goal": "查看增强构建工具集的所有可用子命令",
          "expected": "终端列出 docker buildx 的子命令，包括 bake（批量构建）、build（开始构建）、create（创建构建器实例）、ls（列出构建器）等"
        }
      ],
      "id": "docker-official-0bc541ac232f0414",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker checkpoint",
      "en": "Manage checkpoints",
      "zh": "管理容器检查点，支持创建和恢复容器的运行时状态快照",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "checkpoint",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker checkpoint --help",
          "description": "列出 checkpoint 命名空间下的子命令，包括 create、ls、rm，用于管理容器状态快照",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将运行中容器的内存状态和进程状态保存为检查点，以便后续快速恢复容器而无需重新初始化应用时，使用检查点实现容器热迁移或故障恢复",
          "goal": "查看容器检查点管理的所有可用操作",
          "expected": "终端列出 docker checkpoint 的子命令，如 create（创建检查点）、ls（列出检查点）、rm（删除检查点）",
          "prerequisites": "检查点功能需要 Docker 以实验模式运行（--experimental），且仅在 Linux 上可用"
        }
      ],
      "id": "docker-official-81e62f97a0f2b11c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/checkpoint/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker compose",
      "en": "Docker Compose",
      "zh": "编排和管理多容器应用，通过 YAML 文件定义和运行服务组",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "compose",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose --help",
          "description": "列出 Compose 命名空间下所有子命令，用于定义和运行多容器 Docker 应用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发和部署由多个相互依赖的容器组成的应用（如 Web 服务 + 数据库 + 缓存 + 消息队列）时，通过单个 Compose 文件统一管理所有服务的构建、启动、网络和存储",
          "goal": "查看多容器编排工具的所有可用子命令",
          "expected": "终端列出 docker compose 的子命令，包括 up（启动服务）、down（停止并清理）、build（构建镜像）、ps（列出服务状态）等"
        }
      ],
      "id": "docker-official-75ddf920195c71e2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker config",
      "en": "Manage Swarm configs",
      "zh": "管理 Docker Swarm 集群的配置数据，将非敏感配置分发给服务节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "config",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker config --help",
          "description": "列出 config 命名空间下的子命令，包括 create、inspect、ls、rm，用于管理 Swarm 集群配置对象",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Swarm 集群中部署服务时需要将配置文件（如 nginx.conf、应用参数）统一分发给所有服务副本，且配置内容不需要加密保护时，使用 config 对象管理这些明文配置",
          "goal": "查看 Swarm 集群配置管理的所有可用操作",
          "expected": "终端列出 docker config 的子命令，如 create（创建配置）、inspect（查看详情）、ls（列出配置）、rm（删除配置）"
        }
      ],
      "id": "docker-official-490144a198556e31",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/config/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker container",
      "en": "Manage containers",
      "zh": "管理容器的完整生命周期，包括创建、运行、停止、删除和查看状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "container",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker container --help",
          "description": "列出 container 命名空间下所有子命令，涵盖容器的启动、停止、查看日志、执行命令、导出文件等全生命周期操作",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看正在运行的容器列表、停止异常容器、进入容器调试或检查容器资源占用时，通过 container 空间集中操作容器对象",
          "goal": "查看容器管理相关的所有可用操作",
          "expected": "终端列出 docker container 的子命令，包括 run（运行）、ls（列出）、stop（停止）、exec（执行命令）、logs（查看日志）等"
        }
      ],
      "id": "docker-official-dc7469dbd20c1b18",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker context",
      "en": "Manage contexts",
      "zh": "管理多 Docker 主机的连接上下文，在不同 Docker 守护进程之间快速切换",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "context",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context --help",
          "description": "列出 context 命名空间下的子命令，包括 create、ls、use、rm，用于管理对远程或本地 Docker 守护进程的连接配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维人员需要同时管理本地开发环境、测试服务器和生产集群等多个 Docker 端点，通过切换 context 避免反复设置 DOCKER_HOST 环境变量",
          "goal": "查看 Docker 上下文管理的所有可用操作",
          "expected": "终端列出 docker context 的子命令，如 create（创建上下文）、ls（列出上下文）、use（切换上下文）、inspect（查看详情）等"
        }
      ],
      "id": "docker-official-3b1c995f464a954c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker debug",
      "en": "Get a shell into any container or image. An alternative to debugging with `docker exec`.",
      "zh": "无需 docker exec 即可直接进入任意容器或镜像的 Shell 环境进行调试",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "debug",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker debug my-app",
          "description": "对名为 my-app 的容器启动一个交互式调试 Shell，无需依赖容器内已有的 Shell 或 sshd 服务即可进入容器环境排查问题",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "生产容器出于安全精简移除 Shell 或 ssh 服务后无法用 docker exec 进入，或者需要调试一个构建失败、无运行进程的镜像内部文件结构时，docker debug 提供独立于容器内工具链的调试通道",
          "goal": "进入最小化容器 my-app 的 Shell 排查应用异常",
          "expected": "终端进入容器内部 Shell 提示符，可直接查看文件系统、进程列表、网络配置和环境变量等容器内状态",
          "prerequisites": "需要 Docker Pro、Team 或 Business 订阅"
        }
      ],
      "id": "docker-official-18be44fd4cf54bf8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/debug/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker desktop",
      "en": "Docker Desktop",
      "zh": "管理 Docker Desktop 桌面应用，包括其运行状态、版本升级和资源分配",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "desktop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop --help",
          "description": "列出 desktop 命名空间下的子命令，用于控制 Docker Desktop 应用的启动、停止、升级和配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在不打开 Docker Desktop 图形界面的情况下通过命令行重启 Docker 引擎、检查版本更新或调整分配给 Docker 的 CPU 和内存限制时，使用 desktop 命令管理桌面环境",
          "goal": "查看 Docker Desktop 桌面应用管理的所有可用操作",
          "expected": "终端列出 docker desktop 的子命令及功能说明"
        }
      ],
      "id": "docker-official-26981d47f40a09c7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker dhi",
      "en": "CLI for managing Docker Hardened Images",
      "zh": "管理 Docker 加固镜像（Docker Hardened Images），提升容器镜像的安全基准",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "dhi",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi --help",
          "description": "列出 dhi 命名空间下的子命令，用于管理和操作符合安全加固标准的容器镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全团队需要确保生产镜像符合最小攻击面、无已知漏洞且启用安全运行时策略时，通过 dhi 工具集管理和部署加固镜像",
          "goal": "查看 Docker 加固镜像管理的所有可用操作",
          "expected": "终端列出 docker dhi 的子命令及功能说明"
        }
      ],
      "id": "docker-official-4d3cf1e9cf5c7e7d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker image",
      "en": "Manage images",
      "zh": "管理本地和远程的 Docker 镜像，包括构建、拉取、标记、推送和删除",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "image",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker image --help",
          "description": "列出 image 命名空间下的所有子命令，涵盖镜像的构建、拉取、推送、标记、查看历史和清理等操作",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看本地已下载的镜像列表、删除不再使用的旧镜像以释放磁盘空间，或给镜像打标签以便推送到仓库时，通过 image 空间集中管理镜像对象",
          "goal": "查看镜像管理相关的所有可用操作",
          "expected": "终端列出 docker image 的子命令，如 build（构建）、pull（拉取）、push（推送）、ls（列出）、rm（删除）、tag（标记）等"
        }
      ],
      "id": "docker-official-497439d91ea3811a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker init",
      "en": "Creates Docker-related starter files for your project",
      "zh": "在项目目录中自动生成 Docker 相关的初始化文件，包括 Dockerfile、.dockerignore 和 compose.yaml",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "init",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker init",
          "description": "在当前目录下初始化 Docker 项目，交互式引导选择应用平台并自动生成 Dockerfile、.dockerignore 和 compose.yaml 等最佳实践模板文件",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者要将一个已有项目容器化，但不确定 Dockerfile 最佳写法或需要标准的 compose 模板时，使用 init 一键生成符合项目语言/框架的 Docker 配置文件，无需从零手写",
          "goal": "为当前 Node.js 项目自动生成 Docker 配置文件模板",
          "expected": "终端交互式询问项目平台类型后，在当前目录生成 Dockerfile、.dockerignore 和 compose.yaml 并提示后续操作"
        }
      ],
      "id": "docker-official-36b6f014c6623011",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/init/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker logout",
      "en": "Log out from a registry",
      "zh": "从指定的容器镜像仓库注销登录，移除本地存储的认证凭据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "logout",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker logout localhost:8080",
          "description": "从本地私有仓库 localhost:8080 登出，清除 docker login 时保存的身份认证令牌，后续拉取或推送需重新登录",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在共享机器上使用完私有仓库后需要移除个人登录凭据防止被他人误用，或切换仓库账号时需要先登出再以新身份登录",
          "goal": "从本地私有仓库 localhost:8080 安全退出登录",
          "expected": "终端输出 Remove login credentials for localhost:8080，确认凭据已从本地凭据存储中移除",
          "warning": "登出后无法拉取该仓库的私有镜像或推送镜像，需重新 docker login 才能恢复访问"
        }
      ],
      "id": "docker-official-8bc407157337332d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/logout/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker manifest",
      "en": "Manage Docker image manifests and manifest lists",
      "zh": "管理 Docker 镜像清单和清单列表，检查多架构镜像的跨平台分发信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "manifest",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker manifest --help",
          "description": "列出 manifest 命名空间下的子命令，包括 annotate、create、inspect、push，用于操作镜像清单对象",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要验证一个多架构镜像（如同时支持 amd64 和 arm64）包含哪些平台变体，或手动创建和推送多架构镜像清单列表时，通过 manifest 命令检查和组装跨平台镜像元数据",
          "goal": "查看镜像清单管理的所有可用操作",
          "expected": "终端列出 docker manifest 的子命令，如 inspect（查看清单）、create（创建清单）、annotate（添加注解）、push（推送清单列表）等"
        }
      ],
      "id": "docker-official-d6b0f3843784011f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/manifest/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker mcp",
      "en": "Manage MCP servers and clients",
      "zh": "管理 Docker 的 MCP（模型上下文协议）服务器和客户端配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "mcp",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp --help",
          "description": "列出 mcp 命名空间下的子命令，用于管理 Docker 集成的 MCP 服务器和客户端连接",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在 Docker 环境中配置 AI 工具使用的 MCP 服务端点，使 AI 助手能通过标准化协议访问 Docker 操作能力时，通过 mcp 管理这些协议连接",
          "goal": "查看 MCP 服务器和客户端管理的所有可用操作",
          "expected": "终端列出 docker mcp 的子命令及功能说明"
        }
      ],
      "id": "docker-official-d98c16aeee828367",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker model",
      "en": "Docker Model Runner",
      "zh": "管理和运行 AI 大语言模型（LLM），在本地环境中加载和运行模型推理任务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "model",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model --help",
          "description": "列出 model 命名空间下的子命令，用于管理本地 AI 模型的拉取、运行、列出和删除",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者需要在本地用 Docker 容器化的方式运行开源 LLM（如 Llama、Gemma），统一管理模型版本和推理环境，避免手动配置 Python 依赖和 GPU 驱动时，通过 model 命令一键拉取和运行模型",
          "goal": "查看 AI 模型管理和运行的所有可用操作",
          "expected": "终端列出 docker model 的子命令，如 pull（拉取模型）、run（运行模型推理）、ls（列出已有模型）、rm（删除模型）等"
        }
      ],
      "id": "docker-official-e4ec4f28c10ea219",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker network",
      "en": "Manage networks",
      "zh": "管理 Docker 容器网络，创建和配置容器间通信的虚拟网络",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "network",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network --help",
          "description": "列出 network 命名空间下的所有子命令，包括 create、connect、disconnect、ls、rm 等，用于管理容器网络对象",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将多个容器放入同一自定义网络以便它们通过容器名互相访问，或排查容器间网络连通性问题、查看现有网络的驱动类型和子网配置时，通过 network 空间管理容器网络拓扑",
          "goal": "查看容器网络管理的所有可用操作",
          "expected": "终端列出 docker network 的子命令，如 create（创建网络）、ls（列出网络）、connect（将容器接入网络）、inspect（查看网络详情）等"
        }
      ],
      "id": "docker-official-f4dea1cc1e302f0f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker node",
      "en": "Manage Swarm nodes",
      "zh": "管理 Docker Swarm 集群节点，查看节点状态、调整角色或驱逐任务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "node",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node --help",
          "description": "列出 node 命名空间下的子命令，包括 demote、inspect、ls、promote、rm、update，用于管理 Swarm 集群中的节点",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Swarm 集群管理员需要查看各节点在线状态和资源可用性，将工作节点提升为管理节点以增强 HA，或在维护前将某节点上的所有服务任务迁移到其他节点时，通过 node 命令管理集群成员",
          "goal": "查看 Swarm 集群节点管理的所有可用操作",
          "expected": "终端列出 docker node 的子命令，如 ls（列出节点）、inspect（查看详情）、promote（提升）、demote（降级）、update（更新节点配置）等"
        }
      ],
      "id": "docker-official-d8f4f3cf096c9000",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker offload",
      "en": "Control Docker Offload from the CLI",
      "zh": "控制 Docker Offload 功能，将容器工作负载从本机迁移到远程资源执行",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "offload",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker offload --help",
          "description": "列出 offload 命名空间下的子命令，用于管理和控制 Docker 工作负载的远程卸载执行",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地机器资源不足（如内存或 CPU 不够）无法运行大型构建或容器化应用，需要将工作负载透明地卸载到远程服务器或云实例上执行时，使用 offload 管理卸载策略和目标",
          "goal": "查看工作负载卸载管理的所有可用操作",
          "expected": "终端列出 docker offload 的子命令及功能说明"
        }
      ],
      "id": "docker-official-2f9b280f07f1c8b1",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/offload/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker pass",
      "en": "Manage your local OS keychain secrets.",
      "zh": "管理本地操作系统密钥链中的凭据，安全存储和读取敏感信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pass",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass --help",
          "description": "列出 pass 命名空间下的子命令，包括 set、get、ls、rm、run，用于操作本地密钥链中的加密凭据",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要安全存储 API 令牌或数据库密码供容器使用，避免在命令行或环境文件中明文写入敏感信息，且希望凭据在容器运行时自动注入时，通过 pass 管理密钥链凭据",
          "goal": "查看密钥链凭据管理的所有可用操作",
          "expected": "终端列出 docker pass 的子命令，如 set（存储凭据）、get（读取凭据）、ls（列出凭据）、rm（删除凭据）、run（凭据注入容器执行）"
        }
      ],
      "id": "docker-official-e74386601439496e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker plugin",
      "en": "Manage plugins",
      "zh": "管理 Docker 引擎插件，安装、启用和配置存储、网络等扩展功能",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "plugin",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin --help",
          "description": "列出 plugin 命名空间下的子命令，包括 create、disable、enable、install、ls、rm、set、upgrade，用于管理 Docker 引擎扩展插件",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为 Docker 安装第三方存储驱动（如 GlusterFS）或网络驱动（如 Weave）来提供默认驱动不支持的功能时，通过 plugin 管理插件的安装、启用和升级",
          "goal": "查看 Docker 引擎插件管理的所有可用操作",
          "expected": "终端列出 docker plugin 的子命令，如 install（安装）、ls（列出）、enable（启用）、disable（禁用）、upgrade（升级）等"
        }
      ],
      "id": "docker-official-f4c36c6e16680517",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox",
      "en": "Docker Sandbox",
      "zh": "管理 Docker 沙箱环境，在隔离的安全环境中运行和测试容器工作负载",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "sandbox",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox --help",
          "description": "列出 sandbox 命名空间下的子命令，用于创建和管理隔离的沙箱运行环境",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全团队需要在与生产环境网络隔离的沙箱中测试可疑镜像或验证容器逃逸漏洞，或者开发者想在不影响本地 Docker 环境的情况下快速试错时，使用 sandbox 提供额外隔离层",
          "goal": "查看沙箱环境管理的所有可用操作",
          "expected": "终端列出 docker sandbox 的子命令及功能说明"
        }
      ],
      "id": "docker-official-3b676abd11175da4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker scout",
      "en": "Command line tool for Docker Scout",
      "zh": "分析镜像的安全漏洞和软件供应链风险，提供 CVE 修复建议和依赖清单",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "scout",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout --help",
          "description": "列出 scout 命名空间下的子命令，用于扫描镜像漏洞、分析基础镜像更新建议和对比镜像版本间的安全差异",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "推送生产镜像前需要检查镜像层中是否存在已知 CVE 漏洞、了解基础镜像版本是否有安全更新，或需要在 CI 流水线中自动比较新旧镜像的安全评分差异时，使用 scout 进行镜像安全审计",
          "goal": "查看镜像安全分析工具的所有可用子命令",
          "expected": "终端列出 docker scout 的子命令，如 quickview（快速概览）、cves（CVE 详情）、recommendations（修复建议）、compare（镜像对比）等"
        }
      ],
      "id": "docker-official-316899546f611969",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker search",
      "en": "Search Docker Hub for images",
      "zh": "在 Docker Hub 上搜索公开镜像，按名称匹配查找可用的社区或官方镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "search",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker search busybox",
          "description": "在 Docker Hub 中搜索名称包含 busybox 的镜像，返回镜像名称、描述、星数、是否官方认证和是否自动构建等信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者需要一个现成的轻量测试镜像但不确定官方名称和可用版本时，在终端直接搜索 Docker Hub 而不需要打开浏览器访问 hub.docker.com",
          "goal": "搜索名为 busybox 的最小化 Linux 镜像是否存在官方版本",
          "expected": "终端列出匹配 busybox 的镜像行，官方版 busybox 显示 [OK] 标记，同时列出星数和简短描述"
        }
      ],
      "id": "docker-official-299520b2e15fa27b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/search/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker secret",
      "en": "Manage Swarm secrets",
      "zh": "管理 Docker Swarm 集群的加密敏感数据，安全分发密码、密钥和证书给服务节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "secret",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker secret --help",
          "description": "列出 secret 命名空间下的子命令，包括 create、inspect、ls、rm，用于管理 Swarm 集群中的加密机密对象",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Swarm 集群中需要将数据库密码或 TLS 证书安全地分发给服务容器，且这些敏感数据必须在传输和存储过程中保持加密时，使用 secret 而非环境变量或配置文件来保护机密信息",
          "goal": "查看 Swarm 集群机密管理的所有可用操作",
          "expected": "终端列出 docker secret 的子命令，如 create（创建机密）、inspect（查看元数据）、ls（列出机密）、rm（删除机密）"
        }
      ],
      "id": "docker-official-fe7adaa185f3bdfd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/secret/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker service",
      "en": "Manage Swarm services",
      "zh": "管理 Docker Swarm 集群中的服务，定义和调度跨节点的容器副本",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "service",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service --help",
          "description": "列出 service 命名空间下的子命令，包括 create、inspect、ls、logs、ps、rm、rollback、scale、update，用于管理 Swarm 服务的全生命周期",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Swarm 集群管理员需要创建跨多节点运行的服务、动态调整副本数量以应对流量变化、执行滚动更新实现零停机发布，或回滚有问题的服务版本到上一个稳定版本时，通过 service 命令管理编排的服务对象",
          "goal": "查看 Swarm 集群服务管理的所有可用操作",
          "expected": "终端列出 docker service 的子命令，如 create（创建）、ls（列出）、ps（查看任务）、scale（扩缩容）、update（滚动更新）、logs（查看日志）等"
        }
      ],
      "id": "docker-official-b9d0f8cda9820d21",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker stack",
      "en": "Manage Swarm stacks",
      "zh": "管理 Docker Swarm 集群中的技术栈，通过 Compose 文件批量部署和管理一组关联服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stack",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack --help",
          "description": "列出 stack 命名空间下的子命令，包括 deploy、ls、ps、rm、services，用于在 Swarm 中管理由 Compose 文件定义的完整应用栈",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将 compose.yaml 定义的多服务应用一键部署到 Swarm 集群中，并统一管理整个应用栈的服务、网络和密钥时，使用 stack 将 Compose 文件作为 Swarm 部署单元进行操作",
          "goal": "查看 Swarm 集群技术栈管理的所有可用操作",
          "expected": "终端列出 docker stack 的子命令，如 deploy（部署栈）、ls（列出栈）、ps（查看栈中任务）、services（列出栈中服务）、rm（删除栈）"
        }
      ],
      "id": "docker-official-7e2a7b498d09cdda",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker swarm",
      "en": "Manage Swarm",
      "zh": "管理 Docker Swarm 集群本身，包括初始化集群、加入节点和退出集群",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "swarm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm --help",
          "description": "列出 swarm 命名空间下的子命令，包括 init、join、join-token、leave、unlock、unlock-key、update，用于管理 Swarm 集群生命周期",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将多台 Docker 主机组成一个 Swarm 集群以实现容器编排和高可用，首先要初始化管理器节点并生成加入令牌，然后将工作节点加入集群时，通过 swarm 命令控制集群本身的结构和认证",
          "goal": "查看 Swarm 集群管理的所有可用操作",
          "expected": "终端列出 docker swarm 的子命令，如 init（初始化集群）、join（加入集群）、leave（退出集群）、join-token（管理加入令牌）等"
        }
      ],
      "id": "docker-official-2d51abb73f32a68d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker system",
      "en": "Manage Docker",
      "zh": "管理 Docker 引擎全局资源，包括磁盘空间回收、查看系统级信息和实时事件流",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "system",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker system --help",
          "description": "列出 system 命名空间下的子命令，包括 df、events、info、prune，用于获取 Docker 主机信息和清理全局未使用资源",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker 主机磁盘空间不足需要清理所有悬空镜像、停止的容器和未使用的网络与数据卷，或需要查看 Docker 占用的总磁盘空间并按类别了解各资源占用时，通过 system 管理全局级别的 Docker 资源",
          "goal": "查看 Docker 系统级管理操作的所有可用命令",
          "expected": "终端列出 docker system 的子命令，如 df（磁盘占用）、info（系统信息）、events（实时事件）、prune（一键清理未使用资源）等"
        }
      ],
      "id": "docker-official-42d386522779f0c1",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/system/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker trust",
      "en": "Manage trust on Docker images",
      "zh": "管理 Docker 镜像的内容信任与签名策略",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "trust",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust --help",
          "description": "列出 docker trust 的子命令列表，包括密钥管理（key）、签名者管理（signer）和签名操作（sign），用于对镜像进行数字签名与验证",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维人员需要为组织启用镜像签名验证策略，确保生产环境只运行经过可信签名的镜像，防止被篡改的镜像流入部署流水线",
          "goal": "查看镜像信任管理空间下的可用子命令",
          "expected": "终端输出 trust 命令空间下所有可用子命令及其简要说明"
        }
      ],
      "id": "docker-official-0b549835420481c8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker version",
      "en": "Show the Docker version information",
      "zh": "显示 Docker 客户端与服务端的版本及构建信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker version --format '{{.Server.Version}}'",
          "description": "使用 --format 配合 Go 模板语法仅提取服务端版本号，过滤掉客户端版本、操作系统、Go 版本和 Git commit 等冗余信息，适合在脚本或 CI 流水线中做版本判断",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查客户端与服务端 API 版本不兼容导致的调用报错，或自动化脚本需确认 Docker Engine 是否满足某个功能的最低版本要求",
          "goal": "仅输出服务端版本号用于脚本判断 Docker Engine 是否达标",
          "expected": "终端仅输出类似 27.3.1 的纯版本号字符串，无额外格式"
        }
      ],
      "id": "docker-official-a4664d4323973bb8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/version/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker volume",
      "en": "Manage volumes",
      "zh": "管理 Docker 数据卷的创建、查看、删除和清理",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "volume",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker volume --help",
          "description": "列出 docker volume 的子命令，包括 create（创建具名卷）、inspect（查看卷详情）、ls（列出所有卷）、prune（清理未被任何容器使用的卷）和 rm（删除指定卷）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "多个容器需要共享持久化数据（如数据库文件、应用配置），或需要将容器内数据与容器生命周期解耦以方便独立备份和迁移",
          "goal": "查看卷管理空间下的可用子命令",
          "expected": "终端输出 volume 命令空间下所有可用子命令及其简要说明"
        }
      ],
      "id": "docker-official-7328448d29fb5f1e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/",
          "checkedAt": "2026-07-13"
        }
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker builder build",
      "en": "Build an image from a Dockerfile",
      "zh": "基于 Dockerfile 构建容器镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker builder build -t myapp:latest .",
          "description": "-t 为构建产物指定镜像仓库名和标签（myapp:latest）；末尾的 . 表示构建上下文为当前目录，Docker 会将该目录下的所有文件发送给 BuildKit 构建引擎",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发人员完成代码修改后，需要将应用及其运行依赖打包为可部署的容器镜像，以便推送到镜像仓库或在本地运行测试",
          "goal": "从当前目录的 Dockerfile 构建一个名为 myapp:latest 的镜像",
          "expected": "BuildKit 逐层执行 Dockerfile 中的指令，每一步输出层 ID 和耗时，构建成功后终端显示最终镜像的完整 ID 和构建摘要"
        }
      ],
      "id": "docker-official-7ceeb9db721a032f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/builder/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker builder"
    },
    {
      "cat": "flag",
      "cmd": "docker builder prune",
      "en": "Remove build cache",
      "zh": "清除 Docker 构建缓存以释放磁盘空间",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "prune",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker builder prune",
          "description": "默认删除所有悬空的构建缓存层；追加 --all 会额外删除所有未被任何镜像引用的缓存（包括多阶段构建中未被最终镜像引用的中间层）",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "频繁构建导致构建缓存持续增长，占用大量磁盘空间，在 CI 流水线执行间隔或开发机磁盘告警时需要回收空间",
          "goal": "删除所有未被任何镜像引用的构建缓存层",
          "expected": "终端提示确认操作，确认后列出释放的磁盘空间大小，缓存数据被永久清除",
          "caveat": "执行前请确认当前没有正在进行的构建任务，并根据构建频率评估对后续构建速度的影响，可先用 docker buildx du 查看缓存占用",
          "warning": "此操作不可逆，会清除所有未被引用的构建缓存层，后续首次构建将需要重新下载基础镜像和编译依赖，构建时间显著增加"
        }
      ],
      "id": "docker-official-e706e4124c80970d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/builder/prune/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker builder"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx bake",
      "en": "Build from a file",
      "zh": "根据声明式构建文件批量执行多目标镜像构建",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "bake",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx bake",
          "description": "读取当前目录下的 docker-bake.hcl（或 docker-compose.yml 中的 build 定义），按文件中声明的 target 和 group 定义并行执行所有构建目标，支持变量覆盖和矩阵构建",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "项目需要构建多个镜像变体（如不同基础镜像版本、不同平台架构或不同构建参数组合），手动逐一构建效率低下且容易遗漏",
          "goal": "基于 bake 文件中定义的构建目标组并行构建所有镜像",
          "expected": "终端按 target 分组显示各构建目标的并行构建日志，全部完成后汇总输出所有构建产物的镜像 ID 和标签"
        }
      ],
      "id": "docker-official-7d42bdc8209c3aa7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/bake/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker buildx f"
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx build",
      "en": "Start a build",
      "zh": "使用 BuildKit 引擎构建容器镜像，支持多平台和自定义 hosts",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx build --add-host my_hostname=8.8.8.8 --add-host my_hostname_v6=2001:4860:4860::8888 .",
          "description": "--add-host 在构建容器的 /etc/hosts 文件中注入自定义域名解析记录，支持 IPv4 和 IPv6 地址；. 表示构建上下文为当前目录。两个 --add-host 分别添加了一个 IPv4 记录和一个 IPv6 记录",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "构建过程中需要从内网私有源拉取依赖，但 Dockerfile 内的 RUN 指令无法解析内网域名，需要在构建容器的 hosts 文件中注入自定义解析记录",
          "goal": "构建镜像时为构建容器添加自定义 hosts 记录以访问内网依赖源",
          "expected": "BuildKit 启动构建容器，其 /etc/hosts 中包含 my_hostname 和 my_hostname_v6 的解析记录，构建按 Dockerfile 正常执行并输出最终镜像 ID"
        }
      ],
      "id": "docker-official-091f1437b17dc686",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx",
      "aliases": [
        "docker buildx b"
      ]
    },
    {
      "cat": "flag",
      "cmd": "docker buildx create",
      "en": "Create a new builder instance",
      "zh": "创建新的 Buildx 构建器实例以支持分布式或远程构建",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx create mycontext1",
          "description": "基于 Docker Context（mycontext1）创建构建器实例，该 context 指向远程 Docker 守护进程或云端构建服务节点。创建后需通过 docker buildx use 切换到新实例",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地机器性能不足或需要构建多平台（arm64/amd64）镜像，需要利用远程服务器或云端构建节点来分担构建负载",
          "goal": "基于已有的 Docker Context 创建一个新的构建器实例",
          "expected": "终端输出新建构建器实例的名称，随后可使用 docker buildx ls 确认新实例已在列表中"
        }
      ],
      "id": "docker-official-8e48dc7d704b5611",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx dap",
      "en": "Start debug adapter protocol compatible debugger",
      "zh": "启动兼容 Debug Adapter Protocol 的构建过程调试服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "dap",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx dap --help",
          "description": "列出 docker buildx dap 的子命令和选项，用于启动和管理兼容 DAP（Debug Adapter Protocol）协议的构建调试会话，可与 VS Code 等 IDE 集成使用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用支持 DAP 协议的 IDE 或编辑器远程调试 Dockerfile 构建过程，需要在构建侧启动 DAP 服务端并等待 IDE 客户端连接",
          "goal": "查看 DAP 构建调试命令空间下的可用子命令和选项",
          "expected": "终端输出 dap 调试命令空间下的子命令列表及选项说明"
        }
      ],
      "id": "docker-official-8900c839774166a3",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/dap/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx debug",
      "en": "Start debugger",
      "zh": "启动交互式构建调试器以逐步排查 Dockerfile 构建问题",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "debug",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx debug --help",
          "description": "列出 docker buildx debug 的子命令，提供交互式断点调试能力，可在 Dockerfile 指定指令处暂停构建，进入构建中间容器执行诊断命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Dockerfile 构建在某个 RUN 或 COPY 步骤意外失败，构建日志信息不足以定位根因，需要进入失败前的中间容器检查文件系统状态和环境变量",
          "goal": "查看构建调试器命令空间下的可用子命令",
          "expected": "终端输出 debug 命令空间下的子命令列表和断点、单步执行等调试选项说明"
        }
      ],
      "id": "docker-official-81f787a7b41a25c4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/debug/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx dial-stdio",
      "en": "Proxy current stdio streams to builder instance",
      "zh": "将当前终端的标准输入输出流代理转发到 Buildx 构建器实例",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "dial-stdio",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx dial-stdio",
          "description": "将标准输入输出流桥接到当前选中的 Buildx 构建器，使本地工具（如 buildctl）可以通过标准 I/O 与 BuildKit 守护进程的 gRPC 接口进行原生通信",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要使用 buildctl 等底层工具直接向远程 BuildKit 守护进程发送构建指令，但网络环境只允许通过本地 CLI 代理连接",
          "goal": "建立到默认构建器实例的标准 I/O 代理连接",
          "expected": "终端进入代理转发模式，标准输入和输出被桥接到远程构建器守护进程，供 buildctl 等工具通过管道或重定向与远程 BuildKit 通信。",
          "prerequisites": "需要已通过 docker buildx create 创建并 docker buildx use 选中至少一个构建器实例"
        }
      ],
      "id": "docker-official-505040940faf3626",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/dial-stdio/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx du",
      "en": "Disk usage",
      "zh": "查看 Buildx 构建器实例的磁盘使用量",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "du",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx du",
          "description": "汇总当前构建器实例中构建缓存、源文件快照和挂载缓存等各类数据占用的磁盘空间，按缓存类型分类展示，帮助判断是否需要清理",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "构建缓存和中间产物占用大量磁盘空间，需要确认各缓存类别的实际占用量以决定是否执行 docker builder prune",
          "goal": "查看当前构建器实例的磁盘使用量汇总",
          "expected": "终端按缓存类型（如 regular、source.local、exec.cachemount）分类输出各自的磁盘大小及总计空间占用"
        }
      ],
      "id": "docker-official-c8e29b853d89a896",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/du/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history",
      "en": "Commands to work on build records",
      "zh": "管理 Buildx 构建记录，支持查看、导入和导出构建历史",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "history",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history --help",
          "description": "列出 docker buildx history 的子命令，包括 ls（列出历史构建记录）、inspect（查看某次构建详情）、logs（查看构建日志）、export（导出构建记录）和 import（导入构建记录）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要追溯某次镜像构建的详细日志、各阶段耗时和产物清单，或将构建记录导出归档以用于审计、排障或持续集成报告",
          "goal": "查看构建历史管理空间下的可用子命令",
          "expected": "终端输出 history 命令空间下的子命令列表及其功能说明"
        }
      ],
      "id": "docker-official-ff70318a7e02af1d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx imagetools",
      "en": "Commands to work on images in registry",
      "zh": "管理镜像仓库中的远程镜像清单，支持查看、创建和合并多平台镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "imagetools",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx imagetools --help",
          "description": "列出 docker buildx imagetools 的子命令，包括 create（创建多平台 manifest list）、inspect（查看镜像清单详情）等，所有操作直接作用于镜像仓库中的远程镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "分别为 amd64 和 arm64 构建了镜像并推送到仓库后，需要创建一个统一的 manifest list，使用户拉取同一镜像标签时自动匹配其平台架构",
          "goal": "查看镜像仓库工具空间下的可用子命令",
          "expected": "终端输出 imagetools 命令空间下的子命令列表及其功能说明"
        }
      ],
      "id": "docker-official-e8c8abd6a857add6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/imagetools/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx inspect",
      "en": "Inspect current builder instance",
      "zh": "查看 Buildx 构建器实例的详细配置和节点状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx inspect elated_tesla",
          "description": "显示名为 elated_tesla 的构建器实例的完整配置，包括驱动类型（如 docker-container、remote）、节点名称和端点地址、各节点支持的平台架构列表（如 linux/amd64、linux/arm64）及当前运行状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "多平台构建任务报错，需要确认当前选中的构建器实例是否包含支持目标平台的活跃节点，以及节点的连接端点是否正确",
          "goal": "查看名为 elated_tesla 的构建器实例的完整配置和节点状态",
          "expected": "终端输出该构建器的名称、驱动类型、所有节点的名称和平台支持列表，以及各节点的端点地址和运行状态"
        }
      ],
      "id": "docker-official-2ad7de535b00f994",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx ls",
      "en": "List builder instances",
      "zh": "列出所有构建器实例及其状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx ls --format \"{{.Name}}: {{.DriverEndpoint}}\"",
          "description": "使用 --format 模板列出每个构建器的名称及其驱动端点地址，便于快速识别构建节点和连接方式",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "多架构构建环境中存在多个构建器实例（如本地默认 docker 驱动实例和远程 kubernetes 构建节点），需要确认当前可用构建器及哪个是默认实例",
          "goal": "查看所有构建器实例的名称、驱动类型和端点地址",
          "expected": "输出构建器列表表格，每行显示实例名称、驱动/端点信息，当前默认实例名前有 * 标记"
        }
      ],
      "id": "docker-official-1f143debb6b10502",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx policy",
      "en": "Commands for working with build policies",
      "zh": "管理构建策略（如构建记录保留、输出格式等策略）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "policy",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx policy --help",
          "description": "显示 policy 命令组下所有子命令及其选项，用于管理构建策略配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要配置构建策略来控制构建行为（如设置构建记录保留天数、配置输出策略等），但不清楚可用的子命令及其参数",
          "goal": "查看构建策略管理命令组包含的子命令和用法",
          "expected": "列出 policy 命令组的所有子命令（如 ls、inspect 等）及简要说明"
        }
      ],
      "id": "docker-official-e58ec06f95638f22",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/policy/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx prune",
      "en": "Remove build cache",
      "zh": "清理构建缓存以释放磁盘空间",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "prune",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx prune",
          "description": "清除所有未使用的构建缓存，包括中间层和构建输出缓存；可加 --filter 限定保留时长或 --all 彻底清除",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "多次构建后构建缓存累积占用大量磁盘空间（可达数 GB），影响系统性能或导致磁盘不足",
          "goal": "清除所有未被引用的构建缓存数据",
          "expected": "交互式确认后显示释放的磁盘空间大小（如 Total reclaimed space: 2.34GB），构建缓存存储目录被清空",
          "caveat": "执行前确认当前没有正在进行的构建任务，确认可以接受后续首次构建变慢",
          "warning": "清除后下次构建将重新下载基础镜像并编译所有层，首次构建时间显著变长"
        }
      ],
      "id": "docker-official-0e8d3c2ddfa0c885",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/prune/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx rm",
      "en": "Remove one or more builder instances",
      "zh": "删除一个或多个构建器实例",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx rm --all-inactive",
          "description": "使用 --all-inactive 选项一键删除所有处于非活跃状态的构建器实例，保留当前默认和正在使用的实例",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "不再需要某个构建器实例（如临时创建的远程构建节点或已废弃的测试构建环境），需从构建器列表中彻底移除",
          "goal": "清理所有不活跃的构建器实例以保持构建环境整洁",
          "expected": "列出被删除的构建器名称，执行 docker buildx ls 后这些实例不再出现",
          "caveat": "执行前用 docker buildx ls 确认要删除的构建器名称及其状态，确认构建缓存已备份或不再需要",
          "warning": "删除构建器实例将同时丢失其构建缓存和配置，无法恢复"
        }
      ],
      "id": "docker-official-b0b110f4f75c4d06",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx stop",
      "en": "Stop builder instance",
      "zh": "停止指定的构建器实例",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx stop mybuilder",
          "description": "停止名为 mybuilder 的构建器实例运行，释放其占用的资源，但保留配置和缓存以便后续重启",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个构建器实例（如远程构建节点 mybuilder）暂时不需要运行但希望保留其配置，以便后续快速重启复用",
          "goal": "停止 mybuilder 构建器实例以释放系统资源",
          "expected": "构建器状态变为 inactive，docker buildx ls 中该实例状态显示为 stopped",
          "caveat": "执行前用 docker buildx ls 确认该构建器上没有正在运行的构建作业",
          "warning": "停止构建器将中断该实例上正在执行的构建任务"
        }
      ],
      "id": "docker-official-c584c838702cb4ca",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/stop/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx use",
      "en": "Set the current builder instance",
      "zh": "切换当前使用的默认构建器实例",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "use",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx use remote-builder",
          "description": "将默认构建器切换为 remote-builder 实例，后续 docker buildx build 等命令都将使用该实例执行",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "存在多个构建器实例（如本地默认实例和远程多架构构建节点 remote-builder），需要将构建任务切换到远程构建器以利用其多架构能力",
          "goal": "将默认构建器切换为 remote-builder 以执行多架构镜像构建",
          "expected": "终端输出提示已切换默认构建器，docker buildx ls 中 remote-builder 名前显示 * 标记"
        }
      ],
      "id": "docker-official-70a6e51a6769d249",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/use/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx version",
      "en": "Show buildx version information",
      "zh": "显示已安装的 buildx 组件版本信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx version",
          "description": "显示 buildx 组件的版本号、Git 提交哈希和构建时间等详细版本信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查构建兼容性问题时需确认 buildx 版本是否支持特定特性（如 --attest 签名证明或特定缓存后端），或升级后验证新版本是否生效",
          "goal": "确认 buildx 版本是否满足当前项目所需的构建特性要求",
          "expected": "输出版本信息行，包含版本号（如 github.com/docker/buildx v0.14.0）、Git 提交哈希和构建时间戳"
        }
      ],
      "id": "docker-official-948df42bd235cf09",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx"
    },
    {
      "cat": "flag",
      "cmd": "docker checkpoint create",
      "en": "Create a checkpoint from a running container",
      "zh": "为运行中的容器创建状态快照（检查点）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker checkpoint create myapp pre-migration",
          "description": "对运行中的容器 myapp 创建名为 pre-migration 的检查点，保存当前进程树、内存页、TCP 连接和文件系统状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器内运行着长时间计算或迁移任务，需要在关键阶段创建状态快照，以便出问题时从该点恢复而不必从头重算",
          "goal": "为容器 myapp 创建名为 pre-migration 的检查点以便迁移前保存状态",
          "expected": "检查点创建成功提示，执行 docker checkpoint ls myapp 可看到 pre-migration 检查点",
          "prerequisites": "需要以实验性模式运行 Docker 守护进程（--experimental），容器必须以 --security-opt seccomp:unconfined 启动"
        }
      ],
      "id": "docker-official-ef8be504c4ec587d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/checkpoint/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker checkpoint"
    },
    {
      "cat": "flag",
      "cmd": "docker checkpoint ls",
      "en": "List checkpoints for a container",
      "zh": "列出指定容器的所有检查点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker checkpoint ls myapp",
          "description": "列出容器 myapp 上所有已创建的检查点名称",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "为容器 myapp 在不同阶段创建了多个检查点，需要查看有哪些检查点可供恢复及它们的时间顺序",
          "goal": "列出容器 myapp 的所有已创建检查点以选择恢复目标",
          "expected": "以列表形式显示所有检查点名称，按创建时间顺序排列",
          "prerequisites": "需要以实验性模式运行 Docker 守护进程（--experimental）"
        }
      ],
      "id": "docker-official-7dc1517e3ce69819",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/checkpoint/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker checkpoint list"
      ],
      "context": "docker checkpoint"
    },
    {
      "cat": "flag",
      "cmd": "docker checkpoint rm",
      "en": "Remove a checkpoint",
      "zh": "删除指定容器的某个检查点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker checkpoint rm myapp pre-migration",
          "description": "从容器 myapp 中删除名为 pre-migration 的检查点及其关联的状态数据文件",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "pre-migration 检查点对应的迁移操作已完成，检查点不再有恢复价值，且占用磁盘空间需要清理",
          "goal": "删除容器 myapp 上名为 pre-migration 的过期检查点",
          "expected": "检查点删除成功提示，执行 docker checkpoint ls myapp 后 pre-migration 不再显示",
          "caveat": "执行前用 docker checkpoint ls myapp 确认检查点名称正确，并确认该检查点确实不再需要恢复",
          "warning": "检查点删除后永久丢失，无法从该状态快照恢复容器"
        }
      ],
      "id": "docker-official-e843c15a373e2d24",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/checkpoint/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker checkpoint remove"
      ],
      "context": "docker checkpoint"
    },
    {
      "cat": "flag",
      "cmd": "docker compose attach",
      "en": "Attach local standard input, output, and error streams to a service's running container",
      "zh": "将本地终端的输入输出连接到运行中的服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "attach",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose attach web",
          "description": "将当前终端的标准输入、输出和错误流连接到 web 服务容器，可直接查看容器输出或向容器进程发送指令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "web 服务容器正在运行但需要交互式调试（如连接到 Node.js REPL 或查看实时请求日志），而不想停止并重新启动容器",
          "goal": "连接到 web 服务容器以实时交互或查看日志输出",
          "expected": "终端显示容器的实时 stdout/stderr 输出，键盘输入被发送到容器的主进程；Ctrl+P Ctrl+Q 可安全分离",
          "caveat": "Ctrl+C 会向容器进程发送 SIGINT，可能导致容器停止；仅调试场景使用，不建议在生产环境长时间 attach"
        }
      ],
      "id": "docker-official-c24409c67be53784",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/attach/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose bridge",
      "en": "Convert compose files into another model",
      "zh": "管理 Compose 文件格式转换（如转为 Kubernetes 清单等目标格式）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "bridge",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose bridge --help",
          "description": "显示 bridge 命令组下所有子命令，用于将 Docker Compose 文件转换为其他编排工具的配置格式",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队需要将现有的 Docker Compose 项目迁移到 Kubernetes 或其他编排平台，需要了解 bridge 命令支持的转换目标格式和具体子命令",
          "goal": "查看 compose bridge 命令组可用的格式转换目标和子命令用法",
          "expected": "列出 bridge 命令组的所有子命令及简要说明，展示可用的转换目标格式（如 Kubernetes）"
        }
      ],
      "id": "docker-official-e90ef57b962e9b2f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/bridge/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose build",
      "en": "Build or rebuild services",
      "zh": "根据 compose 文件构建或重新构建服务镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose build",
          "description": "读取当前目录的 compose.yaml，按各服务的 build 配置（Dockerfile 路径、构建参数）重新构建所有服务的镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "修改了 web 服务的源代码和 Dockerfile 后，需要重新构建镜像以使变更生效，才能用新镜像启动服务",
          "goal": "重新构建 compose 文件中定义的所有服务镜像",
          "expected": "依次构建每个服务的镜像，逐层显示构建步骤（如 FROM、RUN、COPY）和每层的 SHA256 摘要，最后输出镜像 ID"
        }
      ],
      "id": "docker-official-11f24d41b6fe8991",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose commit",
      "en": "Create a new image from a service container's changes",
      "zh": "将服务容器的当前运行状态保存为新镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "commit",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose commit web myapp:debug",
          "description": "将 web 服务容器的当前文件系统变更（如手动安装的依赖、调试配置）固化为新镜像 myapp:debug",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 web 服务容器中调试时手动安装了诊断工具和修改了配置，需要将这些变更保存为新镜像以便后续复现或分享调试环境",
          "goal": "将 web 容器当前状态提交为 myapp:debug 镜像",
          "expected": "输出新创建的镜像 SHA256 ID，docker image ls 中显示 myapp:debug 镜像及创建时间",
          "caveat": "commit 不会保存容器挂载卷中的数据，且镜像可能包含调试产生的临时文件和敏感信息，建议发布前清理"
        }
      ],
      "id": "docker-official-ef11481c525f2a99",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/commit/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose config",
      "en": "Parse, resolve and render compose file in canonical format",
      "zh": "解析并渲染 compose 文件为最终规范格式，同时验证配置有效性",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "config",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose config",
          "description": "解析当前目录的 compose.yaml，展开所有环境变量、extends 继承和多文件合并，输出最终生效的规范 YAML 配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "compose 文件使用了变量替换（${VAR}）、多文件合并（-f）或 extends 继承，修改后需要确认合并生成的最终配置是否正确，避免因变量缺漏导致启动失败",
          "goal": "验证并查看当前 compose 文件解析后的完整有效配置",
          "expected": "输出完整的规范格式 YAML，所有 ${VAR} 已被替换为实际值，extends 和多文件配置已合并展开为单文件"
        }
      ],
      "id": "docker-official-ee3c5730093f2542",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/config/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose convert",
      "en": "Converts the compose file to platform's canonical format",
      "zh": "将 Compose 文件解析为平台标准格式并输出",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "convert",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose convert",
          "description": "无参数执行时读取当前目录的 compose.yaml 并输出完整解析结果，包括所有变量替换、extends 合并和默认值填充后的最终配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要验证 Compose 文件语法是否正确、查看变量替换后的实际值、或确认 extends/merge 合并结果时",
          "goal": "检查 compose.yaml 解析后的最终生效配置",
          "expected": "终端输出完整解析后的 YAML 配置，包含所有服务的最终端口映射、环境变量、卷挂载等"
        }
      ],
      "id": "docker-official-baa246cdf44f4b8f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/convert/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose cp",
      "en": "Copy files/folders between a service container and the local filesystem",
      "zh": "在服务容器和本地文件系统之间复制文件或目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "cp",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose cp ./app.conf web:/etc/nginx/conf.d/default.conf",
          "description": "将本地 ./app.conf 复制到 web 服务容器的 /etc/nginx/conf.d/default.conf 路径，覆盖已有的 Nginx 配置文件",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将本地配置文件、脚本或数据文件快速复制到已运行的 Compose 服务容器中，而无需重新构建镜像时",
          "goal": "将本地 Nginx 配置文件推送到运行中的 web 容器内",
          "expected": "本地文件被复制到容器指定路径，容器内的 Nginx 可重新加载新配置"
        }
      ],
      "id": "docker-official-7d6f375c0bd58fec",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/cp/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose create",
      "en": "Creates containers for a service",
      "zh": "为服务创建容器但不启动",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose create web",
          "description": "根据 compose.yaml 中 web 服务的定义创建容器（分配资源、准备网络和卷），但不执行启动命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在正式启动服务前预先拉取镜像、分配网络和卷资源，或将容器创建与首次启动分离以做额外配置时",
          "goal": "仅创建 web 服务的容器而不运行",
          "expected": "终端输出容器已创建的确认信息，docker ps -a 可看到已创建但未启动的容器"
        }
      ],
      "id": "docker-official-dee364f4aa1cad7b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose events",
      "en": "Receive real time events from containers",
      "zh": "实时接收并显示 Compose 项目中容器的生命周期事件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "events",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose events --json",
          "description": "持续监听当前 Compose 项目的容器事件；--json 让每个事件以一行 JSON 对象输出，便于筛选或交给脚本处理。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要监控 Compose 项目中各容器的生命周期变化，排查服务频繁重启或意外停止的原因时",
          "goal": "实时监控项目内所有容器的状态变化事件",
          "expected": "终端持续逐行输出 JSON 事件对象，其中包含事件时间、动作、容器或服务标识等信息，直到用户中止监听。"
        }
      ],
      "id": "docker-official-bba3994949fe8436",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/events/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose exec",
      "en": "Execute a command in a running container",
      "zh": "在已运行的服务容器中执行命令",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "exec",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose exec web bash",
          "description": "在 web 服务容器内启动一个 bash 交互式 shell，可在此执行诊断命令、查看日志文件或修改运行时配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要进入运行中的容器排查故障、查看应用日志、执行数据库迁移或运行一次性管理命令时",
          "goal": "进入 web 容器获得交互式 shell 以排查运行问题",
          "expected": "终端切换到容器内 bash 提示符，可执行 ls、cat、ps 等命令查看容器内部状态"
        }
      ],
      "id": "docker-official-8dc8528e37c73d8d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/exec/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose export",
      "en": "Export a service container's filesystem as a tar archive",
      "zh": "将服务容器的文件系统导出为 tar 归档",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "export",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose export web > web-backup.tar",
          "description": "将 web 服务容器的完整文件系统导出为一个 tar 流并重定向保存到本地 web-backup.tar 文件",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将容器的当前文件系统状态完整导出用于离线分析、迁移到其他环境或创建备份快照时",
          "goal": "导出 web 容器的完整文件系统用于备份或迁移",
          "expected": "生成的 web-backup.tar 文件包含容器内所有文件和目录，可用 tar -tf web-backup.tar 查看内容",
          "caveat": "执行前检查当前目录中是否已有 web-backup.tar，并确认覆盖旧备份不会造成损失。",
          "warning": "Shell 重定向会直接覆盖同名的 web-backup.tar 文件。"
        }
      ],
      "id": "docker-official-f6151cadf067cbd1",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/export/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose images",
      "en": "List images used by the created containers",
      "zh": "列出 Compose 项目中各服务所使用的镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "images",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose images",
          "description": "展示当前 Compose 项目中每个服务对应的镜像名称、标签和镜像 ID，帮助确认各服务实际运行的镜像版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认项目中各服务实际引用的镜像版本，排查版本不一致导致的问题或验证最近拉取的镜像时",
          "goal": "查看项目中所有服务所使用的镜像及版本",
          "expected": "表格列出每个服务的容器名、镜像名、标签和镜像 ID"
        }
      ],
      "id": "docker-official-fa07508c607badfd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/images/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose kill",
      "en": "Force stop service containers",
      "zh": "强制停止服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "kill",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose kill web",
          "description": "向 web 服务容器发送 SIGKILL 信号立即终止进程，比 docker compose stop 更快但不给应用执行优雅关闭的机会",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器无响应或应用死锁，无法通过正常方式停止，需要立即强制终止进程时",
          "goal": "强制终止失去响应的 web 容器进程",
          "expected": "web 容器被立即终止，docker compose ps 显示其状态为 exited",
          "caveat": "执行前确认容器内无未完成的事务或写入操作",
          "warning": "强制终止会跳过应用的优雅关闭流程，可能导致数据丢失或文件损坏"
        }
      ],
      "id": "docker-official-ba2b7d13d704fb62",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/kill/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose ls",
      "en": "List running compose projects",
      "zh": "列出所有正在运行的 Compose 项目",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose ls",
          "description": "扫描 Docker 宿主机上所有运行的 Compose 项目，显示项目名称、状态和 compose 文件路径",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "管理多套微服务环境时需要快速了解当前机器上运行着哪些 Compose 项目及其状态时",
          "goal": "查看当前宿主机上所有运行中的 Compose 项目概览",
          "expected": "表格列出项目名称、状态（running/exited）和配置文件路径"
        }
      ],
      "id": "docker-official-130d33b7936471e9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose pause",
      "en": "Pause services",
      "zh": "暂停服务容器的所有进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pause",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose pause web",
          "description": "使用 cgroups freeze 功能暂停 web 服务容器的所有进程而不终止容器，保留内存状态和资源分配",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要临时冻结某个服务进行快照、调试或释放 CPU 资源而不丢失容器运行状态时",
          "goal": "冻结 web 容器进程以临时暂停服务",
          "expected": "web 容器状态变为 Paused，进程被挂起，docker compose unpause 后可恢复运行"
        }
      ],
      "id": "docker-official-6f0ba96c3fb147c9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/pause/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose port",
      "en": "Print the public port for a port binding",
      "zh": "查看服务端口绑定的宿主机公共端口",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "port",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose port web 80",
          "description": "查询 web 服务容器内 80 端口映射到宿主机的实际端口号（如 0.0.0.0:8080），适用于动态分配端口场景",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Compose 文件中使用了动态端口映射，需要确定宿主机的实际对外端口来访问服务时",
          "goal": "查明 web 服务 80 端口实际映射的宿主机端口",
          "expected": "输出如 0.0.0.0:32770，即容器 80 端口映射到了宿主机的 32770 端口"
        }
      ],
      "id": "docker-official-fdc4b856e68c560d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/port/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose publish",
      "en": "Publish compose application",
      "zh": "将 Compose 应用发布为 OCI 制品推送到镜像仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "publish",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose publish myregistry.com/myapp:v1.0",
          "description": "将当前 Compose 项目打包为 OCI 制品并以 myapp:v1.0 标签推送到 myregistry.com 镜像仓库",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将完整的 Compose 应用（含所有服务、配置和依赖关系）作为单一可部署单元发布到镜像仓库供其他环境拉取部署时",
          "goal": "将整个 Compose 项目打包并推送到远程镜像仓库",
          "expected": "OCI 制品成功推送到仓库，可通过 docker pull myregistry.com/myapp:v1.0 拉取该 Compose 应用",
          "prerequisites": "需要先通过 docker login 登录目标镜像仓库"
        }
      ],
      "id": "docker-official-8c4b61f318384313",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/publish/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose pull",
      "en": "Pull service images",
      "zh": "拉取 Compose 项目中各服务的镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pull",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose pull",
          "description": "根据 compose.yaml 中每个服务声明的镜像名和标签，从远程仓库拉取最新镜像到本地",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "部署前需要确保本地拥有最新的服务镜像，或 compose.yaml 中更新了镜像标签需要同步拉取时",
          "goal": "预先拉取所有服务的最新镜像以加速后续启动",
          "expected": "逐服务显示拉取进度和状态，完成后 docker images 可看到新拉取的镜像"
        }
      ],
      "id": "docker-official-122d5cf9a301aade",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/pull/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose push",
      "en": "Push service images",
      "zh": "推送 Compose 项目中的服务镜像到远程仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose push web",
          "description": "将 web 服务对应的本地镜像推送到 compose.yaml 中 image 字段所指定的远程仓库",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地构建好服务镜像后需要推送到共享镜像仓库，供 CI/CD 流水线或其他环境拉取部署时",
          "goal": "将 web 服务的本地镜像推送到远程镜像仓库",
          "expected": "终端显示镜像层推送进度，完成后远程仓库出现该镜像",
          "prerequisites": "需要先通过 docker login 登录目标镜像仓库"
        }
      ],
      "id": "docker-official-b8f9414339cc01f1",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose restart",
      "en": "Restart service containers",
      "zh": "重启服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "restart",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose restart web",
          "description": "停止并重新启动 web 服务容器，容器 ID 和配置不变，适合应用需要重新加载配置但不改容器配置的场景",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "修改了容器内应用配置文件或需要让应用重新加载参数，且不希望重建容器实例时",
          "goal": "重启 web 容器使其重新加载运行时配置",
          "expected": "web 容器被停止后立即重新启动，docker compose ps 显示其为 Up 状态",
          "caveat": "执行前确认当前流量已经妥善处理或已启用备用服务",
          "warning": "重启期间服务短暂不可用，生产环境应在确认负载已切换后执行"
        }
      ],
      "id": "docker-official-5ed6f9f11c1e8eeb",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/restart/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose rm",
      "en": "Removes stopped service containers",
      "zh": "删除已停止的服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose rm web",
          "description": "删除已停止的 web 服务容器，释放其占用的存储空间和容器名称。仅能删除已停止的容器",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器停止后需要清理废弃容器以释放磁盘空间、避免容器名称冲突或清理测试环境时",
          "goal": "删除已停止的 web 容器以释放资源",
          "expected": "web 容器被移除，docker compose ps -a 中不再出现该容器",
          "caveat": "执行前确认容器已停止且其中的有用数据已导出备份",
          "warning": "删除后容器内的数据层和临时修改将永久丢失，无法恢复"
        }
      ],
      "id": "docker-official-b9e37dc0078b815e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose run",
      "en": "Run a one-off command on a service",
      "zh": "在服务上执行一次性命令",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "run",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose run --rm web python manage.py migrate",
          "description": "基于 web 服务的镜像启动一个独立容器运行 python manage.py migrate 数据库迁移命令，--rm 表示执行完毕后自动删除容器",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要执行数据库迁移、种子数据填充或一次性管理脚本，但不想影响正在运行的 web 服务实例时",
          "goal": "在独立容器中运行数据库迁移而不干扰运行中的 web 服务",
          "expected": "迁移命令在独立容器中执行，终端显示迁移输出，完成后容器自动删除",
          "caveat": "执行前确认数据库连接指向正确环境，并先检查迁移计划和备份；--rm 还会在任务结束后删除临时容器。",
          "warning": "数据库迁移可能改变表结构或数据，失败时可能需要按应用的迁移机制回滚。"
        }
      ],
      "id": "docker-official-b5c582a40b8d53be",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/run/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose scale",
      "en": "Scale services",
      "zh": "扩展服务的副本数量",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "scale",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose scale web=3",
          "description": "把 Compose 项目中 web 服务的期望副本数设为 3；Compose 会创建或移除该服务的容器，使实际数量达到指定值。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "业务流量上升需要增加服务实例数来水平扩展处理能力，或测试负载均衡效果时",
          "goal": "将 web 服务扩容至 3 个副本",
          "expected": "命令完成后，docker compose ps 显示 web 服务共有 3 个容器实例；具体容器名称由 Compose 项目名和版本决定。"
        }
      ],
      "id": "docker-official-188b05fd3db431aa",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/scale/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose start",
      "en": "Start services",
      "zh": "启动已存在但处于停止状态的服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "start",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose start web",
          "description": "重新启动之前用 docker compose stop 停止的 web 容器，保留原有配置、卷挂载和网络设置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "服务之前被正常停止，现在需要恢复运行，不重建也不修改容器配置时",
          "goal": "恢复之前停止的 web 容器到运行状态",
          "expected": "web 容器重新启动，docker compose ps 显示其为 Up 状态"
        }
      ],
      "id": "docker-official-0ffe08c23bbdf7f7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/start/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose stats",
      "en": "Display a live stream of container(s) resource usage statistics",
      "zh": "实时显示容器的资源使用统计",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stats",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose stats",
          "description": "以实时刷新的方式展示所有服务容器的 CPU 使用率、内存占用、网络 IO 和磁盘 IO 等指标",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查服务性能问题时需要实时观察每个容器的 CPU、内存和 IO 消耗，定位资源瓶颈时",
          "goal": "实时监控所有服务容器的资源消耗情况",
          "expected": "终端持续刷新显示每个容器的 CPU%、内存使用量/限制、网络收发字节数"
        }
      ],
      "id": "docker-official-3ec48cfef208671e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/stats/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose stop",
      "en": "Stop services",
      "zh": "停止正在运行的服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose stop web",
          "description": "向 web 服务容器发送 SIGTERM 信号，给予应用一段宽限期执行优雅关闭（清理连接、保存状态），超时后再强制终止",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要正常关闭服务进行维护、升级或释放系统资源，且希望应用能优雅处理完当前请求时",
          "goal": "优雅停止 web 服务容器",
          "expected": "web 容器在宽限期内完成清理后正常退出，docker compose ps 显示其为 exited 状态",
          "caveat": "执行前确认当前请求和事务已得到妥善处理，或已通知依赖方",
          "warning": "容器及其运行状态会被终止，网络连接将断开"
        }
      ],
      "id": "docker-official-67c8c58bdde51802",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/stop/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose top",
      "en": "Display the running processes",
      "zh": "显示容器内正在运行的进程列表",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "top",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose top",
          "description": "列出 Compose 项目中所有服务容器内当前正在运行的进程，包括 PID、用户和启动命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查容器内哪个进程占用过多资源、验证应用是否正常启动、或检查是否有异常进程时",
          "goal": "查看所有服务容器内正在运行的操作系统进程",
          "expected": "按服务分组显示每个容器内的进程列表，包含 PID、USER、COMMAND 等信息"
        }
      ],
      "id": "docker-official-c7bb64ab9c9a923e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/top/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose unpause",
      "en": "Unpause services",
      "zh": "恢复被暂停的服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "unpause",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose unpause web",
          "description": "恢复之前用 docker compose pause 暂停的 web 服务容器，进程从暂停点继续执行，内存和状态保持不变",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "调试完成或资源紧张期过后，需要让被冻结的服务恢复到正常运行状态时",
          "goal": "恢复之前暂停的 web 容器到正常运行",
          "expected": "web 容器从 Paused 恢复为 Up 状态，所有进程从暂停点继续运行"
        }
      ],
      "id": "docker-official-edf3f1c4699b4af8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/unpause/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose version",
      "en": "Show the Docker Compose version information",
      "zh": "显示 Docker Compose 的版本信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose version",
          "description": "输出当前安装的 Docker Compose 版本号及构建信息，用于确认 Compose 插件是否为最新版本或满足最低版本要求",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查兼容性问题、确认 compose 文件语法支持或验证 CI 环境中安装的是否为 Docker Compose v2 插件而非旧版 docker-compose 时",
          "goal": "确认当前 Docker Compose 的版本",
          "expected": "输出如 Docker Compose version v2.27.0-desktop.1，包含版本号和构建哈希"
        }
      ],
      "id": "docker-official-1e003ae07f168a45",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose volumes",
      "en": "List volumes",
      "zh": "列出 Compose 项目中定义的卷",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "volumes",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose volumes",
          "description": "显示当前 Compose 项目中所有通过 volumes 关键字定义的 Docker 卷的名称、类型和挂载路径",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看 Compose 项目创建了哪些持久化卷、卷名对应哪个服务、排查数据丢失或卷挂载配置问题时",
          "goal": "查看项目中所有 Docker 卷及其挂载信息",
          "expected": "表格列出卷名称和类型（如 volume 或 bind），标明数据存储位置和挂载路径"
        }
      ],
      "id": "docker-official-8eeaa29b286cad4a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/volumes/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose wait",
      "en": "Block until containers of all (or specified) services stop.",
      "zh": "阻塞等待指定服务容器全部停止后返回",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "wait",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose wait web",
          "description": "阻塞当前 shell 进程，直到 web 服务容器的所有实例都进入 stopped 状态后才返回退出码",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在脚本或 CI 流水线中需要等待某个服务的容器完全停止后再执行后续清理、备份或检查操作时",
          "goal": "等待 web 容器停止后再执行后续脚本步骤",
          "expected": "命令阻塞等待，web 容器停止后返回，终端显示容器退出码"
        }
      ],
      "id": "docker-official-fe919f97d5365205",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/wait/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker compose watch",
      "en": "Watch build context for service and rebuild/refresh containers when files are updated",
      "zh": "监视源码变更并自动重建或热更新服务容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "watch",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose watch",
          "description": "持续监视 compose.yaml 中配置的同步目录，当源码文件变动时自动将变更同步到容器并在需要时重建/重启服务",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地开发过程中需要代码修改后立即在容器中生效，减少手动重建和重启的次数时",
          "goal": "启用文件变更自动同步到容器以提升开发效率",
          "expected": "终端持续运行，检测到文件变更时自动执行 sync 或 rebuild 操作并输出对应日志"
        }
      ],
      "id": "docker-official-e89f4918836fef56",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/watch/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose"
    },
    {
      "cat": "flag",
      "cmd": "docker config create",
      "en": "Create a config from a file or STDIN",
      "zh": "从文件或标准输入创建 Docker 配置对象",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker config create my_config ./config.json",
          "description": "读取本地 config.json 内容并将其存储为名为 my_config 的 Docker config 对象，该配置可在 Swarm 服务中引用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Docker Swarm 集群中管理应用配置文件时需要将配置创建为 Swarm config 对象以便服务安全引用时",
          "goal": "将本地 config.json 创建为 Swarm 可用的配置对象 my_config",
          "expected": "创建成功后命令行返回 config ID，docker config ls 可查看该配置",
          "prerequisites": "需要 Docker Swarm 模式已启用（docker swarm init）"
        }
      ],
      "id": "docker-official-52528a0297c6d684",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/config/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker config"
    },
    {
      "cat": "flag",
      "cmd": "docker config inspect",
      "en": "Display detailed information on one or more configs",
      "zh": "查看一个或多个配置对象的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker config inspect config.json",
          "description": "以 JSON 格式输出名为 config.json 的配置对象的元数据，包括创建时间、ID、标签和配置数据的摘要信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认某个 Swarm config 的创建时间、标签或基本信息以排查配置引用问题时",
          "goal": "查看 config.json 配置对象的元数据详情",
          "expected": "输出 JSON 格式的配置元数据，包含 ID、创建时间、名称和标签",
          "prerequisites": "需要 Docker Swarm 模式已启用"
        }
      ],
      "id": "docker-official-a804d33a1eb12ca5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/config/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker config"
    },
    {
      "cat": "flag",
      "cmd": "docker config ls",
      "en": "List configs",
      "zh": "列出所有 Docker 配置对象",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker config ls",
          "description": "列出当前 Swarm 集群中所有 config 对象的名称、ID、创建时间和更新日期",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "管理 Swarm 集群配置时需要查看已创建了哪些配置对象，判断是否需要更新或清理过期配置时",
          "goal": "查看 Swarm 集群中所有 config 配置清单",
          "expected": "表格列出每个 config 的名称、ID、创建时间和更新时间",
          "prerequisites": "需要 Docker Swarm 模式已启用"
        }
      ],
      "id": "docker-official-d3243d0d9cf4b877",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/config/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker config list"
      ],
      "context": "docker config"
    },
    {
      "cat": "flag",
      "cmd": "docker config rm",
      "en": "Remove one or more configs",
      "zh": "删除一个或多个 Docker 配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker config rm my_config",
          "description": "删除名为 my_config 的 Docker Swarm 配置对象。配置一旦被服务引用则无法删除，需先解除引用。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Swarm 集群中更新应用配置后，旧的数据库连接字符串配置不再需要，为避免配置积累导致管理混乱，需要删除废弃的 config 对象。",
          "goal": "删除名为 my_config 的过期 Swarm 配置，释放管理资源。",
          "expected": "配置 my_config 被成功删除，docker config ls 列表中不再显示该配置。若该配置正被某个服务使用，会返回错误提示。",
          "prerequisites": "Docker 节点处于 Swarm 模式",
          "caveat": "删除前请确认该配置未被任何服务引用，否则操作会被拒绝。",
          "warning": "删除的配置不可恢复，请先通过 docker config inspect my_config 确认内容后再执行。"
        }
      ],
      "id": "docker-official-686f15177bb29a0c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/config/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker config remove"
      ],
      "context": "docker config"
    },
    {
      "cat": "flag",
      "cmd": "docker container attach",
      "en": "Attach local standard input, output, and error streams to a running container",
      "zh": "将本地终端的标准输入、输出和错误流连接到正在运行的容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "attach",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker attach topdemo",
          "description": "将当前终端连接到名为 topdemo 的容器主进程（PID 1），可实时查看该进程的输出并向其发送输入。按 Ctrl+P Ctrl+Q 可安全分离而不停止容器，直接按 Ctrl+C 会终止容器主进程。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "启动了一个运行 top 命令的调试容器，需要实时查看系统资源使用情况并与之交互，而不是每次用 docker logs 查看快照。",
          "goal": "将终端连接到名为 topdemo 的正在运行的容器，实时观察其主进程输出。",
          "expected": "终端显示容器内 top 进程的实时输出界面，可看到 CPU、内存等指标的动态变化。按 Ctrl+P Ctrl+Q 后返回宿主机终端，容器继续运行。"
        }
      ],
      "id": "docker-official-47544038e56f4258",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/attach/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker attach"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container commit",
      "en": "Create a new image from a container's changes",
      "zh": "将容器的当前文件系统变更保存为新镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "commit",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker commit c3f279d17e0a svendowideit/testimage:version3",
          "description": "将容器 c3f279d17e0a 当前的读写层快照保存为名为 svendowideit/testimage、标签为 version3 的新镜像。容器的文件修改、已安装的软件包和配置变更都会被固化到镜像中，但挂载卷中的数据不会被包含。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在容器中安装并配置了 Web 服务器运行环境，希望将这个定制好的状态保存为镜像，以便后续快速部署相同环境的容器或推送到镜像仓库共享给团队。",
          "goal": "将容器 c3f279d17e0a 当前的修改保存为镜像 svendowideit/testimage:version3。",
          "expected": "生成新的镜像 ID 并输出，执行 docker images 可看到 svendowideit/testimage:version3 出现在列表中，可用于 docker run 启动新容器。",
          "caveat": "提交前请确认容器内没有敏感数据（如密钥、临时文件），这些内容会被一起打包进镜像。"
        }
      ],
      "id": "docker-official-776062b1e41ebcee",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/commit/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker commit"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container create",
      "en": "Create a new container",
      "zh": "创建一个新容器但不启动它",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker container create -i -t --name mycontainer alpine",
          "description": "基于 alpine 镜像创建一个名为 mycontainer 的容器，-i 保持标准输入打开，-t 分配伪终端。容器创建成功但不会运行，处于 Created 状态，后续可用 docker start 启动。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要预先创建多个配置完全相同的容器实例，在批量任务到来时再统一启动；或者需要创建容器并挂载特定卷、设置网络后再手动启动，而非立即运行。",
          "goal": "基于 alpine 镜像创建一个名为 mycontainer 的已配置容器但不自动启动。",
          "expected": "输出容器完整 ID，docker ps -a 显示 mycontainer 状态为 Created，容器已存在但内部进程未运行。"
        }
      ],
      "id": "docker-official-b1b77f5e986928e6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker create"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container diff",
      "en": "Inspect changes to files or directories on a container's filesystem",
      "zh": "检查容器文件系统中文件或目录的变更",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "diff",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker diff 1fdfd1f54c1b",
          "description": "对比容器 1fdfd1f54c1b 的文件系统与其基础镜像，列出所有新增（A）、修改（C）和删除（D）的文件及目录路径。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查一个行为异常的容器时，需要了解它在运行期间修改了哪些文件，比如是否写入了异常日志、修改了配置文件、或者在非预期路径创建了临时文件。",
          "goal": "查看容器 1fdfd1f54c1b 自创建以来文件系统的所有变更明细。",
          "expected": "输出文件变更列表，每行格式为变更类型标记（A/C/D）加文件路径，如 C /etc/nginx/nginx.conf 表示该配置文件被修改过。"
        }
      ],
      "id": "docker-official-afa1b60851f8550d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/diff/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker diff"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container export",
      "en": "Export a container's filesystem as a tar archive",
      "zh": "将容器的文件系统导出为 tar 归档文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "export",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker export red_panda > latest.tar",
          "description": "将名为 red_panda 的容器的完整文件系统导出为 tar 流，重定向保存到 latest.tar 文件。导出的内容为容器当前文件系统的扁平快照，不含镜像层历史、元数据和挂载卷内容。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将某个调试容器的文件系统状态分享给同事分析，或者要将容器文件系统迁移到另一台机器上用 docker import 导入为镜像。",
          "goal": "将容器 red_panda 的文件系统导出为 latest.tar 归档文件。",
          "expected": "当前目录生成 latest.tar 文件，包含容器文件系统的完整目录结构。可通过 tar -tvf latest.tar 查看内容，或通过 docker import latest.tar 导入为新镜像。",
          "caveat": "执行前检查当前目录是否已有 latest.tar，并确认容器挂载卷不在本次导出范围内。",
          "warning": "Shell 重定向会覆盖同名文件，而且导出归档不会包含挂载卷中的数据。"
        }
      ],
      "id": "docker-official-9ba428c74923e4bd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/export/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker export"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container inspect",
      "en": "Display detailed information on one or more containers",
      "zh": "显示一个或多个容器的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker container inspect mycontainer",
          "description": "以 JSON 格式输出名为 mycontainer 的容器的完整元数据，包括容器 ID、创建时间、状态、镜像、网络设置、挂载卷、环境变量、资源限制等所有底层配置。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器运行出现网络不通的问题，需要查看其实际分配的 IP 地址、端口映射和网络模式等详细配置，而不是仅凭启动命令的参数来猜测。",
          "goal": "查看容器 mycontainer 的完整配置信息以排查网络问题。",
          "expected": "输出一个 JSON 数组，包含容器的所有配置和状态信息，如 NetworkSettings.IPAddress 显示容器的实际 IP、Mounts 显示挂载详情、State 显示运行状态和退出码等。"
        }
      ],
      "id": "docker-official-8585d9c996fd29fe",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container kill",
      "en": "Kill one or more running containers",
      "zh": "强制终止一个或多个正在运行的容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "kill",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker kill my_container",
          "description": "向名为 my_container 的容器主进程发送 KILL 信号（SIGKILL），立即终止容器而不会给应用任何清理或优雅退出的机会。与 docker stop 不同，kill 不等待应用完成关闭流程。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器中的应用进程已经无响应或死锁，用 docker stop 等待超时仍无法停止，需要立即强制结束以释放占用的系统资源。",
          "goal": "强制立即终止名为 my_container 的无响应容器。",
          "expected": "输出容器名称 my_container，容器状态变为 Exited，docker ps 列表中不再显示该容器。被占用的端口、内存等资源立即释放。",
          "caveat": "强制终止可能导致数据丢失或文件损坏，仅在不关心数据完整性或容器已无响应时使用。优先尝试 docker stop 给应用优雅退出的机会。",
          "warning": "SIGKILL 信号不可被捕获或忽略，容器内应用无法执行任何清理操作，可能导致未写入磁盘的数据丢失。确认容器状态后再执行。"
        }
      ],
      "id": "docker-official-0a161962e3b7c9e7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/kill/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker kill"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container pause",
      "en": "Pause all processes within one or more containers",
      "zh": "暂停一个或多个容器内的所有进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pause",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pause my_container",
          "description": "冻结 my_container 内的全部进程，但不停止或删除容器；稍后可用 docker unpause my_container 让进程从暂停点继续执行。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "短时维护期间需要让一个仍在运行的任务容器暂时停止处理新工作，同时保留容器和进程状态，以便维护结束后快速继续。",
          "goal": "暂时冻结 my_container 内的全部进程，并保留其当前运行状态。",
          "expected": "命令成功后，docker ps 的 STATUS 为该容器标出 (Paused)，容器内进程停止推进；执行 docker unpause my_container 后恢复运行。",
          "caveat": "执行前确认上游流量、健康检查和依赖服务能容忍该容器短时无响应；Windows 仅支持暂停 Hyper-V 容器。",
          "warning": "暂停期间容器仍存在，但其中的服务不会继续处理请求或后台任务，可能造成超时或任务积压。"
        }
      ],
      "id": "docker-official-577e0c3013470ab9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/pause/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker pause"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container port",
      "en": "List port mappings or a specific mapping for the container",
      "zh": "列出容器的端口映射或特定端口的映射信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "port",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker port test",
          "description": "列出名为 test 的容器的所有端口映射关系，显示宿主机端口到容器端口的对应关系。也可指定私有端口（如 docker port test 80）只查看该端口的映射。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "启动容器时使用了随机端口映射（-P），需要知道宿主机的哪个端口映射到了容器的 8080 端口，以便通过浏览器访问容器内的 Web 服务。",
          "goal": "查看容器 test 的所有端口映射，确认访问地址。",
          "expected": "输出端口映射列表，格式如 80/tcp -> 0.0.0.0:32768，表示宿主机的 32768 端口映射到容器的 80 端口。"
        }
      ],
      "id": "docker-official-72d3088d98cbeb00",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/port/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker port"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container rename",
      "en": "Rename a container",
      "zh": "重命名一个容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rename",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker rename my_container my_new_container",
          "description": "将容器名称从 my_container 改为 my_new_container。容器 ID 保持不变，仅修改名称别名。新名称必须唯一，不能与已有容器重名。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队规范要求容器名称遵循特定命名规则（如包含服务名和环境），一个临时命名的容器需要改为符合规范的名字，以便在脚本和监控中统一引用。",
          "goal": "将容器 my_container 重命名为 my_new_container 以符合团队命名规范。",
          "expected": "无输出表示成功，docker ps -a 列表中容器名称已变更为 my_new_container，且容器 ID 不变。",
          "caveat": "重命名前请确认没有脚本或编排工具依赖旧容器名称，改名后依赖旧名称的引用会失效。"
        }
      ],
      "id": "docker-official-c4825520d04b72df",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/rename/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker rename"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container top",
      "en": "Display the running processes of a container",
      "zh": "显示容器内正在运行的进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "top",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker container top mycontainer",
          "description": "以 ps 风格列出名为 mycontainer 的容器内所有运行中的进程，显示 PID、用户、命令等信息。可附加 ps 选项进行过滤（如 docker container top mycontainer aux）。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "怀疑容器内运行了意外的子进程或者某个进程占用过高 CPU，需要直接查看容器内部的进程列表，就像在宿主机上执行 ps 一样。",
          "goal": "查看容器 mycontainer 内部当前运行的所有进程及其资源占用情况。",
          "expected": "输出表格形式的进程列表，包含 UID、PID、PPID、C、STIME、TTY、TIME、CMD 等列，直观展示容器内进程状态。"
        }
      ],
      "id": "docker-official-a22d1482882a5a90",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/top/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker top"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container unpause",
      "en": "Unpause all processes within one or more containers",
      "zh": "恢复一个或多个暂停容器内的所有进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "unpause",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker unpause my_container",
          "description": "解冻之前通过 docker pause 暂停的容器 my_container，让其内部所有进程从暂停点继续执行。容器状态从 Paused 恢复为 Running。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "数据库备份操作已完成，需要恢复之前暂停的容器 my_container 使其继续处理请求。",
          "goal": "恢复容器 my_container 内被暂停的进程，使其继续运行。",
          "expected": "输出容器名称 my_container，docker ps 显示状态从 Paused 变回 Running，容器内应用恢复正常服务。"
        }
      ],
      "id": "docker-official-a0b65ef2c49e5b55",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/unpause/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker unpause"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container update",
      "en": "Update configuration of one or more containers",
      "zh": "更新一个或多个容器的运行时配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker update --cpu-shares 512 abebf7571666",
          "description": "动态调整容器 abebf7571666 的 CPU 份额为 512（默认 1024）。可在线修改容器的 CPU、内存、重启策略等资源限制，无需停止或重建容器。并非所有配置项都支持热更新。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "上线后发现某个批处理容器占用了过多 CPU 资源影响了前台服务，需要在不重启容器的情况下降低其 CPU 配额。",
          "goal": "将容器 abebf7571666 的 CPU 份额降为 512，限制其计算资源占用。",
          "expected": "输出容器名称缩写，容器继续运行但 CPU 调度权重减半。可通过 docker inspect 查看 HostConfig.CpuShares 确认新值为 512。"
        }
      ],
      "id": "docker-official-70ea893e1aa2b067",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker update"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker container wait",
      "en": "Block until one or more containers stop, then print their exit codes",
      "zh": "阻塞等待一个或多个容器停止并输出其退出码",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "wait",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker wait my_container",
          "description": "阻塞当前终端，直到名为 my_container 的容器停止运行，然后输出容器的退出码（0 表示正常退出，非 0 表示异常）。常用于脚本中等待容器任务执行完毕。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 CI/CD 流水线中启动了一个执行数据库迁移的一次性容器，需要在脚本中等待迁移完成并检查其退出码，以判断迁移是否成功，再决定是否继续后续部署步骤。",
          "goal": "等待容器 my_container 停止并获取其退出码以判断任务是否成功。",
          "expected": "终端阻塞直到容器退出后输出一个整数退出码，如 0（成功）或 137（被 SIGKILL 终止）。退出码可用于后续脚本的条件判断。"
        }
      ],
      "id": "docker-official-104964884213221c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/container/wait/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker wait"
      ],
      "context": "docker container"
    },
    {
      "cat": "flag",
      "cmd": "docker context create",
      "en": "Create a context",
      "zh": "创建一个 Docker 上下文以连接到不同的 Docker 端点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context create --docker host=unix:///var/run/docker.sock my-remote",
          "description": "创建一个名为 my-remote 的新 Docker 上下文，配置其 Docker 守护进程端点为本地 Unix socket。也可指定远程 TCP 端点来管理远程 Docker 主机。上下文存储连接参数，允许在多个 Docker 环境间快速切换。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要同时管理本地开发环境的 Docker 和一台远程测试服务器上的 Docker，创建两个独立的上下文后可以快速切换，避免每次执行命令都要指定 -H 参数或修改环境变量。",
          "goal": "创建一个指向远程 Docker 主机的上下文以简化多环境管理。",
          "expected": "输出 Successfully created context \"my-remote\"，随后可用 docker context use my-remote 切换到该上下文。"
        }
      ],
      "id": "docker-official-5af4ee98d0599535",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context export",
      "en": "Export a context to a tar archive FILE or a tar stream on STDOUT.",
      "zh": "将 Docker 上下文导出为 tar 归档文件或输出到标准输出",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "export",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context export my-remote > my-remote.dockercontext",
          "description": "将名为 my-remote 的 Docker 上下文的完整配置（包括端点地址、TLS 证书和密钥等）导出为 tar 流，重定向保存到文件。导出的文件可在其他机器上通过 docker context import 导入，用于共享上下文配置。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队中多位开发者都需要连接到同一台远程 Docker 服务器，管理员只需创建并导出上下文配置，其他人导入即可直接使用，无需各自手动配置 TLS 证书和端点参数。",
          "goal": "将配置好的上下文 my-remote 导出为文件，分发给团队成员使用。",
          "expected": "当前目录生成 my-remote.dockercontext 文件，包含上下文的所有连接配置和证书。团队成员可安全地通过 docker context import 导入该文件。",
          "caveat": "执行前检查是否已有同名文件，并确认只通过受控渠道传输；使用后及时删除导出文件。",
          "warning": "Shell 重定向会覆盖同名文件；归档可能包含 TLS 私钥等敏感连接材料。"
        }
      ],
      "id": "docker-official-37f535dd7a726faa",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/export/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context import",
      "en": "Import a context from a tar or zip file",
      "zh": "从 tar 或 zip 文件导入 Docker 上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "import",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context import my-remote my-remote.dockercontext",
          "description": "从文件 my-remote.dockercontext 导入上下文配置，将其注册为名为 my-remote 的本地上下文。导入后立即可用，包含原上下文的所有连接参数和 TLS 材料。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "收到了同事发来的远程 Docker 主机上下文配置文件，需要将其导入本地以便直接管理那台远程主机。",
          "goal": "将从同事获取的上下文文件 my-remote.dockercontext 导入为名为 my-remote 的本地上下文。",
          "expected": "输出 my-remote 成功导入的确认信息，docker context ls 列表中显示 my-remote 上下文，可直接切换使用。"
        }
      ],
      "id": "docker-official-48071b91732039a0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/import/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context inspect",
      "en": "Display detailed information on one or more contexts",
      "zh": "显示一个或多个上下文的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context inspect \"local+aks\"",
          "description": "以 JSON 格式输出名为 local+aks 的 Docker 上下文的完整配置信息，包括端点地址、TLS 配置、证书路径、存储编排器类型等。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "切换上下文后发现 docker 命令操作的不是预期的 Docker 主机，需要检查当前或指定上下文的实际连接配置以排查问题。",
          "goal": "查看上下文 local+aks 的完整连接参数以确认其指向的目标是否正确。",
          "expected": "输出 JSON 格式的详细信息，包括 Name、Metadata、Endpoints 下的 docker 主机地址和 Kubernetes 配置等字段。"
        }
      ],
      "id": "docker-official-600ac0a7667a7be7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context ls",
      "en": "List contexts",
      "zh": "列出所有可用的 Docker 上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context ls",
          "description": "以表格形式列出本地所有 Docker 上下文，显示名称、类型、描述、当前使用的 Docker 端点、Kubernetes 端点和编排器信息。当前激活的上下文以 * 标记。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "管理多个 Docker 环境（本地、远程测试服务器、云平台集群）时，需要查看当前有哪些可用上下文以及当前激活的是哪一个，避免误操作到错误的环境。",
          "goal": "查看所有可用的 Docker 上下文并确认当前激活的是哪个环境。",
          "expected": "输出上下文列表表格，包含 NAME、TYPE、DESCRIPTION、DOCKER ENDPOINT 等列，当前使用的上下文行首有 * 标记。"
        }
      ],
      "id": "docker-official-c770de023dee02f5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker context list"
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context rm",
      "en": "Remove one or more contexts",
      "zh": "删除一个或多个 Docker 上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context rm my-remote",
          "description": "删除名为 my-remote 的 Docker 上下文，从本地配置中移除该上下文的所有连接信息。不能删除当前正在使用的上下文，需先切换到其他上下文。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "远程测试服务器已下线，不再需要其对应的 Docker 上下文，为避免团队成员误切换到已失效的端点，需要清理过期上下文。",
          "goal": "删除已失效的上下文 my-remote，保持上下文列表整洁。",
          "expected": "输出 my-remote 删除确认信息，docker context ls 列表中不再显示该上下文。",
          "caveat": "删除前请确认该上下文不再被任何工作流程需要。删除后无法撤销，如需恢复只能重新创建或导入。",
          "warning": "删除操作不可逆，确认该上下文的连接配置（尤其是 TLS 证书）已备份或不再需要。"
        }
      ],
      "id": "docker-official-12c7a30017d1f6e9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker context remove"
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context show",
      "en": "Print the name of the current context",
      "zh": "输出当前使用的上下文名称",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "show",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context show",
          "description": "打印当前激活的 Docker 上下文名称。一行输出，适合在脚本中用于条件判断或动态配置。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在自动化脚本中需要根据当前 Docker 上下文（本地开发还是生产环境）执行不同的操作，需要先获取当前上下文名称作为判断依据。",
          "goal": "获取当前激活的上下文名称用于脚本中的环境判断逻辑。",
          "expected": "输出一行当前上下文名称，如 default 或用户自定义的上下文名。无额外信息，直接输出名字。"
        }
      ],
      "id": "docker-official-27522255f3585f64",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/show/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context update",
      "en": "Update a context",
      "zh": "更新现有 Docker 上下文的配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context update --description \"some description\" --docker \"host=tcp://myserver:2376,ca=~/ca-file,cert=~/cert-file,key=~/key-file\" my-remote",
          "description": "更新名为 my-remote 的上下文配置：修改描述信息并重新设置 Docker 端点参数，包括 TCP 主机地址、CA 证书、客户端证书和密钥路径。不需要删除再重建上下文即可修改连接参数。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "远程 Docker 主机更换了 TLS 证书，或者 IP 地址发生变化，需要更新本地上线文中的连接配置以保持可用，而不是删除重建。",
          "goal": "更新上下文 my-remote 的描述和 TLS 连接参数以适配远程主机的新配置。",
          "expected": "输出上下文更新成功的确认信息，之后切换到该上下文即可使用新的连接参数访问远程 Docker 主机。",
          "caveat": "更新前请确认新的端点地址和证书路径正确无误，配置错误会导致上下文不可用。"
        }
      ],
      "id": "docker-official-71c64778e80a12e2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker context use",
      "en": "Set the default docker context",
      "zh": "设置当前会话的默认 Docker 上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "use",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker context use my-context",
          "description": "将名为 my-context 的 Docker 上下文设为当前激活的上下文，之后所有 docker 命令都会通过该上下文指向的 Docker 端点执行。切换后立即生效。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要从本地开发环境切换到远程测试服务器的 Docker 环境进行排查，切换上下文后所有后续命令都自动指向远程主机，无需每次加 -H 参数。",
          "goal": "将 Docker CLI 的工作目标切换到 my-context 指向的远程 Docker 主机。",
          "expected": "输出 Current context is now \"my-context\"，后续 docker ps 等命令将作用于该上下文对应的 Docker 主机。"
        }
      ],
      "id": "docker-official-5fd6794919e0bc41",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/context/use/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker context"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop diagnose",
      "en": "Diagnose Docker Desktop issues",
      "zh": "诊断 Docker Desktop 运行问题并生成诊断报告",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "diagnose",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop diagnose",
          "description": "运行 Docker Desktop 内置诊断工具，自动检测 Docker 引擎状态、网络配置、文件共享、资源分配等常见问题，并生成包含诊断结果和建议的日志报告。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker Desktop 启动后容器无法访问外网，或者文件共享不生效，需要运行诊断工具自动排查问题而非手动检查各项配置。",
          "goal": "运行 Docker Desktop 诊断工具，自动发现并报告当前环境的配置问题。",
          "expected": "诊断程序运行并输出检查结果报告，包含各模块状态（通过/警告/失败）和具体的修复建议。生成的日志文件路径也会输出。"
        }
      ],
      "id": "docker-official-f8dcd9caf295f1f4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/diagnose/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop disable",
      "en": "Disable a feature",
      "zh": "管理 Docker Desktop 功能的禁用操作",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop disable --help",
          "description": "查看 Docker Desktop 中可禁用的功能列表及用法。属于管理命令组，具体功能通过子命令指定，如禁用 Kubernetes、自动启动等特性。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要了解 Docker Desktop 有哪些功能可以被禁用——比如希望关闭自动启动以减少系统资源占用，或者停用内置 Kubernetes 集群。需要先查看可用的禁用选项和正确用法。",
          "goal": "查看 docker desktop disable 所管理的功能禁用选项及其使用方式。",
          "expected": "输出该命令组支持的子命令和使用说明，列出可禁用的功能模块及对应参数。"
        }
      ],
      "id": "docker-official-4ab141ca82ed0313",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/disable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop enable",
      "en": "Enable a feature",
      "zh": "管理 Docker Desktop 功能的启用操作",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "enable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop enable --help",
          "description": "查看 Docker Desktop 中可启用的功能列表及用法。属于管理命令组，具体功能通过子命令指定，如启用 Kubernetes、增强容器隔离等实验特性。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "项目需要使用 Docker Desktop 内置的 Kubernetes 集群或 WASM 支持，需要了解如何通过命令行启用这些功能，而非在图形界面中逐个查找设置项。",
          "goal": "查看 docker desktop enable 所管理的功能启用选项及其使用方式。",
          "expected": "输出该命令组支持的子命令和使用说明，列出可启用的功能模块及对应参数和前提条件。"
        }
      ],
      "id": "docker-official-3e8baea1f6ce69c9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/enable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop engine",
      "en": "Commands to list and switch containers (Windows only)",
      "zh": "管理 Docker Desktop 引擎——列出和切换容器运行时（仅限 Windows）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "engine",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop engine --help",
          "description": "查看 Docker Desktop 引擎管理命令的用法。此命令组仅限 Windows 平台，用于在 Windows 容器和 Linux 容器模式之间切换，或列出当前可用的容器运行时引擎。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Windows 上开发时需要根据目标部署环境在 Windows 容器和 Linux 容器之间切换，或者在 WSL2 后端和 Hyper-V 后端之间选择，需要了解引擎管理的可用命令。",
          "goal": "查看 docker desktop engine 在 Windows 上的容器引擎管理命令和切换选项。",
          "expected": "输出引擎管理子命令列表——包含列出可用引擎和切换当前引擎的命令格式、参数和平台约束说明。"
        }
      ],
      "id": "docker-official-16c3ea368dd8508c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/engine/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop kubernetes",
      "en": "Manage Kubernetes settings",
      "zh": "管理 Docker Desktop 内置的 Kubernetes 设置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "kubernetes",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop kubernetes --help",
          "description": "查看 Docker Desktop 中 Kubernetes 的管理命令用法。此命令组用于配置、启用或禁用内置 Kubernetes 集群，包括版本选择、资源限制和上下文配置等操作。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队需要在本地搭建一致的 Kubernetes 开发环境，需要了解如何通过命令行配置 Docker Desktop 内置的 K8s 集群（如指定版本、命名空间），以编写自动化环境搭建脚本。",
          "goal": "查看 docker desktop kubernetes 所管理的 Kubernetes 配置选项和子命令用法。",
          "expected": "输出 Kubernetes 管理子命令列表——包含启用/禁用集群、查看状态、配置 Kubeconfig 上下文等命令的说明和示例。"
        }
      ],
      "id": "docker-official-7ca57e5096c65292",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/kubernetes/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop logs",
      "en": "Print log entries for Docker Desktop",
      "zh": "输出 Docker Desktop 的运行日志",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "logs",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop logs",
          "description": "打印 Docker Desktop 的运行日志条目，包括守护进程日志、后台服务日志和错误信息。可用于排查 Docker Desktop 启动失败、服务异常或性能问题。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker Desktop 意外退出且无法重新启动，需要通过查看日志来找到崩溃原因（如端口冲突、磁盘空间不足或虚拟机异常）。",
          "goal": "查看 Docker Desktop 的运行日志以排查启动失败的原因。",
          "expected": "输出 Docker Desktop 各组件的日志内容，按时间顺序显示事件。如发现错误会在日志中标明具体原因，便于定位和修复问题。"
        }
      ],
      "id": "docker-official-6aaf4e2a0464454b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/logs/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop restart",
      "en": "Restart Docker Desktop",
      "zh": "重启Docker Desktop应用及其后台守护进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "restart",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop restart",
          "description": "重启整个Docker Desktop应用，包括Docker守护进程、虚拟机（如适用）和所有运行中的容器将全部停止后再启动",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "修改了Docker Desktop配置（如资源限制、代理设置）后需要重启生效，或者Docker守护进程运行异常卡死需要恢复",
          "goal": "通过重启让Docker Desktop配置变更生效或恢复异常状态",
          "expected": "Docker Desktop界面关闭后重新打开，守护进程重新就绪，之前随Docker Desktop自启设置的容器会重新运行",
          "caveat": "重启前确认已保存容器内未持久化的数据；正在运行的服务会短暂中断",
          "warning": "重启会停止所有运行中的容器和服务"
        }
      ],
      "id": "docker-official-e8e55832c0423d67",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/restart/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop start",
      "en": "Start Docker Desktop",
      "zh": "启动Docker Desktop应用并拉起Docker守护进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "start",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop start",
          "description": "启动Docker Desktop应用，同时拉起后台Docker守护进程，使docker命令行可以正常使用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "系统启动后Docker Desktop未自动启动，或手动停止了Docker Desktop后需要重新启动以继续容器开发工作",
          "goal": "启动Docker Desktop使docker引擎可用",
          "expected": "Docker Desktop应用出现在状态栏，docker info等命令正常返回引擎信息"
        }
      ],
      "id": "docker-official-98887e22ea48ed72",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/start/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop status",
      "en": "Display Docker Desktop's status",
      "zh": "查看Docker Desktop当前的运行状态和资源信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "status",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop status",
          "description": "显示Docker Desktop的运行状态（如是否正在运行、引擎是否就绪）、版本以及CPU/内存等资源使用情况",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在CI脚本或自动化流程中需要确认Docker Desktop是否已就绪后再执行后续docker操作，或排查docker命令无响应的问题",
          "goal": "确认Docker Desktop是否处于正常运行状态",
          "expected": "输出类似Docker Desktop运行中、引擎已连接的实时状态信息"
        }
      ],
      "id": "docker-official-8322755e43219b57",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/status/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop stop",
      "en": "Stop Docker Desktop",
      "zh": "停止Docker Desktop应用及其守护进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop stop",
          "description": "停止Docker Desktop应用及Docker守护进程，所有运行中的容器将被终止",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要释放Docker Desktop占用的系统资源（CPU/内存），或准备升级Docker Desktop版本前安全退出",
          "goal": "完全停止Docker Desktop以释放资源或进行维护",
          "expected": "Docker Desktop应用退出，状态栏图标消失，docker命令无法连接守护进程",
          "caveat": "停止前确认所有容器内工作已保存；停止后docker命令将不可用，需执行docker desktop start重新启动",
          "warning": "停止会终止所有运行中的容器和服务"
        }
      ],
      "id": "docker-official-e47f78b3b0b0aa9c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/stop/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop update",
      "en": "Manage Docker Desktop updates",
      "zh": "管理Docker Desktop的版本更新",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop update",
          "description": "检查、下载并应用Docker Desktop的可用更新，包含一些可选参数用于控制更新行为",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "收到Docker Desktop新版本通知后，希望从命令行触发更新而非通过GUI界面操作",
          "goal": "检查并安装Docker Desktop的可用更新",
          "expected": "检查到新版本后开始下载，完成后提示更新就绪或Docker Desktop已更新至最新版本",
          "caveat": "更新过程中Docker Desktop会重启，运行中的容器将停止",
          "warning": "更新会中断当前容器运行"
        }
      ],
      "id": "docker-official-1290491c85d5b6a8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop version",
      "en": "Show the Docker Desktop CLI plugin version information",
      "zh": "显示Docker Desktop CLI插件的版本号和构建信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop version",
          "description": "输出当前安装的Docker Desktop CLI插件的具体版本号、Git提交哈希和构建时间等详细信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查CLI插件与Docker Desktop版本兼容性问题，或向官方提交bug报告时需要提供精确的插件版本信息",
          "goal": "获取Docker Desktop CLI插件的精确版本标识",
          "expected": "输出包含版本号、构建哈希和时间的版本信息"
        }
      ],
      "id": "docker-official-0e4c84b8147c4baf",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi attestation",
      "en": "View attestations for Docker Hardened Images",
      "zh": "管理Docker Hardened Images的安全证明（attestation）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "attestation",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi attestation --help",
          "description": "查看Docker Hardened Images证明相关操作的可用子命令和选项，包括查看镜像的SBOM、签名和来源证明",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要验证Docker Hardened Images的软件物料清单（SBOM）或来源证明以确保供应链安全合规",
          "goal": "浏览DHI镜像安全证明相关操作的命令列表",
          "expected": "列出attestation命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-5ac7cf85179e3487",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/attestation/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker dhi attest",
        "docker dhi a"
      ],
      "context": "docker dhi"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi auth",
      "en": "Authenticate with Docker Hub",
      "zh": "管理Docker Hardened Images的Docker Hub认证",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "auth",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi auth --help",
          "description": "查看DHI认证相关操作的可用子命令，包括登录、登出和查看认证状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要登录Docker Hub以拉取或管理Docker Hardened Images时需要了解认证命令",
          "goal": "浏览DHI认证操作的命令列表",
          "expected": "列出auth命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-f35e2a905283810a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/auth/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi catalog",
      "en": "Browse the Docker Hardened Images catalog",
      "zh": "管理Docker Hardened Images目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "catalog",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi catalog --help",
          "description": "查看DHI目录管理操作的可用子命令，包括搜索和浏览可用的硬化镜像列表",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查找可用的Docker Hardened Images，了解哪些官方镜像提供了安全硬化版本",
          "goal": "浏览DHI目录相关操作的命令列表",
          "expected": "列出catalog命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-08120283af22a664",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/catalog/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization",
      "en": "Manage Docker Hardened Images customizations",
      "zh": "管理Docker Hardened Images的自定义配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "customization",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization --help",
          "description": "查看DHI自定义管理的可用子命令，包括创建、修改和删除镜像自定义配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要基于标准硬化镜像添加自定义安全策略、额外软件包或环境配置以满足组织需求",
          "goal": "浏览DHI自定义配置管理的命令列表",
          "expected": "列出customization命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-dc84b29b0951967d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker dhi c",
        "docker dhi custo"
      ],
      "context": "docker dhi"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi mirror",
      "en": "Mirror Docker Hardened Images to your organization",
      "zh": "管理Docker Hardened Images的镜像同步",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "mirror",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi mirror --help",
          "description": "查看DHI镜像同步操作的可用子命令，包括将硬化镜像从Docker Hub同步到组织私有仓库",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将Docker Hardened Images复制到组织内部的私有镜像仓库以满足离线环境或合规要求",
          "goal": "浏览DHI镜像同步操作的命令列表",
          "expected": "列出mirror命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-b09dde7062e91077",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/mirror/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi"
    },
    {
      "cat": "flag",
      "cmd": "docker image build",
      "en": "Build an image from a Dockerfile",
      "zh": "根据Dockerfile构建Docker镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker image build -t my-app:latest .",
          "description": "在当前目录查找Dockerfile，按其中指令逐层构建镜像并以my-app:latest为标签命名",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "编写完应用代码和Dockerfile后，需要将其打包成可运行的Docker镜像用于本地测试或部署",
          "goal": "将当前项目构建为名为my-app的Docker镜像",
          "expected": "逐步执行Dockerfile各层指令，完成后输出镜像ID并用docker images可看到my-app:latest镜像",
          "prerequisites": "当前目录需存在Dockerfile文件"
        }
      ],
      "id": "docker-official-df2ed881de4c0003",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker image"
    },
    {
      "cat": "flag",
      "cmd": "docker image history",
      "en": "Show the history of an image",
      "zh": "查看Docker镜像的构建历史和各层信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "history",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker history docker",
          "description": "显示docker官方镜像的每一层的创建时间、大小和创建命令，便于了解镜像的构建过程",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要排查镜像体积过大的原因，定位是哪一层引入了大量文件；或验证镜像是否包含可疑的构建步骤",
          "goal": "分析docker官方镜像的层结构和大小分布",
          "expected": "以表格形式列出镜像各层的ID、创建时间、大小和创建命令"
        }
      ],
      "id": "docker-official-a22f974f81002211",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/history/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker history"
      ],
      "context": "docker image"
    },
    {
      "cat": "flag",
      "cmd": "docker image import",
      "en": "Import the contents from a tarball to create a filesystem image",
      "zh": "从压缩包或URL导入文件系统以创建Docker镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "import",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker import https://example.com/exampleimage.tgz my-imported:latest",
          "description": "从指定URL下载压缩包，将其内容作为文件系统基础创建镜像，并打上my-imported:latest标签",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "有一台机器导出的根文件系统压缩包（非docker save格式），需要将其转换为Docker镜像以运行容器",
          "goal": "将远程文件系统压缩包导入为本地Docker镜像",
          "expected": "下载并解压文件系统后生成新的镜像ID，docker images中可看到my-imported:latest",
          "caveat": "导入的镜像没有Dockerfile构建历史，仅包含文件系统层"
        }
      ],
      "id": "docker-official-c00ec4934e582196",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/import/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker import"
      ],
      "context": "docker image"
    },
    {
      "cat": "flag",
      "cmd": "docker image inspect",
      "en": "Display detailed information on one or more images",
      "zh": "查看一个或多个Docker镜像的详细元数据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker image inspect nginx:latest",
          "description": "以JSON格式输出nginx:latest镜像的完整元数据，包括层信息、环境变量、暴露端口、卷挂载点、架构、创建时间等",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "编写自动化脚本需要提取镜像的暴露端口或环境变量等元数据；或排查容器启动异常需确认镜像的默认配置",
          "goal": "获取nginx:latest镜像的详细配置信息",
          "expected": "输出包含镜像全部元数据的JSON文档，包括Config、RootFS、Architecture等字段"
        }
      ],
      "id": "docker-official-cd5f5bc3c889e6c5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker image"
    },
    {
      "cat": "flag",
      "cmd": "docker image load",
      "en": "Load an image from a tar archive or STDIN",
      "zh": "从tar归档文件加载Docker镜像到本地",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "load",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker load < busybox.tar.gz",
          "description": "从标准输入读取busybox.tar.gz归档文件，将其中的镜像数据恢复到本地镜像存储",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在离线或受限网络环境中，从U盘或文件共享获取了docker save导出的镜像包，需要加载到本地使用",
          "goal": "将busybox.tar.gz中的镜像恢复到本地Docker",
          "expected": "输出加载进度和镜像标签信息，完成后docker images可看到恢复的镜像",
          "caveat": "若本地已存在同名同标签镜像将被覆盖"
        }
      ],
      "id": "docker-official-c53c5f70468724db",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/load/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker load"
      ],
      "context": "docker image"
    },
    {
      "cat": "flag",
      "cmd": "docker image save",
      "en": "Save one or more images to a tar archive (streamed to STDOUT by default)",
      "zh": "将一个或多个Docker镜像保存为tar归档文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "save",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker save busybox > busybox.tar",
          "description": "将本地busybox镜像导出为标准输出，重定向保存为busybox.tar文件，可用于离线传输",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将本地已拉取或构建的镜像迁移到另一台无法联网的机器，或归档特定版本镜像用于长期备份",
          "goal": "将busybox镜像导出为可传输的tar归档文件",
          "expected": "当前目录生成busybox.tar文件，该文件可在其他机器上通过docker load恢复",
          "caveat": "执行前检查当前目录是否已有 busybox.tar，并确认磁盘空间足以保存完整镜像归档。",
          "warning": "Shell 重定向会直接覆盖同名的 busybox.tar 文件。"
        }
      ],
      "id": "docker-official-46dbcfb4d7acec5f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/image/save/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker save"
      ],
      "context": "docker image"
    },
    {
      "cat": "flag",
      "cmd": "docker manifest annotate",
      "en": "Add additional information to a local image manifest",
      "zh": "为本地镜像清单中的某个条目添加架构或操作系统等注释信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "annotate",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker manifest annotate my-multiarch-list nginx:linux-amd64 --os linux --arch amd64",
          "description": "为my-multiarch-list清单列表中的nginx:linux-amd64镜像条目标注Linux操作系统和amd64架构信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "创建多架构镜像清单后，需要为其中的各平台镜像添加准确的OS和架构标注，确保不同平台的用户拉取到正确的镜像",
          "goal": "为多架构清单中的amd64镜像条目标注平台信息",
          "expected": "清单中对应条目被标注了--os linux --arch amd64的元数据",
          "prerequisites": "目标清单必须已通过docker manifest create创建"
        }
      ],
      "id": "docker-official-410574f27d368294",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/manifest/annotate/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker manifest"
    },
    {
      "cat": "flag",
      "cmd": "docker manifest create",
      "en": "Create a local manifest list for annotating and pushing to a registry",
      "zh": "创建一个多架构镜像的本地清单列表",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker manifest create my-multiarch-list nginx:linux-amd64 nginx:linux-arm64",
          "description": "将nginx的amd64和arm64两个架构的镜像组合为一个名为my-multiarch-list的多架构清单列表",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要发布一个同时支持amd64和arm64平台的多架构镜像，让不同架构的用户拉取时自动获取匹配的镜像版本",
          "goal": "创建包含amd64和arm64两个平台镜像的多架构清单",
          "expected": "生成名为my-multiarch-list的本地清单列表，可通过docker manifest inspect查看",
          "prerequisites": "清单中引用的各平台镜像需已存在于本地或可访问的仓库"
        }
      ],
      "id": "docker-official-6692c792b5007a01",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/manifest/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker manifest"
    },
    {
      "cat": "flag",
      "cmd": "docker manifest inspect",
      "en": "Display an image manifest, or manifest list",
      "zh": "查看镜像清单或清单列表的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker manifest inspect nginx:latest",
          "description": "显示nginx:latest镜像的清单内容，包括各层的摘要、大小和平台信息；对于多架构清单则列出所有平台条目",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认一个镜像标签是指向单架构镜像还是多架构清单；或排查拉取到错误平台版本问题时验证清单的架构配置",
          "goal": "查看nginx:latest的清单结构和平台信息",
          "expected": "输出JSON格式的清单详情，包含schema版本、各层摘要和大小、平台信息等"
        }
      ],
      "id": "docker-official-48c5a1b91a90e4f8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/manifest/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker manifest"
    },
    {
      "cat": "flag",
      "cmd": "docker manifest push",
      "en": "Push a manifest list to a repository",
      "zh": "将本地创建的清单列表推送到远程镜像仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker manifest push my-multiarch-list",
          "description": "将本地的my-multiarch-list多架构清单列表推送到其标签中指定的远程仓库",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在本地创建并验证多架构镜像清单后，需要将其推送到Docker Hub或私有仓库供团队成员拉取使用",
          "goal": "将多架构清单my-multiarch-list发布到远程仓库",
          "expected": "清单列表及各架构镜像引用被推送到远程仓库，推送完成后可通过docker pull在远程拉取",
          "prerequisites": "本地清单列表已通过docker manifest create创建"
        }
      ],
      "id": "docker-official-a1ac6ed0cc7c66c2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/manifest/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker manifest"
    },
    {
      "cat": "flag",
      "cmd": "docker manifest rm",
      "en": "Delete one or more manifest lists from local storage",
      "zh": "从本地存储中删除一个或多个镜像清单列表",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker manifest rm my-multiarch-list",
          "description": "从本地Docker存储中删除名为my-multiarch-list的镜像清单列表，释放本地元数据空间",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地创建的多架构清单已完成推送，不再需要本地副本；或创建的清单列表有误需要删除后重建",
          "goal": "删除本地名为my-multiarch-list的清单列表",
          "expected": "my-multiarch-list清单列表从本地存储中移除，docker manifest inspect无法再查看到它",
          "caveat": "删除操作不可逆，确认清单已推送成功或不再需要；此操作不删除远程仓库的清单",
          "warning": "本地清单列表将被永久删除"
        }
      ],
      "id": "docker-official-42ff41a761a92b00",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/manifest/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker manifest"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog",
      "en": "Manage MCP server OCI catalogs",
      "zh": "管理MCP Server的OCI镜像目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "catalog",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog --help",
          "description": "查看MCP目录管理相关的可用子命令，用于管理存储在OCI兼容仓库中的MCP服务器镜像目录",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在OCI仓库中发布或管理可用的MCP服务器，以便团队成员或客户端发现和部署",
          "goal": "浏览MCP Server OCI目录管理的命令列表",
          "expected": "列出catalog命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-96c9cf55ebeee9cd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp catalogs",
        "docker mcp catalog-next"
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp client",
      "en": "Manage MCP clients",
      "zh": "管理MCP客户端配置和连接",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "client",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp client --help",
          "description": "查看MCP客户端管理相关的可用子命令，包括配置客户端连接参数和管理客户端会话",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要配置本地的MCP客户端以连接到特定的MCP服务器或网关",
          "goal": "浏览MCP客户端管理的命令列表",
          "expected": "列出client命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-525966779cd6d7b4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/client/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp feature",
      "en": "Manage experimental features",
      "zh": "管理MCP实验性功能开关",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "feature",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp feature --help",
          "description": "查看MCP实验性功能管理的可用子命令，用于启用或禁用特定的实验性功能",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要使用Docker MCP的某个实验性功能如新型协议支持或增强的安全模式",
          "goal": "浏览MCP实验性功能管理的命令列表",
          "expected": "列出feature命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-bfd6f237f820acbe",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/feature/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp gateway",
      "en": "Manage the MCP Server gateway",
      "zh": "管理MCP Server网关的运行和配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "gateway",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp gateway --help",
          "description": "查看MCP网关管理相关的可用子命令，包括启动、停止和配置MCP Server网关服务",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要部署或管理MCP Gateway作为MCP服务器的统一入口，处理认证、路由和负载均衡",
          "goal": "浏览MCP Server网关管理的命令列表",
          "expected": "列出gateway命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-ec30ad70cb249be5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/gateway/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile",
      "en": "Manage profiles",
      "zh": "管理MCP的配置文件集合",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "profile",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile --help",
          "description": "查看MCP配置文件管理相关的可用子命令，用于创建、切换和管理多个MCP配置环境",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为不同的MCP环境（如开发、测试、生产）维护独立的配置，方便快速切换",
          "goal": "浏览MCP配置管理的命令列表",
          "expected": "列出profile命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-b165017a3ddb4614",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp secret",
      "en": "Manage secrets in the local OS Keychain",
      "zh": "管理系统密钥链中的MCP相关凭证",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "secret",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp secret --help",
          "description": "查看MCP密钥管理相关的可用子命令，用于在操作系统密钥链中存储和检索API密钥等敏感凭证",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要安全存储MCP服务器连接所需的API密钥或Token，避免在配置文件或环境变量中明文暴露",
          "goal": "浏览MCP密钥管理的命令列表",
          "expected": "列出secret命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-e59d2e73b0213e25",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/secret/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp server",
      "en": "Manage servers",
      "zh": "管理MCP服务器的生命周期",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "server",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp server --help",
          "description": "查看MCP服务器管理相关的可用子命令，包括启动、停止、列出和配置MCP服务器实例",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要部署或管理运行中的MCP服务器实例以提供工具调用给AI应用",
          "goal": "浏览MCP服务器管理的命令列表",
          "expected": "列出server命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-7ce53fc93914b3c6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/server/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp tools",
      "en": "Manage tools",
      "zh": "管理MCP服务器的工具列表",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "tools",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp tools --help",
          "description": "查看MCP工具管理相关的可用子命令，用于管理MCP服务器暴露给客户端的可调用工具",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看或管理MCP服务器提供给AI客户端的具体工具清单，确认工具可用性",
          "goal": "浏览MCP工具管理的命令列表",
          "expected": "列出tools命名空间下可用的子命令及各自用途"
        }
      ],
      "id": "docker-official-20379306ec0584c6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/tools/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp version",
      "en": "Show the version information",
      "zh": "查看 Docker MCP 插件版本信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp version",
          "description": "显示当前安装的 Docker MCP（Model Context Protocol）插件的版本号及构建信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在排查 MCP 服务兼容性问题或确认是否已安装最新版 MCP 插件时，需要查看当前版本",
          "goal": "确认本地 Docker MCP 插件的版本号",
          "expected": "输出 MCP 版本号及 Git 提交哈希等构建元信息"
        }
      ],
      "id": "docker-official-14c2b6ef0a5a639d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp"
    },
    {
      "cat": "flag",
      "cmd": "docker model bench",
      "en": "Benchmark a model's performance at different concurrency levels",
      "zh": "在不同并发级别下对模型进行性能基准测试",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "bench",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model bench llama3.2",
          "description": "对已拉取的 llama3.2 模型运行性能基准测试，测量不同并发请求数下的吞吐量和延迟",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在部署模型到生产环境前，需要评估模型在当前硬件上的推理性能，以便确定合适的并发上限和资源配置",
          "goal": "测量 llama3.2 模型在多并发场景下的推理吞吐量和延迟",
          "expected": "输出不同并发级别（如 1、4、8、16）下的请求延迟、每秒 token 数和吞吐量统计表",
          "prerequisites": "需要先通过 docker model pull 拉取要测试的模型"
        }
      ],
      "id": "docker-official-4de3a28958667646",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/bench/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model context",
      "en": "Manage Docker Model Runner contexts",
      "zh": "管理 Docker Model Runner 上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "context",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model context --help",
          "description": "列出所有可用的子命令，用于创建、切换和管理多套 Model Runner 运行环境上下文",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在同时连接多个 Docker 主机或需要在开发/测试/生产环境之间切换 Model Runner 后端时，通过上下文管理隔离不同环境的模型服务配置",
          "goal": "查看 Model Runner 上下文管理的可用操作（创建、列表、切换、删除上下文）",
          "expected": "列出 context 子命令清单，包括 create、ls、use、rm、inspect 等"
        }
      ],
      "id": "docker-official-840ffcd87fc8b822",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/context/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model df",
      "en": "Show Docker Model Runner disk usage",
      "zh": "查看 Docker Model Runner 的磁盘占用",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "df",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model df",
          "description": "展示已下载模型占用的磁盘空间，包括模型文件总大小、可回收空间及各模型明细",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地磁盘空间不足时，需要了解哪些模型占用了大量空间以便决定清理策略",
          "goal": "查看已下载模型的总磁盘占用量及各模型的空间明细",
          "expected": "输出类似镜像 docker system df 的表格，显示模型数量、总大小、可回收大小等"
        }
      ],
      "id": "docker-official-fa06f914e7ac06d6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/df/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model gateway",
      "en": "Run an OpenAI-compatible LLM gateway",
      "zh": "启动一个兼容 OpenAI API 的 LLM 网关服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "gateway",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model gateway",
          "description": "启动本地 HTTP 网关，将 Docker Model Runner 中运行的模型暴露为 OpenAI 兼容的 /v1/chat/completions 等端点",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发 AI 应用时需要本地 LLM 服务提供与 OpenAI API 兼容的接口，使现有代码无需修改即可切换为本地模型",
          "goal": "启动本地 LLM 网关，通过 OpenAI 兼容 API 访问本地模型",
          "expected": "网关启动并监听本地端口（默认 8080），输出访问地址和可用端点列表",
          "caveat": "启动后会占用终端前台进程，需另开终端使用；网关默认仅监听本地回环地址"
        }
      ],
      "id": "docker-official-598efa75e037ac93",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/gateway/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model inspect",
      "en": "Display detailed information on one model",
      "zh": "查看指定模型的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model inspect llama3.2",
          "description": "显示模型 llama3.2 的详细元数据，包括模型格式、参数量、上下文长度、量化方式、层数等",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在选用模型前需要确认其参数量、上下文窗口大小和量化精度是否符合任务需求",
          "goal": "查看 llama3.2 模型的技术规格参数",
          "expected": "输出 JSON 格式的模型详细信息，包含 config、parameters、quantization、context_size 等字段",
          "prerequisites": "需要先通过 docker model pull 拉取目标模型"
        }
      ],
      "id": "docker-official-c17583384d1749ea",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model install-runner",
      "en": "Install Docker Model Runner (Docker Engine only)",
      "zh": "安装 Docker Model Runner 运行时（仅 Docker Engine）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "install-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model install-runner",
          "description": "在 Docker Engine 环境中安装 Model Runner 组件，使其具备本地模型运行能力",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在新部署的 Docker Engine 主机上首次启用模型推理功能时，需要安装 Model Runner 运行时",
          "goal": "在 Docker Engine 中安装 Model Runner 运行时组件",
          "expected": "下载并安装 Model Runner 二进制文件及依赖，完成后可通过 docker model status 验证",
          "prerequisites": "仅适用于 Docker Engine（非 Docker Desktop），Docker Desktop 已内置"
        }
      ],
      "id": "docker-official-f761ad1038cd009d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/install-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model launch",
      "en": "Launch an app configured to use Docker Model Runner",
      "zh": "启动一个配置为使用 Docker Model Runner 的应用",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "launch",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model launch open-webui",
          "description": "启动配置了 Model Runner 后端的 open-webui 容器化应用，自动注入模型服务地址",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "想快速运行一个带 UI 的 AI 聊天前端来与本地模型交互，而不需要手动配置 API 地址",
          "goal": "一键启动 open-webui 并自动连接到本地 Model Runner",
          "expected": "拉取并启动 open-webui 容器，输出访问 URL，前端已自动配置连接本地模型服务",
          "prerequisites": "需要 Docker Model Runner 已安装并运行"
        }
      ],
      "id": "docker-official-e44e6b9a4eb385ce",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/launch/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model list",
      "en": "List the models pulled to your local environment",
      "zh": "列出已拉取到本地的所有模型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model list",
          "description": "列出本地已下载的所有模型，包含模型名称、标签、大小和状态信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认本地有哪些可用模型，或检查某个模型是否已成功下载",
          "goal": "查看本地已下载的模型清单",
          "expected": "表格形式列出模型名称、标签（版本）、大小和状态"
        }
      ],
      "id": "docker-official-98cc304bbab84e51",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker model ls"
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model logs",
      "en": "Fetch the Docker Model Runner logs",
      "zh": "查看 Docker Model Runner 的运行日志",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "logs",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model logs",
          "description": "获取 Model Runner 服务的运行日志，包含模型加载、推理请求、错误和警告信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "模型推理异常或服务启动失败时需要查看日志来定位问题",
          "goal": "查看 Model Runner 最近的运行日志以排查故障",
          "expected": "输出日志流，包含时间戳和日志级别（INFO/WARN/ERROR），显示服务状态和请求记录"
        }
      ],
      "id": "docker-official-a0f687a8469c9a9e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/logs/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model package",
      "en": "Package a model into a Docker Model OCI artifact",
      "zh": "将模型打包为 Docker OCI 格式的制品",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "package",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model package --from llama3.2 myrepo/llama3.2-custom",
          "description": "以官方已拉取的 llama3.2 为基础，将其重新打包为自定义名称的 OCI 模型制品",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将微调后的模型或特定量化版本打包为标准的 Docker 模型制品以便分发和部署",
          "goal": "将 llama3.2 模型重新打包为自定义 OCI 制品 myrepo/llama3.2-custom",
          "expected": "生成符合 Docker Model OCI 规范的制品并存储到本地模型仓库",
          "prerequisites": "需要先拉取源模型"
        }
      ],
      "id": "docker-official-4644110829ab9a0e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/package/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model ps",
      "en": "List running models",
      "zh": "列出当前正在运行的模型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ps",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model ps",
          "description": "显示所有正在运行中的模型实例，包括模型名称、运行时长和资源占用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认哪些模型正在占用 GPU 显存或计算资源，以便决定是否卸载空闲模型",
          "goal": "查看当前运行中的模型列表及资源占用状态",
          "expected": "表格形式列出正在运行的模型、状态、运行时长和内存/显存占用"
        }
      ],
      "id": "docker-official-54439200bef446a5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/ps/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model pull",
      "en": "Pull a model from Docker Hub or HuggingFace to your local environment",
      "zh": "从 Docker Hub 或 HuggingFace 拉取模型到本地",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pull",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model pull llama3.2",
          "description": "从远程模型仓库下载 llama3.2 模型及其所有必要文件到本地环境",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要使用某个开源模型时，先从远程仓库下载到本地，之后即可离线运行",
          "goal": "将 llama3.2 模型下载到本地以供后续使用",
          "expected": "显示下载进度条，完成后模型出现在 docker model list 的输出中"
        }
      ],
      "id": "docker-official-f2bfccae15407c9e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/pull/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model purge",
      "en": "Remove all models",
      "zh": "删除本地所有模型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "purge",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model purge",
          "description": "一键清理本地所有已下载的模型文件，释放全部模型占用的磁盘空间",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要彻底清理模型存储空间或重置本地模型环境时使用",
          "goal": "删除本地的所有模型以释放磁盘空间",
          "expected": "所有模型被删除，docker model list 显示为空，磁盘空间恢复",
          "caveat": "执行前先用 docker model list 确认模型清单，必要时用 docker model pull 备份关键模型",
          "warning": "此操作不可逆，将永久删除所有已下载的模型文件"
        }
      ],
      "id": "docker-official-561606cf5c80be9a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/purge/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model push",
      "en": "Push a model to Docker Hub or Hugging Face",
      "zh": "将本地模型推送到 Docker Hub 或 HuggingFace",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model push myrepo/my-custom-model",
          "description": "将本地打包好的自定义模型制品 myrepo/my-custom-model 推送到远程仓库",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "完成模型微调或打包后，需要将模型发布到远程仓库供团队或社区使用",
          "goal": "将自定义模型 myrepo/my-custom-model 推送到 Docker Hub",
          "expected": "上传进度条逐层推送模型文件，完成后在 Docker Hub 上可见该模型",
          "prerequisites": "需要先登录 docker login 并有目标仓库的推送权限，模型需先通过 docker model package 打包"
        }
      ],
      "id": "docker-official-929680dee7d6f26d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model reinstall-runner",
      "en": "Reinstall Docker Model Runner (Docker Engine only)",
      "zh": "重新安装 Docker Model Runner 运行时（仅 Docker Engine）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "reinstall-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model reinstall-runner",
          "description": "先卸载再重新安装 Model Runner 运行时组件，用于修复损坏的安装或升级到最新版本",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Model Runner 运行时出现异常（如二进制损坏、版本不匹配）需要重装修复时使用",
          "goal": "重新安装 Model Runner 以修复运行异常",
          "expected": "先清理旧组件再下载安装新版本，完成后可用 docker model status 确认",
          "prerequisites": "仅适用于 Docker Engine（非 Docker Desktop）",
          "caveat": "执行前确认当前无关键推理任务运行",
          "warning": "会先停止并卸载当前 Model Runner，正在运行的模型推理任务将中断"
        }
      ],
      "id": "docker-official-b532dfd74774008e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/reinstall-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model requests",
      "en": "Fetch requests+responses from Docker Model Runner",
      "zh": "获取 Docker Model Runner 的请求和响应记录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "requests",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model requests",
          "description": "展示 Model Runner 处理过的推理请求历史，包含请求时间、模型名称、prompt 和响应内容",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要审查模型的请求历史以排查输出异常、审计使用情况或分析 token 消耗",
          "goal": "查看最近的模型推理请求和响应的历史记录",
          "expected": "列出每条请求的时间戳、模型名、输入 prompt 摘要和输出内容摘要"
        }
      ],
      "id": "docker-official-558dcabd79829fc2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/requests/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model restart-runner",
      "en": "Restart Docker Model Runner (Docker Engine only)",
      "zh": "重启 Docker Model Runner 运行时（仅 Docker Engine）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "restart-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model restart-runner",
          "description": "先停止再启动 Model Runner 服务，用于应用配置变更或从异常状态恢复",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "修改了 Model Runner 配置或模型服务出现卡顿/无响应时需要重启以使变更生效",
          "goal": "重启 Model Runner 服务以应用配置变更",
          "expected": "Runner 服务先停止再启动，docker model status 显示为 running",
          "prerequisites": "仅适用于 Docker Engine（非 Docker Desktop）",
          "caveat": "执行前确认当前无关键推理任务，否则会导致请求失败",
          "warning": "重启期间正在运行的模型推理请求将中断"
        }
      ],
      "id": "docker-official-f3a836f4aa7b7efe",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/restart-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model rm",
      "en": "Remove local models downloaded from Docker Hub",
      "zh": "删除本地已下载的指定模型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model rm llama3.2",
          "description": "从本地删除指定模型 llama3.2 及其关联的所有文件",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "当某个模型不再使用或需要释放磁盘空间时，删除该模型的本地副本",
          "goal": "删除本地的 llama3.2 模型以释放磁盘空间",
          "expected": "模型 llama3.2 被移除，docker model list 中不再显示该模型",
          "caveat": "删除前先用 docker model list 确认模型名称，确保不会被其他正在运行的服务引用",
          "warning": "删除后若需再次使用，需重新 docker model pull 下载"
        }
      ],
      "id": "docker-official-e456fa15a7b67fc3",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model run",
      "en": "Run a model and interact with it using a submitted prompt or chat mode",
      "zh": "运行模型并进行对话交互",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "run",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model run llama3.2 \"用中文解释什么是容器化\"",
          "description": "启动 llama3.2 模型并以指定 prompt 进行单次推理，输出模型的回答",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要快速测试某个模型对具体问题的回答质量，或执行一次性推理任务",
          "goal": "使用 llama3.2 模型获取对容器化概念的中文解释",
          "expected": "模型加载后输出对容器化概念的中文解释文本",
          "prerequisites": "需要先通过 docker model pull 拉取目标模型"
        }
      ],
      "id": "docker-official-2df03bdb78576b28",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/run/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model search",
      "en": "Search for models on Docker Hub and HuggingFace",
      "zh": "在 Docker Hub 和 HuggingFace 上搜索模型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "search",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model search qwen",
          "description": "在 Docker Hub 和 HuggingFace 的模型仓库中搜索关键词为 qwen 的可用模型",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要寻找特定用途的开源模型时，搜索模型仓库以了解可选模型及其描述",
          "goal": "搜索名称或描述中包含 qwen 的可用模型",
          "expected": "列出匹配的模型名称、来源仓库、描述和星级评分等信息"
        }
      ],
      "id": "docker-official-4dfb44a861981f72",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/search/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model show",
      "en": "Show information for a model",
      "zh": "显示指定模型的摘要信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "show",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model show llama3.2",
          "description": "展示模型 llama3.2 的基本信息，包括模型架构、参数量、上下文长度和量化格式等",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要快速了解一个模型的核心属性，比 docker model inspect 更简洁易读",
          "goal": "查看 llama3.2 的模型摘要信息",
          "expected": "输出结构化摘要，包含模型名称、参数量、上下文窗口、量化方式、文件大小等",
          "prerequisites": "需要先拉取目标模型"
        }
      ],
      "id": "docker-official-3bfceebe1a4ad11e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/show/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model skills",
      "en": "Install Docker Model Runner skills for AI coding assistants",
      "zh": "为 AI 编程助手安装 Docker Model Runner 技能文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "skills",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model skills",
          "description": "为 Claude Code、Codex 等 AI 编程助手安装专用的技能配置文件，使其能够调用本地模型",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 AI 编程助手中使用本地模型能力时，需要安装适配的技能配置以正确调用 Model Runner",
          "goal": "安装 Model Runner 技能文件到 AI 编程助手",
          "expected": "将技能配置文件写入对应 AI 助手的配置目录，完成后助手可直接调用本地模型"
        }
      ],
      "id": "docker-official-49807bcd750cbb6c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/skills/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model start-runner",
      "en": "Start Docker Model Runner (Docker Engine only)",
      "zh": "启动 Docker Model Runner 运行时（仅 Docker Engine）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "start-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model start-runner",
          "description": "启动 Model Runner 后台服务，使 Docker Engine 环境具备模型加载和推理能力",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker Engine 主机开机后或安装 Runner 后，需要手动启动服务才能使用模型功能",
          "goal": "启动 Model Runner 服务以准备运行模型",
          "expected": "Runner 服务启动，docker model status 输出 running 状态",
          "prerequisites": "仅适用于 Docker Engine（非 Docker Desktop），需先安装 Model Runner"
        }
      ],
      "id": "docker-official-6ebf18b5760af35a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/start-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model status",
      "en": "Check if the Docker Model Runner is running",
      "zh": "检查 Docker Model Runner 的运行状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "status",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model status",
          "description": "查询 Model Runner 服务是否正在运行及其健康状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在运行模型之前需要确认服务是否就绪，或排查为何 docker model run 失败",
          "goal": "确认 Model Runner 服务当前是否正常运行",
          "expected": "输出 Running 或 Stopped，若运行中则附带服务版本和运行时长"
        }
      ],
      "id": "docker-official-dd1c4f3e6ba7496b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/status/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model stop-runner",
      "en": "Stop Docker Model Runner (Docker Engine only)",
      "zh": "停止 Docker Model Runner 运行时（仅 Docker Engine）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model stop-runner",
          "description": "停止正在运行的 Model Runner 后台服务，释放其占用的系统资源",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要维护或升级 Runner 组件，或想释放 Runner 占用的 GPU 显存供其他任务使用时",
          "goal": "停止 Model Runner 服务以释放资源",
          "expected": "Runner 服务停止，docker model status 显示为 stopped",
          "prerequisites": "仅适用于 Docker Engine（非 Docker Desktop）",
          "caveat": "执行前用 docker model ps 确认无正在运行的模型任务",
          "warning": "停止后所有运行中的模型推理任务将立即中断"
        }
      ],
      "id": "docker-official-185b8ac8c9a0a59d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/stop-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model tag",
      "en": "Tag a model",
      "zh": "为模型创建别名标签",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "tag",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model tag llama3.2 my-llama:latest",
          "description": "为已存在的模型 llama3.2 创建新标签 my-llama:latest，不复制文件仅添加引用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要给模型取一个便于团队识别的名称，或标记特定的版本用于 CI/CD 流程",
          "goal": "为 llama3.2 添加一个自定义标签 my-llama:latest",
          "expected": "新标签 my-llama:latest 出现在 docker model list 中，指向与 llama3.2 相同的模型"
        }
      ],
      "id": "docker-official-17e5f98fab1842c4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/tag/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model uninstall-runner",
      "en": "Uninstall Docker Model Runner (Docker Engine only)",
      "zh": "卸载 Docker Model Runner 运行时（仅 Docker Engine）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "uninstall-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model uninstall-runner",
          "description": "从 Docker Engine 环境中彻底移除 Model Runner 运行时组件及其配置文件",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "不再需要本地模型推理功能，或准备完全切换到其他推理方案时清理环境",
          "goal": "彻底卸载 Model Runner 运行时以清理系统",
          "expected": "Runner 组件和配置文件被移除，docker model 相关命令不再可用",
          "prerequisites": "仅适用于 Docker Engine（非 Docker Desktop）",
          "caveat": "卸载前确认服务不再需要，建议先用 docker model purge 清理模型数据",
          "warning": "卸载后所有模型推理功能不可用，需重新安装才能恢复"
        }
      ],
      "id": "docker-official-0211a6cd7ec14877",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/uninstall-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model unload",
      "en": "Unload running models",
      "zh": "卸载正在运行中的模型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "unload",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model unload llama3.2",
          "description": "终止指定模型 llama3.2 的运行实例，将其从内存/显存中卸载",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个模型运行完毕后不再需要占用 GPU 显存，或者需要为其他模型腾出资源",
          "goal": "从内存中卸载 llama3.2 模型以释放 GPU 资源",
          "expected": "模型 llama3.2 从运行列表中消失，docker model ps 不再显示该模型，释放对应显存",
          "caveat": "卸载前用 docker model ps 确认模型名称和运行状态",
          "warning": "正在处理中的推理请求会立即中断"
        }
      ],
      "id": "docker-official-312eab57cc2e1e7c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/unload/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker model stop"
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker model version",
      "en": "Show the Docker Model Runner version",
      "zh": "查看 Docker Model Runner 的版本号",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model version",
          "description": "显示当前安装的 Docker Model Runner 组件的版本信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认 Model Runner 版本以验证功能兼容性或排查版本相关问题",
          "goal": "确认 Model Runner 的版本号和构建信息",
          "expected": "输出版本号（如 v0.5.0）及 Git 提交哈希"
        }
      ],
      "id": "docker-official-ba4d2992292a11a2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model"
    },
    {
      "cat": "flag",
      "cmd": "docker network connect",
      "en": "Connect a container to a network",
      "zh": "将容器连接到指定网络",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "connect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network connect multi-host-network container1",
          "description": "将名为 container1 的已有容器连接到 multi-host-network 网络，使其获得该网络的 IP 地址并可与网络内其他容器通过容器名互相通信。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "已有运行中的容器需要加入自定义网络以与其他容器通信，例如让一个 web 容器接入后端数据库所在的桥接网络。",
          "goal": "将容器 container1 连接到 multi-host-network 网络，使其能与该网络中的其他服务交互。",
          "expected": "命令成功执行后无输出；通过 docker inspect container1 可看到 Networks 字段中新增了 multi-host-network 及其分配的 IP 地址。"
        }
      ],
      "id": "docker-official-ff7cb073a74cf1de",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/connect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker network"
    },
    {
      "cat": "flag",
      "cmd": "docker network create",
      "en": "Create a network",
      "zh": "创建一个新的 Docker 网络",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network create --driver=bridge --subnet=192.168.0.0/16 br0",
          "description": "创建一个名为 br0 的桥接网络，指定驱动为 bridge，子网 CIDR 为 192.168.0.0/16，之后接入此网络的容器将从该子网自动获取 IP 地址。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "部署多容器应用时需要独立的隔离网络，使容器间可以通过容器名互相发现和通信，而不依赖 IP 地址。",
          "goal": "创建一个使用 bridge 驱动、子网为 192.168.0.0/16 的自定义网络 br0。",
          "expected": "返回新网络的完整 ID（如 1a2b3c4d5e6f...），执行 docker network ls 可看到 br0 出现在列表中。"
        }
      ],
      "id": "docker-official-b2de0b48cced0cef",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker network"
    },
    {
      "cat": "flag",
      "cmd": "docker network disconnect",
      "en": "Disconnect a container from a network",
      "zh": "将容器从指定网络中断开",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disconnect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network disconnect multi-host-network container1",
          "description": "将容器 container1 从 multi-host-network 中断开，移除该容器在此网络上的虚拟网卡和分配的 IP 地址，容器不再能通过该网络与其他容器通信。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "容器不再需要访问某个网络的内部资源，或需要将容器迁移到另一个网络时，须先从当前网络中断开。",
          "goal": "将容器 container1 从 multi-host-network 网络中断开。",
          "expected": "命令无输出；docker inspect container1 的 Networks 字段中不再包含 multi-host-network。",
          "caveat": "执行前用 docker inspect 确认容器当前连接了哪些网络及各网络的作用，确保断开不会影响核心业务。",
          "warning": "断开网络连接可能导致容器内正在运行的服务失去与依赖服务（如数据库、缓存）的通信，正在处理的请求可能中断。"
        }
      ],
      "id": "docker-official-f1ff7bb32191bfb2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/disconnect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker network"
    },
    {
      "cat": "flag",
      "cmd": "docker network inspect",
      "en": "Display detailed information on one or more networks",
      "zh": "查看一个或多个网络的详细配置信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network inspect bridge",
          "description": "以 JSON 格式输出默认 bridge 网络的完整信息，包含驱动类型、子网网段、网关地址、IPAM 配置以及当前已连接的所有容器及其 IP/MAC 地址。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查容器间网络连通性问题或需要确认网络的子网、网关、已连接容器等配置细节时，查看网络的完整元数据。",
          "goal": "查看默认 bridge 网络的详细配置及已连接容器列表。",
          "expected": "输出 JSON，包含 Name、Id、Scope、Driver、IPAM（含 Subnet 和 Gateway）、Containers（每个容器的 Name、IPv4Address、MacAddress）等字段。"
        }
      ],
      "id": "docker-official-1725fec5a184ea07",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker network"
    },
    {
      "cat": "flag",
      "cmd": "docker network prune",
      "en": "Remove all unused networks",
      "zh": "删除所有未被任何容器使用的网络",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "prune",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network prune",
          "description": "删除所有未被任何容器连接的自定义网络（内置的 bridge、host、none 网络不受影响），执行时交互式提示确认。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发测试环境中积累了大量不再使用的自定义网络，需要一次性清理以回收网络资源和减少 docker network ls 的干扰项。",
          "goal": "清理所有闲置的自定义网络，释放网络资源。",
          "expected": "交互式提示确认后，列出所有被删除的网络名称或 ID 并显示释放的空间。",
          "caveat": "执行前用 docker network ls 列出所有网络，逐一确认哪些是真正不再需要的，建议先备份重要的网络配置（docker network inspect <网络名> > backup.json）。",
          "warning": "该命令不可逆，被删除的网络配置（子网、IPAM 等）将永久丢失，依赖这些网络的容器将失去对应网络连接。"
        }
      ],
      "id": "docker-official-c82dd3afb6526f52",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/prune/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker network"
    },
    {
      "cat": "flag",
      "cmd": "docker network rm",
      "en": "Remove one or more networks",
      "zh": "删除一个或多个指定的网络",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker network rm my-network",
          "description": "删除名为 my-network 的自定义网络；如果仍有容器连接在此网络上则命令失败并报错，需先断开所有容器连接。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个自定义网络已确认不再需要，需将其删除以保持网络列表整洁并释放相关资源。",
          "goal": "删除名为 my-network 的自定义网络。",
          "expected": "成功时返回被删除的网络名称 my-network，执行 docker network ls 后不再显示该网络。",
          "caveat": "删除前用 docker network inspect my-network 查看 Containers 字段，确认无容器仍在使用；如有则先执行 docker network disconnect。",
          "warning": "删除网络不可逆，网络的自定义子网、网关和 IPAM 配置将永久丢失，依赖该网络的容器间通信将中断。"
        }
      ],
      "id": "docker-official-c3fa25aa676024d3",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/network/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker network remove"
      ],
      "context": "docker network"
    },
    {
      "cat": "flag",
      "cmd": "docker node demote",
      "en": "Demote one or more nodes from manager in the swarm",
      "zh": "将 Swarm 集群中的管理器节点降级为工作节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "demote",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node demote swarm-manager2",
          "description": "将 swarm-manager2 从管理器角色降级为工作节点，该节点不再参与集群的 Raft 共识和管理决策，仅承载工作负载。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Swarm 集群中管理器节点数量过多导致共识延迟增大，或需要将某个管理器节点转为纯工作节点以专注于运行服务任务。",
          "goal": "将节点 swarm-manager2 从管理器降级为工作节点。",
          "expected": "返回被降级的节点名称 swarm-manager2，docker node ls 中该节点的 MANAGER STATUS 列变为空。",
          "caveat": "执行前用 docker node ls 确认集群当前管理器节点数量，确保降级后仍有足够的奇数个管理器维持法定人数。",
          "warning": "降级管理器节点会改变集群 Raft 共识成员数量，若剩余管理器节点数低于推荐值（至少 3 个且为奇数），集群高可用性和容错能力将下降。"
        }
      ],
      "id": "docker-official-ee2fa0b5edbd3c20",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/demote/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker node inspect",
      "en": "Display detailed information on one or more nodes",
      "zh": "查看一个或多个 Swarm 节点的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node inspect swarm-manager",
          "description": "以 JSON 格式输出 swarm-manager 节点的完整信息，包括角色（Role）、可用性（Availability）、运行状态（Status）、IP 地址、Docker 引擎版本及硬件资源规格。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查集群中某个节点的调度异常、确认节点的资源规格和标签配置，或需要获取节点的 IP 地址和引擎版本信息。",
          "goal": "查看 swarm-manager 管理器节点的详细配置和状态信息。",
          "expected": "输出 JSON，关键字段包括 ID、Role（manager/worker）、Availability（active/pause/drain）、Status.State（ready/down）、Description（Hostname、Engine、Resources）及 Spec.Labels。"
        }
      ],
      "id": "docker-official-7af3ae4dcc5fb92f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker node ls",
      "en": "List nodes in the swarm",
      "zh": "列出 Swarm 集群中所有节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node ls",
          "description": "列出当前 Swarm 集群中所有节点的摘要信息，包括节点 ID（截断）、主机名、运行状态、可用性、管理器状态和 Docker 引擎版本。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要快速了解集群整体节点健康状况、角色分布和可用性，确认是否有节点下线或处于维护模式。",
          "goal": "查看集群中所有节点的状态和角色分布概览。",
          "expected": "表格输出，列含 HOSTNAME、STATUS（Ready/Down）、AVAILABILITY（Active/Pause/Drain）、MANAGER STATUS（Leader/Reachable/空）和 ENGINE VERSION，可一目了然地看到集群节点全景。"
        }
      ],
      "id": "docker-official-ef72e008f0cab31a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker node list"
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker node promote",
      "en": "Promote one or more nodes to manager in the swarm",
      "zh": "将 Swarm 集群中的工作节点提升为管理器节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "promote",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node promote worker-node-2",
          "description": "将 worker-node-2 从工作节点提升为管理器节点，使其参与集群的 Raft 共识、管理操作和服务编排决策。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "集群中管理器节点不足（少于 3 个或为偶数）需要增加管理器以提高高可用性，或将某个工作节点升级以分担管理负载。",
          "goal": "将 worker-node-2 提升为管理器节点，参与集群管理。",
          "expected": "返回被提升的节点名称 worker-node-2，docker node ls 中该节点 MANAGER STATUS 列显示 Reachable。",
          "caveat": "执行前用 docker node ls 确认当前管理器节点数量及状态，确保提升后集群的管理器配置仍合理。",
          "warning": "管理器节点过多会增加 Raft 共识延迟和网络开销，建议保持奇数个管理器（推荐 3 或 5 个）。"
        }
      ],
      "id": "docker-official-d16e534e851c3e30",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/promote/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker node ps",
      "en": "List tasks running on one or more nodes, defaults to current node",
      "zh": "列出指定 Swarm 节点上运行的服务任务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ps",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node ps swarm-manager1",
          "description": "列出 swarm-manager1 节点上所有 Swarm 服务任务，显示每个任务的任务 ID、所属服务名、期望状态和当前运行状态。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查某个节点上的服务异常时，需要查看该节点上运行了哪些服务任务及其实际状态，以确认是否有任务停滞或反复重启。",
          "goal": "查看 swarm-manager1 节点上当前所有服务任务的运行状态。",
          "expected": "表格输出，列含 ID、NAME、IMAGE、NODE、DESIRED STATE（Running/Shutdown）、CURRENT STATE（运行时长或错误信息），可据此定位异常任务。"
        }
      ],
      "id": "docker-official-8fbe893b513407f7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/ps/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker node rm",
      "en": "Remove one or more nodes from the swarm",
      "zh": "从 Swarm 集群中移除一个或多个节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node rm swarm-node-02",
          "description": "从 Swarm 集群成员列表中移除 swarm-node-02，该节点必须已处于 Down 状态（在目标节点上已执行 docker swarm leave 离开集群）。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个工作节点已永久下线或主动退出集群，需要从管理节点上将其彻底移除以清理集群成员列表。",
          "goal": "从集群中移除已下线的节点 swarm-node-02。",
          "expected": "返回被移除的节点名称 swarm-node-02，docker node ls 中不再显示该节点。",
          "caveat": "执行前确认目标节点已执行 docker swarm leave 且状态为 Down，同时确认该节点上的服务任务已被重新调度到其他节点。",
          "warning": "移除管理器节点前必须先将其降级（docker node demote），直接移除管理器会破坏集群 Raft 共识。"
        }
      ],
      "id": "docker-official-57ffc66d615fccbc",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker node remove"
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker node update",
      "en": "Update a node",
      "zh": "更新 Swarm 节点的配置属性",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker node update --availability drain worker-node-1",
          "description": "将 worker-node-1 的可用性更新为 drain，管理器会将该节点上所有运行中的服务任务迁移到其他可用节点，并阻止新任务调度到此节点。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要对某个节点进行系统维护或升级时，先将其设为排空模式，确保服务不中断地将任务迁移走。",
          "goal": "将 worker-node-1 的可用性设为 drain，排空其上所有运行中的服务任务。",
          "expected": "返回节点名称 worker-node-1，docker node ls 中该节点 AVAILABILITY 列显示 Drain；其上的任务逐步被迁移到其他 Active 节点。",
          "caveat": "执行前确认集群中有足够的其他 Active 节点及其资源可承接迁移过来的任务，避免任务调度失败。",
          "warning": "设为 drain 会导致节点上所有正在运行的服务任务被强制重新调度，若集群中其他节点资源不足，任务可能无法正常迁移。"
        }
      ],
      "id": "docker-official-8c8640629a672a38",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/node/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker node"
    },
    {
      "cat": "flag",
      "cmd": "docker offload diagnose",
      "en": "Print diagnostic information for Docker Offload",
      "zh": "输出 Docker Offload 功能的诊断信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "diagnose",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker offload diagnose",
          "description": "输出 Docker Offload 的当前连接状态、配置参数及可能的错误诊断信息，用于快速排查离线卸载功能的问题。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker Offload 连接异常或构建卸载行为不符合预期时，收集诊断信息以便排查和定位问题。",
          "goal": "收集当前 Docker Offload 运行状态和诊断数据。",
          "expected": "输出诊断报告，包含连接状态、配置摘要及潜在问题的诊断结果。"
        }
      ],
      "id": "docker-official-e2ad930aa84e6833",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/offload/diagnose/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker offload"
    },
    {
      "cat": "flag",
      "cmd": "docker offload start",
      "en": "Start a Docker Offload session",
      "zh": "启动一个 Docker Offload 会话",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "start",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker offload start",
          "description": "启动 Docker Offload 会话，之后本地的 docker build 等计算密集型任务将被透明地卸载到远程云资源执行以加速构建。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地构建大型镜像耗时过长或资源不足时，启动 Offload 会话将构建任务卸载到云端执行。",
          "goal": "启动 Docker Offload 会话，将后续构建任务卸载到远程资源。",
          "expected": "输出会话启动确认信息，之后执行 docker build 等操作时任务将自动路由到远程卸载资源执行。",
          "prerequisites": "需要预先配置 Docker Offload 并完成云账户的认证和登录。"
        }
      ],
      "id": "docker-official-53f37bfcf3cbeda6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/offload/start/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker offload"
    },
    {
      "cat": "flag",
      "cmd": "docker offload status",
      "en": "Show the status of the Docker Offload connection",
      "zh": "显示 Docker Offload 连接的当前状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "status",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker offload status",
          "description": "显示 Docker Offload 会话的当前连接状态、是否活跃以及卸载资源的使用概况。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认 Offload 会话是否正常运行、连接是否已建立、当前正在使用哪些远程卸载资源。",
          "goal": "查看当前 Docker Offload 会话的运行状态和连接信息。",
          "expected": "输出 Offload 连接状态（活跃/未连接）、当前卸载实例信息和资源使用摘要。"
        }
      ],
      "id": "docker-official-ab81ed23740f3571",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/offload/status/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker offload"
    },
    {
      "cat": "flag",
      "cmd": "docker offload stop",
      "en": "Stop a Docker Offload session",
      "zh": "停止 Docker Offload 会话",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker offload stop",
          "description": "终止当前 Docker Offload 会话，之后的构建任务恢复在本地执行，释放远程卸载资源。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "不再需要远程卸载或需要释放远程资源时，停止 Offload 会话以切回本地执行模式。",
          "goal": "停止当前运行的 Docker Offload 会话。",
          "expected": "输出停止确认信息，后续 docker build 等操作恢复在本地执行。",
          "caveat": "执行前确认当前无正在运行的卸载构建任务，避免工作中断导致构建成果丢失。",
          "warning": "停止会话后正在进行的远程卸载构建任务可能被中断，未完成的构建进度将丢失。"
        }
      ],
      "id": "docker-official-54e58c111a61157c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/offload/stop/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker offload"
    },
    {
      "cat": "flag",
      "cmd": "docker offload version",
      "en": "Prints the version",
      "zh": "显示 Docker Offload 的版本信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker offload version",
          "description": "输出 Docker Offload 客户端和服务端的版本号、Git 提交哈希及构建时间等版本详情。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查 Offload 功能兼容性问题或向技术支持报告问题时，需要提供当前使用的 Offload 组件版本信息。",
          "goal": "查看当前安装的 Docker Offload 版本号。",
          "expected": "输出版本号、Git 提交哈希及构建时间等版本元数据。"
        }
      ],
      "id": "docker-official-515a99f70036751b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/offload/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker offload"
    },
    {
      "cat": "flag",
      "cmd": "docker pass get",
      "en": "Get a secret from a keystore.",
      "zh": "从本地密钥链中获取指定密钥的值",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass get DB_PASSWORD",
          "description": "从本地密钥链中检索名为 DB_PASSWORD 的密钥并输出其存储的明文值。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "应用部署或本地开发时需要获取之前存储的数据库密码或 API 令牌，以便手动设置环境变量或排查凭据问题。",
          "goal": "获取名为 DB_PASSWORD 的数据库密码密钥值。",
          "expected": "输出 DB_PASSWORD 对应的密钥明文值。",
          "prerequisites": "需要先通过 docker pass set DB_PASSWORD 将该密钥存入本地密钥链。"
        }
      ],
      "id": "docker-official-d7f615dc37d9c4ff",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass"
    },
    {
      "cat": "flag",
      "cmd": "docker pass ls",
      "en": "List all secrets from local keychain.",
      "zh": "列出本地密钥链中所有已存储的密钥名称",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass ls",
          "description": "列出本地密钥链中所有已存储的密钥名称列表（仅名称，不显示密钥值），用于快速查看已保存了哪些凭据。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认本地已存储了哪些凭据，或检查某个密钥是否已经存在，以便决定是否需要新增或更新。",
          "goal": "查看本地密钥链中所有已存储的密钥名称。",
          "expected": "输出所有已存储密钥的名称列表，如 DB_PASSWORD、GH_TOKEN 等，每行一个名称。"
        }
      ],
      "id": "docker-official-927e9bf0da42aa57",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins",
      "en": "Manage secrets engine plugins.",
      "zh": "管理密钥引擎插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "plugins",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins --help",
          "description": "显示 docker pass plugins 子命令的帮助信息，列出管理密钥存储引擎插件的可用操作，如查看、设置或切换后端密钥存储引擎。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要管理密钥存储的后端引擎（如切换密钥存储后端、查看可用引擎插件），通过帮助了解 docker pass plugins 下的可用子命令。",
          "goal": "查看密钥引擎插件管理的可用子命令和用法。",
          "expected": "输出帮助文本，列出 docker pass plugins 下可用的子命令列表及其简要说明。"
        }
      ],
      "id": "docker-official-dff6664481ef1a94",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass"
    },
    {
      "cat": "flag",
      "cmd": "docker pass rm",
      "en": "Remove secrets from local keychain.",
      "zh": "从本地密钥链中删除一个或多个密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass rm GH_TOKEN",
          "description": "从本地密钥链中永久删除名为 GH_TOKEN 的密钥条目，删除后该密钥不可恢复。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个凭据（如 GitHub 令牌）已过期轮换或不再需要，需从本地密钥链中移除以避免后续误用。",
          "goal": "删除名为 GH_TOKEN 的 GitHub 令牌密钥。",
          "expected": "返回已删除的密钥名称 GH_TOKEN，docker pass ls 列表中不再显示该密钥。",
          "caveat": "删除前确认该密钥不再被任何运行中的服务或自动化流程引用，建议先备份密钥值到安全位置。",
          "warning": "删除密钥不可逆，依赖该密钥的应用、CI 流水线或 docker pass run 命令将无法获取对应的凭据。"
        }
      ],
      "id": "docker-official-e831fc04cb28368e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass"
    },
    {
      "cat": "flag",
      "cmd": "docker pass run",
      "en": "Run a command with `se://` environment references resolved.",
      "zh": "解析 se:// 环境引用后运行指定命令",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "run",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass run --env-file .env -- ./my-binary",
          "description": "读取 .env 文件中以 se:// 格式引用的密钥占位符（如 DB_PASSWORD=se://DB_PASSWORD），自动从密钥链中解析出真实值并注入为环境变量，然后执行 ./my-binary，从而避免在命令行或配置文件中暴露明文凭据。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "启动应用时需要将密钥存储中的敏感凭据安全地注入为环境变量，不在命令行或 .env 文件中直接写明文密码。",
          "goal": "使用 .env 文件中的 se:// 密钥引用，安全启动 ./my-binary 应用。",
          "expected": "./my-binary 进程启动，其环境变量中包含从密钥链解析后的真实凭据值；应用的后续行为取决于其自身逻辑。",
          "prerequisites": ".env 文件中需包含 se:// 格式的密钥引用（如 DB_PASSWORD=se://DB_PASSWORD），且对应密钥已通过 docker pass set 存储到本地密钥链。"
        }
      ],
      "id": "docker-official-eac1461c7b3d98c9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/run/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass"
    },
    {
      "cat": "flag",
      "cmd": "docker pass set",
      "en": "Set a secret",
      "zh": "在本地密钥链中存储一个密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "set",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass set POSTGRES_PASSWORD=my-secret-password",
          "description": "将键 POSTGRES_PASSWORD 及其值 my-secret-password 安全地存储到本地密钥链，供后续 docker pass get 或 docker pass run 使用。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要安全地存储数据库密码、API 密钥等敏感凭据，避免将明文密码硬编码在脚本或配置文件中。",
          "goal": "将 PostgreSQL 数据库密码安全存储为 POSTGRES_PASSWORD 密钥。",
          "expected": "命令成功执行后无输出；docker pass ls 列表中出现 POSTGRES_PASSWORD。",
          "caveat": "覆盖前用 docker pass ls 检查是否已有同名密钥，如有旧值且仍需使用，先备份旧密钥值。",
          "warning": "若密钥链中已存在同名密钥 POSTGRES_PASSWORD，此操作将覆盖原有值且旧值不可恢复。"
        }
      ],
      "id": "docker-official-aba90a95abc3ebb2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/set/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin create",
      "en": "Create a plugin from a rootfs and configuration. Plugin data directory must contain config.json and rootfs directory.",
      "zh": "从 rootfs 和配置文件创建 Docker 插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin create plugin /home/pluginDir",
          "description": "从 /home/pluginDir 目录（必须包含 config.json 配置文件及 rootfs 子目录）读取插件根文件系统和配置，打包创建为名为 plugin 的 Docker 插件。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发了一个自定义的卷或网络插件，需要将其打包为 Docker 可安装和管理的标准插件格式。",
          "goal": "将 /home/pluginDir 中的插件数据打包创建为名为 plugin 的 Docker 插件。",
          "expected": "成功创建后返回插件名称 plugin，docker plugin ls 列表中可看到该插件（初始为 disabled 状态）。",
          "prerequisites": "/home/pluginDir 目录必须包含 config.json 配置文件及 rootfs 子目录（内含插件的根文件系统）。"
        }
      ],
      "id": "docker-official-7171bc6430744ab4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin disable",
      "en": "Disable a plugin",
      "zh": "禁用指定的 Docker 插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin disable tiborvass/sample-volume-plugin",
          "description": "禁用 tiborvass/sample-volume-plugin 插件，使其停止工作；已使用该插件创建的卷或资源的容器在禁用后可能无法正常访问这些资源。",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个插件出现异常行为需要临时停用排查，或需要升级插件版本而先禁用当前版本。",
          "goal": "禁用 tiborvass/sample-volume-plugin 卷插件。",
          "expected": "返回被禁用的插件名称，docker plugin ls 中该插件的 ENABLED 列变为 false。",
          "caveat": "禁用前用 docker ps 确认哪些容器正在使用该插件提供的卷或网络，必要时先停止相关容器。",
          "warning": "禁用插件会导致所有依赖该插件的容器功能受影响，如禁用卷插件后使用该插件挂载卷的容器可能无法读写数据。"
        }
      ],
      "id": "docker-official-07478ea039f57650",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/disable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin enable",
      "en": "Enable a plugin",
      "zh": "启用指定的 Docker 插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "enable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin enable tiborvass/sample-volume-plugin",
          "description": "启用 tiborvass/sample-volume-plugin 插件使其恢复正常功能，之后容器可以使用该插件提供的卷、网络或其他扩展功能。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "新安装的插件默认处于禁用状态，或之前因维护被禁用的插件现在需要恢复使用。",
          "goal": "启用 tiborvass/sample-volume-plugin 卷插件。",
          "expected": "返回已启用的插件名称，docker plugin ls 中该插件的 ENABLED 列变为 true。"
        }
      ],
      "id": "docker-official-22ea69d3dd905003",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/enable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin inspect",
      "en": "Display detailed information on one or more plugins",
      "zh": "查看一个或多个插件的详细配置信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin inspect tiborvass/sample-volume-plugin:latest",
          "description": "以 JSON 格式输出 tiborvass/sample-volume-plugin 最新版本的完整信息，包括插件启用状态、挂载点配置、环境变量、设备列表和插件配置参数。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查插件功能异常或需要了解插件的挂载点、环境和设备配置时，查看插件的详细元数据。",
          "goal": "查看 tiborvass/sample-volume-plugin 最新版本的完整配置信息。",
          "expected": "输出 JSON，关键字段包括 Id、Name、Enabled（布尔值）、Settings（Mounts、Env、Devices）及 PluginConfig 等，可完整了解插件的运行配置。"
        }
      ],
      "id": "docker-official-eebef74716db7a54",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin install",
      "en": "Install a plugin",
      "zh": "安装一个 Docker 插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "install",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin install vieux/sshfs DEBUG=1",
          "description": "从 Docker Hub 安装 vieux/sshfs 插件（SSHFS 远程文件系统卷插件），并通过 DEBUG=1 参数启用调试日志模式，安装后需手动启用该插件方可使用。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为 Docker 添加远程文件系统挂载能力，使容器可以通过 SSH 将远程服务器目录挂载为本地卷使用。",
          "goal": "安装 vieux/sshfs 卷插件并启用调试模式。",
          "expected": "安装完成后返回插件名称 vieux/sshfs，docker plugin ls 中可看到该插件（初始状态为 disabled）。",
          "prerequisites": "Docker 守护进程需授予插件安装权限（视安全配置而定），部分插件还需要启用实验性功能。"
        }
      ],
      "id": "docker-official-c08cd3c144386218",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/install/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin ls",
      "en": "List plugins",
      "zh": "列出所有已安装的 Docker 插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin ls",
          "description": "列出所有已安装的 Docker 插件，显示每个插件的名称、版本标签和启用状态，是管理插件生态的入口命令。",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要了解当前 Docker 环境安装了哪些功能扩展插件，以及各插件的启用和版本状态。",
          "goal": "查看所有已安装 Docker 插件的列表及状态。",
          "expected": "表格输出，列含 NAME（插件全名）、TAG（版本标签如 latest）、ENABLED（true/false），一目了然地显示插件安装全景。"
        }
      ],
      "id": "docker-official-d9bceb943e934640",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker plugin list"
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin push",
      "en": "Push a plugin to a registry",
      "zh": "将 Docker 插件推送到镜像仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin push user/plugin",
          "description": "将本地已创建的插件 user/plugin 及其所有层推送到已配置的镜像仓库，供其他 Docker 节点拉取安装",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发完自定义卷插件后，需要将其发布到 Docker Hub 供团队其他节点安装使用",
          "goal": "将本地构建的插件推送到远程仓库",
          "expected": "插件层逐层上传完成后，可在 Docker Hub 或其他仓库页面中看到该插件及其标签"
        }
      ],
      "id": "docker-official-16755baea87f3f89",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin rm",
      "en": "Remove one or more plugins",
      "zh": "删除一个或多个 Docker 插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin rm tiborvass/sample-volume-plugin:latest",
          "description": "删除本地安装的 tiborvass/sample-volume-plugin 插件，移除其所有配置和存储资源",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "测试了多个第三方卷插件后，需要清理不再使用的插件以释放磁盘空间并减少管理负担",
          "goal": "删除不再需要的示例卷插件",
          "expected": "插件被移除后，执行 docker plugin ls 列表中不再显示该插件",
          "caveat": "删除前请确认没有正在运行的容器依赖该插件，建议先执行 docker plugin ls 检查插件状态和启用情况",
          "warning": "删除插件会移除其所有配置和资源，已依赖该插件的容器将无法正常使用相关卷功能"
        }
      ],
      "id": "docker-official-bee01760c55539f1",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker plugin remove"
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin set",
      "en": "Change settings for a plugin",
      "zh": "修改 Docker 插件的运行时配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "set",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin set tiborvass/sample-volume-plugin DEBUG=1",
          "description": "设置插件 tiborvass/sample-volume-plugin 的环境变量 DEBUG 为 1，启用调试输出便于排查问题",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "已安装的卷插件默认日志级别不够详细，排查存储问题时需要开启调试日志",
          "goal": "为示例卷插件开启调试模式",
          "expected": "插件配置更新后，重启插件即可在 Docker 日志中看到详细的调试输出信息",
          "caveat": "修改配置后通常需要重启插件（先 docker plugin disable 再 enable）才能使新配置生效"
        }
      ],
      "id": "docker-official-a20f3a34512bb9d7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/set/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker plugin upgrade",
      "en": "Upgrade an existing plugin",
      "zh": "将已安装的插件升级到指定版本",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "upgrade",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker plugin upgrade vieux/sshfs:next vieux/sshfs:next",
          "description": "将本地已安装的 vieux/sshfs 插件升级到远程仓库中 next 标签对应的版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队发布了 SSHFS 插件的新版本修复了挂载稳定性问题，需要在节点上升级",
          "goal": "将现有 SSHFS 插件升级到 next 版本",
          "expected": "插件升级完成后执行 docker plugin ls，显示该插件的版本标签已更新为 next",
          "caveat": "升级前建议先禁用插件，升级后需重新启用；升级过程中依赖该插件的容器会受到影响，建议在维护窗口操作"
        }
      ],
      "id": "docker-official-068e2f99db81bd09",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/plugin/upgrade/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker plugin"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create",
      "en": "Create a sandbox for an agent",
      "zh": "为 AI Agent 创建隔离的沙箱工作环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create --help",
          "description": "查看创建沙箱命令的完整用法、选项和参数说明，沙箱为 AI Agent 提供隔离的文件系统和执行环境",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要了解如何为 Claude Agent 创建隔离沙箱，以便在受限环境中安全处理项目代码而不影响宿主机",
          "goal": "了解 sandbox create 命令的可用选项和参数格式",
          "expected": "终端输出 create 子命令的所有选项列表、必选参数说明和使用示例"
        }
      ],
      "id": "docker-official-0bb6e8615e5dd6d2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox exec",
      "en": "Execute a command inside a sandbox",
      "zh": "在已有沙箱中执行指定命令",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "exec",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox exec my-sandbox ls -la",
          "description": "在沙箱 my-sandbox 内执行 ls -la 命令，显示该沙箱工作目录下包含隐藏文件在内的详细文件列表",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "沙箱中运行的 Agent 生成了构建产物，需要在沙箱内执行命令查看输出文件列表",
          "goal": "在名为 my-sandbox 的沙箱中列出当前目录内容",
          "expected": "终端输出沙箱工作目录下的文件和目录列表，包含权限、所有者、大小和修改时间"
        }
      ],
      "id": "docker-official-07e9509db49b99d9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/exec/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox inspect",
      "en": "Display detailed information on one or more sandboxes",
      "zh": "查看沙箱的详细配置和状态信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox inspect abc123def",
          "description": "以 JSON 格式输出沙箱 abc123def 的完整元数据，包括 ID、创建时间、工作空间路径、资源限制和当前运行状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查 Agent 运行异常时需要查看沙箱的资源限制、挂载点和网络配置等详细信息",
          "goal": "查看沙箱 abc123def 的完整配置详情",
          "expected": "终端输出包含沙箱状态、挂载信息、资源配置等字段的结构化 JSON 数据"
        }
      ],
      "id": "docker-official-ec0a45493384c34e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox ls",
      "en": "List VMs",
      "zh": "列出所有沙箱虚拟机及其运行状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox ls",
          "description": "列出系统中所有已创建的沙箱，显示每个沙箱的 ID、名称、当前状态和创建时间等信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "管理多个 Agent 沙箱时需要快速了解当前有哪些沙箱在运行、哪些已停止，以便决定资源分配",
          "goal": "查看当前系统中所有沙箱的列表和状态",
          "expected": "终端以表格形式展示所有沙箱，包含 ID、状态、工作空间路径和创建时间等列"
        }
      ],
      "id": "docker-official-8784f7b175eb238b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker sandbox list"
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox network",
      "en": "Manage sandbox networking",
      "zh": "管理沙箱的网络配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "network",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox network --help",
          "description": "查看沙箱网络管理命令的完整帮助，包括网络日志查看、连通性诊断等子命令的用法",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "沙箱内的 Agent 无法访问外部 API，需要查看网络相关配置和日志来排查连接问题",
          "goal": "了解 sandbox network 子命令的可用操作和参数",
          "expected": "终端输出 network 子命令列表、每个子命令的用途说明及可用选项"
        }
      ],
      "id": "docker-official-db9c1a29699e3bb7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/network/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox reset",
      "en": "Reset all VM sandboxes and clean up state",
      "zh": "重置所有虚拟机沙箱并清理全部状态数据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "reset",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox reset",
          "description": "清除系统中所有沙箱虚拟机、网络配置和残留状态数据，恢复到初始状态",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "沙箱环境出现不可恢复的异常状态，所有沙箱数据需要从零开始重建",
          "goal": "清除系统中所有沙箱及其残留数据",
          "expected": "所有沙箱被删除，相关网络和存储资源被释放，系统恢复到无沙箱状态",
          "caveat": "执行前请确认所有沙箱中的重要数据已备份或保存为模板（docker sandbox save），建议先执行 docker sandbox ls 确认待清理的沙箱列表",
          "warning": "该命令会删除所有沙箱虚拟机及其全部数据，无法恢复"
        }
      ],
      "id": "docker-official-087e0ffb2d3fe7c2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/reset/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox rm",
      "en": "Remove one or more sandboxes",
      "zh": "删除一个或多个沙箱虚拟机",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox rm abc123def",
          "description": "永久删除沙箱 abc123def，释放其占用的计算资源和磁盘空间",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个 Agent 任务完成后不再需要其沙箱环境，需要清理以释放计算和存储资源",
          "goal": "删除指定沙箱 abc123def",
          "expected": "沙箱被移除后，执行 docker sandbox ls 不再显示该沙箱，相关存储和网络资源被释放",
          "caveat": "删除前请确认沙箱内的重要文件已备份，建议先执行 docker sandbox ls 确认待删除的沙箱 ID",
          "warning": "删除沙箱会永久移除该沙箱内的所有文件、配置和数据，不可恢复"
        }
      ],
      "id": "docker-official-10cc7c077aee2bf9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker sandbox remove"
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox run",
      "en": "Run an agent in a sandbox",
      "zh": "在沙箱中运行 AI Agent 处理指定工作空间",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "run",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox run claude .",
          "description": "在当前目录 (.) 创建隔离沙箱并启动 Claude Agent，Agent 的所有文件操作都限定在沙箱环境内",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在隔离环境中让 Claude Agent 分析当前项目代码，避免 Agent 操作直接影响宿主机文件系统",
          "goal": "在当前目录启动 Claude Agent 的沙箱会话",
          "expected": "沙箱启动后进入 Agent 交互界面，Agent 可以在沙箱内读取和修改映射的工作目录文件"
        }
      ],
      "id": "docker-official-1709ca2a7d65d74f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/run/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox save",
      "en": "Save a snapshot of the sandbox as a template",
      "zh": "将沙箱当前状态保存为可复用的模板快照",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "save",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox save my-sandbox dev-template:v1",
          "description": "将沙箱 my-sandbox 的完整文件系统和配置保存为标签为 dev-template:v1 的快照模板，后续可用该模板快速创建相同环境的沙箱",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在沙箱中配置好了固定的开发环境（依赖、工具链、配置文件），希望保存为模板方便团队其他成员快速创建相同环境",
          "goal": "将沙箱 my-sandbox 保存为名为 dev-template:v1 的模板",
          "expected": "保存成功后，后续创建沙箱时可指定该模板作为基础环境，新沙箱直接拥有相同的工具和配置"
        }
      ],
      "id": "docker-official-94807745bdde6d6d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/save/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox stop",
      "en": "Stop one or more sandboxes without removing them",
      "zh": "停止正在运行的沙箱而不删除其数据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox stop my-sandbox",
          "description": "优雅停止沙箱 my-sandbox 内运行的 Agent 和进程，保留沙箱文件系统状态，后续可重新启动继续工作",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "暂时不需要使用某个 Agent 沙箱，希望暂停它以释放 CPU 和内存资源但保留工作进度",
          "goal": "停止名为 my-sandbox 的沙箱",
          "expected": "沙箱状态变为已停止，docker sandbox ls 中显示其不再占用运行资源，但数据和配置依旧保留",
          "caveat": "停止前请确认沙箱内没有未保存的关键任务进度，建议先通过 docker sandbox inspect 确认当前状态",
          "warning": "停止沙箱会中断正在运行的 Agent 任务，未保存的工作可能丢失"
        }
      ],
      "id": "docker-official-85d4b1cc7a7d6425",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/stop/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox version",
      "en": "Show sandbox version information",
      "zh": "显示 Docker Sandbox 组件的版本信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox version",
          "description": "输出 Docker Sandbox 组件的版本号、Git 提交信息和构建详情",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查沙箱功能兼容性问题时，需要确认当前安装的 Docker Sandbox 组件版本是否与文档匹配",
          "goal": "查看当前 Docker Sandbox 的版本号",
          "expected": "终端显示 Sandbox 的版本号、Git 提交哈希和构建时间等版本信息"
        }
      ],
      "id": "docker-official-a672efb01c34fec3",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox"
    },
    {
      "cat": "flag",
      "cmd": "docker scout attestation",
      "en": "Manage attestations on images",
      "zh": "管理镜像的供应链证明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "attestation",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout attestation --help",
          "description": "查看镜像证明管理的完整帮助，包括创建、查看和验证镜像签名与供应链元数据等子命令的用法",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为团队发布的镜像附加 SBOM 和来源证明以满足安全合规要求，但不确定具体命令格式",
          "goal": "了解 attestation 子命令的可用操作和参数",
          "expected": "终端输出 attestation 子命令列表、每个子命令的用途说明及可用选项"
        }
      ],
      "id": "docker-official-a2104ed91cf2a187",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/attestation/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout attest"
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout cache",
      "en": "Manage Docker Scout cache and temporary files",
      "zh": "管理 Docker Scout 的缓存和临时文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "cache",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout cache --help",
          "description": "查看 Scout 缓存管理的完整帮助，包括查看缓存占用、清理过期分析数据和临时文件等子命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Scout 多次分析后缓存文件占用过多磁盘空间，需要了解如何查看缓存大小并清理无用数据",
          "goal": "了解 cache 子命令的可用操作",
          "expected": "终端输出 cache 子命令列表及每个子命令的用途说明"
        }
      ],
      "id": "docker-official-a2c48eea930ecda7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/cache/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout compare",
      "en": "Compare two images and display differences (experimental)",
      "zh": "比较两个镜像的差异并展示变化",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "compare",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout compare --to namespace/repo:latest",
          "description": "比较当前上下文中的镜像与 namespace/repo:latest 之间的差异，展示软件包、漏洞和文件层的变更详情",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "升级基础镜像前需要对比新旧两个版本之间的包变更、漏洞数量差异和文件层变化，评估升级风险",
          "goal": "将当前镜像与仓库中最新的目标镜像进行对比",
          "expected": "终端输出两个镜像之间新增、删除和变更的软件包列表，以及严重/高危/中危漏洞数量的变化对比"
        }
      ],
      "id": "docker-official-bfae19f23672e5a5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/compare/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout diff"
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout config",
      "en": "Manage Docker Scout configuration",
      "zh": "查看或修改 Docker Scout 的配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "config",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout config",
          "description": "显示当前 Docker Scout 的所有配置项，包括默认组织名称、API 端点地址等设置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "首次使用 Docker Scout 时需要查看当前配置状态，确认组织和仓库设置是否正确，或排查分析结果归属到错误组织的问题",
          "goal": "查看当前的 Scout 全局配置",
          "expected": "终端列出 Scout 当前所有配置项的键和值"
        }
      ],
      "id": "docker-official-1a9b7cc3bef4ad45",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/config/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout cves",
      "en": "Display CVEs identified in a software artifact",
      "zh": "扫描并列出软件制品中已识别的 CVE 漏洞",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "cves",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout cves alpine",
          "description": "对 alpine 镜像进行安全漏洞扫描，列出所有已识别的 CVE 编号、严重等级、影响组件和修复版本信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "发布镜像前需要检查是否存在已知安全漏洞，确保生产环境不受高危漏洞影响",
          "goal": "扫描 alpine 镜像中的已知 CVE 漏洞",
          "expected": "终端输出按严重等级分组的 CVE 列表，包含每个漏洞的 CVE 编号、描述、CVSS 评分和修复版本建议"
        }
      ],
      "id": "docker-official-a0a6acde37d551a0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/cves/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout enroll",
      "en": "Enroll an organization with Docker Scout",
      "zh": "将组织注册到 Docker Scout 平台",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "enroll",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout enroll my-org",
          "description": "将 Docker Hub 组织 my-org 注册到 Docker Scout，启用该组织下所有仓库的镜像安全分析功能",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队刚购买了 Docker Scout 订阅，需要将组织下的镜像仓库接入 Scout 平台以启用漏洞扫描和策略评估",
          "goal": "将组织 my-org 注册到 Docker Scout",
          "expected": "注册成功后，在 Docker Scout 控制台中可以查看该组织所有镜像仓库的安全分析数据和漏洞报告"
        }
      ],
      "id": "docker-official-de7d20cc3041b6a4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/enroll/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout environment",
      "en": "Manage environments (experimental)",
      "zh": "管理 Docker Scout 中的环境定义和镜像关联",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "environment",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout environment",
          "description": "列出 Docker Scout 中所有已定义的环境（如 production、staging）及其当前关联的镜像版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看 Scout 中已定义的环境列表，确认各环境（生产/预发布）关联的镜像版本是否正确",
          "goal": "列出所有已配置的 Scout 环境及其镜像",
          "expected": "终端以表格形式列出环境名称、关联的镜像标签和最后更新的时间戳"
        }
      ],
      "id": "docker-official-24b7711d645f76ef",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/environment/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout env"
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout help",
      "en": "Display information about the available commands",
      "zh": "显示 Docker Scout 所有可用命令的概览",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "help",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout help",
          "description": "列出 Docker Scout 的所有子命令并按功能分组，每个命令附带一行简要的功能说明",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "初次接触 Docker Scout 命令行工具，需要快速了解有哪些子命令以及各命令的功能分类",
          "goal": "查看 Scout 命令体系的完整列表",
          "expected": "终端输出按功能分组的 Scout 命令列表，每个命令带有一句话用途描述"
        }
      ],
      "id": "docker-official-b8757e4b360722af",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/help/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout integration",
      "en": "Commands to list, configure, and delete Docker Scout integrations",
      "zh": "管理 Docker Scout 的第三方平台集成",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "integration",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout integration --help",
          "description": "查看 Scout 集成管理的完整帮助，包括列出、配置和删除与 Slack、Jira 等第三方平台的集成",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将 Scout 的扫描结果自动同步到团队使用的协作平台，但不确定如何配置和列出已有集成",
          "goal": "了解 integration 子命令的可用操作",
          "expected": "终端输出 integration 子命令列表及每个子命令的参数说明"
        }
      ],
      "id": "docker-official-364cb51e66d75e24",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/integration/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout policy",
      "en": "Evaluate local Rego policies against an image and display the results (experimental)",
      "zh": "使用自定义 Rego 策略评估镜像合规性",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "policy",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout policy dockerscoutpolicy/customers-api-service:0.0.1",
          "description": "从 dockerscoutpolicy 仓库加载 Rego 安全策略，对 customers-api-service:0.0.1 镜像逐一执行策略规则并输出合规评估结果",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队合规策略要求所有生产镜像必须通过安全策略检查，不允许包含严重漏洞或未授权的软件包",
          "goal": "使用自定义策略仓库中的规则评估 customers-api-service 镜像",
          "expected": "终端逐条输出各策略规则的评估结果，标注 PASS 或 FAIL 以及不合规的具体原因和修复建议"
        }
      ],
      "id": "docker-official-8894335f5b0018f1",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/policy/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout push",
      "en": "Push an image or image index to Docker Scout",
      "zh": "将镜像或镜像索引推送到 Docker Scout 分析平台",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout push --org my-org registry.example.com/repo:tag",
          "description": "将 registry.example.com/repo:tag 镜像的 SBOM 和分析元数据推送到 Docker Scout，并归属到 my-org 组织下",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地构建了镜像后需要将 SBOM 和元数据推送到 Scout 平台，以便在 Web 仪表板中查看完整的安全分析结果和趋势",
          "goal": "将本地镜像的分析数据推送到 Scout 并关联到指定组织",
          "expected": "推送完成后，在 Docker Scout 仪表板中可看到该镜像的漏洞列表、策略评估结果和历史趋势图"
        }
      ],
      "id": "docker-official-a142e489789b03df",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout quickview",
      "en": "Quick overview of an image",
      "zh": "快速查看镜像的安全和依赖概览",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "quickview",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout quickview golang:1.19.4",
          "description": "对 golang:1.19.4 镜像进行快速分析，展示漏洞总数、基础镜像信息、软件包数量和标签状态等关键安全指标",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "选择基础镜像时需要快速对比多个 Go 版本镜像的安全状况和包数量，以便做出选型决策",
          "goal": "查看 golang:1.19.4 镜像的快速安全概览",
          "expected": "终端输出镜像的摘要信息卡片，包含 CVE 按等级计数、基础镜像类型和最近发布时间"
        }
      ],
      "id": "docker-official-e24c57dcc849b250",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/quickview/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout qv"
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout recommendations",
      "en": "Display available base image updates and remediation recommendations",
      "zh": "显示基础镜像更新和漏洞修复的推荐方案",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "recommendations",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout recommendations golang:1.19.4",
          "description": "分析 golang:1.19.4 镜像，推荐可用的基础镜像更新版本，展示每个推荐版本可修复的漏洞数量和升级后的安全改善预估",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "golang:1.19.4 已发布较长时间，需要查看官方推荐的基础镜像升级方案和可用的安全修复路径",
          "goal": "查看 golang:1.19.4 镜像的推荐更新和修复方案",
          "expected": "终端列出推荐更新的基础镜像标签、每个版本可修复的漏洞总数以及升级后的安全评分改善"
        }
      ],
      "id": "docker-official-7d6b3e761a268eb5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/recommendations/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout repo",
      "en": "Commands to list, enable, and disable Docker Scout on repositories",
      "zh": "管理 Docker Scout 在镜像仓库上的启用和配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "repo",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout repo --help",
          "description": "查看 Scout 仓库管理的完整帮助，包括在指定仓库上启用、禁用和列出 Scout 分析状态的子命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队有多个镜像仓库，需要选择性为部分关键仓库启用 Scout 分析以控制成本，但不确定如何按仓库粒度配置",
          "goal": "了解 repo 子命令的可用操作和参数",
          "expected": "终端输出 repo 子命令列表及每个子命令的用途和参数说明"
        }
      ],
      "id": "docker-official-79552d4f3b3383f8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/repo/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout sbom",
      "en": "Generate or display SBOM of an image",
      "zh": "生成或查看镜像的软件物料清单",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "sbom",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout sbom --format list alpine",
          "description": "对 alpine 镜像生成软件物料清单，并以列表格式展示所有包含的软件包名称和版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全审计要求提交生产镜像的完整软件物料清单，需要以可读的列表形式导出所有包含的软件包",
          "goal": "以列表格式查看 alpine 镜像的 SBOM",
          "expected": "终端以列表形式输出 alpine 镜像中所有软件包的名称、版本和许可证信息"
        }
      ],
      "id": "docker-official-799f218190c5056f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/sbom/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout stream",
      "en": "Manage streams (experimental)",
      "zh": "管理镜像的流式漏洞分析策略（实验性功能）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stream",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout stream my-org/repo nginx:latest",
          "description": "将 nginx:latest 镜像注册到名为 my-org/repo 的分析流中，Docker Scout 将持续监控该镜像的漏洞信息变化",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为团队维护的关键镜像配置持续漏洞监控流，使镜像每次更新后自动触发安全分析而无需手动发起扫描",
          "goal": "为 nginx:latest 镜像启用持续流式安全分析",
          "expected": "命令执行后输出流创建确认信息，该镜像将被纳入 Docker Scout 的持续分析队列"
        }
      ],
      "id": "docker-official-7a334a397576e5f2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/stream/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout version",
      "en": "Show Docker Scout version information",
      "zh": "显示 Docker Scout 客户端版本信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "version",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout version",
          "description": "输出当前 Docker Scout 插件版本号、Git 提交哈希及依赖的底层组件版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查 Docker Scout 分析结果异常或确认当前安装版本是否支持特定的漏洞数据库格式",
          "goal": "确认已安装的 Docker Scout CLI 版本",
          "expected": "终端输出版本号、构建时间和 Git 提交等版本信息"
        }
      ],
      "id": "docker-official-b2e20d30b5e77da2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/version/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout vex",
      "en": "Manage VEX attestations on images",
      "zh": "管理镜像的 VEX（漏洞利用性交换）证明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "vex",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout vex --help",
          "description": "列出 vex 命名空间下所有子命令，用于为镜像添加、查看或删除 VEX 声明，标记特定漏洞在特定上下文中不可利用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全团队发现某漏洞在当前镜像的运行环境中无法被利用，需要通过 VEX 声明抑制该误报避免干扰安全评审",
          "goal": "查看 VEX 子命令列表以了解如何管理镜像的 VEX 证明",
          "expected": "终端显示 add、rm 等子命令列表及其简要说明"
        }
      ],
      "id": "docker-official-61e3de69fd3217e0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/vex/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker scout watch",
      "en": "Watch repositories in a registry and push images and indexes to Docker Scout",
      "zh": "监视仓库中的镜像推送并自动纳入 Docker Scout 安全分析",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "watch",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout watch --org my-org --repository registry-1.example.com/repo-1 --repository registry-2.example.com/repo-2",
          "description": "为 my-org 组织注册两个私有仓库的推送监视，此后推送到这些仓库的镜像将自动触发 Scout 漏洞分析和策略评估",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维团队希望推送到私有镜像仓库的所有镜像自动进行安全扫描，避免每次手动触发分析",
          "goal": "配置自动监视两个私有仓库，使推送的镜像自动进入 Docker Scout 分析流水线",
          "expected": "终端输出仓库监视注册成功信息，后续推送的镜像将自动在 Docker Scout 面板中显示分析结果"
        }
      ],
      "id": "docker-official-6664f3fa9dc60840",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/watch/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout"
    },
    {
      "cat": "flag",
      "cmd": "docker secret create",
      "en": "Create a secret from a file or STDIN as content",
      "zh": "从文件或标准输入创建 Swarm 集群密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker secret create my_secret ./secret.json",
          "description": "读取本地 ./secret.json 文件并加密存储为名为 my_secret 的 Swarm 密钥，服务可通过 --secret 选项引用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "部署数据库服务时需要将连接密码以安全方式注入容器，避免在 Compose 文件或环境变量中明文暴露",
          "goal": "将 JSON 配置文件中的敏感数据创建为 Swarm 密钥供服务引用",
          "expected": "终端输出密钥 ID 哈希值，确认密钥已加密存储到 Swarm 的 Raft 日志中",
          "prerequisites": "当前 Docker 节点必须已加入 Swarm 集群（通过 docker swarm init 或 docker swarm join）"
        }
      ],
      "id": "docker-official-ad864393d2bec8cd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/secret/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker secret"
    },
    {
      "cat": "flag",
      "cmd": "docker secret inspect",
      "en": "Display detailed information on one or more secrets",
      "zh": "查看 Swarm 密钥的元数据详情",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker secret inspect secret.json",
          "description": "以 JSON 格式输出名为 secret.json 的密钥的 ID、创建时间、标签和名称等元数据，不暴露实际密钥内容",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查服务因密钥问题启动失败，需要确认引用的密钥是否存在及其创建时间等元数据",
          "goal": "查看指定密钥的元数据信息",
          "expected": "终端输出包含 ID、Version、CreatedAt、Spec 等字段的 JSON 对象",
          "prerequisites": "当前节点处于 Swarm 模式且该密钥存在"
        }
      ],
      "id": "docker-official-622f6a945de7348e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/secret/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker secret"
    },
    {
      "cat": "flag",
      "cmd": "docker secret ls",
      "en": "List secrets",
      "zh": "列出 Swarm 集群中所有密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker secret ls",
          "description": "以表格列出每个密钥的 ID、名称和创建时间，不显示密钥实际内容",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "定期安全审计需要检查集群中存在哪些密钥，确认是否有已过期或不再使用的密钥需要清理",
          "goal": "查看当前 Swarm 集群中所有密钥的摘要",
          "expected": "终端显示包含 ID、NAME、CREATED 列的密钥列表",
          "prerequisites": "当前节点处于 Swarm 模式"
        }
      ],
      "id": "docker-official-cf33f47ee7a087ff",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/secret/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker secret list"
      ],
      "context": "docker secret"
    },
    {
      "cat": "flag",
      "cmd": "docker secret rm",
      "en": "Remove one or more secrets",
      "zh": "删除一个或多个 Swarm 密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker secret rm secret.json",
          "description": "从 Swarm 集群中永久删除名为 secret.json 的密钥，正在使用该密钥的运行中服务将无法再访问其内容",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某服务已下线且不会再使用该密钥，需要从集群中清理以减少敏感信息的存储面",
          "goal": "删除不再需要的 Swarm 密钥",
          "expected": "终端输出被删除的密钥名称列表",
          "prerequisites": "当前节点处于 Swarm 模式",
          "caveat": "删除前请通过 docker service inspect 确认没有活跃服务引用该密钥",
          "warning": "删除后密钥不可恢复，正在使用该密钥的服务将因无法读取密钥而可能出现异常"
        }
      ],
      "id": "docker-official-6c04e7ab09606125",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/secret/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker secret remove"
      ],
      "context": "docker secret"
    },
    {
      "cat": "flag",
      "cmd": "docker service create",
      "en": "Create a new service",
      "zh": "在 Swarm 集群中创建并启动新服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service create --name redis redis:7.4.1",
          "description": "基于 redis:7.4.1 镜像创建一个名为 redis 的单副本 Swarm 服务，Docker 调度器自动将其分配到合适的节点运行",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在 Swarm 集群中部署 Redis 缓存层，利用集群的自动调度和节点故障恢复能力保证缓存高可用",
          "goal": "在 Swarm 中创建一个 Redis 缓存服务",
          "expected": "终端输出服务 ID 和名称确认，该服务的副本将在某个 Swarm 节点上启动",
          "prerequisites": "当前节点必须是 Swarm 管理节点"
        }
      ],
      "id": "docker-official-7218b47d0aa9317a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service inspect",
      "en": "Display detailed information on one or more services",
      "zh": "查看 Swarm 服务的完整配置和运行状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service inspect redis",
          "description": "以 JSON 格式输出 redis 服务的完整配置：容器规格、副本数、网络设置、挂载卷、环境变量、资源限制、更新策略和当前状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查服务异常需要查看其完整配置，确认端口映射、资源限制和更新策略是否与预期相符",
          "goal": "以 JSON 格式查看 redis 服务的所有配置细节",
          "expected": "终端输出包含 Spec、Endpoint、UpdateStatus 等字段的完整服务定义 JSON",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-94bef13dfbe16179",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service logs",
      "en": "Fetch the logs of a service or task",
      "zh": "获取 Swarm 服务或任务的日志输出",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "logs",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service logs my-service",
          "description": "收集并显示 my-service 所有运行中副本容器的 stdout/stderr 日志，合并为一个流输出",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "服务某个副本反复崩溃重启，需要查看容器日志输出以定位启动失败的根因",
          "goal": "查看 my-service 服务所有副本的合并日志",
          "expected": "终端滚动显示该服务所有容器副本的标准输出和标准错误日志内容",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-05c9014a5d16b242",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/logs/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service ls",
      "en": "List services",
      "zh": "列出 Swarm 集群中所有服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service ls",
          "description": "以表格列出每个服务的 ID、名称、调度模式、期望副本数和实际副本数、使用的镜像及暴露的端口",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "日常巡检需要快速了解集群当前运行了哪些服务、各服务副本数是否达到期望值",
          "goal": "查看 Swarm 集群中所有服务的运行概况",
          "expected": "终端显示包含 ID、NAME、MODE、REPLICAS、IMAGE、PORTS 列的服务列表",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-c587723d6dd78d6b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker service list"
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service ps",
      "en": "List the tasks of one or more services",
      "zh": "列出一个或多个服务所有任务副本的分布和状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ps",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service ps redis",
          "description": "列出 redis 服务每个副本任务的 ID、所在节点名称、期望状态和当前实际运行状态，有异常时显示错误信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "发布滚动更新后发现部分副本卡在 pending 状态，需要精确定位哪个节点上的任务出现问题",
          "goal": "查看 redis 服务各副本在集群中的分布和健康状态",
          "expected": "终端显示包含 ID、NAME、NODE、DESIRED STATE、CURRENT STATE、ERROR 列的表格",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-9a42971a2aa0d0a0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/ps/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service rm",
      "en": "Remove one or more services",
      "zh": "删除一个或多个 Swarm 服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service rm redis",
          "description": "从 Swarm 集群中移除 redis 服务，停止并删除其所有运行中的容器副本",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "缓存服务已迁移到托管 Redis，需要从集群中彻底移除该服务以释放节点计算资源",
          "goal": "从集群中删除 redis 服务",
          "expected": "终端输出被删除的服务名称，所有关联容器副本将被停止并移除",
          "prerequisites": "当前节点为 Swarm 管理节点",
          "caveat": "删除前确认该服务不再承载业务流量，有持久化数据请在删除前先备份",
          "warning": "删除后不可撤销，容器的本地匿名数据卷也会随容器一起被清理"
        }
      ],
      "id": "docker-official-2da9c9abe0b29c7a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker service remove"
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service rollback",
      "en": "Revert changes to a service's configuration",
      "zh": "将服务配置回滚到上一次更新前的版本",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rollback",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service rollback my-service",
          "description": "将 my-service 的任务定义回退到最近一次 docker service update 之前的状态，Docker 按更新策略依次重建所有副本",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "刚发布的服务更新导致接口返回 500 错误，需要立即回退到上一个稳定版本以减少业务影响",
          "goal": "快速将 my-service 回滚至更新前的正常版本",
          "expected": "终端输出回滚确认信息，各副本按配置的更新策略逐步恢复到旧版本",
          "prerequisites": "当前节点为 Swarm 管理节点，且该服务之前至少执行过一次 docker service update",
          "caveat": "回滚前建议先通过 docker service inspect 检查当前配置，确认回滚目标版本的信息",
          "warning": "回滚操作将逐个重建所有服务副本，过程中服务可能出现短暂降级"
        }
      ],
      "id": "docker-official-a4c67a53c2593bcd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/rollback/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service scale",
      "en": "Scale one or multiple replicated services",
      "zh": "调整一个或多个 Swarm 服务的副本数量",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "scale",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service scale frontend=50",
          "description": "将 frontend 服务的期望副本数设为 50，Swarm 调度器自动在有足够资源的节点上创建新副本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "大促活动期间前端访问量激增，需要水平扩容前端服务副本数以分摊请求负载",
          "goal": "将 frontend 服务的副本数扩容至 50 个",
          "expected": "终端输出缩放确认信息，随后通过 docker service ls 可看到 frontend 副本数逐步达到 50/50",
          "prerequisites": "当前节点为 Swarm 管理节点",
          "caveat": "大规模扩容前请确认集群各节点有足够的 CPU 和内存资源来容纳新增的副本"
        }
      ],
      "id": "docker-official-90556e0bd8642772",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/scale/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker service update",
      "en": "Update a service",
      "zh": "更新已有 Swarm 服务的配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker service update --limit-cpu 2 redis",
          "description": "将 redis 服务的 CPU 资源限制更新为最多使用 2 核，Docker 按该服务的更新策略依次重启副本使新限制生效",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Redis 服务占用过高 CPU 影响同节点其他服务响应，需要通过资源限制确保各服务的资源隔离",
          "goal": "为 redis 服务设置 CPU 使用上限为 2 核",
          "expected": "终端输出服务更新确认信息，各副本按配置的更新策略逐步重启并应用新的 CPU 限制",
          "prerequisites": "当前节点为 Swarm 管理节点",
          "caveat": "更新会触发副本重建，建议先在测试环境确认参数正确性再应用到生产环境"
        }
      ],
      "id": "docker-official-990eb89be3fa515b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/service/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker service"
    },
    {
      "cat": "flag",
      "cmd": "docker stack config",
      "en": "Outputs the final config file, after doing merges and interpolations",
      "zh": "合并多个 Compose 文件并输出最终的栈配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "config",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack config --compose-file docker-compose.yml --compose-file docker-compose.prod.yml",
          "description": "按顺序合并基础 Compose 文件和生产环境覆盖文件，处理变量插值与继承后输出合并后的完整 YAML 配置",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用多个 Compose 文件管理不同环境配置，在发布前需要校验合并后的实际配置是否与预期一致",
          "goal": "预览基础配置与生产环境覆盖合并后的最终栈配置",
          "expected": "终端输出合并后的完整 YAML 配置，可逐项检查所有服务、网络和卷的定义"
        }
      ],
      "id": "docker-official-961bb45baad7ecef",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/config/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker stack"
    },
    {
      "cat": "flag",
      "cmd": "docker stack deploy",
      "en": "Deploy a new stack or update an existing stack",
      "zh": "部署新栈或更新已有栈，将 Compose 文件定义的一组服务部署到 Swarm 集群",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "deploy",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack deploy --compose-file docker-compose.yml vossibility",
          "description": "读取 docker-compose.yml 文件，在 Swarm 中创建或更新名为 vossibility 的栈，包含其中定义的所有服务、覆盖网络和密钥",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将一个由多个微服务组成的应用一次性部署到 Swarm 集群，统一管理服务间网络和密钥",
          "goal": "使用 Compose 文件将 vossibility 栈部署到 Swarm",
          "expected": "终端逐行显示各服务和网络的创建或更新状态，部署完成后所有服务在集群中运行",
          "prerequisites": "当前节点必须是 Swarm 管理节点"
        }
      ],
      "id": "docker-official-04226069c9c21aa9",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/deploy/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker stack up"
      ],
      "context": "docker stack"
    },
    {
      "cat": "flag",
      "cmd": "docker stack ls",
      "en": "List stacks",
      "zh": "列出 Swarm 集群中所有已部署的栈",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack ls",
          "description": "以表格列出每个栈的名称和栈内服务数量",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维巡检需要快速了解集群上部署了哪些项目栈及每个栈包含多少服务",
          "goal": "查看当前 Swarm 集群中所有栈的摘要",
          "expected": "终端显示包含 NAME、SERVICES 列的栈列表",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-164ce8a5306e9a81",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker stack list"
      ],
      "context": "docker stack"
    },
    {
      "cat": "flag",
      "cmd": "docker stack ps",
      "en": "List the tasks in the stack",
      "zh": "列出指定栈中所有任务副本的分布和运行状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ps",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack ps voting",
          "description": "列出 voting 栈下所有服务的每个任务副本，显示其 ID、所在节点、期望状态和当前实际状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "投票应用栈中某服务响应异常，需要定位具体哪个节点上的任务副本出现问题",
          "goal": "查看 voting 栈中所有任务副本的详细运行状态",
          "expected": "终端显示包含 ID、NAME、NODE、DESIRED STATE、CURRENT STATE 列的任务列表",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-0d25f85c134273c8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/ps/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker stack"
    },
    {
      "cat": "flag",
      "cmd": "docker stack rm",
      "en": "Remove one or more stacks",
      "zh": "移除一个或多个栈及其关联的所有服务、网络和密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack rm myapp",
          "description": "删除 myapp 栈及其下所有 Swarm 服务、栈级覆盖网络和栈级密钥，外部网络和手动创建的密钥不受影响",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "项目正式下线，需要清理该栈创建的所有服务以释放集群的节点资源和端口占用",
          "goal": "彻底移除 myapp 栈及其所有关联资源",
          "expected": "终端逐条显示各服务的移除确认，栈内所有服务和网络被删除",
          "prerequisites": "当前节点为 Swarm 管理节点",
          "caveat": "删除前请确认栈中无需要保留的业务数据，建议先导出 Compose 配置作为备份",
          "warning": "移除操作不可逆，栈内所有服务容器和关联的匿名数据卷将被删除"
        }
      ],
      "id": "docker-official-c1d5dbff652719fd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker stack remove",
        "docker stack down"
      ],
      "context": "docker stack"
    },
    {
      "cat": "flag",
      "cmd": "docker stack services",
      "en": "List the services in the stack",
      "zh": "列出指定栈中所有服务的状态摘要",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "services",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker stack services myapp",
          "description": "列出 myapp 栈下每个服务的 ID、名称、调度模式、副本数和使用的镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "部署 myapp 栈后需要逐一确认所有服务的副本数是否都达到了 Compose 文件中定义的期望值",
          "goal": "检查 myapp 栈所有服务的部署状态",
          "expected": "终端显示包含 ID、NAME、MODE、REPLICAS、IMAGE 列的表格",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-979d628f32abc5d0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/stack/services/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker stack"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm ca",
      "en": "Display and rotate the root CA",
      "zh": "查看或轮换 Swarm 集群的根 CA 证书",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ca",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm ca",
          "description": "以 PEM 格式输出当前 Swarm 集群的根证书颁发机构证书，该证书用于签发集群内所有节点间的 mTLS 通信证书",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全团队要求审计集群的 CA 证书有效期，或需要导出当前根证书用于配置外部监控系统的 TLS 信任",
          "goal": "查看当前 Swarm 集群的根 CA 证书",
          "expected": "终端输出包含 -----BEGIN CERTIFICATE----- 和 -----END CERTIFICATE----- 的 PEM 格式证书",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-08ad1537edb8ebad",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/ca/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm init",
      "en": "Initialize a swarm",
      "zh": "初始化当前节点为 Swarm 集群的管理节点",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "init",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm init --advertise-addr 192.168.99.121",
          "description": "将当前 Docker 引擎切换为 Swarm 模式并设为第一个管理节点，通告地址设为 192.168.99.121 供其他节点加入时连接",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在多台物理服务器上搭建 Docker Swarm 集群以编排分布式服务，先在一台服务器上初始化集群",
          "goal": "在 IP 为 192.168.99.121 的节点上创建新的 Swarm 集群",
          "expected": "终端输出 Swarm 初始化成功信息、节点 ID 以及带有 token 的 docker swarm join 命令，供其他节点加入使用"
        }
      ],
      "id": "docker-official-d38fb36a87029bbe",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/init/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm join",
      "en": "Join a swarm as a node and/or manager",
      "zh": "将当前节点作为工作节点或管理节点加入已有 Swarm 集群",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "join",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm join --token SWMTKN-1-aabbccdd00112233aabbccdd00112233aabbccdd00112233aa-aabbccdd00112233... 192.168.99.121:2377",
          "description": "使用管理节点提供的 token 通过端口 2377 加入 IP 为 192.168.99.121 的 Swarm 集群",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "集群需要扩容来运行更多的服务副本，要将一台新服务器作为工作节点加入现有 Swarm",
          "goal": "将当前节点加入到已有的 Swarm 集群中",
          "expected": "终端输出 \"This node joined a swarm as a worker.\"（或 manager）确认加入成功",
          "prerequisites": "管理节点防火墙须开放 2377 端口，token 须从管理节点通过 docker swarm join-token 获取"
        }
      ],
      "id": "docker-official-c3c00cf335ea6095",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/join/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm join-token",
      "en": "Manage join tokens",
      "zh": "查看或轮换 Swarm 集群的节点加入令牌",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "join-token",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm join-token worker",
          "description": "显示当前集群 worker 角色的完整加入命令（含加密 token），其他节点复制执行即可作为工作节点加入",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要添加新的工作节点到集群，先从管理节点获取 worker 加入令牌和完整的连接命令",
          "goal": "获取 worker 角色的加入令牌和连接命令",
          "expected": "终端输出完整的 docker swarm join 命令，包含 token 和管理节点地址，可直接在目标节点执行",
          "prerequisites": "当前节点为 Swarm 管理节点"
        }
      ],
      "id": "docker-official-e50b1e426c682484",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/join-token/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm leave",
      "en": "Leave the swarm",
      "zh": "使当前节点退出 Swarm 集群",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "leave",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm leave",
          "description": "从 Swarm 集群中移除当前节点，使其恢复为独立 Docker 主机模式",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某台工作节点即将退役下线，需要先从集群中安全退出以避免调度器继续向其分配任务",
          "goal": "将当前节点从 Swarm 集群中移除",
          "expected": "终端输出 \"Node left the swarm.\" 确认退出成功",
          "caveat": "管理节点退出前请确认集群仍有足够奇数个管理节点维持 Raft 共识，工作节点退出前建议先执行 docker node update --availability drain 排空任务",
          "warning": "退出后节点上的 Swarm 管理容器将被移除，但运行中的服务容器不会被自动清理"
        }
      ],
      "id": "docker-official-2ba053988cd2ff7f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/leave/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm unlock",
      "en": "Unlock swarm",
      "zh": "解锁因重启而自动锁定的 Swarm 集群",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "unlock",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm unlock",
          "description": "交互式提示输入解锁密钥，验证通过后恢复管理节点的集群操作能力",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "启用了自动锁定的管理节点重启后，集群管理功能被锁定，任何 docker service 或 docker node 命令均失败，需要解锁恢复",
          "goal": "输入解锁密钥以恢复集群的正常管理功能",
          "expected": "提示输入解锁密钥，验证通过后显示 \"The swarm has been unlocked.\" 集群管理功能恢复",
          "prerequisites": "须在重启后的 Swarm 管理节点上执行，需持有正确的解锁密钥"
        }
      ],
      "id": "docker-official-bc2d8f040f532753",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/unlock/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm unlock-key",
      "en": "Manage the unlock key",
      "zh": "查看或管理 Swarm 集群的自动锁定密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "unlock-key",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm unlock-key",
          "description": "显示当前集群的自动锁定密钥明文，管理节点重启后需使用此密钥解除集群锁定",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "初次启用自动锁定功能后，需要获取解锁密钥并保存到安全的地方供管理节点重启后使用",
          "goal": "查看当前集群的自动锁定密钥",
          "expected": "终端显示解锁密钥明文",
          "prerequisites": "当前节点为 Swarm 管理节点",
          "warning": "解锁密钥是敏感凭据，请勿在终端历史中保留或分享给未授权人员"
        }
      ],
      "id": "docker-official-587e8a0ee248bb61",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/unlock-key/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker swarm update",
      "en": "Update the swarm",
      "zh": "更新 Swarm 集群配置参数",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker swarm update --cert-expiry 720h",
          "description": "将 Swarm 节点证书的自动续期周期调整为 720 小时（30 天），`--cert-expiry` 指定证书过期时长",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Swarm 集群中节点间通信依赖 TLS 证书，默认证书过期时间较短，生产环境中需要延长证书有效期以减少续期频率和潜在的通信中断风险",
          "goal": "将集群节点证书过期时间延长至 30 天",
          "expected": "命令成功执行后无显式输出，Swarm 配置已更新；可通过 `docker info` 查看新的证书过期策略确认生效",
          "caveat": "该命令会修改集群全局配置，执行前请确认当前集群状态，建议先在测试环境验证",
          "warning": "修改 Swarm 配置可能影响集群中所有节点的通信安全策略"
        }
      ],
      "id": "docker-official-f94d19338797ab24",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/swarm/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker swarm"
    },
    {
      "cat": "flag",
      "cmd": "docker system events",
      "en": "Get real time events from the server",
      "zh": "实时输出 Docker 守护进程的事件流",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "events",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker events",
          "description": "不加任何过滤条件，实时输出 Docker 守护进程产生的所有事件，包括容器创建/启动/停止、镜像拉取/删除、网络创建/销毁、卷挂载等",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维人员排查容器异常退出原因时，需要实时监控 Docker 后台发生的所有事件，以定位是谁在何时执行了什么操作",
          "goal": "实时监控 Docker 守护进程的所有事件以辅助故障排查",
          "expected": "终端持续输出带时间戳的 JSON 事件流，每行一个事件，包含事件类型（container/image/network/volume 等）、动作（start/stop/create/destroy 等）及关联对象 ID"
        }
      ],
      "id": "docker-official-98800ef5f6034412",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/system/events/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker events"
      ],
      "context": "docker system"
    },
    {
      "cat": "flag",
      "cmd": "docker system info",
      "en": "Display system-wide information",
      "zh": "显示 Docker 系统全局信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "info",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker info",
          "description": "不带任何过滤参数，一次性输出 Docker 守护进程的完整系统信息，包括容器/镜像/卷数量、存储驱动、内核版本、CPU/内存总量、Swarm 状态、Registry 配置等",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "接手一台新的 Docker 主机或排查环境问题时，需要快速了解 Docker 引擎的版本、存储驱动类型、资源总量以及是否处于 Swarm 集群模式",
          "goal": "查看当前 Docker 引擎的完整配置和运行状态",
          "expected": "终端输出格式化的系统信息摘要，包含 Server Version、Storage Driver、Cgroup Driver、总内存/CPU 核数、运行中/已停止/已暂停容器计数、Swarm 状态（active/inactive）等"
        }
      ],
      "id": "docker-official-7a8daf73444d794f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/system/info/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker info"
      ],
      "context": "docker system"
    },
    {
      "cat": "flag",
      "cmd": "docker trust inspect",
      "en": "Return low-level information about keys and signatures",
      "zh": "查看镜像的签名和信任元数据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust inspect alpine:latest",
          "description": "检查 `alpine:latest` 镜像的信任签名信息，列出所有已签名的标签、签名者及其签名密钥指纹",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在生产环境部署前，需要确认拉取的镜像是否经过可信签名，确保镜像未被篡改且来源可信",
          "goal": "验证 alpine:latest 镜像的签名状态和签名者信息",
          "expected": "终端以表格形式输出签名者列表和密钥信息，包含签名者名称、密钥 ID，若镜像无签名则显示为空或无信任数据提示"
        }
      ],
      "id": "docker-official-a2d84e557b054969",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust"
    },
    {
      "cat": "flag",
      "cmd": "docker trust key",
      "en": "Manage keys for signing Docker images",
      "zh": "管理用于镜像签名的密钥（管理命名空间）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "key",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust key --help",
          "description": "显示 trust key 子命令列表，包括 `generate`（生成签名密钥对）和 `load`（从文件加载私钥）两个子命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队初次启用 Docker Content Trust 签名流程时，需要先生成签名密钥对或将已有的私钥加载到本地信任存储中，才能对镜像进行签名",
          "goal": "查看签名密钥管理的可用子命令",
          "expected": "终端输出 trust key 的子命令列表及相关选项说明"
        }
      ],
      "id": "docker-official-70da228e49e6afc6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/key/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust"
    },
    {
      "cat": "flag",
      "cmd": "docker trust revoke",
      "en": "Remove trust for an image",
      "zh": "撤销镜像的信任签名",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "revoke",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust revoke example/trust-demo:red",
          "description": "撤销 `example/trust-demo:red` 镜像标签的签名信任，从信任元数据中移除该标签的签名记录，使该标签不再被标记为可信",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "发现某个已签名的镜像版本存在安全漏洞或不应再被部署时，需要撤销其签名，阻止下游继续拉取和使用该受信版本",
          "goal": "撤销 example/trust-demo 镜像 red 标签的签名信任",
          "expected": "终端提示确认操作，确认后从 Notary 服务器中移除该标签的签名数据，后续 `docker trust inspect` 将不再显示该标签的签名记录",
          "caveat": "撤销操作不可逆，执行前请确认该标签确实不应再被信任；撤销后已拉取该镜像的主机不受影响，仅影响后续的信任验证",
          "warning": "撤销签名将使该镜像标签失去信任背书，可能导致依赖该签名的部署流水线失败"
        }
      ],
      "id": "docker-official-e93f1d12f17da782",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/revoke/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust"
    },
    {
      "cat": "flag",
      "cmd": "docker trust sign",
      "en": "Sign an image",
      "zh": "对镜像进行数字签名",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "sign",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust sign example/trust-demo:v2",
          "description": "使用本地签名密钥对 `example/trust-demo:v2` 镜像进行数字签名，将签名元数据发布到 Notary 签名服务器，使其成为受信镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "镜像构建并通过测试后，发布前需要对其签名，确保下游用户在启用 Docker Content Trust 的环境中拉取该镜像时能通过完整性验证",
          "goal": "为 example/trust-demo 镜像的 v2 标签添加数字签名",
          "expected": "终端提示输入签名密钥的密码（如果有），签名成功后镜像在信任服务器上注册，可通过 `docker trust inspect` 确认新签名"
        }
      ],
      "id": "docker-official-d51bc6f6a4b9a2ac",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/sign/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust"
    },
    {
      "cat": "flag",
      "cmd": "docker trust signer",
      "en": "Manage entities who can sign Docker images",
      "zh": "管理有权对镜像签名的实体（管理命名空间）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "signer",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust signer --help",
          "description": "显示 trust signer 子命令列表，包括 `add`（添加签名者）和 `remove`（移除签名者）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队协作中需要为仓库添加新的签名者（如新加入的发布工程师），或移除离职人员的签名权限，以维护镜像签名者列表的安全性",
          "goal": "查看管理镜像签名者的可用子命令",
          "expected": "终端输出 trust signer 的子命令列表及相关选项说明"
        }
      ],
      "id": "docker-official-3e2ce58f35cf0384",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/signer/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust"
    },
    {
      "cat": "flag",
      "cmd": "docker volume create",
      "en": "Create a volume",
      "zh": "创建持久化数据卷",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker volume create hello",
          "description": "创建一个名为 `hello` 的 Docker 卷，使用默认的 local 驱动，数据存储在 Docker 管理目录下",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "应用需要持久化存储数据（如数据库文件、用户上传内容），且希望数据独立于容器生命周期——容器删除后数据依然保留，其他容器也可挂载同一卷",
          "goal": "创建一个名为 hello 的持久化卷供容器挂载使用",
          "expected": "终端输出卷名称 `hello`，`docker volume ls` 可列出该卷，`docker volume inspect hello` 可查看其在宿主机上的挂载点路径"
        }
      ],
      "id": "docker-official-a2064f85a14a1230",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker volume"
    },
    {
      "cat": "flag",
      "cmd": "docker volume inspect",
      "en": "Display detailed information on one or more volumes",
      "zh": "查看卷的详细配置信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker volume inspect myvolume",
          "description": "以 JSON 格式输出 `myvolume` 卷的完整元数据，包括驱动类型、挂载点路径、创建时间、标签和作用域",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要知道某个卷在宿主机上的实际存储路径，或者排查卷挂载失败问题时确认卷的驱动和配置是否正确",
          "goal": "查看 myvolume 卷的详细配置和宿主机挂载路径",
          "expected": "终端输出 JSON 数组，包含 Name、Driver、Mountpoint（宿主机路径）、Scope（local/global）、Labels 等字段"
        }
      ],
      "id": "docker-official-6074f258b495c797",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker volume"
    },
    {
      "cat": "flag",
      "cmd": "docker volume rm",
      "en": "Remove one or more volumes",
      "zh": "删除一个或多个数据卷",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker volume rm hello",
          "description": "删除名为 `hello` 的卷及其中的所有数据。若该卷正被任何容器挂载则删除失败",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "清理不再使用的测试卷或已迁移数据的老旧卷，释放磁盘空间",
          "goal": "删除 hello 卷及其存储数据释放磁盘空间",
          "expected": "终端输出被删除的卷名称 `hello`，随后 `docker volume ls` 中不再列出该卷",
          "caveat": "卷中的数据将被永久删除且不可恢复，执行前请确认卷中无重要数据或已做好备份；若卷正被容器使用需先停止并删除容器",
          "warning": "此操作将永久删除卷及其所有数据，不可撤销"
        }
      ],
      "id": "docker-official-09e3dca55249a196",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker volume remove"
      ],
      "context": "docker volume"
    },
    {
      "cat": "flag",
      "cmd": "docker volume update",
      "en": "Update a volume (cluster volumes only)",
      "zh": "更新卷的配置（仅集群卷）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "update",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker volume update --availability active myvolume",
          "description": "将 `myvolume` 卷的可用性更新为 `active`，使其可在 Swarm 集群中正常调度使用。仅支持集群卷（cluster volume）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Swarm 集群中某个卷因节点故障被标记为 `pause` 或 `drain` 状态，修复后需要将其恢复为 `active` 以恢复服务的数据读写",
          "goal": "将 myvolume 集群卷恢复到 active 状态",
          "expected": "命令成功执行后卷可用性更新，`docker volume inspect myvolume` 的 Availability 字段变为 active",
          "prerequisites": "仅适用于 Swarm 集群卷（CSI 卷），本地卷（local driver）不支持此命令"
        }
      ],
      "id": "docker-official-f9209c686090f792",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/volume/update/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker volume"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx dap build",
      "en": "Start a build",
      "zh": "启动 DAP（Docker Assembly Pipeline）构建",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx dap build --tag myapp:dap .",
          "description": "在当前目录下使用 DAP（Docker Assembly Pipeline）构建镜像并打上 `myapp:dap` 标签，DAP 是一种声明式构建管道",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "当标准 Dockerfile 构建无法满足复杂多阶段、条件化构建需求时，使用 DAP 声明式管道来编排更灵活的镜像组装流程",
          "goal": "使用 DAP 管道构建并标记 myapp 镜像",
          "expected": "终端输出 DAP 管道的构建进度日志，构建成功后本地镜像列表中出现 `myapp:dap` 镜像"
        }
      ],
      "id": "docker-official-20f7a04ffde69e5b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/dap/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx dap"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx debug build",
      "en": "Start a build",
      "zh": "以调试模式构建镜像，输出详细构建日志",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx debug build --tag myapp:debug .",
          "description": "在当前目录以调试模式构建镜像，打上 `myapp:debug` 标签。调试模式会输出更详细的构建过程日志和中间状态信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "构建镜像失败但标准输出信息不足以定位问题（如 RUN 指令执行结果不明确、构建缓存命中情况不明），需要更详细的构建过程日志来排查",
          "goal": "以调试模式构建 myapp 镜像以诊断构建问题",
          "expected": "终端输出比普通构建更详细的步骤日志，包括各阶段中间层信息、缓存命中/未命中详情及命令的完整输出"
        }
      ],
      "id": "docker-official-ff13f44e4e0743fb",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/debug/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx debug"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history export",
      "en": "Export build records into Docker Desktop bundle",
      "zh": "将构建记录导出为 Docker Desktop 可导入的打包文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "export",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history export --output build-records.tar",
          "description": "将本地构建历史记录导出为 `build-records.tar` 打包文件，可迁移到另一台安装了 Docker Desktop 的机器上导入查看",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将当前机器上的构建历史记录迁移到新开发机，或将构建记录归档以便在 Docker Desktop 中回溯分析历史构建性能",
          "goal": "导出构建历史记录到打包文件以便迁移或归档",
          "expected": "终端输出导出进度或导出完成信息，当前目录下生成 `build-records.tar` 文件",
          "prerequisites": "需要 Docker Desktop 环境才能导入查看导出的构建记录"
        }
      ],
      "id": "docker-official-616aa33eb1ffd5cd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/export/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history import",
      "en": "Import build records into Docker Desktop",
      "zh": "从打包文件导入构建记录到 Docker Desktop",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "import",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history import build-records.tar",
          "description": "从 `build-records.tar` 文件导入之前 `export` 导出的构建历史记录，使其在 Docker Desktop 的构建历史界面中可查看",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "从同事或备份中获取了构建历史归档文件，需要导入到本地 Docker Desktop 中以统一查看和分析所有构建记录",
          "goal": "将构建历史归档导入 Docker Desktop 以供查看",
          "expected": "终端输出导入进度或导入完成信息，导入的构建记录出现在 `docker buildx history ls` 列表中",
          "prerequisites": "需要 Docker Desktop 环境，导入文件必须是 `buildx history export` 生成的合法打包文件"
        }
      ],
      "id": "docker-official-21fdb9c9f0bb344a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/import/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history inspect",
      "en": "Inspect a build record",
      "zh": "查看构建记录的详细信息（管理命名空间）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history inspect --help",
          "description": "显示 history inspect 子命令的用法和可用选项，用于查看指定构建记录的完整元数据和各步骤详情",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "分析某次构建的性能瓶颈或失败原因时，需要查看构建记录中每个步骤的耗时、缓存状态和输入输出摘要",
          "goal": "查看构建记录查询命令的可用选项",
          "expected": "终端输出 history inspect 的用法说明，包括按构建引用筛选和输出格式等选项"
        }
      ],
      "id": "docker-official-8ad491ef2da35edf",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history logs",
      "en": "Print the logs of a build record",
      "zh": "输出指定构建记录的构建日志",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "logs",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history logs",
          "description": "不加参数时输出最近一次构建记录的完整构建日志，包括每条 Dockerfile 指令的执行输出和错误信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "构建失败后需要回溯查看完整构建日志，了解具体是哪条指令失败以及详细错误输出，以定位和修复问题",
          "goal": "查看最近一次构建的完整日志",
          "expected": "终端输出该次构建的逐行日志，格式类似 `docker build` 的标准输出，包含每步指令的执行结果和耗时"
        }
      ],
      "id": "docker-official-ec07bec3bf8b735e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/logs/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history ls",
      "en": "List build records",
      "zh": "列出所有构建历史记录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history ls",
          "description": "以表格形式列出所有本地构建记录，包含构建引用标识、构建时间、构建耗时、使用的 builder 实例及构建结果状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要回顾最近执行了哪些构建以及各构建的状态（成功/失败/取消），以便定位某次问题构建或评估构建耗时趋势",
          "goal": "列出构建历史记录以查看近期构建状态",
          "expected": "终端输出表格，包含 REF（构建引用）、CREATED（创建时间）、DURATION（耗时）、STATUS（状态）等列"
        }
      ],
      "id": "docker-official-d9491f74eb7909ee",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history open",
      "en": "Open a build record in Docker Desktop",
      "zh": "在 Docker Desktop 中打开构建记录详情",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "open",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history open",
          "description": "不加参数时在 Docker Desktop 中打开最近一次构建记录的图形化详情页面，可直观查看构建步骤、耗时和中间层信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要可视化地分析构建过程的各阶段耗时分布和依赖关系，更直观地发现构建瓶颈",
          "goal": "在 Docker Desktop 界面中打开最近构建的可视化详情",
          "expected": "Docker Desktop 自动启动或切换至构建历史详情视图，展示该次构建的可视化步骤图表",
          "prerequisites": "必须安装并运行 Docker Desktop，此命令在纯 CLI 环境（不含 Docker Desktop）中不可用"
        }
      ],
      "id": "docker-official-a9386f5e078d3772",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/open/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history rm",
      "en": "Remove build records",
      "zh": "删除构建历史记录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history rm abc123",
          "description": "删除引用标识为 `abc123` 的构建记录，该记录将从历史列表中移除且不可恢复",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "清理不再需要的旧构建记录以释放存储空间，或移除因测试产生的无效构建历史保持记录列表整洁",
          "goal": "删除指定构建记录以清理历史列表",
          "expected": "终端输出被删除的构建引用，`docker buildx history ls` 中不再显示该记录",
          "caveat": "删除后构建记录不可恢复，执行前请确认该记录无需保留作为审计或性能分析依据",
          "warning": "删除操作不可逆，构建日志和元数据将永久丢失"
        }
      ],
      "id": "docker-official-2f7086f8be93df16",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history trace",
      "en": "Show the OpenTelemetry trace of a build record",
      "zh": "显示构建记录的 OpenTelemetry 追踪信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "trace",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history trace --ref abc123",
          "description": "输出指定构建记录 `abc123` 的 OpenTelemetry 分布式追踪 span 数据，展示构建过程中各阶段的调用链路和耗时",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要深度分析构建性能瓶颈，通过 OpenTelemetry trace 数据精确定位每个构建阶段（如拉取基础镜像、执行 RUN 指令、导出层）的耗时分布和调用关系",
          "goal": "查看构建记录的 OpenTelemetry 追踪数据以分析性能",
          "expected": "终端输出 trace 的 span 树或 JSON 格式的追踪数据，包含每个操作的名称、开始时间、持续时长和父子关系"
        }
      ],
      "id": "docker-official-a8a527a476378a3f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/trace/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx imagetools create",
      "en": "Create a new image based on source images",
      "zh": "基于源镜像创建新的多平台镜像或镜像索引",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx imagetools create --annotation \"index:org.opencontainers.image.authors=dvdksn\" --tag foo/bar:latest",
          "description": "基于已有的源镜像创建新的镜像清单，打上 `foo/bar:latest` 标签并添加 OCI 作者注解，可用于合并多平台镜像或添加自定义注解",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "已有分别构建的 linux/amd64 和 linux/arm64 镜像，需要创建一个统一的镜像索引（manifest list），使拉取方能自动获取匹配其平台的镜像",
          "goal": "创建带 OCI 注解的多平台镜像索引",
          "expected": "终端输出新创建的镜像索引摘要（digest），该镜像索引推送后在仓库中可通过 `foo/bar:latest` 标签拉取并自动匹配平台"
        }
      ],
      "id": "docker-official-352e9b80318cdb16",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/imagetools/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx imagetools"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx imagetools inspect",
      "en": "Show details of an image in the registry",
      "zh": "查看仓库中镜像的清单和平台信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx imagetools inspect alpine --format \"{{.Name}}\"",
          "description": "查看 `alpine` 镜像在远程仓库中的完整清单信息，`--format` 选项仅输出镜像名称；不带 `--format` 时可展示所有支持的平台、各层摘要和注解",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "拉取镜像前需要确认它是否支持目标架构（如 ARM64），或排查多平台镜像实际包含了哪些平台的层",
          "goal": "查看 alpine 镜像的名称及支持的平台信息",
          "expected": "终端输出 `alpine`（使用 format 过滤后），若不加 format 则输出完整的平台列表、各层 digest 及注解信息"
        }
      ],
      "id": "docker-official-5391cf9bcd180512",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/imagetools/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx imagetools"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx policy eval",
      "en": "Evaluate policy for a source",
      "zh": "对指定源评估构建策略",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "eval",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx policy eval --source mypolicy.rego",
          "description": "读取 `mypolicy.rego` 策略文件并对其评估，验证策略语法和逻辑是否正确",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "编写了自定义的构建安全策略（如限制基础镜像来源、禁止使用 root 用户），在正式部署前需要验证策略文件语法正确且逻辑符合预期",
          "goal": "验证构建策略文件的语法和逻辑正确性",
          "expected": "终端输出策略评估结果，若策略有误则显示具体错误位置和原因"
        }
      ],
      "id": "docker-official-e0b87a6919113278",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/policy/eval/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx policy"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx policy test",
      "en": "Run policy tests",
      "zh": "运行构建策略的测试用例",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "test",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx policy test ./policy-tests/",
          "description": "运行指定目录 `./policy-tests/` 中的策略测试用例，验证策略规则在各种构建场景下的行为是否符合预期",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "编写了构建安全策略后，需要运行测试用例验证该策略能否正确拦截不合规的构建（如使用禁止的基础镜像）并放行合规的构建",
          "goal": "运行策略测试确保构建规则按预期工作",
          "expected": "终端输出测试结果汇总，显示通过/失败的测试用例数量及失败用例的详细差异"
        }
      ],
      "id": "docker-official-ca9b6d8c9dd48325",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/policy/test/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx policy"
    },
    {
      "cat": "flag",
      "cmd": "docker compose alpha dry-run",
      "en": "EXPERIMENTAL - Dry run command allow you to test a command without applying changes",
      "zh": "模拟执行命令但不实际应用更改",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "dry-run",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose alpha dry-run -- up -d",
          "description": "模拟执行 `docker compose up -d`，展示将要创建/更新的容器、网络和卷，但不实际执行任何操作",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在应用复杂的 compose 变更前，需要预览 compose 将执行哪些操作（创建哪些容器、网络和卷），以确认修改符合预期避免意外影响运行中的服务",
          "goal": "预览 compose up 将执行的操作而不实际启动服务",
          "expected": "终端输出将要执行的操作清单（类似 plan 信息），但实际容器、网络和卷状态不变",
          "prerequisites": "此命令为实验性功能（alpha），行为和可用性可能在后续版本中变更"
        }
      ],
      "id": "docker-official-1451dc695c84a742",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/alpha/dry-run/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose alpha"
    },
    {
      "cat": "flag",
      "cmd": "docker compose alpha scale",
      "en": "Scale services",
      "zh": "扩缩容 compose 服务实例数量",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "scale",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose alpha scale web=3 worker=2",
          "description": "将 compose 项目中的 `web` 服务扩容至 3 个副本、`worker` 服务扩容至 2 个副本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "线上流量增长时需要快速扩容 web 服务实例，或批处理任务增多时需要增加 worker 副本数以加快处理速度",
          "goal": "将 web 服务扩容至 3 个副本、worker 服务扩容至 2 个副本",
          "expected": "终端输出扩容进度，完成后 `docker compose ps` 显示 web 有 3 个运行实例、worker 有 2 个运行实例",
          "prerequisites": "此命令为实验性功能（alpha），stateful 服务扩容需确保应用支持多实例并发（如无状态 web 服务或已配置好分区的 worker）"
        }
      ],
      "id": "docker-official-ed18346bf06a8c25",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/alpha/scale/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose alpha"
    },
    {
      "cat": "flag",
      "cmd": "docker compose alpha watch",
      "en": "Watch build context for service and rebuild/refresh containers when files are updated",
      "zh": "监听源码变更并自动重建/刷新容器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "watch",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose alpha watch web api",
          "description": "监听 `web` 和 `api` 服务的构建上下文文件变更，检测到文件修改后自动同步到容器或触发重建",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "本地开发时希望修改源码后自动反映到运行中的容器，避免每次手动执行 `docker compose up --build` 或 `docker compose restart`",
          "goal": "监听 web 和 api 服务源码变更并自动同步到容器",
          "expected": "终端进入监听状态，显示 Watching 提示；修改源码文件后自动显示同步/重建日志，容器内应用代码随之更新",
          "prerequisites": "此命令为实验性功能（alpha），需在 compose 文件中配置 `develop.watch` 规则才能正常工作"
        }
      ],
      "id": "docker-official-353dce632294cb68",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/alpha/watch/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose alpha"
    },
    {
      "cat": "flag",
      "cmd": "docker compose bridge convert",
      "en": "Convert compose files to Kubernetes manifests, Helm charts, or another model",
      "zh": "将 Compose 文件转换为 Kubernetes 清单或 Helm Chart",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "convert",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose bridge convert --output k8s",
          "description": "将当前 compose 文件转换为 Kubernetes 资源清单（Deployment、Service、ConfigMap 等），`--output k8s` 指定输出格式为 Kubernetes 原生 YAML",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "项目最初用 Docker Compose 进行本地开发和测试，现在需要部署到 Kubernetes 集群，需要将 compose 定义转换为 K8s 资源清单以降低手动编写成本",
          "goal": "将 Compose 配置转换为 Kubernetes 资源清单",
          "expected": "终端输出生成的 Kubernetes YAML 清单内容（或写入指定文件），包含对应的 Deployment、Service 和 ConfigMap 定义"
        }
      ],
      "id": "docker-official-b32edaac7d23c867",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/bridge/convert/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose bridge"
    },
    {
      "cat": "flag",
      "cmd": "docker compose bridge transformations",
      "en": "Manage transformation images",
      "zh": "管理 Compose Bridge 转换镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "transformations",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose bridge transformations --help",
          "description": "列出管理转换镜像的子命令，转换镜像用于将非 Docker Compose 应用映射为 Compose 格式",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者需要了解 Compose Bridge 提供哪些转换镜像管理功能，以便将外部应用配置迁移为 Compose 编排文件",
          "goal": "查看转换镜像管理子命令列表",
          "expected": "列出 transformations 命名空间下的子命令及各自的功能描述"
        }
      ],
      "id": "docker-official-692613ff9f182847",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/bridge/transformations/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose bridge"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop disable model-runner",
      "en": "Disable Docker Model Runner",
      "zh": "禁用 Docker Model Runner 服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "model-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop disable model-runner",
          "description": "停止并禁用 Docker Desktop 内置的模型推理服务，释放 GPU 和内存资源",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "不再需要本地模型推理功能，希望释放被 Model Runner 占用的计算和内存资源",
          "goal": "停止 Model Runner 服务并禁止其随 Docker Desktop 启动",
          "expected": "Model Runner 服务被停止并禁用，相关端口和资源被释放",
          "caveat": "执行前确认当前没有正在运行的模型推理任务",
          "warning": "禁用后模型推理服务将立即停止，正在运行的推理任务会被中断"
        }
      ],
      "id": "docker-official-dc392d2262245bbf",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/disable/model-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop disable"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop enable model-runner",
      "en": "Manage Docker Model Runner settings",
      "zh": "启用 Docker Model Runner 服务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "model-runner",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop enable model-runner",
          "description": "启动并启用 Docker Desktop 内置的模型推理服务，使其可随 Docker Desktop 自动启动",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在 Docker Desktop 中使用本地 AI 模型推理能力来运行和管理模型",
          "goal": "启动 Docker Model Runner 服务并设为自动启用",
          "expected": "Model Runner 服务启动成功，可在 Docker Desktop 界面中管理和运行 AI 模型"
        }
      ],
      "id": "docker-official-03a09b54e8349e11",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/enable/model-runner/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop enable"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop engine ls",
      "en": "List available engines (Windows only)",
      "zh": "列出可用容器引擎",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop engine ls",
          "description": "显示 Windows 版 Docker Desktop 中所有可用的容器引擎类型及其当前激活状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认当前 Windows 系统支持哪些容器引擎类型（Linux 容器或 Windows 容器），以便决定运行环境",
          "goal": "查看可切换的容器引擎列表及当前使用的引擎",
          "expected": "列出可用引擎，如 windows 和 linux，当前激活的引擎带有选中标记",
          "prerequisites": "仅适用于 Windows 版 Docker Desktop"
        }
      ],
      "id": "docker-official-f43bcfabb2ceabea",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/engine/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop engine"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop engine use",
      "en": "Switch to Windows or Linux containers (Windows only)",
      "zh": "切换容器引擎类型",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "use",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop engine use windows",
          "description": "将 Docker Desktop 的容器引擎切换到指定的引擎类型（linux 或 windows），切换后所有后续容器操作都使用新模式",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要从 Linux 容器模式切换到 Windows 容器模式以运行依赖 Windows 内核的应用程序",
          "goal": "将 Docker Desktop 切换到 Windows 容器引擎",
          "expected": "容器引擎切换为 Windows 模式，此后 docker run 等命令将启动 Windows 容器",
          "prerequisites": "仅适用于 Windows 版 Docker Desktop",
          "caveat": "执行前确认已保存所有运行中容器的重要数据，建议先做容器快照备份",
          "warning": "切换引擎类型会导致当前所有正在运行的容器被强制停止"
        }
      ],
      "id": "docker-official-a3e42f5cc985da1d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/engine/use/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop engine"
    },
    {
      "cat": "flag",
      "cmd": "docker desktop kubernetes images",
      "en": "List Kubernetes images used by Docker Desktop",
      "zh": "列出内置 Kubernetes 使用的镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "images",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker desktop kubernetes images",
          "description": "显示 Docker Desktop 内置 Kubernetes 集群依赖的所有系统镜像及其版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "排查 Kubernetes 集群启动失败或离线环境部署时，需要确认内置 K8s 需要拉取哪些系统镜像",
          "goal": "查看 Docker Desktop Kubernetes 核心组件的镜像清单",
          "expected": "列出 kube-apiserver、kube-controller-manager、kube-scheduler、coredns 等核心组件的镜像名称和标签"
        }
      ],
      "id": "docker-official-2996990a0c5ce31c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/desktop/kubernetes/images/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker desktop kubernetes"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi attestation get",
      "en": "Get attestation for a Docker Hardened Image",
      "zh": "获取加固镜像的签名证明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi attestation get nginx-hardened sha256:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
          "description": "根据镜像名和摘要哈希获取 Docker 加固镜像对应的签名证明（attestation）详情，用于验证镜像来源和完整性",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "部署加固镜像到生产环境前，需要验证该镜像摘要对应的签名证明是否有效且来源可信",
          "goal": "获取指定镜像摘要的 attestation 证明详情",
          "expected": "返回该摘要对应的证明元数据，包含签名方身份、签名时间和证明类型"
        }
      ],
      "id": "docker-official-421294230b9add13",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/attestation/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi attestation"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi attestation list",
      "en": "List attestations for a Docker Hardened Image",
      "zh": "列出加固镜像的所有证明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi attestation list nginx-hardened",
          "description": "列出指定 Docker 加固镜像已有的全部签名证明记录，包括 SBOM 证明和来源证明等",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "合规审查时需要确认加固镜像是否已具备完整的签名链和 SBOM 等安全证明",
          "goal": "查看指定加固镜像已有的全部 attestation 摘要列表",
          "expected": "显示该镜像所有证明的摘要值和类型，如 sbom、provenance 等"
        }
      ],
      "id": "docker-official-09bf74d33d84acc4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/attestation/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi attestation"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi attestation sbom",
      "en": "Display the SPDX SBOM for a Docker Hardened Image",
      "zh": "显示加固镜像的软件物料清单",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "sbom",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi attestation sbom nginx-hardened",
          "description": "以 SPDX 标准格式输出 Docker 加固镜像的软件物料清单，列出镜像内所有软件包及其版本和依赖关系",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全审计或漏洞排查时，需要了解加固镜像中包含的所有软件组件及其版本，确认是否存在已知漏洞",
          "goal": "导出指定加固镜像的 SPDX 格式 SBOM 清单",
          "expected": "以 SPDX 格式输出镜像内所有软件包名称、版本号及依赖树结构"
        }
      ],
      "id": "docker-official-e5cfffdf3eb50580",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/attestation/sbom/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi attestation"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi auth apk",
      "en": "Create authentication details for DHI APK repositories",
      "zh": "生成 DHI APK 仓库认证配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "apk",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi auth apk",
          "description": "为访问 Docker Hardened Image 的 APK 软件仓库生成认证凭据，使 Alpine Linux 系统能安装 DHI 加固软件包",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Alpine 容器或系统中需要安装 Docker 官方加固的软件包，必须先配置 APK 仓库的认证信息",
          "goal": "生成并配置 DHI APK 仓库的认证凭据",
          "expected": "生成 APK 仓库认证文件，后续 apk add 命令可直接从 DHI 仓库拉取加固软件包"
        }
      ],
      "id": "docker-official-c9235aba63d84cdc",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/auth/apk/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi auth"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi auth deb",
      "en": "Create authentication details for DHI DEB repositories",
      "zh": "生成 DHI DEB 仓库认证配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "deb",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi auth deb",
          "description": "为访问 Docker Hardened Image 的 DEB 软件仓库生成认证凭据，使 Debian/Ubuntu 系统能安装 DHI 加固软件包",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在 Debian 或 Ubuntu 容器中需要安装 Docker 官方加固的软件包，必须先配置 APT 仓库的认证信息",
          "goal": "生成并配置 DHI DEB 仓库的认证凭据",
          "expected": "生成 DEB 仓库的 sources.list 和 GPG 密钥配置，后续 apt install 可直接从 DHI 仓库拉取加固软件包"
        }
      ],
      "id": "docker-official-6b77cf7b090ffa9c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/auth/deb/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi auth"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi catalog get",
      "en": "Get details of a Docker Hardened Image",
      "zh": "查看加固镜像详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi catalog get nginx-hardened",
          "description": "获取指定 Docker 加固镜像的完整元数据，包括基础镜像来源、应用的加固补丁列表和支持的架构",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "评估是否采用某个加固镜像时，需要了解其基于哪个上游镜像、应用了哪些安全加固措施",
          "goal": "获取指定加固镜像的版本、基础镜像和加固内容详情",
          "expected": "返回镜像的完整描述，包含基础镜像、应用的安全补丁列表、支持架构和标签信息"
        }
      ],
      "id": "docker-official-854e51cacb29dea0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/catalog/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi catalog list",
      "en": "List available Docker Hardened Images",
      "zh": "列出所有可用的加固镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi catalog list",
          "description": "列出 Docker Hardened Image 目录中所有官方发布的加固镜像及其版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要浏览 Docker 官方提供了哪些加固镜像，以便为项目选择合适的安全基础镜像",
          "goal": "查看 DHI 目录中所有可用的加固镜像列表",
          "expected": "列出所有加固镜像的名称、最新标签和简短描述，如 nginx-hardened、redis-hardened 等"
        }
      ],
      "id": "docker-official-91d3c10812586a07",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/catalog/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization build",
      "en": "Manage customization builds",
      "zh": "管理加固镜像的自定义构建",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "build",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization build --help",
          "description": "查看自定义构建子命令，用于基于定制化 YAML 配置构建 Docker 加固镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要了解如何管理和触发基于自定义配置文件的加固镜像构建流程",
          "goal": "查看自定义构建相关的子命令和使用方法",
          "expected": "列出 customization build 命名空间下的子命令，如触发构建、查看构建状态等"
        }
      ],
      "id": "docker-official-917c345318056857",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/build/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization create",
      "en": "Create a new customization from YAML file",
      "zh": "基于 YAML 创建加固镜像定制方案",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization create hardened-config.yaml",
          "description": "读取 YAML 配置文件中的定制需求（如额外安装包、安全策略等），创建 Docker 加固镜像的自定义定制方案",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在官方加固镜像基础上添加企业特有的安全策略或软件包，创建定制化加固方案",
          "goal": "提交自定义 YAML 配置创建新的加固镜像定制方案",
          "expected": "读取 YAML 文件配置，创建定制方案并返回定制 ID，后续可用该 ID 构建自定义加固镜像"
        }
      ],
      "id": "docker-official-e64b9c1e118ba121",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization delete",
      "en": "Delete one or more customizations",
      "zh": "删除一个或多个 Docker 硬化镜像的定制配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "delete",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization delete custom-sec-01 custom-sec-02",
          "description": "删除 ID 为 custom-sec-01 和 custom-sec-02 的两个定制配置，这些配置定义的额外安全加固层将从对应的 Docker 硬化镜像中移除",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队不再需要某套安全硬化定制规则，或测试定制已过期，需要从 DHI 中移除对应定制项",
          "goal": "删除指定 ID 的硬化镜像定制配置",
          "expected": "终端输出确认信息，指定的定制配置被永久移除，再次执行 docker dhi customization list 将不再显示这些条目",
          "caveat": "执行前请确认要删除的定制 ID 列表，建议先运行 docker dhi customization list 检查当前所有定制项",
          "warning": "删除后定制配置无法恢复，依赖该定制的硬化镜像将失去对应的安全加固层"
        }
      ],
      "id": "docker-official-d3a14da0e09c1d3a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/delete/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization edit",
      "en": "Edit an existing customization from YAML file",
      "zh": "通过 YAML 文件编辑已有的 Docker 硬化镜像定制配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "edit",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization edit ./custom-sec-01.yaml",
          "description": "读取本地 ./custom-sec-01.yaml 文件中的定义，更新对应的 DHI 定制配置，YAML 中可包含额外的包安装、文件权限加固、内核参数调整等定制项",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要调整某个硬化镜像的安全策略，比如新增端口限制、更新包过滤规则或修改挂载权限",
          "goal": "用修订后的 YAML 文件更新指定定制配置",
          "expected": "终端输出定制更新成功的确认信息，执行 docker dhi customization get custom-sec-01 将显示更新后的配置详情"
        }
      ],
      "id": "docker-official-a2dc3a91f335135c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/edit/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker dhi customization update"
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization get",
      "en": "Get details of a specific customization",
      "zh": "查看指定 Docker 硬化镜像定制配置的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization get custom-sec-01",
          "description": "返回 ID 为 custom-sec-01 的定制配置的全部字段，包括基础镜像标签、附加包列表、安全策略规则、创建时间和修改历史",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在修改某套硬化规则前需要确认当前配置的具体内容，或在审计时需要记录某镜像的安全加固清单",
          "goal": "获取 ID 为 custom-sec-01 的定制配置的完整详情",
          "expected": "终端以可读格式输出该定制的所有配置参数、关联的 DHI 镜像及来源 YAML 内容"
        }
      ],
      "id": "docker-official-e5c4c6b199130074",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization list",
      "en": "List all customizations",
      "zh": "列出所有已创建的 Docker 硬化镜像定制配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization list",
          "description": "输出所有已注册的定制配置摘要，包含每个定制的 ID、关联的基础镜像、创建时间和简要描述",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队需要盘点当前维护了多少套硬化定制，检查是否有重复或冲突的定制规则，或在 CI 中自动化核对定制项是否完整",
          "goal": "查看当前环境中所有 DHI 定制的概览清单",
          "expected": "终端以表格形式列出每个定制的 ID、基础镜像、最新修改时间及描述，便于快速扫描和比对"
        }
      ],
      "id": "docker-official-d304d2adb22c22de",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization prepare",
      "en": "Prepare a new customization YAML file from a DHI base image tag",
      "zh": "基于指定的 Docker 硬化镜像标签生成可编辑的定制 YAML 模板",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "prepare",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization prepare docker.io/library/nginx hardened",
          "description": "从指定的 DHI 仓库 docker.io/library/nginx 的 hardened 标签拉取默认配置，生成一个包含所有可定制项的 YAML 文件，用户可在此基础上增删安全策略",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "想为某个已有的硬化镜像在此基础上追加自定义安全加固层，需要先生成一个包含当前默认配置的 YAML 文件作为起点",
          "goal": "从 nginx 的 hardened 标签生成定制模板文件",
          "expected": "当前目录下生成一个 YAML 文件，内容为基于 hardened 标签的完整定制清单，可直接编辑后用于 docker dhi customization edit",
          "prerequisites": "指定的 DHI 仓库 docker.io/library/nginx 和 hardened 标签必须存在且可访问"
        }
      ],
      "id": "docker-official-14972bf8d857e1dc",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/prepare/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi mirror list",
      "en": "List all mirrored Docker Hardened Images",
      "zh": "列出所有已镜像同步的 Docker 硬化镜像",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi mirror list",
          "description": "列出所有已启动镜像同步的 Docker 硬化镜像仓库列表，包含镜像名称、同步状态、本地标签和最近同步时间",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维团队需要确认哪些硬化镜像已从官方仓库同步到本地私有注册中心，以验证离线环境中的镜像可用性",
          "goal": "查看当前已完成镜像同步的 DHI 清单",
          "expected": "终端输出已镜像的 DHI 列表，每行显示仓库名、镜像状态（如 synced/syncing）、本地路径及最后同步时间戳"
        }
      ],
      "id": "docker-official-7a97514c3d166b3a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/mirror/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi mirror"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi mirror start",
      "en": "Start mirroring Docker Hardened Images",
      "zh": "启动 Docker 硬化镜像的镜像同步任务",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "start",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi mirror start",
          "description": "触发后台镜像同步任务，将 Docker 官方硬化镜像拉取并推送到本地配置的私有注册中心，确保内部环境可以使用经过安全加固的基础镜像",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "企业将硬化镜像从 Docker 官方注册中心镜像到内部私有注册中心，供离线或隔离环境的开发和生产集群使用",
          "goal": "开始将所有已配置的 DHI 仓库镜像同步到本地注册中心",
          "expected": "终端输出同步任务已启动的确认信息，通过 docker dhi mirror list 可查看各仓库的同步进度",
          "prerequisites": "本地 Docker 环境已配置私有注册中心地址，且具有拉取 DHI 镜像的访问权限"
        }
      ],
      "id": "docker-official-a543bd858dc4e8dd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/mirror/start/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi mirror"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi mirror stop",
      "en": "Stop mirroring one or more Docker Hardened Images",
      "zh": "停止一个或多个 Docker 硬化镜像的镜像同步",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "stop",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi mirror stop docker.io/library/nginx",
          "description": "停止对 docker.io/library/nginx 仓库的硬化镜像同步任务，该镜像的后续安全更新版本将不再自动推送到本地注册中心",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某镜像的同步任务因网络问题持续失败并占用资源，或某个仓库的安全策略已变更不再需要将其硬化镜像同步到内部",
          "goal": "停止指定仓库的 DHI 镜像同步任务",
          "expected": "终端输出同步已停止的确认信息，docker dhi mirror list 中对应仓库的状态变为 stopped",
          "caveat": "执行前请确认该仓库的硬化镜像是否仍在生产环境中使用，建议先执行 docker dhi mirror list 查看当前同步状态",
          "warning": "停止同步后已同步的镜像不会自动删除，但将不再接收后续安全更新，可能导致内部使用的硬化镜像版本落后于官方"
        }
      ],
      "id": "docker-official-9903dba42df9b578",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/mirror/stop/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi mirror"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog create",
      "en": "Create a new catalog from a profile, legacy catalog, or community registry",
      "zh": "从配置文件、旧版目录或社区注册中心创建新的 MCP 工具目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog create registry.example.com/catalogs/team-tools --from-profile team-security-profile",
          "description": "从名为 team-security-profile 的配置文件中读取 MCP 服务端定义，创建一个 OCI 引用为 registry.example.com/catalogs/team-tools 的工具目录，该目录打包了安全扫描相关 MCP 服务端",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队需要将一个 MCP 配置文件中定义的多个服务端工具组合打包为一个 OCI 制品目录，便于在团队内部或 CI 中统一分发和使用",
          "goal": "从 team-security-profile 配置文件创建新的 MCP 工具目录",
          "expected": "终端输出目录创建成功的确认信息及 OCI 引用地址，通过 docker mcp catalog list 可查看到新创建的目录"
        }
      ],
      "id": "docker-official-4b140beea5439acd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog list",
      "en": "List catalogs",
      "zh": "列出已配置的 MCP 工具目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog list",
          "description": "输出所有已注册的 MCP 目录摘要，包含每个目录的名称、OCI 引用、来源类型（profile/legacy/community）和服务器数量",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者需要查看本地已注册了哪些 MCP 工具目录，以确认所需的 AI 工具集是否已安装并可用",
          "goal": "查看当前所有已配置的 MCP 目录清单",
          "expected": "终端以表格形式列出已配置目录的名称、引用路径及包含的 MCP 服务端数量"
        }
      ],
      "id": "docker-official-2a4667d9431375db",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog ls",
      "en": "List all configured catalogs",
      "zh": "列出所有已配置的 MCP 工具目录（ls 别名）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog ls",
          "description": "与 docker mcp catalog list 等效，以表格形式列出已配置的 MCP 目录及其 OCI 引用、状态和所含服务端概要",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "快速查看本地已安装的 MCP 目录列表，确认当前可用的 AI 工具集",
          "goal": "查看当前所有已配置的 MCP 目录清单",
          "expected": "终端输出已配置目录的摘要表格，每行包含目录名称、OCI 引用路径及关联的服务端数量"
        }
      ],
      "id": "docker-official-a1e610e07928515d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog pull",
      "en": "Pull a catalog from an OCI registry",
      "zh": "从 OCI 注册中心拉取 MCP 工具目录到本地",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pull",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog pull registry.example.com/catalogs/team-tools",
          "description": "从 OCI 注册中心 registry.example.com/catalogs/team-tools 拉取 MCP 工具目录，将其中的 MCP 服务端定义下载到本地供 AI 工具调用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队成员需要从共享注册中心下载同事发布的 MCP 工具目录到本地，以便在 AI 编码助手中使用这些工具",
          "goal": "从 OCI 注册中心下载指定的 MCP 目录到本地",
          "expected": "终端显示下载进度，完成后通过 docker mcp catalog list 可看到新添加的目录及其包含的服务端",
          "prerequisites": "需要具有目标 OCI 注册中心的读取权限"
        }
      ],
      "id": "docker-official-14a5c901a9fc048a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/pull/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog push",
      "en": "Push a catalog to an OCI registry",
      "zh": "将本地 MCP 工具目录推送到 OCI 注册中心",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog push registry.example.com/catalogs/team-tools",
          "description": "将本地配置的 MCP 目录推送到 OCI 注册中心 registry.example.com/catalogs/team-tools，使该目录中的 MCP 服务端定义可供团队其他成员拉取使用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队已创建并验证了一套标准化的 MCP 工具集，需要将其发布到私有注册中心供全团队使用",
          "goal": "将本地 MCP 目录推送到指定的 OCI 注册中心",
          "expected": "终端显示推送进度条，完成后输出推送成功确认及 OCI 摘要（digest）",
          "prerequisites": "需要具有目标 OCI 注册中心的写入权限，且目录内容已通过本地验证"
        }
      ],
      "id": "docker-official-00522fea3c46c8c6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog remove",
      "en": "Remove a catalog",
      "zh": "移除一个 MCP 工具目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "remove",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog remove registry.example.com/catalogs/old-tools",
          "description": "从本地移除 OCI 引用为 registry.example.com/catalogs/old-tools 的 MCP 目录，该目录下关联的所有 MCP 服务端将不再可用",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个工具目录已废弃或不再适用于当前项目，需要从本地配置中清理以避免工具冲突",
          "goal": "移除指定 OCI 引用的 MCP 目录",
          "expected": "终端输出移除确认信息，通过 docker mcp catalog list 确认该目录已不再列出",
          "caveat": "执行前请确认是否有正在使用的 MCP 服务端依赖此目录，建议先执行 docker mcp catalog list 确认目录名称并做好备份",
          "warning": "移除后该目录及其关联的 MCP 服务端将从本地配置中删除，依赖这些工具的 AI 工作流可能中断"
        }
      ],
      "id": "docker-official-f5c1b84816b1a5ba",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/remove/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog rm",
      "en": "Remove a catalog",
      "zh": "移除一个 MCP 工具目录（rm 别名）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog rm team-tools",
          "description": "从本地配置中按名称移除名为 team-tools 的 MCP 目录，等效于 docker mcp catalog remove 但使用目录名称而非完整 OCI 引用",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要根据目录名称快速清理不再需要的 MCP 目录，避免通过完整 OCI 引用查找的麻烦",
          "goal": "按名称移除指定的 MCP 目录",
          "expected": "终端输出移除确认信息，docker mcp catalog ls 中不再显示该目录",
          "caveat": "执行前请通过 docker mcp catalog ls 确认目录名称准确无误，建议先备份相关配置",
          "warning": "移除后该目录及其 MCP 服务端将从本地配置中删除，依赖这些工具的工作流将无法正常运行"
        }
      ],
      "id": "docker-official-2bcffbb8d849f7b2",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog server",
      "en": "Manage servers in catalogs",
      "zh": "管理 MCP 目录中的服务器条目",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "server",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog server --help",
          "description": "查看目录服务器管理子命令（如添加、移除、列出目录中的 MCP 服务器）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看如何向 MCP 目录中添加或移除服务器引用",
          "goal": "了解管理目录中服务器条目的可用子命令",
          "expected": "列出管理目录服务器的子命令列表（如 add、remove、list 等）"
        }
      ],
      "id": "docker-official-5b1579e754c8b01a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/server/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog show",
      "en": "Show a catalog",
      "zh": "查看指定 MCP 目录的详细内容",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "show",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog show docker.io/library/my-catalog:latest",
          "description": "拉取并显示 my-catalog:latest 目录中包含的服务器清单、工具列表及元数据",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在拉取或使用某个 MCP 目录之前，需要确认其中包含哪些服务器和工具",
          "goal": "查看 my-catalog 目录中注册的 MCP 服务器及各自提供的工具",
          "expected": "输出该目录的版本标签、包含的服务器列表和每个服务器提供的工具摘要"
        }
      ],
      "id": "docker-official-6ab26dab8e290c03",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/show/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog tag",
      "en": "Create a tagged copy of a catalog",
      "zh": "为 MCP 目录创建带标签的副本",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "tag",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog tag my-catalog:latest my-catalog:v1.0",
          "description": "为 my-catalog:latest 打上 v1.0 标签，创建同一目录镜像的新引用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要为当前稳定版本打上版本标签，以便团队拉取或回滚到特定版本",
          "goal": "将 latest 标签的目录同时标记为 v1.0 版本",
          "expected": "创建新的标签引用成功，可通过 my-catalog:v1.0 拉取同一目录内容"
        }
      ],
      "id": "docker-official-dbc29ee23387bea3",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/tag/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp client connect",
      "en": "Connect the Docker MCP Toolkit to a client. Supported clients: claude-code claude-desktop cline codex continue crush cursor gemini goose gordon kiro lmstudio opencode sema4 vscode zed",
      "zh": "将 Docker MCP Toolkit 连接到指定的 AI 编程客户端",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "connect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp client connect claude-code",
          "description": "在 Claude Code 的 MCP 配置中注册 Docker MCP 服务器，使 Claude Code 可通过 MCP 协议调用 Docker 管理工具",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "希望 Claude Code 或 Cursor 等 AI 客户端能通过 MCP 直接管理 Docker 容器和镜像",
          "goal": "将 Docker MCP Toolkit 注册到 Claude Code 客户端",
          "expected": "在目标客户端的 MCP 配置文件中写入 Docker MCP 服务器条目，重启客户端后即可调用 Docker 工具"
        }
      ],
      "id": "docker-official-f5f64f1a9fa3c89a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/client/connect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp client"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp client disconnect",
      "en": "Disconnect the Docker MCP Toolkit from a client. Supported clients: claude-code claude-desktop cline codex continue crush cursor gemini goose gordon kiro lmstudio opencode sema4 vscode zed",
      "zh": "断开 Docker MCP Toolkit 与指定客户端的连接",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disconnect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp client disconnect claude-code",
          "description": "从 Claude Code 的 MCP 配置中移除 Docker MCP 服务器注册条目",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "不再需要某个 AI 客户端通过 MCP 访问 Docker，或需要更换连接目标",
          "goal": "移除 Claude Code 与 Docker MCP Toolkit 的连接配置",
          "expected": "目标客户端的 MCP 配置中不再包含 Docker MCP 服务器条目",
          "caveat": "执行前先通过 docker mcp client ls 确认当前已连接的客户端列表，确认断开目标无误",
          "warning": "断开后该客户端将无法通过 MCP 调用 Docker 工具，依赖此连接的工作流会中断"
        }
      ],
      "id": "docker-official-c343797a9f8c1c8e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/client/disconnect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp client"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp client ls",
      "en": "List client configurations",
      "zh": "列出所有已配置的 MCP 客户端连接",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp client ls",
          "description": "列出当前 Docker MCP Toolkit 已注册连接的所有 AI 客户端及其配置状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认 Docker MCP Toolkit 当前连接到了哪些 AI 客户端，以便排查连接问题或规划变更",
          "goal": "查看所有已建立 MCP 连接的客户端名称和状态",
          "expected": "显示客户端名称（如 claude-code、cursor）和各自连接状态的列表"
        }
      ],
      "id": "docker-official-c82de57d07bf646f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/client/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp client"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp feature disable",
      "en": "Disable an experimental feature",
      "zh": "禁用指定的实验性功能",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp feature disable experimental-feature-name",
          "description": "将 experimental-feature-name 的状态设为 disabled，停止该功能的所有行为",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个实验性功能导致 MCP 网关不稳定或与其他功能冲突，需要临时关闭",
          "goal": "关闭 experimental-feature-name 功能以恢复稳定状态",
          "expected": "该功能状态切换为 disabled，相关行为立即停止生效",
          "caveat": "执行前通过 docker mcp feature list 查看当前各功能状态和描述，确认禁用目标正确",
          "warning": "禁用实验性功能可能导致依赖该功能的工作流中断"
        }
      ],
      "id": "docker-official-a4a1a04e8269378b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/feature/disable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp feature"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp feature enable",
      "en": "Enable an experimental feature",
      "zh": "启用指定的实验性功能",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "enable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp feature enable experimental-feature-name",
          "description": "将 experimental-feature-name 的状态设为 enabled，开启该功能",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要使用某项尚未默认开启的实验性 MCP 能力来扩展工作流",
          "goal": "启用名为 experimental-feature-name 的实验性功能",
          "expected": "该功能状态切换为 enabled，对应能力立即可用"
        }
      ],
      "id": "docker-official-c78767c86eecfec0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/feature/enable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp feature"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp feature list",
      "en": "List all available features and their status",
      "zh": "列出所有可用功能及其启用状态",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp feature list",
          "description": "输出所有 MCP 功能的名称、描述和当前启用/禁用状态的完整清单",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在启用或禁用实验性功能之前，需要全面了解当前各功能的开关情况",
          "goal": "查看所有 MCP 功能项的名称、描述和启用状态",
          "expected": "输出功能名称、描述和状态（enabled/disabled）的表格"
        }
      ],
      "id": "docker-official-2652ce808c81d4a0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/feature/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp feature"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp feature ls",
      "en": "List all available features and their status",
      "zh": "列出所有可用功能及其启用状态（list 的别名）",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp feature ls",
          "description": "与 feature list 行为一致，输出所有 MCP 功能的名称和启用状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用更简短的别名快速查看功能开关状态",
          "goal": "查看所有 MCP 功能项的名称和启用/禁用状态",
          "expected": "输出功能名称、描述和状态（enabled/disabled）的表格"
        }
      ],
      "id": "docker-official-2d9d548256ae4983",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/feature/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp feature"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp gateway run",
      "en": "Run the gateway",
      "zh": "启动 MCP 网关服务进程",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "run",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp gateway run",
          "description": "在前台启动 MCP 网关，统一代理和管理所有已配置 MCP 服务器的访问入口",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要通过本地网关统一对外暴露多个 MCP 服务器的工具接口",
          "goal": "启动 MCP 网关进程，使其监听并转发 MCP 请求",
          "expected": "网关进程启动并输出监听地址和已加载的服务器清单，保持前台运行"
        }
      ],
      "id": "docker-official-2f775171e8822b98",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/gateway/run/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp gateway"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile config",
      "en": "Update the configuration of a profile",
      "zh": "更新指定 MCP 配置文件的配置项",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "config",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile config my-profile --set server.timeout 30",
          "description": "将 my-profile 中 server.timeout 配置项的值设为 30（秒）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个 MCP 服务器连接频繁超时，需要在配置文件中调整超时阈值",
          "goal": "修改 my-profile 的超时时间为 30 秒",
          "expected": "输出更新后的配置键值对，确认 server.timeout 已改为 30"
        }
      ],
      "id": "docker-official-008c6892139fd460",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/config/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile create",
      "en": "Create a new profile of MCP servers",
      "zh": "创建新的 MCP 服务器配置文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile create --name dev-toolkit --server docker.io/my-mcp-server:latest --connect claude-code",
          "description": "创建名为 dev-toolkit 的配置文件，包含 my-mcp-server 服务器并自动连接到 Claude Code 客户端",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要将一组 MCP 服务器打包为一个配置方案，供个人使用或团队分发",
          "goal": "创建包含指定服务器和客户端连接的配置文件",
          "expected": "输出新配置文件的 ID，并列出已包含的服务器引用和客户端连接"
        }
      ],
      "id": "docker-official-93dc90d9d230b6ba",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile export",
      "en": "Export profile to file",
      "zh": "将配置文件导出到本地文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "export",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile export my-profile ./my-profile-backup.json",
          "description": "将 my-profile 的完整配置序列化为 JSON 文件保存到当前目录",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要备份当前 MCP 配置以便迁移到另一台机器或版本控制",
          "goal": "将 my-profile 的完整配置导出为 ./my-profile-backup.json",
          "expected": "在当前目录生成 JSON 文件，包含服务器列表、工具白名单和客户端连接的完整数据"
        }
      ],
      "id": "docker-official-121e7710602a8697",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/export/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile import",
      "en": "Import profile from file",
      "zh": "从本地文件导入配置文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "import",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile import ./my-profile-backup.json",
          "description": "读取 JSON 文件内容，在本地创建对应的 MCP 配置文件",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "从备份恢复 MCP 配置，或导入团队共享的配置方案",
          "goal": "从 ./my-profile-backup.json 导入并创建本地配置文件",
          "expected": "导入成功，输出新创建的 profile ID 和包含的服务器列表"
        }
      ],
      "id": "docker-official-798886f49716cfa3",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/import/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile list",
      "en": "List profiles",
      "zh": "列出所有已创建的 MCP 配置文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile list",
          "description": "输出本地所有 MCP 配置文件的 ID、名称、服务器数量等摘要信息",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看本地有哪些可用的配置文件来决定使用、修改或删除哪个",
          "goal": "列出所有本地配置文件的摘要信息",
          "expected": "显示配置文件列表，每项包含 ID、名称和包含的服务器数量"
        }
      ],
      "id": "docker-official-32d2603f74be2213",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp profile ls"
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile pull",
      "en": "Pull profile from OCI registry",
      "zh": "从 OCI 注册中心拉取 MCP 配置文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "pull",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile pull docker.io/team/shared-toolkit:latest",
          "description": "从 docker.io/team/shared-toolkit:latest 下载共享的 MCP 配置文件到本地",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队已将标准 MCP 配置方案发布到容器注册中心，需要拉取到本地使用",
          "goal": "从 OCI 注册中心下载 shared-toolkit 配置文件",
          "expected": "下载完成，本地新增该配置文件，可通过 profile list 查看"
        }
      ],
      "id": "docker-official-1c23ea4b4b156910",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/pull/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile push",
      "en": "Push profile to OCI registry",
      "zh": "将 MCP 配置文件推送到 OCI 注册中心",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "push",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile push my-profile docker.io/team/shared-toolkit:v1.0",
          "description": "将本地 my-profile 推送到 docker.io/team/shared-toolkit 仓库并标记为 v1.0",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "将本地调试好的 MCP 配置方案发布到注册中心，供团队成员拉取使用",
          "goal": "将 my-profile 推送到远程 OCI 注册中心",
          "expected": "推送完成，团队成员可通过 docker mcp profile pull docker.io/team/shared-toolkit:v1.0 拉取该配置"
        }
      ],
      "id": "docker-official-aa0cde0b652084de",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/push/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile remove",
      "en": "Remove a profile",
      "zh": "删除指定的 MCP 配置文件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "remove",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile remove my-profile",
          "description": "从本地永久删除名为 my-profile 的 MCP 配置文件",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个配置文件已过时或不再需要，需要清理本地配置列表",
          "goal": "删除 my-profile 配置文件以保持本地配置整洁",
          "expected": "配置文件被移除，profile list 中不再显示该项",
          "caveat": "执行前先用 docker mcp profile export 备份配置内容，并通过 docker mcp profile show 确认待删除内容",
          "warning": "删除后无法恢复；若该配置关联了活跃的客户端连接，可能导致对应客户端功能异常"
        }
      ],
      "id": "docker-official-06f6e9187e89b557",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/remove/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp profile rm"
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile server",
      "en": "Manage servers in profiles",
      "zh": "管理 MCP 配置文件中的服务器条目",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "server",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile server --help",
          "description": "查看向配置文件中添加或移除 MCP 服务器的可用子命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要向已有配置文件新增 MCP 服务器引用，或移除不再需要的服务器",
          "goal": "了解在配置文件中管理服务器条目的增删操作",
          "expected": "列出管理配置文件中服务器的子命令（如 add、remove、list 等）"
        }
      ],
      "id": "docker-official-817355c8654a0e5e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/server/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile show",
      "en": "Show profile",
      "zh": "查看指定配置文件的完整内容",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "show",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile show my-profile",
          "description": "输出 my-profile 的完整配置，包括服务器列表、工具权限和客户端连接",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在修改或分发某个配置之前，需要全面了解其包含的服务器和权限设置",
          "goal": "显示 my-profile 的服务器清单、工具白名单和客户端连接详情",
          "expected": "输出配置 ID、名称、服务器引用列表、工具启用/禁用清单和已绑定的客户端"
        }
      ],
      "id": "docker-official-452c918b0d146833",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/show/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile tools",
      "en": "Manage tool allowlist for servers in a profile",
      "zh": "管理配置文件中服务器的工具白名单",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "tools",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile tools my-profile --enable server1:docker-ps --disable server1:docker-rm",
          "description": "在 my-profile 中启用 server1 的 docker-ps 工具，同时禁用 docker-rm 等危险操作",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要限制 AI 客户端只能使用查询类 Docker 命令，禁止删除和停止等破坏性操作",
          "goal": "为 server1 启用安全的 docker-ps 工具并禁用危险的 docker-rm 工具",
          "expected": "输出更新后的工具白名单，明确标注各工具的启用/禁用状态",
          "caveat": "执行前检查 my-profile 当前工具列表，并确认 server1 和工具名称与目标配置一致。",
          "warning": "修改工具白名单会立即改变 AI 客户端可调用的能力，错误禁用可能导致现有工作流失效。"
        }
      ],
      "id": "docker-official-bd9df698155b011b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/tools/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp secret ls",
      "en": "List all secrets from the local OS Keychain as well as any active Secrets Engine provider",
      "zh": "列出所有已存储的密钥名称",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp secret ls",
          "description": "列出本地 OS 密钥链及 Secrets Engine 中存储的所有密钥名称（不显示值）",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看当前存储了哪些 Docker MCP 所用的 API 密钥和凭据",
          "goal": "列出所有已存密钥的名称和来源",
          "expected": "输出密钥名称列表，标注每个密钥的来源（local-keychain 或 secrets-engine）"
        }
      ],
      "id": "docker-official-7674bc5f99968055",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/secret/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp secret"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp secret rm",
      "en": "Remove secrets from the local OS Keychain",
      "zh": "从本地 OS 密钥链中删除指定密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp secret rm my-api-key my-registry-token",
          "description": "从 OS 密钥链中永久删除 my-api-key 和 my-registry-token 两个密钥",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个 API 密钥已过期或更换，需要从密钥链中移除旧凭据防止误用",
          "goal": "删除过期的 my-api-key 和 my-registry-token 密钥",
          "expected": "指定密钥从密钥链中移除，secret ls 不再显示这些条目",
          "caveat": "执行前通过 docker mcp secret ls 确认待删除的密钥名称完全正确",
          "warning": "密钥删除后不可恢复；若仍有 MCP 服务依赖该凭据，将导致其认证失败"
        }
      ],
      "id": "docker-official-5b48778fdb30e100",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/secret/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp secret"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp secret set",
      "en": "Set a secret in the local OS Keychain",
      "zh": "在本地 OS 密钥链中存储密钥",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "set",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp secret set OPENAI_API_KEY=sk-xxxx",
          "description": "将 OpenAI API 密钥安全存入操作系统密钥链，MCP 服务器可通过密钥名引用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "MCP 服务器需要 API 密钥访问外部服务，不能明文写在配置文件中",
          "goal": "将 OPENAI_API_KEY 凭据安全存入本地密钥链",
          "expected": "密钥存储成功，之后 MCP 服务器可通过名称 OPENAI_API_KEY 引用该凭据"
        }
      ],
      "id": "docker-official-0ee906fa20d3b54b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/secret/set/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp secret"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp server init",
      "en": "Initialize a new MCP server project",
      "zh": "初始化一个新的 MCP 服务器项目",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "init",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp server init ./my-mcp-server",
          "description": "在 ./my-mcp-server 目录下生成 MCP 服务器项目骨架，包含 Dockerfile 和配置模板",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要开发一个自定义 MCP 服务器来暴露业务系统的工具接口",
          "goal": "在当前目录下创建 MCP 服务器项目的基础文件结构",
          "expected": "生成项目目录，包含 Dockerfile、config.yaml 模板和入口代码文件"
        }
      ],
      "id": "docker-official-d23216fb4f81ccac",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/server/init/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp tools call",
      "en": "Call a tool",
      "zh": "直接调用指定的 MCP 工具",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "call",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp tools call",
          "description": "通过命令行直接调用某个已注册的 MCP 工具并获取返回结果",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要手动测试某个 MCP 工具是否正常响应，或通过命令行执行一次性的工具操作",
          "goal": "直接调用 MCP 工具并观察其返回数据",
          "expected": "工具执行并输出结果数据或错误信息"
        }
      ],
      "id": "docker-official-9a20c669555b2e1a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/tools/call/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp tools"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp tools count",
      "en": "Count tools",
      "zh": "统计当前可用的 MCP 工具总数",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "count",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp tools count",
          "description": "汇总所有已连接 MCP 服务器暴露的工具数量，输出一个总数",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要快速了解当前 MCP 连接提供了多少可用工具，评估能力覆盖范围",
          "goal": "获取当前所有已注册 MCP 服务器的工具总数",
          "expected": "输出一个数字，表示所有已连接服务器的工具合计数量"
        }
      ],
      "id": "docker-official-f0bbf32ac0dce19d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/tools/count/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp tools"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp tools inspect",
      "en": "Inspect a tool",
      "zh": "查看指定 MCP 工具的详细元数据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp tools inspect",
          "description": "输出指定工具的名称、描述、输入参数 schema（名称、类型、是否必填）和返回值格式",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在代码中调用某个 MCP 工具前，需要了解其参数类型和返回值结构",
          "goal": "查看指定工具的参数定义和返回值说明",
          "expected": "输出工具的完整元数据，包含参数列表、类型约束和返回值 schema"
        }
      ],
      "id": "docker-official-4be52484b722b9df",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/tools/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp tools"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp tools list",
      "en": "List tools",
      "zh": "列出所有可用的 MCP 工具",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp tools list",
          "description": "输出所有已注册 MCP 工具的名称、所属服务器和功能描述",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要浏览当前 MCP 环境提供的全部工具，以便决定使用哪个工具完成任务",
          "goal": "列出所有已注册 MCP 工具的名称和来源服务器",
          "expected": "输出工具列表表格，每行包含工具名、来源服务器和功能描述"
        }
      ],
      "id": "docker-official-8b4835d8b3ecc960",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/tools/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp tools"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp tools ls",
      "en": "List tools",
      "zh": "列出 Docker MCP 集成中所有可用的工具",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp tools ls",
          "description": "执行后列出当前 Docker MCP（Model Context Protocol）服务端暴露的全部工具名称与描述，便于确认可调用的工具清单",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者连接了 Docker MCP 服务端后，需要在调用工具前确认哪些工具可用、工具名称是否正确",
          "goal": "查看 MCP 服务端当前注册的工具列表，验证目标工具是否存在",
          "expected": "终端输出工具名称、描述及参数信息的列表"
        }
      ],
      "id": "docker-official-de8a751beccd0afd",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/tools/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp tools"
    },
    {
      "cat": "flag",
      "cmd": "docker model context create",
      "en": "Create a named Model Runner context",
      "zh": "创建一个命名的模型运行器上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model context create my-models",
          "description": "创建名为 my-models 的模型运行器上下文，用于将模型服务端点、认证信息等配置封装为一个可切换的命名环境",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队需要在不同模型服务（如本地 Ollama、远程 HuggingFace 推理端点）之间切换，每个端点有不同的地址和认证方式",
          "goal": "创建一个名为 my-models 的模型上下文，为后续切换模型运行环境做准备",
          "expected": "终端输出上下文创建成功的信息，之后可通过 docker model context ls 看到新创建的上下文"
        }
      ],
      "id": "docker-official-6cdc4939922f49c6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/context/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model context"
    },
    {
      "cat": "flag",
      "cmd": "docker model context inspect",
      "en": "Display detailed information about one or more contexts",
      "zh": "查看一个或多个模型运行器上下文的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model context inspect my-models",
          "description": "显示名为 my-models 的上下文的完整配置详情，包括端点地址、TLS 设置、认证方式等关键参数",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "切换模型上下文后模型调用失败，需要检查当前上下文的端点 URL 或 TLS 配置是否正确",
          "goal": "查看 my-models 上下文的完整配置，排查连接失败的原因",
          "expected": "终端以结构化格式输出该上下文的端点、TLS、认证等所有配置字段"
        }
      ],
      "id": "docker-official-7a41f4b003317016",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/context/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model context"
    },
    {
      "cat": "flag",
      "cmd": "docker model context ls",
      "en": "List Model Runner contexts",
      "zh": "列出所有已创建的模型运行器上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model context ls",
          "description": "列出本地所有模型运行器上下文，并高亮标记当前激活的上下文",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "环境中已创建多个模型上下文（如本地开发、生产推理），需要确认当前使用的是哪一个",
          "goal": "查看所有模型上下文及其激活状态，确认当前生效的是否符合预期",
          "expected": "终端以表格形式列出上下文名称、端点地址和激活标记（* 表示当前使用）"
        }
      ],
      "id": "docker-official-881c00657c19b615",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/context/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker model context list"
      ],
      "context": "docker model context"
    },
    {
      "cat": "flag",
      "cmd": "docker model context rm",
      "en": "Remove one or more Model Runner contexts",
      "zh": "删除一个或多个模型运行器上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "rm",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model context rm my-models",
          "description": "永久删除名为 my-models 的模型上下文，其配置信息将无法恢复",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个模型上下文对应的服务已下线或迁移，不再需要保留该上下文配置",
          "goal": "清理已废弃的 my-models 上下文，保持上下文列表整洁",
          "expected": "终端提示上下文已删除，再次执行 docker model context ls 不再显示该条目",
          "caveat": "删除前请先执行 docker model context ls 确认上下文名称，并用 docker model context use 切换到其他上下文",
          "warning": "删除后上下文配置不可恢复，若该上下文正被使用将导致模型调用失败"
        }
      ],
      "id": "docker-official-d5ffae8b4acf2049",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/context/rm/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker model context remove"
      ],
      "context": "docker model context"
    },
    {
      "cat": "flag",
      "cmd": "docker model context use",
      "en": "Set the active Model Runner context",
      "zh": "切换当前激活的模型运行器上下文",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "use",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker model context use my-models",
          "description": "将当前会话的模型运行环境切换到名为 my-models 的上下文，后续模型相关命令将使用该上下文配置的端点",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要从本地测试模型切换到远程 GPU 推理服务，所有后续模型调用应走新端点",
          "goal": "将 my-models 设为当前激活上下文，使模型命令发送到正确端点",
          "expected": "终端输出当前上下文已切换为 my-models 的确认信息，docker model context ls 中该上下文前出现 * 标记"
        }
      ],
      "id": "docker-official-84c1c65b286240e4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/model/context/use/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker model context"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins 1password",
      "en": "Manage the 1Password SDK plugin.",
      "zh": "管理 1Password SDK 密钥引擎插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "1password",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins 1password --help",
          "description": "显示 1Password 密钥引擎插件的子命令列表，包括启用、禁用和状态查看等操作",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要使用 1Password 作为 Docker 密钥管理的后端，但不确定有哪些可用子命令和选项",
          "goal": "查看 1Password 插件支持的管理操作，确认启用/禁用等子命令用法",
          "expected": "终端输出 1password 命名空间下的所有可用子命令及参数说明"
        }
      ],
      "id": "docker-official-0aaea4f7c69abc01",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/1password/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass plugins"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins disable",
      "en": "Disable a secrets engine plugin.",
      "zh": "禁用一个密钥引擎插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins disable 1password",
          "description": "禁用名为 1password 的密钥引擎插件，之后该插件不再参与 Docker 密钥的加解密流程",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "1Password 插件出现兼容性问题或需要临时切换到其他密钥后端，必须停用该插件",
          "goal": "停用 1password 密钥插件，确保密钥操作不再经过该引擎",
          "expected": "终端提示插件已禁用，后续密钥读写操作不再使用该插件",
          "caveat": "禁用前请通过 docker pass plugins ls 确认插件名称，并检查是否有服务依赖该插件管理密钥",
          "warning": "禁用后依赖该插件的密钥读取命令将失败，请确认应用不依赖该插件提供的密钥"
        }
      ],
      "id": "docker-official-bb4461ce29cd5ec4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/disable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass plugins"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins enable",
      "en": "Enable a secrets engine plugin.",
      "zh": "启用一个密钥引擎插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "enable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins enable 1password",
          "description": "启用名为 1password 的密钥引擎插件，使其参与 Docker 密钥的加解密流程",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "已完成 1Password 插件的配置和测试，需要将其正式接入 Docker 密钥管理体系",
          "goal": "启用 1password 插件作为 Docker 密钥引擎，使密钥操作可以使用该后端",
          "expected": "终端提示插件已启用，后续可通过 docker pass 命令使用该插件管理密钥"
        }
      ],
      "id": "docker-official-97a28ad48a8041a6",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/enable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass plugins"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins ls",
      "en": "List registered secrets engine plugins.",
      "zh": "列出所有已注册的密钥引擎插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins ls",
          "description": "列出当前 Docker 中所有已注册的密钥引擎插件，包括启用和禁用状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要确认系统中有哪些密钥插件可用、哪些处于启用状态，以便选择或排查密钥后端",
          "goal": "查看所有密钥引擎插件的注册状态，确认目标插件是否存在且启用",
          "expected": "终端以表格形式列出插件名称、状态（enabled/disabled）及版本信息"
        }
      ],
      "id": "docker-official-992a1aecdd9362f4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass plugins"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create cagent",
      "en": "Create a sandbox for cagent",
      "zh": "为 cagent 创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "cagent",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create cagent .",
          "description": "以当前目录作为工作区，创建一个供 cagent 使用的隔离沙箱容器，沙箱内可安全执行 AI 生成的代码",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 cagent 进行代码生成和自动化任务时，需要一个与宿主机隔离的执行环境，防止 AI 操作影响本地文件系统",
          "goal": "为 cagent 创建以当前目录为工作区的沙箱，确保代码执行在隔离环境中进行",
          "expected": "终端输出沙箱创建成功信息，包含沙箱名称或 ID，之后 cagent 可在该沙箱中安全运行"
        }
      ],
      "id": "docker-official-0a2697b5277098f0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/cagent/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create claude",
      "en": "Create a sandbox for claude",
      "zh": "为 Claude Code 创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "claude",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create claude .",
          "description": "以当前目录作为工作区，创建一个供 Claude Code 使用的隔离沙箱容器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 Claude Code 执行代码生成、文件编辑等任务时，需要沙箱环境确保操作不污染宿主机",
          "goal": "为 Claude Code 创建以当前目录为工作区的沙箱，隔离 AI 代码执行环境",
          "expected": "终端输出沙箱创建成功信息，Claude Code 可在该沙箱中安全执行代码操作"
        }
      ],
      "id": "docker-official-ce188cdf8a51d037",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/claude/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create codex",
      "en": "Create a sandbox for codex",
      "zh": "为 Codex（OpenAI）创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "codex",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create codex .",
          "description": "以当前目录作为工作区，创建一个供 Codex CLI 使用的隔离沙箱容器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 Codex 进行编程任务时，需要一个隔离环境来安全执行 AI 生成的 Shell 命令和代码",
          "goal": "为 Codex 创建沙箱环境，确保其代码执行不会影响宿主机系统",
          "expected": "终端输出沙箱创建成功信息，Codex 可在该沙箱中安全运行"
        }
      ],
      "id": "docker-official-ba61173c2d9896c7",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/codex/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create copilot",
      "en": "Create a sandbox for copilot",
      "zh": "为 GitHub Copilot 创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "copilot",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create copilot .",
          "description": "以当前目录作为工作区，创建一个供 GitHub Copilot 使用的隔离沙箱容器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 GitHub Copilot 的 CLI 或 agent 模式执行任务时，需要一个受控的隔离执行环境",
          "goal": "为 Copilot 创建以当前目录为工作区的沙箱，提供安全的代码执行空间",
          "expected": "终端输出沙箱创建成功信息，Copilot 可在该沙箱中隔离运行"
        }
      ],
      "id": "docker-official-36b4f524c3aded70",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/copilot/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create gemini",
      "en": "Create a sandbox for gemini",
      "zh": "为 Gemini CLI 创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "gemini",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create gemini .",
          "description": "以当前目录作为工作区，创建一个供 Gemini CLI 使用的隔离沙箱容器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 Gemini CLI 执行自动化编程任务时，需要通过沙箱隔离 AI 的操作范围",
          "goal": "为 Gemini CLI 创建沙箱环境，将代码执行限制在隔离容器内",
          "expected": "终端输出沙箱创建成功信息，Gemini CLI 可在该沙箱中安全运行"
        }
      ],
      "id": "docker-official-341a64435535ca8a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/gemini/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create kiro",
      "en": "Create a sandbox for kiro",
      "zh": "为 Kiro 创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "kiro",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create kiro .",
          "description": "以当前目录作为工作区，创建一个供 Kiro 使用的隔离沙箱容器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 Kiro 进行开发任务时，需要将 AI 的 Shell 和文件操作限制在隔离环境中",
          "goal": "为 Kiro 创建沙箱环境，确保其操作不会越界影响宿主机",
          "expected": "终端输出沙箱创建成功信息，Kiro 可在该沙箱中安全运行"
        }
      ],
      "id": "docker-official-93ce9dff2e6ed356",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/kiro/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create opencode",
      "en": "Create a sandbox for opencode",
      "zh": "为 OpenCode 创建一个 Docker 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "opencode",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create opencode .",
          "description": "以当前目录作为工作区，创建一个供 OpenCode 使用的隔离沙箱容器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "使用 OpenCode 执行编程和自动化任务时，需要通过容器沙箱限制其执行边界",
          "goal": "为 OpenCode 创建沙箱环境，隔离代码执行范围",
          "expected": "终端输出沙箱创建成功信息，OpenCode 可在该沙箱中安全运行"
        }
      ],
      "id": "docker-official-f1a28c9b1a995d09",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/opencode/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox create shell",
      "en": "Create a sandbox for shell",
      "zh": "创建一个通用 Shell 沙箱环境",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "shell",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox create shell .",
          "description": "以当前目录作为工作区，创建一个通用的交互式 Shell 沙箱容器，可在隔离环境中手动执行命令",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要在隔离环境中手动测试命令或脚本，但又不想影响宿主机文件系统和进程",
          "goal": "创建一个通用沙箱进入交互式 Shell，安全地测试和验证命令行为",
          "expected": "终端输出沙箱创建成功信息并进入沙箱内的交互式 Shell，命令执行均隔离在容器内"
        }
      ],
      "id": "docker-official-eeae89c103e9083c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/create/shell/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox create"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox network log",
      "en": "Show network logs",
      "zh": "查看 Docker 沙箱的网络日志",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "log",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox network log",
          "description": "显示所有沙箱的网络流量日志，包括请求的源地址、目标地址、协议类型和传输字节数",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "沙箱内的 AI 工具发出了意外的网络请求，需要审计其网络行为以排查安全问题",
          "goal": "查看沙箱网络活动记录，确认是否存在异常的对外连接或数据外传",
          "expected": "终端输出按时间排序的网络请求日志，包含源/目标 IP、端口、协议和数据量"
        }
      ],
      "id": "docker-official-8c512fed19131bd5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/network/log/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox network"
    },
    {
      "cat": "flag",
      "cmd": "docker sandbox network proxy",
      "en": "Manage proxy configuration for a sandbox",
      "zh": "管理沙箱的网络代理配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "proxy",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker sandbox network proxy my-sandbox --block-host example.com",
          "description": "为名为 my-sandbox 的沙箱配置网络代理规则，阻止对 example.com 的所有网络请求",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "AI 代码执行时不应访问某些外部域名（如内部服务、第三方 API），需要通过代理规则阻断这些请求",
          "goal": "阻止 my-sandbox 沙箱访问 example.com，防止代码执行时向该域名发送数据",
          "expected": "终端提示代理规则已生效，沙箱内对 example.com 的请求将被拦截并返回拒绝信息"
        }
      ],
      "id": "docker-official-3d7c98c1383ae7ab",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/sandbox/network/proxy/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker sandbox network"
    },
    {
      "cat": "flag",
      "cmd": "docker scout attestation add",
      "en": "Add attestation to image",
      "zh": "为镜像添加软件供应链证明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "add",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout attestation add myimage:latest",
          "description": "为本地镜像 myimage:latest 添加 SBOM 或来源证明（provenance attestation），记录构建过程和组件清单",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "镜像发布前需要附加构建来源证明和软件物料清单（SBOM），满足 SSDF 或 SLSA 供应链安全合规要求",
          "goal": "为 myimage:latest 添加证明签名，使其在推送到仓库后可供合规审计",
          "expected": "终端输出证明添加成功的确认信息，可通过 docker scout attestation list 查看已附加的证明",
          "prerequisites": "需要先登录 Docker Scout 并确保镜像已存在于本地"
        }
      ],
      "id": "docker-official-79926663e0680869",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/attestation/add/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout attest add"
      ],
      "context": "docker scout attestation"
    },
    {
      "cat": "flag",
      "cmd": "docker scout attestation get",
      "en": "Get attestation for image",
      "zh": "获取镜像的软件供应链证明详情",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout attestation get myimage:latest",
          "description": "获取镜像 myimage:latest 的证明内容，包括构建来源、SBOM 组件清单等供应链元数据",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "审计镜像的供应链安全性时，需要查看镜像的构建记录和依赖组件来源",
          "goal": "获取 myimage:latest 的证明详情，验证构建环境、构建参数和依赖组件完整性",
          "expected": "终端输出 JSON 格式的证明数据，包括构建者身份、构建时间、材料清单等供应链信息"
        }
      ],
      "id": "docker-official-9df8daad70631e5b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/attestation/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout attest get"
      ],
      "context": "docker scout attestation"
    },
    {
      "cat": "flag",
      "cmd": "docker scout attestation list",
      "en": "List attestations for image",
      "zh": "列出镜像上所有已附加的证明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout attestation list myimage:latest",
          "description": "列出 myimage:latest 镜像上当前附加的所有证明类型（如 SBOM、provenance）及其摘要",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "推送镜像到生产仓库前，需要确认所需的供应链证明是否已全部附加",
          "goal": "验证 myimage:latest 上的证明清单，确认 SBOM 和来源证明均已就位",
          "expected": "终端列出证明类型、摘要哈希和附加时间，可逐条核实合规性要求"
        }
      ],
      "id": "docker-official-cffff7f62b1ca9ed",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/attestation/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker scout attest list"
      ],
      "context": "docker scout attestation"
    },
    {
      "cat": "flag",
      "cmd": "docker scout cache df",
      "en": "Show Docker Scout disk usage",
      "zh": "查看 Docker Scout 缓存占用磁盘空间",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "df",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout cache df",
          "description": "显示 Docker Scout 本地缓存的总大小、各类缓存（SBOM 数据、漏洞数据库、分析结果）的占用明细",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "磁盘空间紧张，需要确认 Docker Scout 缓存占用了多少空间，判断是否需要清理",
          "goal": "查看 Scout 缓存的磁盘使用情况，为后续清理决策提供依据",
          "expected": "终端以表格形式输出缓存类型、数量和占用空间，按从大到小排列"
        }
      ],
      "id": "docker-official-897399d490afbb04",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/cache/df/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout cache"
    },
    {
      "cat": "flag",
      "cmd": "docker scout cache prune",
      "en": "Remove temporary or cached data",
      "zh": "清理 Docker Scout 的临时或缓存数据",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "prune",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout cache prune",
          "description": "删除 Docker Scout 本地存储的临时缓存文件，包括过期的漏洞数据和中间分析结果",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "Docker Scout 缓存占用过多磁盘空间，或缓存数据陈旧导致分析结果不准确",
          "goal": "清理所有临时缓存，释放磁盘空间并强制下次分析重新拉取最新数据",
          "expected": "终端输出已清理的数据量及释放的磁盘空间大小",
          "caveat": "清理前请执行 docker scout cache df 确认缓存大小，确保有足够网络带宽重新下载必要数据",
          "warning": "清理后下次镜像分析需要重新下载漏洞数据库，耗时较长且消耗网络带宽"
        }
      ],
      "id": "docker-official-4d9b8b9f521305ae",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/cache/prune/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout cache"
    },
    {
      "cat": "flag",
      "cmd": "docker scout integration configure",
      "en": "Configure or update a new integration configuration",
      "zh": "配置或更新 Docker Scout 的集成",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "configure",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout integration configure github",
          "description": "为 Docker Scout 配置 GitHub 集成，使镜像分析结果可直接回显到 GitHub 仓库的 PR 和 Security 页签",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队使用 GitHub 管理代码和镜像，需要将 Scout 的漏洞扫描结果自动同步到 GitHub 的 Security 面板",
          "goal": "配置 GitHub 集成的认证凭据和仓库映射，打通 Scout 分析结果到 GitHub 的推送链路",
          "expected": "终端进入交互式配置流程，完成后提示 GitHub 集成已配置并验证连通性"
        }
      ],
      "id": "docker-official-d576c039b956a44f",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/integration/configure/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout integration"
    },
    {
      "cat": "flag",
      "cmd": "docker scout integration delete",
      "en": "Delete a new integration configuration",
      "zh": "删除 Docker Scout 的一个集成配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "delete",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout integration delete github",
          "description": "删除名为 github 的 Docker Scout 集成配置，之后 Scout 不再向该集成推送分析结果",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "GitHub 集成不再使用或凭据已失效，需要移除该配置避免错误日志和无效连接尝试",
          "goal": "移除 github 集成配置，停止 Scout 向已失效的目标推送数据",
          "expected": "终端提示集成已删除，docker scout integration list 中不再显示该集成",
          "caveat": "删除前请执行 docker scout integration list 确认集成名称，并确认该集成确实不再需要",
          "warning": "删除后无法恢复集成配置，需重新执行 configure 才能恢复该集成"
        }
      ],
      "id": "docker-official-824b736ea60d89e5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/integration/delete/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout integration"
    },
    {
      "cat": "flag",
      "cmd": "docker scout integration list",
      "en": "List integrations which can be installed",
      "zh": "列出可安装或已配置的 Docker Scout 集成",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout integration list",
          "description": "列出所有支持的集成类型及当前已配置的集成状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要了解 Docker Scout 支持哪些外部平台集成（如 GitHub、GitLab、Slack），以便选择合适的通知和分析结果输出目标",
          "goal": "查看可用的集成类型和已配置的集成状态，确定下一步配置计划",
          "expected": "终端列出集成名称、类型和配置状态（已配置/未配置），已配置的集成显示目标详情"
        }
      ],
      "id": "docker-official-a1aa6fd2b7416998",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/integration/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout integration"
    },
    {
      "cat": "flag",
      "cmd": "docker scout policy publish",
      "en": "Package local Rego policies into an OCI bundle and push it to a registry (experimental)",
      "zh": "将本地 Rego 策略打包为 OCI 镜像并推送到仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "publish",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout policy publish myregistry/policies:latest",
          "description": "将当前目录的 Rego 合规策略文件打包为 OCI 制品，并推送到 myregistry/policies:latest，供 Docker Scout 拉取执行",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队定义了一套自定义的镜像合规策略（如禁止使用 root 用户、要求特定基础镜像），需要发布到内部仓库供 CI 和 Scout 统一使用",
          "goal": "将本地的 Rego 策略打包并推送至 myregistry/policies:latest，实现策略的版本化管理与分发",
          "expected": "终端显示打包和推送进度，完成后可在仓库中看到策略 OCI 制品",
          "prerequisites": "需要本地已编写 Rego 策略文件（.rego），且已登录目标镜像仓库",
          "caveat": "该命令标记为实验性功能，接口可能在未来版本中变更"
        }
      ],
      "id": "docker-official-ae5bc3ce9297b14c",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/policy/publish/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout policy"
    },
    {
      "cat": "flag",
      "cmd": "docker scout repo disable",
      "en": "Disable Docker Scout",
      "zh": "为指定仓库禁用 Docker Scout 分析",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "disable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout repo disable my/repository",
          "description": "对 Docker Hub 上的 my/repository 仓库禁用 Docker Scout 自动分析，之后该仓库不再触发漏洞扫描",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个仓库仅用于测试或已归档，不再需要 Scout 持续扫描并产生安全告警",
          "goal": "关闭 my/repository 仓库的 Scout 分析，停止产生不必要的安全报告",
          "expected": "终端提示该仓库的 Scout 分析已禁用，后续推送镜像不会再触发扫描",
          "caveat": "禁用前请确认该仓库的镜像确实不再需要安全扫描，建议在正式仓库保留 Scout 分析",
          "warning": "禁用后该仓库的镜像将不再获得漏洞扫描和安全建议，可能遗漏安全风险"
        }
      ],
      "id": "docker-official-c0f3522f78ae6f5e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/repo/disable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout repo"
    },
    {
      "cat": "flag",
      "cmd": "docker scout repo enable",
      "en": "Enable Docker Scout",
      "zh": "为仓库启用 Docker Scout 镜像安全分析",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "enable",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout repo enable my/repository",
          "description": "为指定仓库启用 Docker Scout，此后每次推送镜像都会自动触发漏洞扫描和安全策略评估，结果可在 Docker Scout 仪表板中查看",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队成员希望在推送镜像后自动获取漏洞分析报告，需要在 Docker Hub 上为仓库启用持续安全扫描",
          "goal": "为 Docker Hub 仓库 my/repository 启用 Docker Scout 持续分析",
          "expected": "终端输出确认仓库已启用 Docker Scout，后续推送的镜像将自动出现在 Scout 仪表板中并触发分析"
        }
      ],
      "id": "docker-official-d928f7008b487367",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/repo/enable/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout repo"
    },
    {
      "cat": "flag",
      "cmd": "docker scout repo list",
      "en": "List Docker Scout repositories",
      "zh": "列出已启用 Docker Scout 的仓库",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout repo list",
          "description": "列出当前账号下所有已注册并启用 Docker Scout 镜像分析的仓库",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "运维人员需要盘点当前账号下哪些仓库已启用镜像安全分析，以便确认覆盖范围或排查遗漏",
          "goal": "列出所有已注册 Docker Scout 的仓库清单",
          "expected": "终端输出已启用仓库列表，每行显示仓库名称及其启用状态"
        }
      ],
      "id": "docker-official-110c6122d066849b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/repo/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout repo"
    },
    {
      "cat": "flag",
      "cmd": "docker scout vex get",
      "en": "Get VEX attestation for image",
      "zh": "获取镜像的 VEX 漏洞可利用性声明",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker scout vex get nginx:latest",
          "description": "获取 nginx:latest 镜像的 VEX（Vulnerability Exploitability eXchange）证明，标明各 CVE 在该镜像上下文中的实际可利用性",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "安全工程师需要获取镜像的 VEX 声明，用于向合规团队证明特定 CVE 在当前镜像的运行环境中不可利用，从而豁免修复要求",
          "goal": "获取 nginx:latest 镜像的 VEX 证明文件以提交合规审核",
          "expected": "终端输出该镜像的 VEX 声明内容，每个 CVE 标注为 affected/not_affected，并附带判定依据"
        }
      ],
      "id": "docker-official-2691034db6d68e31",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/scout/vex/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker scout vex"
    },
    {
      "cat": "flag",
      "cmd": "docker trust key generate",
      "en": "Generate and load a signing key-pair",
      "zh": "生成镜像签名密钥对",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "generate",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust key generate alice",
          "description": "生成名为 alice 的公私钥对并自动加载到本地 Docker 信任存储中，私钥用于镜像签名，公钥用于验证",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "发布者需要为容器镜像签名以启用 Docker Content Trust，首先要生成签名密钥对作为身份凭证",
          "goal": "生成名为 alice 的镜像签名密钥对并加载到本地信任存储",
          "expected": "生成公私钥对，终端输出公钥内容和本地存储路径，后续可用该密钥进行 docker trust sign 操作"
        }
      ],
      "id": "docker-official-cda9dc17f19298a4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/key/generate/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust key"
    },
    {
      "cat": "flag",
      "cmd": "docker trust key load",
      "en": "Load a private key file for signing",
      "zh": "加载签名私钥文件到信任存储",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "load",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust key load alice.pem",
          "description": "从 PEM 格式的私钥文件 alice.pem 中读取私钥并加载到 Docker 信任存储，使其可用于镜像签名",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "从备份恢复签名环境，或将其他机器上生成的签名私钥导入到当前 Docker 客户端以继续签名操作",
          "goal": "将 alice.pem 私钥文件加载到 Docker 信任存储中以恢复签名能力",
          "expected": "私钥成功加载并关联到对应名称，后续可直接使用签名者名称进行镜像签名"
        }
      ],
      "id": "docker-official-f2e38c410e353a9e",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/key/load/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust key"
    },
    {
      "cat": "flag",
      "cmd": "docker trust signer add",
      "en": "Add a signer",
      "zh": "为仓库添加镜像签名者",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "add",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust signer add alice example/trust-demo --key alice.crt",
          "description": "使用 alice 的公钥证书 alice.crt 将其注册为 example/trust-demo 仓库的签名者，之后 alice 签名的镜像将被该仓库信任",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "仓库管理员需要将新开发者添加为仓库的合法签名者，使其推送的签名镜像能被团队拉取时自动验证通过",
          "goal": "将 alice 添加为 example/trust-demo 仓库的签名者",
          "expected": "终端确认 alice 已添加为签名者，仓库的信任元数据（签名者列表和公钥信息）更新"
        }
      ],
      "id": "docker-official-f0409b9cf006ca85",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/signer/add/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust signer"
    },
    {
      "cat": "flag",
      "cmd": "docker trust signer remove",
      "en": "Remove a signer",
      "zh": "移除仓库的镜像签名者",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "remove",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker trust signer remove alice example/trust-demo",
          "description": "从 example/trust-demo 仓库中移除签名者 alice，此后 alice 签名的镜像将不再被该仓库信任",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者离职或签名密钥泄露后，管理员需要撤销其对该仓库的签名权限，防止后续使用该签名者身份推送不受信任的镜像",
          "goal": "从 example/trust-demo 仓库撤销签名者 alice 的签名权限",
          "expected": "终端确认 alice 已从仓库签名者列表中移除，仓库信任元数据更新",
          "caveat": "执行前确认该签名者已停止在 CI/CD 流水线中使用，且已有替代签名者",
          "warning": "移除后该签名者签名的旧镜像仍保留已有签名，但未来该签名者推送的新镜像将不被仓库信任。建议先在 CI 中停止使用该签名者"
        }
      ],
      "id": "docker-official-642535dbd8babb3a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/trust/signer/remove/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker trust signer"
    },
    {
      "cat": "flag",
      "cmd": "docker buildx history inspect attachment",
      "en": "Inspect a build record attachment",
      "zh": "查看构建记录的附件详情",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "attachment",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker buildx history inspect attachment --platform linux/amd64",
          "description": "查看当前构建记录中 linux/amd64 平台对应构建产物的附件信息，包括镜像摘要、构建参数等元数据",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "多平台构建完成后需要查看特定平台（如 linux/amd64）构建产物的详细元数据，以确认镜像摘要和构建参数",
          "goal": "查看当前构建记录中 linux/amd64 平台的构建附件详细信息",
          "expected": "输出该平台构建附件的详细内容，包括镜像 manifest 摘要、构建时间、平台信息和构建器名称"
        }
      ],
      "id": "docker-official-780402be8a3855a8",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/buildx/history/inspect/attachment/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker buildx history inspect"
    },
    {
      "cat": "flag",
      "cmd": "docker compose bridge transformations create",
      "en": "Create a new transformation",
      "zh": "创建 Compose 桥接格式转换规则",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "create",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose bridge transformations create ./docker-compose.yml",
          "description": "基于 ./docker-compose.yml 文件创建新的格式转换规则，用于将其他编排格式与 Compose 格式互转",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "从外部容器编排平台迁移到 Docker Compose 时，需要创建自定义转换规则来将原平台的配置文件转换为 Compose 格式",
          "goal": "基于现有 Compose 文件创建桥接转换规则以支持格式互转",
          "expected": "转换规则创建成功，终端输出规则名称及创建确认，后续可用该规则执行格式转换"
        }
      ],
      "id": "docker-official-14253dc16b4a6b4b",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/bridge/transformations/create/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker compose bridge transformations"
    },
    {
      "cat": "flag",
      "cmd": "docker compose bridge transformations list",
      "en": "List available transformations",
      "zh": "列出 Compose 桥接格式转换规则",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker compose bridge transformations list",
          "description": "列出当前 Docker 环境中所有可用的 Compose 桥接格式转换规则及其名称和状态",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "在配置格式迁移之前需要查看已有哪些转换规则可用，避免重复创建或了解现有转换能力",
          "goal": "列出所有已安装的 Compose 桥接转换规则",
          "expected": "终端输出转换规则列表，每行显示规则名称和简要描述"
        }
      ],
      "id": "docker-official-1f4738086493fb60",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/compose/bridge/transformations/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker compose bridge transformations ls"
      ],
      "context": "docker compose bridge transformations"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization build get",
      "en": "Get details of a build",
      "zh": "获取 Docker Hub 自定义镜像的构建详情",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "get",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization build get myorg/myimage my-custom v1.0.0",
          "description": "查看仓库 myorg/myimage 中名为 my-custom 的自定义化项目里 v1.0.0 构建的详细状态和元数据",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者为 Docker Hub 镜像创建自定义化构建后，需要查看某次构建是否成功、耗时多久以及产出的镜像摘要",
          "goal": "查看 myorg/myimage 仓库的 my-custom 自定义化中 v1.0.0 构建详情",
          "expected": "输出构建详情，包括构建状态（成功/失败/进行中）、开始和结束时间、输出镜像摘要"
        }
      ],
      "id": "docker-official-4313e40605eb6990",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/build/get/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization build"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization build list",
      "en": "List builds of a customization",
      "zh": "列出 Docker Hub 自定义镜像的构建历史",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "list",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization build list myorg/myimage my-custom",
          "description": "列出仓库 myorg/myimage 中 my-custom 自定义化项目的所有历史构建记录",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "需要查看某个自定义化项目的完整构建历史，以了解构建频率、成功率和各次构建的状态",
          "goal": "列出 my-custom 自定义化的所有构建记录",
          "expected": "输出构建历史列表，每行包含构建 ID、状态和时间戳，按时间倒序排列"
        }
      ],
      "id": "docker-official-351cbb488bc86b28",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/build/list/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization build"
    },
    {
      "cat": "flag",
      "cmd": "docker dhi customization build logs",
      "en": "Get logs of a build",
      "zh": "获取 Docker Hub 自定义镜像的构建日志",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "logs",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker dhi customization build logs myorg/myimage my-custom v1.0.0",
          "description": "获取仓库 myorg/myimage 中 my-custom 自定义化项目 v1.0.0 构建的完整日志输出",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "自定义化构建失败后需要查看详细日志来排查错误原因，如依赖下载失败、构建步骤超时或配置错误",
          "goal": "获取 v1.0.0 构建的日志以排查构建失败原因",
          "expected": "输出构建的完整日志流，包含每一步的执行输出和错误信息"
        }
      ],
      "id": "docker-official-cce079c63e5e4e4d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/dhi/customization/build/logs/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker dhi customization build"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog server add",
      "en": "Add MCP servers to a catalog",
      "zh": "将 MCP 服务器添加到目录",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "add",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog server add myorg/catalog:latest --server myorg/server:v1",
          "description": "将 MCP 服务器 myorg/server:v1 添加到 OCI 目录 myorg/catalog:latest 中，供团队成员发现和使用",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "管理员发布了新的 MCP 服务器镜像后，需要将其注册到团队共享的 MCP 目录中，方便其他开发者发现和使用",
          "goal": "将 myorg/server:v1 服务器添加到 myorg/catalog:latest 目录",
          "expected": "服务器成功注册到目录，终端输出确认信息，后续可通过 docker mcp catalog server ls 查看"
        }
      ],
      "id": "docker-official-e92a868413f04ce0",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/server/add/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog server inspect",
      "en": "Inspect a server in a catalog",
      "zh": "查看目录中 MCP 服务器的详细信息",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "inspect",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog server inspect myorg/catalog:latest my-server",
          "description": "查看 myorg/catalog:latest 目录中名为 my-server 的 MCP 服务器的完整配置、工具列表和能力描述",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者在决定使用目录中的某个 MCP 服务器之前，需要先了解其提供的工具、参数和通信协议，以判断是否满足需求",
          "goal": "查看目录中 my-server 服务器的详细配置和能力",
          "expected": "输出服务器的完整元数据，包括名称、版本、提供的工具列表、每项工具的参数描述"
        }
      ],
      "id": "docker-official-683c470a7a0a5ff5",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/server/inspect/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp catalog server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog server ls",
      "en": "List servers in a catalog",
      "zh": "列出目录中的所有 MCP 服务器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog server ls myorg/catalog:latest",
          "description": "列出 myorg/catalog:latest 目录中已注册的所有 MCP 服务器名称和版本",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "用户需要浏览团队 MCP 目录中当前有哪些可用的服务器，以便选择合适的能力集成到自己的工具链中",
          "goal": "列出 myorg/catalog:latest 目录中的所有 MCP 服务器",
          "expected": "输出服务器列表，每行显示服务器名称和版本号，可能包含简要描述"
        }
      ],
      "id": "docker-official-fac6f933c623b63a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/server/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp catalog server list"
      ],
      "context": "docker mcp catalog server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp catalog server remove",
      "en": "Remove MCP servers from a catalog",
      "zh": "从目录中移除 MCP 服务器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "remove",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp catalog server remove myorg/catalog:latest --name my-server",
          "description": "从 myorg/catalog:latest 目录中移除名为 my-server 的 MCP 服务器，使其不再被目录使用者发现",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "MCP 服务器已过时或存在安全漏洞需要下架，管理员需要将其从共享目录中移除，防止团队成员继续使用",
          "goal": "从目录中移除过时的 my-server 服务器",
          "expected": "终端确认服务器已从目录中移除，后续查询目录时不再显示该服务器",
          "caveat": "执行前检查是否有活跃的配置引用了该服务器，提前通知使用者迁移",
          "warning": "移除后所有依赖该目录条目的配置和应用将无法再发现此服务器，可能导致工具调用失败"
        }
      ],
      "id": "docker-official-dc9ef0d8ccfd466a",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/catalog/server/remove/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp catalog server rm"
      ],
      "context": "docker mcp catalog server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile server add",
      "en": "Add MCP servers to a profile",
      "zh": "将 MCP 服务器添加到个人配置",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "add",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile server add my-profile --server myorg/server:v1",
          "description": "将 MCP 服务器 myorg/server:v1 添加到名为 my-profile 的配置中，使该配置可调用此服务器提供的工具",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "开发者配置好自己的开发环境后，需要将常用 MCP 服务器添加到个人配置文件中，以便 AI 助手在编码时调用这些工具",
          "goal": "将 myorg/server:v1 添加到 my-profile 个人配置中",
          "expected": "服务器成功添加到配置，终端确认添加完成，使用该配置时将自动加载此服务器的工具"
        }
      ],
      "id": "docker-official-a82bf60108b82d2d",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/server/add/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker mcp profile server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile server ls",
      "en": "List servers across profiles",
      "zh": "列出所有配置中的 MCP 服务器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "ls",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile server ls",
          "description": "列出当前 Docker 环境中所有配置（profile）及其各自包含的 MCP 服务器",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "管理多个项目时需要查看各配置中分别挂载了哪些 MCP 服务器，以便确认环境隔离是否正确、避免不同项目间的工具污染",
          "goal": "列出所有配置及其包含的 MCP 服务器分布",
          "expected": "输出按配置分组的服务器列表，每组显示配置名称及其下的服务器名称与版本"
        }
      ],
      "id": "docker-official-80e4b8c3e0f31fbb",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/server/ls/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp profile server list"
      ],
      "context": "docker mcp profile server"
    },
    {
      "cat": "flag",
      "cmd": "docker mcp profile server remove",
      "en": "Remove MCP servers from a profile",
      "zh": "从配置中移除 MCP 服务器",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "remove",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker mcp profile server remove my-profile --name my-server",
          "description": "从配置 my-profile 中移除名为 my-server 的 MCP 服务器，此后使用该配置时将不再加载此服务器",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "某个 MCP 服务器不再需要或已被替代，需要从配置中清理以精简工具列表，避免不必要的资源占用和权限暴露",
          "goal": "从 my-profile 配置中移除不再使用的 my-server 服务器",
          "expected": "终端确认服务器已从配置中移除，后续使用该配置时不再包含此服务器的工具",
          "caveat": "执行前确认该服务器确实不再被当前项目的工作流需要",
          "warning": "移除后该配置下的 AI 助手将无法调用此服务器的工具，确认不再使用后再执行"
        }
      ],
      "id": "docker-official-6c23301d61cc8358",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/mcp/profile/server/remove/",
          "checkedAt": "2026-07-13"
        }
      ],
      "aliases": [
        "docker mcp profile server rm"
      ],
      "context": "docker mcp profile server"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins 1password purge",
      "en": "Disable the plugin and remove the stored 1Password service account token.",
      "zh": "清除 1Password 凭据插件及令牌",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "purge",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins 1password purge",
          "description": "禁用 Docker 凭据助手的 1Password 插件，并删除本地存储的 1Password 服务账号令牌",
          "copyable": false,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "不再需要使用 1Password 管理 Docker 凭据，或者需要更换 1Password 服务账号，必须先清除旧令牌和插件状态",
          "goal": "彻底禁用 1Password 凭据插件并清除本地存储的令牌",
          "expected": "插件被禁用，本地令牌文件被删除，终端输出清除完成确认",
          "caveat": "执行前确认没有正在进行的镜像推送操作依赖此插件，并备份当前凭据配置",
          "warning": "清除后所有依赖 1Password 凭据的 docker login 和镜像推送操作将失败，需要重新 setup 或改用其他凭据存储方式"
        }
      ],
      "id": "docker-official-86b0fa6fd7373af4",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/1password/purge/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass plugins 1password"
    },
    {
      "cat": "flag",
      "cmd": "docker pass plugins 1password setup",
      "en": "Set the 1Password service account token and enable the plugin.",
      "zh": "设置 1Password 凭据插件",
      "evidenceStatus": "verified",
      "keywords": [
        "docker",
        "setup",
        "官方命令",
        "命令参考"
      ],
      "examples": [
        {
          "value": "docker pass plugins 1password setup",
          "description": "启动交互式设置流程，输入 1Password 服务账号令牌以启用凭据插件，使 Docker CLI 可通过 1Password 安全存储和获取注册表凭据",
          "copyable": true,
          "authorship": "editorial",
          "evidenceTier": "first-party",
          "adaptation": "adapted",
          "sourceType": "manual",
          "sourceIds": [
            "docker-docs"
          ],
          "scenario": "团队首次配置 Docker 凭据安全存储，需要使用 1Password 集中管理所有开发者的注册表登录凭据，避免凭据明文散落在各机器上",
          "goal": "设置 1Password 服务账号令牌并启用 Docker 凭据插件",
          "expected": "启动交互式令牌输入流程，完成后插件生效，后续 docker login 凭据将安全存储在 1Password 中",
          "prerequisites": "需要有效的 1Password 服务账号令牌（Service Account Token）"
        }
      ],
      "id": "docker-official-e33e32f0c040fbdc",
      "evidenceRefs": [
        {
          "sourceId": "docker-docs",
          "claims": [
            "existence",
            "semantics"
          ],
          "locator": "https://docs.docker.com/reference/cli/docker/pass/plugins/1password/setup/",
          "checkedAt": "2026-07-13"
        }
      ],
      "context": "docker pass plugins 1password"
    }
  ]
};
