# 長輩也能輕鬆操作的手機、電腦與智慧手錶

純 HTML + CSS + JavaScript 做的教學／操作網頁，混合「簡單大按鈕操作」與「一步一步教學」兩種方式。

## 功能

- **手機**：支援蘋果手機（iPhone）與安卓手機（Android）
  - 打電話給家人、傳訊息給家人、拍照
- **電腦**：支援 Windows 與 Mac
  - 開啟網頁、截圖、調整字體大小
- **智慧手錶**：支援 Apple Watch 與安卓手錶（Wear OS）
  - 打電話 / 傳訊息、看健康數據、設定鬧鐘

## 設計重點（給長輩使用）

- 大按鈕（最低高度約 96px）與大字體
- 黑底白字、高對比
- 字級切換：Ａ小 / Ａ中 / Ａ大（預設大，localStorage 會記住上次選擇）
- 每一步都有大數字編號

## 執行方式

```bash
cd projects/simple-device-guide
python -m http.server 8765
```

然後開啟 http://localhost:8765

## 如何自行新增項目與示意影片

- **新增教學項目**：編輯 `script.js` 的 `tasks` 物件，例如新增一個任務：

  ```js
  const tasks = {
    // ...
    "手機鎖定": {
      category: "phone",
      icon: "🔒",
      title: "手機鎖定",
      video: null,
      systems: [ ...步驟... ],
    },
  };
  ```

  然後在 `index.html` 的對應分類（如 `#phone`）的 `.task-grid` 內新增按鈕，例如：

  ```html
  <button type="button" class="task-btn" data-task="手機鎖定"><span class="task-emoji">🔒</span>手機鎖定</button>
  ```

- **加上示意影片**：在任務資料加上 `video`：

  ```js
  video: {
    title: "示意影片",
    embedUrl: "https://www.youtube.com/embed/你的影片ID",
  },
  ```

  （`video` 可以留 `null`，不顯示影片。）

- **調整內容**：`script.js` 的 `tasks` 裡每個項目都有 `systems`（系統）、`steps`（步驟）、`video`（影片）。
