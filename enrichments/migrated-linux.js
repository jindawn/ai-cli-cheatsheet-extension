(function registerMigratedlinuxEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["linux"] = { ...(modules["linux"] || {}), ...{
  "id:linux-rm-rf": {
    "examples": [
      {
        "value": "rm -rf ./build-temp",
        "description": "递归删除示例临时目录且不再确认",
        "warning": "不可恢复；执行前先用 ls 检查目标路径"
      }
    ]
  },
  "id:linux-grep-r": {
    "examples": [
      {
        "value": "grep -r \"TODO\" ./src",
        "description": "递归查找 src 目录中包含 TODO 的行",
        "sourceType": "quasi-official",
        "sourceUrl": "https://www.man7.org/linux/man-pages/man1/grep.1.html"
      }
    ]
  },
  "id:linux-find-name": {
    "examples": [
      {
        "value": "find . -name \"*.log\"",
        "description": "从当前目录递归查找所有 .log 文件",
        "sourceType": "quasi-official",
        "sourceUrl": "https://www.man7.org/linux/man-pages/man1/find.1.html"
      }
    ]
  },
  "id:linux-tar-xzf": {
    "examples": [
      {
        "value": "tar -xzf archive.tar.gz",
        "description": "把 gzip 压缩的 tar 归档解压到当前目录"
      }
    ]
  },
  "id:linux-sed": {
    "keywords": [
      "替换",
      "取代",
      "文本替换",
      "批量替换",
      "正则替换"
    ],
    "examples": [
      {
        "value": "sed 's/旧文本/新文本/g' file.txt",
        "description": "预览把每行所有“旧文本”替换为“新文本”的结果"
      },
      {
        "value": "sed -i 's/旧文本/新文本/g' file.txt",
        "description": "直接修改文件中的匹配文本",
        "warning": "先运行不带 -i 的命令预览结果，并备份重要文件",
        "platformValues": {
          "mac": "sed -i '' 's/旧文本/新文本/g' file.txt",
          "linux": "sed -i 's/旧文本/新文本/g' file.txt"
        }
      }
    ]
  },
  "id:linux-awk": {
    "examples": [
      {
        "value": "awk '{print $1}' access.log",
        "description": "输出 access.log 每一行的第一列"
      }
    ]
  },
  "id:linux-tail-f": {
    "examples": [
      {
        "value": "tail -f app.log",
        "description": "持续显示 app.log 新追加的日志内容"
      }
    ]
  },
  "id:linux-chmod-x": {
    "examples": [
      {
        "value": "chmod +x scripts/deploy.sh",
        "description": "为部署脚本添加可执行权限",
        "warning": "会修改文件权限，请确认目标脚本可信且路径正确"
      }
    ]
  },
  "id:linux-ps-aux": {
    "examples": [
      {
        "value": "ps aux | grep node",
        "description": "列出进程并筛选包含 node 的进程"
      }
    ]
  },
  "id:linux-curl": {
    "examples": [
      {
        "value": "curl -i https://example.com/health",
        "description": "请求健康检查接口并显示响应头"
      }
    ]
  },
  "id:linux-ls-la": {
    "examples": [
      {
        "value": "ls -la",
        "description": "长格式列出当前目录所有文件（含隐藏文件），查看权限、大小和修改时间"
      }
    ]
  },
  "id:linux-cd": {
    "examples": [
      {
        "value": "cd ~/projects/app",
        "description": "切换当前工作目录到指定路径"
      }
    ]
  },
  "id:linux-cp-r": {
    "examples": [
      {
        "value": "cp -r src-dir backup-dir",
        "description": "递归复制整个目录及其内容到新位置"
      }
    ]
  },
  "id:linux-mv": {
    "examples": [
      {
        "value": "mv old.txt new.txt",
        "description": "重命名文件，或把文件移动到别的目录"
      }
    ]
  },
  "id:linux-rm": {
    "examples": [
      {
        "value": "rm temp.log",
        "description": "删除指定文件",
        "warning": "删除后不可恢复，执行前确认文件路径"
      }
    ]
  },
  "id:linux-cat": {
    "examples": [
      {
        "value": "cat README.md",
        "description": "把文件内容一次性输出到终端"
      }
    ]
  },
  "id:linux-less": {
    "examples": [
      {
        "value": "less app.log",
        "description": "分页浏览大文件，支持上下翻页和 / 搜索"
      }
    ]
  },
  "id:linux-tail": {
    "examples": [
      {
        "value": "tail -n 50 app.log",
        "description": "查看文件末尾若干行，常用于看最新日志"
      }
    ]
  },
  "id:linux-head": {
    "examples": [
      {
        "value": "head -n 20 README.md",
        "description": "查看文件开头若干行"
      }
    ]
  },
  "id:linux-chmod": {
    "examples": [
      {
        "value": "chmod 644 notes.txt",
        "description": "设置文件权限（644 = 所有者读写、其他人只读）",
        "warning": "会改变文件访问权限，确认数值与目标文件正确"
      }
    ]
  },
  "id:linux-find": {
    "examples": [
      {
        "value": "find . -name \"*.log\"",
        "description": "从当前目录递归查找匹配名字的文件"
      }
    ]
  },
  "id:linux-df": {
    "examples": [
      {
        "value": "df -h",
        "description": "以人类可读单位查看各磁盘分区的空间使用情况"
      }
    ]
  },
  "id:linux-du": {
    "examples": [
      {
        "value": "du -sh ./node_modules",
        "description": "汇总查看某个目录占用的磁盘空间"
      }
    ]
  },
  "id:linux-tar": {
    "examples": [
      {
        "value": "tar -czf backup.tar.gz ./src",
        "description": "把目录打包成 .tar.gz 压缩归档"
      }
    ]
  },
  "id:linux-ssh": {
    "examples": [
      {
        "value": "ssh user@example.com",
        "description": "登录到远程主机的命令行"
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
