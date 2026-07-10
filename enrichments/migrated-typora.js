(function registerMigratedtyporaEnrichments(globalScope) {
  "use strict";
  const modules = globalScope.CHEATSHEET_ENRICHMENT_MODULES ||= {};
  modules["typora"] = { ...(modules["typora"] || {}), ...{
  "id:55c6c5a47338ccfe": {
    "examples": [
      {
        "value": "# 一级标题",
        "description": "Markdown 一级标题的输入形式"
      }
    ]
  },
  "id:00d23027eb3ed071": {
    "examples": [
      {
        "value": "**重要内容**",
        "description": "Markdown 加粗文本的输入形式"
      }
    ]
  },
  "id:198d4e7754c88653": {
    "examples": [
      {
        "value": "[项目主页](https://example.com)",
        "description": "Markdown 超链接的输入形式"
      }
    ]
  },
  "id:6b03e4fa2cc02263": {
    "examples": [
      {
        "value": "| 名称 | 状态 |\n| --- | --- |\n| 示例 | 完成 |",
        "description": "一个两列表格的 Markdown 输入"
      }
    ]
  },
  "id:8ff5d4ebf926ac5b": {
    "examples": [
      {
        "value": "```js\nconsole.log('hello');\n```",
        "description": "带语言标记的 JavaScript 代码块"
      }
    ]
  },
  "id:5de8c2eaa7f4f55a": {
    "examples": [
      {
        "value": "按 Cmd+/（Win/Linux 为 Ctrl+/）",
        "description": "在所见即所得和 Markdown 源代码模式之间切换",
        "copyable": false
      }
    ]
  },
  "id:34740a0b6b63d659": {
    "examples": [
      {
        "value": "- 第一项\n- 第二项",
        "description": "Markdown 无序列表的输入形式"
      }
    ]
  },
  "id:c17f2a3e2652e1fd": {
    "examples": [
      {
        "value": "`npm test`",
        "description": "Markdown 行内代码的输入形式"
      }
    ]
  },
  "id:ccf9f836058feaa3": {
    "examples": [
      {
        "value": "![替代文字](./images/example.png)",
        "description": "Markdown 图片的输入形式"
      }
    ]
  },
  "id:0c90d93b678482f4": {
    "examples": [
      {
        "value": "按 Cmd+Shift+V（Win/Linux 为 Ctrl+Shift+V）",
        "description": "粘贴为纯文本，避免带入原格式",
        "copyable": false
      }
    ]
  }
} };
}(typeof window !== "undefined" ? window : globalThis));
