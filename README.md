# 長輩也能輕鬆操作的手機、電腦與智慧手錶

純 HTML + CSS + JavaScript 做的教學／操作網頁（可安裝為 PWA），混合「大按鈕直接操作」與「一步一步帶我做」兩種方式。

## 功能

- **六大分類，共 43 個教學**
  - 📱 手機（12）：電話、訊息、視訊、位置、拍照、字體、上網、截圖、Wi‑Fi、藍牙、儲存空間、尋找手機、行動支付等
  - 💻 電腦（9）：Browser、截圖、字體、Wi‑Fi、藍牙、搜尋、防詐騙、輸入法切換、解析度
  - ⌚ 智慧手錶（12）：通訊、健康資料（心率、血氧、ECG、睡眠）、鬧鐘、SOS、找手機、遙控相機
  - 🛡️ 安心求助（2）：防詐騙、緊急電話
  - 🌤️ 生活實用（4）：查天氣、查公車、線上掛號、疫苗接種紀錄
  - 🔧 壞掉了怎麼辦（4）：當機重開、網路不通、APP 閃退、忘記密碼
- **快速求助**：家人一鍵撥號／簡訊、110 / 119 / 112 / 165 緊急與反詐騙電話
- **一步一步模式**：大字、大按鈕、上一步／下一步、可選自動朗讀
- **記住設定**：字級、朗讀開關、深色／淺色模式、家人電話都存在本機
- **離線可用**：PWA + Service Worker，安裝到手機桌面後沒網路也能看

## 設計重點（給長輩使用）

- 大按鈕（最低高度約 96px）與大字體
- 高對比，可切換**深色／淺色模式**（第一次跟著系統設定，之後記住選擇）
- 字級切換：小 / 中 / 大（預設大）
- 每一步都有大數字編號，點「一步一步帶我做」會逐步引導
- 任務按鈕點下去，步驟直接顯示在按鈕下方，不用往下捲

## 開啟方式

### 線上使用（GitHub Pages）

直接用手機、電腦或平板的瀏覽器打開：

**https://chang036.github.io/Simplified-3C-Product-Manual/**

不需要安裝任何東西。支援「加入主畫面」安裝成 app，離線也能使用。

這個網站已設定自動部署：之後只要把修改推送到 `main` 分支，GitHub Actions 就會自動更新線上版本。

### 本機預覽（開發用）

```bash
python -m http.server 8766
```

然後開啟 <http://localhost:8766/>。

> 提醒：定位分享功能需要 HTTPS 或 localhost 才能運作。用區網 IP（例如 `http://192.168.1.x:8766`）開啟時，瀏覽器會阻擋定位。

## 如何自行新增教學

所有教學資料都在 **`js/tasks.js`**，按鈕與分類由程式自動產生，不用改 `index.html`。

1. 若要新增分類，在 `categories` 陣列加一筆：

   ```js
   { id: "life", icon: "🌤️", name: "生活實用", sub: "天氣 / 公車", lead: "說明文字" }
   ```

2. 在 `tasks` 物件加一筆（_id 用英文底線，例如 `weather_alert_news`_）：

   ```js
   weather_alert_news: {
     category: "life",
     icon: "📰",
     title: "查颱風新聞",
     summary: "一句話說明。",
     tip: "小提醒，可省略。",
     systems: [
       {
         id: "ios",
         name: "蘋果手機（iPhone）",
         shortName: "iPhone",
         icon: "🍎",
         steps: ["第一步。", "第二步。"],
       },
       {
         id: "android",
         name: "安卓手機（Android）",
         shortName: "Android",
         icon: "🤖",
         steps: ["第一步。", "第二步。"],
       },
     ],
   },
   ```

   `systems` 的 `id` 可用 `ios`、`android`、`windows`、`mac`、`any` 等；步驟會自動編號。文字中的 `{{family}}` 會換成設定的第一位家人名字。

3. 若要加示意影片，在任務加上：

   ```js
   video: { title: "示意影片", embedUrl: "https://www.youtube.com/embed/影片ID" },
   ```

   （沒有 `video` 就不顯示。）

> 修改後若看到舊畫面，請把 `index.html` 與 `script.js` 裡的 `?v=` 版本號加一，例如 `?v=noaction2`，或按 Ctrl+F5 強制重新整理。

## 主要檔案

- `index.html` / `styles.css` / `script.js`：頁面、樣式、互動邏輯
- `js/tasks.js`：所有分類與教學內容（最常修改）
- `js/store.js`：本機設定與家人電話
- `js/speech.js`：語音朗讀
- `js/device.js`：裝置自動判斷
- `manifest.webmanifest` / `sw.js` / `icons/`：PWA 安裝與離線快取
- `tools/make_icons.py`：重新產生 PWA 圖示
- `.github/workflows/static.yml`：推送到 `main` 時自動部署 GitHub Pages
