/* ============================================================
   教學內容資料
   ------------------------------------------------------------
   每個任務的欄位：
     category  分類 id（phone / computer / watch / safety）
     icon      圖示
     title     標題
     summary   一句話說明
     video     示意影片（可為 null）
     tip       小提醒（可省略）
     quickCall 需要時可直接撥打的電話（可省略）
     systems   裝置版本，每個版本有 steps 步驟陣列
   步驟文字中的 {{family}} 會換成設定的第一位家人名字。
   ============================================================ */

export const categories = [
  {
    id: "phone",
    icon: "📱",
    name: "手機",
    sub: "iPhone / Android",
    lead: "選一個要教您的動作，我們會一步一步說明。",
  },
  {
    id: "computer",
    icon: "💻",
    name: "電腦",
    sub: "Windows / Mac",
    lead: "選一個要教您的動作，我們會一步一步說明。",
  },
  {
    id: "watch",
    icon: "⌚",
    name: "智慧手錶",
    sub: "Apple Watch / Wear OS",
    lead: "選一個要教您的動作，我們會一步一步說明。",
  },
  {
    id: "safety",
    icon: "🛡️",
    name: "安心求助",
    sub: "防詐騙 / 緊急電話",
    lead: "遇到可疑電話或緊急狀況時，先看這裡。",
  },
  {
    id: "life",
    icon: "🌤️",
    name: "生活實用",
    sub: "天氣 / 公車 / 就醫 / 繳費",
    lead: "日常生活常會用到的事，這裡一步一步教您。",
  },
  {
    id: "trouble",
    icon: "🔧",
    name: "壞掉了怎麼辦",
    sub: "當機 / 網路 / APP / 密碼",
    lead: "手機出狀況先別慌，照著做通常就能恢復。",
  },
];

export const emergencyNumbers = [
  { tel: "110", name: "警察", icon: "👮", confirm: true },
  { tel: "119", name: "消防／救護", icon: "🚒", confirm: true },
  { tel: "112", name: "手機緊急", icon: "📱", confirm: true },
  { tel: "165", name: "反詐騙", icon: "🛡️", confirm: false },
];

export const tasks = {
  /* ==================== 手機 ==================== */
  call: {
    category: "phone",
    icon: "📞",
    title: "打電話給家人",
    summary: "用電話號碼或家人的名字，撥電話給家人。",
    tip: "電話接通前，先確認號碼是對的，避免打錯。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "在手機畫面找到綠色的「電話」圖示，點一下打開它。",
          "點下面的「通話記錄」，找{{family}}的名字；或點「數字鍵盤」輸入電話號碼。",
          "按綠色的「撥打」按鈕，電話就會打出去。",
          "接通後，把手機拿到耳邊說話。",
          "說完話，按紅色的「結束」按鈕掛斷。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "找到綠色話筒圖示的「電話」app，點一下打開。",
          "點「聯絡人」或「通話記錄」，找{{family}}；也可以按鍵盤輸入號碼。",
          "按綠色話筒按鈕撥打。",
          "接通後，把手機拿到耳邊說話。",
          "說完話，按紅色按鈕掛斷。",
        ],
      },
    ],
  },

  message: {
    category: "phone",
    icon: "💬",
    title: "傳訊息給家人",
    summary: "用簡訊傳一句話給家人，讓家人知道您的情況。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "找到藍色對話框的「訊息」app，點一下打開。",
          "點右上角的「撰寫」圖示（一支筆和紙）。",
          "在「收件人」輸入{{family}}的名字或電話。",
          "點下面的輸入框，輸入要說的話。",
          "按右邊藍色向上的箭頭「傳送」。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "找到「訊息」app（藍色對話框），點一下打開。",
          "點右下角的「開始對話」。",
          "輸入{{family}}的名字或電話號碼。",
          "點輸入框，輸入要說的話。",
          "按送出箭頭，訊息就會傳出去。",
        ],
      },
    ],
  },

  video: {
    category: "phone",
    icon: "🎥",
    title: "用 LINE 視訊通話",
    summary: "讓家人看到您，就像面對面說話。",
    tip: "兩邊都要有網路，而且要先加好家人的 LINE 好友。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "打開綠色的「LINE」app。",
          "點{{family}}的名字，進入聊天畫面。",
          "點右上角的「視訊通話」相機圖示。",
          "等對方接起來，就可以看到對方。",
          "說完話，按紅色的「結束通話」。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "打開綠色的「LINE」app。",
          "點{{family}}的名字，進入聊天畫面。",
          "點右上角的「視訊通話」相機圖示。",
          "等對方接起來，就可以看到對方。",
          "說完話，按紅色的「結束通話」。",
        ],
      },
    ],
  },

  location: {
    category: "phone",
    icon: "📍",
    title: "傳送我的位置給家人",
    summary: "出門在外，把現在的位置傳給家人，讓家人安心。",
    tip: "在室內定位可能比較不準，走到窗邊或戶外會更準。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "用 Safari 打開這個網站「安心操作助理」。",
          "在「手機」分類裡，點「傳送我的位置給家人」。",
          "按藍色大按鈕「取得我的位置」。",
          "畫面問「是否允許使用位置」時，按「允許」。",
          "等幾秒鐘，畫面會顯示您的位置與地圖。",
          "按「分享給家人」選{{family}}，或按「用 LINE 傳送」。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "用 Chrome 打開這個網站「安心操作助理」。",
          "在「手機」分類裡，點「傳送我的位置給家人」。",
          "按藍色大按鈕「取得我的位置」。",
          "畫面問「是否允許使用位置」時，按「允許」。",
          "等幾秒鐘，畫面會顯示您的位置與地圖。",
          "按「分享給家人」選{{family}}，或按「用 LINE 傳送」。",
        ],
      },
    ],
  },

  photo: {
    category: "phone",
    icon: "📷",
    title: "拍照",
    summary: "用相機拍下照片，存在手機裡。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "找到「相機」圖示（灰色相機），點一下打開。",
          "把手機對準要拍的東西。",
          "按下面白色的大圓圈「快門」。",
          "照片會自動存到「照片」app，點左下角小圖可以看。",
          "要自拍時，按畫面下方的翻轉鏡頭圖示。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "找到「相機」app，點一下打開。",
          "把手機對準要拍的東西。",
          "按下面的白色圓形快門。",
          "照片會存到「相簿」或「照片」。",
          "要自拍時，按翻轉鏡頭的圖示。",
        ],
      },
    ],
  },

  phone_font: {
    category: "phone",
    icon: "🔠",
    title: "把字變大",
    summary: "調整手機的字體大小，看字更輕鬆。",
    tip: "每種手機的畫面可能略有不同；找不到時，請家人幫忙。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "打開「設定」（灰色齒輪圖示）。",
          "點「螢幕顯示與亮度」。",
          "點「文字大小」。",
          "左右拖曳下面的滑桿，字就會變大或變小。",
          "覺得還不夠大，回上一頁點「放大文字」，選更大的字。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "打開「設定」（齒輪圖示）。",
          "點「顯示」。",
          "點「字型大小」或「字體大小」。",
          "拖曳滑桿調整，上面會顯示預覽。",
          "按「套用」，或直接返回上一頁。",
        ],
      },
    ],
  },

  /* ==================== 電腦 ==================== */
  browse: {
    category: "computer",
    icon: "🌐",
    title: "開啟網頁",
    summary: "打開瀏覽器，找到想看的網站。",
    tip: "在網址列直接打想找的字，按 Enter 也能搜尋。",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        shortName: "Windows",
        icon: "🪟",
        steps: [
          "在桌面上找到瀏覽器圖示，例如 Microsoft Edge 或 Google Chrome。",
          "用滑鼠左鍵快速點兩下打開。",
          "點最上面的「網址列」。",
          "輸入網址，例如 www.google.com。",
          "按鍵盤上的 Enter 鍵。",
        ],
      },
      {
        id: "mac",
        name: "Mac 電腦",
        shortName: "Mac",
        icon: "🍎",
        steps: [
          "在下方工具列找到 Safari 或 Chrome。",
          "點一下打開。",
          "點最上面的「網址列」。",
          "輸入網址，例如 www.google.com。",
          "按鍵盤上的 Return 鍵。",
        ],
      },
    ],
  },

  screenshot: {
    category: "computer",
    icon: "📸",
    title: "截圖",
    summary: "把螢幕畫面存成一張圖片。",
    tip: "截圖不會自動傳給別人，要自己貼上或分享。",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        shortName: "Windows",
        icon: "🪟",
        steps: [
          "同時按鍵盤上的 Windows 鍵、Shift 鍵和 S 鍵。",
          "畫面變暗後，用滑鼠按住左鍵，框出要截圖的範圍。",
          "放開滑鼠，圖片會先存到「剪貼簿」。",
          "螢幕右下角會出現通知，點它可以存成檔案。",
        ],
      },
      {
        id: "mac",
        name: "Mac 電腦",
        shortName: "Mac",
        icon: "🍎",
        steps: [
          "同時按 Command、Shift 和 3，截取整個畫面。",
          "只要一部分時，按 Command、Shift 和 4，再框選範圍。",
          "圖片會自動存到桌面。",
        ],
      },
    ],
  },

  fontsize: {
    category: "computer",
    icon: "🔍",
    title: "調整字體大小",
    summary: "把電腦的字和畫面放大，看得更清楚。",
    tip: "看網頁時，也可以按 Ctrl 加 +（Mac 是 Command 加 +）把畫面放大。",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        shortName: "Windows",
        icon: "🪟",
        steps: [
          "按「開始」→「設定」（齒輪圖示）。",
          "點「協助工具」。",
          "點「文字大小」。",
          "拖曳滑桿調整，右邊可以預覽。",
          "按「套用」。",
        ],
      },
      {
        id: "mac",
        name: "Mac 電腦",
        shortName: "Mac",
        icon: "🍎",
        steps: [
          "點左上角蘋果圖示 →「系統設定」。",
          "點「輔助使用」。",
          "點「顯示」→「文字大小」。",
          "選擇比較大的字級。",
        ],
      },
    ],
  },

  /* ==================== 智慧手錶 ==================== */
  watch_call: {
    category: "watch",
    icon: "⌚",
    title: "打電話 / 傳訊息",
    summary: "用手錶打電話給家人，不用拿手機。",
    tip: "有些手錶沒有喇叭，聲音會從手機出來。",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        shortName: "Apple Watch",
        icon: "⌚",
        steps: [
          "按一下手錶右側的「數位錶冠」，回到應用程式列表。",
          "點「電話」圖示（綠色話筒）。",
          "轉動錶冠找{{family}}，點一下名字。",
          "點綠色「撥打」。",
          "手錶要連著手機或 Wi-Fi 才能通話。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        shortName: "Wear OS",
        icon: "⌚",
        steps: [
          "按一下手錶電源鍵，或往上滑，打開應用程式列表。",
          "點「電話」app。",
          "選{{family}}，或輸入電話號碼。",
          "按綠色話筒撥打。",
        ],
      },
    ],
  },

  watch_health: {
    category: "watch",
    icon: "❤️",
    title: "看健康數據",
    summary: "用手錶看心跳，注意自己的身體。",
    tip: "手錶的數字只能參考；身體不舒服時，請聯絡家人或看醫生。",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        shortName: "Apple Watch",
        icon: "⌚",
        steps: [
          "按一下數位錶冠，找到「心率」app（紅色愛心）。",
          "點一下打開，手錶會開始測量。",
          "等幾秒鐘，畫面上會出現每分鐘心跳次數。",
          "往下滑，還可以看到最近的心率紀錄。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        shortName: "Wear OS",
        icon: "⌚",
        steps: [
          "打開應用程式列表，點「心率」app。",
          "把手錶貼緊手腕，等它測量。",
          "看畫面上的心跳數字。",
        ],
      },
    ],
  },

  watch_alarm: {
    category: "watch",
    icon: "⏰",
    title: "設定鬧鐘",
    summary: "讓手錶在指定時間叫您起床或提醒您。",
    tip: "設定好後，手錶要戴著或放在床邊才聽得到。",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        shortName: "Apple Watch",
        icon: "⌚",
        steps: [
          "按數位錶冠找到「鬧鐘」app（時鐘圖示）。",
          "點「新增鬧鐘」。",
          "轉動錶冠設定小時和分鐘。",
          "點「完成」。",
          "鬧鐘響時，點「停止」。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        shortName: "Wear OS",
        icon: "⌚",
        steps: [
          "打開應用程式列表，點「鬧鐘」。",
          "點「＋」新增鬧鐘。",
          "設定時間。",
          "點「完成」或「儲存」。",
        ],
      },
    ],
  },

  watch_sos: {
    category: "watch",
    icon: "🆘",
    title: "緊急求助（SOS）",
    summary: "跌倒或身體不舒服時，用手錶打電話求救。",
    tip: "請家人先幫您確認手錶的緊急設定和聯絡人是否正確。",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        shortName: "Apple Watch",
        icon: "⌚",
        steps: [
          "遇到緊急狀況，按住手錶右側的長條按鈕。",
          "畫面出現滑桿後，向右拖曳「緊急服務電話」。",
          "手錶會自動撥打 110 或 119。",
          "接通後，說明地點和狀況。",
          "如果手錶偵測到您跌倒，也會問您要不要打緊急電話。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        shortName: "Wear OS",
        icon: "⌚",
        steps: [
          "快速連按手錶的電源鍵 5 次（不同品牌可能不同）。",
          "或打開「緊急求助」app。",
          "按「緊急電話」。",
          "接通後，說明地點和狀況。",
        ],
      },
    ],
  },

  /* ==================== 安心求助 ==================== */
  scam: {
    category: "safety",
    icon: "🚫",
    title: "接到可疑電話怎麼辦",
    summary: "有人叫您去 ATM、給密碼或不要告訴家人，就是詐騙。",
    tip: "記得：只要對方叫您「不要告訴家人」，就一定是詐騙。",
    quickCall: [{ tel: "165", label: "165 反詐騙專線", tone: "info" }],
    systems: [
      {
        id: "any",
        name: "所有手機與電腦",
        shortName: "通用",
        icon: "🛡️",
        steps: [
          "接到陌生電話，說「帳戶被凍結」「檢察官要查你」「健保卡被盜用」，先不要緊張，也不要照他的話做。",
          "直接掛掉電話。真正的警察、銀行、醫院，不會叫您去 ATM 或網路銀行操作。",
          "不要給對方：身分證號碼、銀行帳號、密碼，還有手機收到的驗證碼。",
          "掛電話後，自己撥 165 反詐騙專線查證，不要撥對方給您的號碼。",
          "打電話告訴{{family}}，請家人陪您一起確認。",
          "如果已經匯款，馬上撥 165 或 110 報案，並保留通話紀錄。",
        ],
      },
    ],
  },

  emergency: {
    category: "safety",
    icon: "🚨",
    title: "緊急電話怎麼打",
    summary: "110、119、112 要怎麼用，接通後要說什麼。",
    tip: "不是緊急的事，請不要打 110 或 119，把線路留給真正需要的人。",
    quickCall: [
      { tel: "110", label: "110 警察", tone: "danger" },
      { tel: "119", label: "119 消防／救護", tone: "danger" },
      { tel: "112", label: "112 手機緊急", tone: "danger" },
    ],
    systems: [
      {
        id: "any",
        name: "所有手機與電腦",
        shortName: "通用",
        icon: "🛡️",
        steps: [
          "有人受傷、生病很嚴重，或發生火災：撥 119。",
          "遇到壞人、車禍、東西被偷：撥 110。",
          "手機沒有訊號，或人在國外：撥 112，會幫您轉接。",
          "電話接通後，先說地點：縣市、路名、門牌號碼，或附近的大地標。",
          "再說發生什麼事、有幾個人受傷。",
          "不要先掛電話，等對方說可以掛再掛。",
        ],
      },
    ],
  },
  wifi: {
    category: "phone",
    icon: "📶",
    title: "連 Wi-Fi / 忘記 Wi-Fi 密碼怎麼辦",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開「設定」app（齒輪圖示）。",
          "點一下「Wi-Fi」，把開關打開。",
          "點一下家裡的 Wi-Fi 名稱。",
          "輸入密碼，按「加入」，出現打勾就成功了。",
          "忘記密碼時：先看數據機背面的貼紙，或問家人。",
          "一直連不上時，點 Wi-Fi 名稱旁的 ⓘ →「忘記此網路」，再重新輸入密碼。"
        ],
        shortName: "iPhone"
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "打開「設定」app。",
          "點「網路和網際網路」→「Wi-Fi」，把開關打開。",
          "點一下家裡的 Wi-Fi 名稱。",
          "輸入密碼，按「連線」。",
          "忘記密碼時：看數據機背面的貼紙，或問家人。",
          "一直連不上時，長按 Wi-Fi 名稱 →「忘記網路」，再重新輸入密碼。"
        ],
        shortName: "Android"
      }
    ],
    summary: "連 Wi-Fi / 忘記 Wi-Fi 密碼怎麼辦。"
  },
  bluetooth: {
    category: "phone",
    icon: "🔵",
    title: "連藍牙",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開「設定」app。",
          "點一下「藍牙」，把開關打開（變成綠色）。",
          "打開耳機或喇叭，讓它進入配對模式（指示燈會閃爍）。",
          "在「我的裝置」下面，點一下耳機或喇叭的名稱。",
          "出現「已連線」就成功了，可以播放音樂試聽。",
          "第一次連好後，下次打開通常會自動連上。"
        ],
        shortName: "iPhone"
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "從螢幕上方往下滑，點一下「藍牙」圖示。",
          "如果找不到，到「設定」→「連線」→「藍牙」，把開關打開。",
          "打開耳機或喇叭，讓它進入配對模式（指示燈會閃爍）。",
          "在「配對新裝置」下面，點一下耳機或喇叭的名稱。",
          "出現「已連線」就成功了，可以播放音樂試聽。",
          "連不上時，先取消配對再試一次，或請家人幫忙。"
        ],
        shortName: "Android"
      }
    ],
    summary: "連藍牙。"
  },
  phone_screenshot: {
    category: "phone",
    icon: "📸",
    title: "手機截圖",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "同時按一下側邊鍵和音量加大鍵。",
          "如果是舊款 iPhone（有圓形 Home 鍵），按 Home 鍵和側邊鍵。",
          "聽到快門聲或看到畫面閃一下，就成功了。",
          "到「照片」app →「相簿」→「螢幕截圖」可以查看。"
        ],
        shortName: "iPhone"
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "同時按住電源鍵和音量減小鍵。",
          "看到畫面閃一下就成功了。",
          "如果沒反應，從螢幕上方往下滑，點「截圖」。",
          "到「相簿」→「截圖」資料夾可以查看。"
        ],
        shortName: "Android"
      }
    ],
    summary: "手機截圖。"
  },
  storage: {
    category: "phone",
    icon: "🧹",
    title: "清理空間",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開「設定」→「一般」→「iPhone 儲存空間」。",
          "等一會兒，看看哪個 app 佔最多空間。",
          "點很少用的 app →「卸載 app」或「刪除 app」。",
          "打開「照片」app，選不要的照片，按垃圾桶刪除。",
          "到「照片」→「相簿」→「最近刪除」，按「全部刪除」才會真的清掉。",
          "刪之前先確認照片已備份，才不會後悔。"
        ],
        shortName: "iPhone"
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "打開「設定」→「儲存空間」。",
          "看看哪一項佔最多空間。",
          "點那個 app →「清除快取」；不用的 app 按「卸載」。",
          "打開「相簿」，選不要的照片，按垃圾桶刪除。",
          "到「資源回收桶」按「清空」，空間才會真正空出來。",
          "刪之前先確認照片已備份，才不會後悔。"
        ],
        shortName: "Android"
      }
    ],
    summary: "清理空間。"
  },
  find_phone: {
    category: "phone",
    icon: "🔎",
    title: "找回不見的手機",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "跟家人借手機或電腦，打開瀏覽器到 icloud.com/find。",
          "輸入自己的 Apple 帳號和密碼。",
          "點「尋找我的 iPhone」，選不見的手機。",
          "點「播放聲音」，手機會響，順著聲音找。",
          "如果不在附近，點「標記為遺失」，手機會鎖住。",
          "如果手機沒電或沒網路，只能看到最後一次的位置。"
        ],
        shortName: "iPhone"
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "跟家人借手機或電腦，打開瀏覽器到 google.com/android/find。",
          "登入自己的 Google 帳號。",
          "選不見的手機。",
          "點「播放聲音」，手機會響，順著聲音找。",
          "點「保護裝置」或「遺失模式」，可以先鎖住手機。",
          "如果手機沒電或沒網路，只能看到最後一次的位置。"
        ],
        shortName: "Android"
      }
    ],
    summary: "找回不見的手機。"
  },
  mobile_pay: {
    category: "phone",
    icon: "💳",
    title: "行動支付（Apple Pay、Google Pay 等）",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開「錢包」app，點右上角的「＋」。",
          "選「信用卡或金融卡」，照指示加入卡片。",
          "在店家看到 Apple Pay 標誌時，連按兩下側邊鍵。",
          "把手機上方靠近感應區，聽到「嗶」就成功了。",
          "也可以用台灣 Pay：打開 app → 選銀行 → 掃描 QR Code 付款。",
          "小提醒：不管誰打電話問驗證碼，都不要說出來。"
        ],
        shortName: "iPhone"
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "打開「Google 錢包」（Google Pay）app，點「加入」。",
          "照指示加入信用卡或金融卡。",
          "看到感應付款標誌時，解鎖手機，把背面靠近感應區。",
          "三星手機可用 Samsung Pay：加入卡片後，從下方往上滑選卡片再感應。",
          "台灣 Pay：打開 app → 選銀行 → 掃 QR Code 或出示條碼。",
          "小提醒：不管誰打電話問驗證碼，都不要說出來。"
        ],
        shortName: "Android"
      }
    ],
    summary: "行動支付（Apple Pay、Google Pay 等）。"
  },
  computer_wifi: {
    category: "computer",
    icon: "📶",
    title: "連 Wi-Fi",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "按一下工作列右下角的網路圖示（像無線電波）。",
          "點一下家裡 Wi-Fi 的名稱。",
          "輸入密碼，按「連線」。",
          "出現「已連線」就可以上網了。",
          "忘記密碼時：看數據機背面的貼紙，或問家人。",
          "一直連不上時，點「忘記此網路」，再重新輸入密碼。"
        ],
        shortName: "Windows"
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "點一下畫面右上角的 Wi-Fi 圖示（扇形）。",
          "打開 Wi-Fi，點家裡的網路名稱。",
          "輸入密碼，按「加入」。",
          "圖示變成實心扇形就連上了。",
          "忘記密碼時：看數據機背面的貼紙，或問家人。",
          "一直連不上時，選「忘記此網路」，再重新輸入密碼。"
        ],
        shortName: "Mac"
      }
    ],
    summary: "連 Wi-Fi。"
  },
  computer_bluetooth: {
    category: "computer",
    icon: "🔵",
    title: "連藍牙",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "按 Windows 鍵加 I，打開設定。",
          "點「藍牙與裝置」（舊版叫「裝置」）。",
          "把藍牙開關打開。",
          "打開耳機或喇叭，讓它進入配對模式（指示燈會閃）。",
          "點「新增裝置」→「藍牙」，選裝置名稱。",
          "出現「已連線」就成功了。"
        ],
        shortName: "Windows"
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "點左上角蘋果 →「系統設定」→「藍牙」。",
          "把藍牙開關打開。",
          "讓耳機或喇叭進入配對模式（指示燈會閃）。",
          "在裝置清單點一下名稱，按「連線」。",
          "出現「已連線」就成功了。"
        ],
        shortName: "Mac"
      }
    ],
    summary: "連藍牙。"
  },
  computer_search: {
    category: "computer",
    icon: "🔎",
    title: "用搜尋找東西",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "按一下鍵盤上的 Windows 鍵（畫著窗戶那顆）。",
          "直接打字，例如「計算機」或「天氣」。",
          "點一下出現的結果，就會打開。",
          "想找檔案，也可以直接輸入檔案名稱。"
        ],
        shortName: "Windows"
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "按 Command 鍵加空白鍵，會出現放大鏡。",
          "直接打字，例如「計算機」。",
          "點一下結果，就會打開。",
          "也可以點畫面右上角的放大鏡圖示搜尋。"
        ],
        shortName: "Mac"
      }
    ],
    summary: "用搜尋找東西。"
  },
  computer_phishing: {
    category: "computer",
    icon: "⚠️",
    title: "辨識詭異信件",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "收到「包裹未領」「帳號被盜」「中獎」的信，先不要點裡面的連結。",
          "把滑鼠停在連結上（不要按），看看網址是不是很奇怪。",
          "不要回信，也不要輸入密碼或驗證碼。",
          "按「檢舉為垃圾郵件」或直接刪除。",
          "如果已經點了或輸入資料，請立刻改密碼。",
          "拿不定主意時，撥 165 查證或問家人。"
        ],
        shortName: "Windows"
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "收到「包裹未領」「帳號被盜」「中獎」的信，先不要點裡面的連結。",
          "把滑鼠停在連結上（不要按），看看網址是不是很奇怪。",
          "不要回信，也不要輸入密碼或驗證碼。",
          "按「垃圾郵件」或直接刪除。",
          "如果已經點了或輸入資料，請立刻改密碼。",
          "拿不定主意時，撥 165 查證或問家人。"
        ],
        shortName: "Mac"
      }
    ],
    summary: "辨識詭異信件。"
  },
  computer_ime: {
    category: "computer",
    icon: "🔤",
    title: "中文輸入切換",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "看一下工作列右下角，現在是「中」還是「英」。",
          "點一下它，選「中文（注音）」就可以打注音符號。",
          "也可以用快捷鍵 Shift 加 Alt 切換中英文。",
          "想打英文時，切到「英」再打字。",
          "打錯時，按 Backspace 鍵刪除。"
        ],
        shortName: "Windows"
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "點一下畫面右上角的輸入法圖示（例如「A」或「注」）。",
          "選「注音」就可以打注音符號。",
          "按 Control 加空白鍵，也可以更換輸入法。",
          "想打英文時，選「ABC」。",
          "打錯時，按 Delete 鍵刪除。"
        ],
        shortName: "Mac"
      }
    ],
    summary: "中文輸入切換。"
  },
  computer_resolution: {
    category: "computer",
    icon: "🔠",
    title: "調整解析度讓字更大",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "在桌面空白處按一下滑鼠右鍵，點「顯示設定」。",
          "找到「縮放與版面配置」。",
          "把「縮放」改成 125% 或 150%。",
          "點「保留變更」，字和圖示就會變大。",
          "如果還是太小，再用「調整字體大小」把字放大。"
        ],
        shortName: "Windows"
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "點左上角蘋果 →「系統設定」→「顯示器」。",
          "點「解析度」。",
          "選較大的顯示方式，不要選最小的。",
          "回到「顯示」，點「文字大小」把字調大。",
          "看網頁時，也可以按 Command 加加號放大。"
        ],
        shortName: "Mac"
      }
    ],
    summary: "調整解析度讓字更大。"
  },
  watch_heart_rate: {
    category: "watch",
    icon: "❤️",
    title: "心跳（心率）",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在手錶上打開「心率」app（心形圖示）。",
          "戴穩手錶，等幾秒，會出現每分鐘心跳次數。",
          "在 iPhone「健康」app →「心率」可以看以前的記錄。",
          "作用：看心臟跳得快不快、穩不穩定。休息時每分鐘 60～100 下是常見範圍。",
          "警訊：休息時一直超過 120 或低於 50，又頭昏、胸悶，請盡快就醫；胸痛或快昏倒請打 119。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在手錶上打開「心率」app。",
          "戴穩手錶，等幾秒看每分鐘心跳次數。",
          "在手機的 Samsung Health 或 Google 健康 app 可以看記錄。",
          "作用：看心臟跳得快不快、穩不穩定。休息時每分鐘 60～100 下是常見範圍。",
          "警訊：休息時一直超過 120 或低於 50，又頭昏、胸悶，請盡快就醫；胸痛或快昏倒請打 119。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "心跳（心率）。"
  },
  watch_blood_oxygen: {
    category: "watch",
    icon: "🩸",
    title: "血氧（SpO₂）",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在手錶上打開「血氧」app。",
          "把手錶戴緊、手掌朝上不要動，等大約 15 秒。",
          "數字是血液裡氧氣的比例，一般約 95%～100%。",
          "手指冰冷、指甲油或手錶太鬆會不準，可以先擦乾再量。",
          "警訊：低於 92%，或喘不過氣、嘴唇發紫，請盡快就醫或打 119。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在手錶上打開「血氧」（SpO₂）app；若找不到，到手機健康 app 查看。",
          "戴穩手錶、手放平不要動，等大約 15 秒。",
          "數字一般約 95%～100%。",
          "手指冰冷或手錶太鬆會不準。",
          "警訊：低於 92%，或喘不過氣、嘴唇發紫，請盡快就醫或打 119。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "血氧（SpO₂）。"
  },
  watch_ecg: {
    category: "watch",
    icon: "📈",
    title: "心電圖（ECG）",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在手錶上打開「心電圖」app（或在 iPhone「健康」app 裡打開）。",
          "坐下來，手指按住錶冠約 30 秒，不要說話。",
          "畫面會顯示「竇性心律」或「心房顫動」等結果。",
          "作用：記錄心臟的電氣活動，幫醫生發現心律不整。",
          "警訊：胸痛、冒冷汗、快昏倒時，不要等手錶量，直接打 119。",
          "手錶結果不是醫生診斷；異常請帶著記錄去看醫生。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "部分三星手錶才有「心電圖」app，先在錶上找找看。",
          "照螢幕指示，把手指放在感應處約 30 秒。",
          "結果會顯示是否正常，或疑似心房顫動。",
          "作用：記錄心電活動，幫醫生判斷心律問題。",
          "警訊：胸痛、昏倒、呼吸困難請直接打 119。",
          "如果沒有這個 app，代表手錶不支援，可改量心跳與血氧。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "心電圖（ECG）。"
  },
  watch_sleep: {
    category: "watch",
    icon: "😴",
    title: "睡眠紀錄",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在 iPhone「健康」app →「睡眠」設定睡覺和起床時間。",
          "睡覺時戴著手錶，隔天會顯示睡了多久、深睡與淺睡時間。",
          "作用：看有沒有睡飽、睡眠品質好不好。",
          "如果長期少於 6 小時、白天一直想睡，建議找醫生討論。",
          "警訊：打呼很大聲又突然停住呼吸、睡醒頭痛，可能是睡眠呼吸中止症，請就醫。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在 Samsung Health 或 Google 健康 app →「睡眠」設定睡眠時間。",
          "戴著手錶睡覺，隔天看睡眠時間與階段。",
          "作用：看有沒有睡飽、睡眠品質好不好。",
          "警訊：打呼很大聲、呼吸停頓、白天一直想睡，請就醫檢查。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "睡眠紀錄。"
  },
  watch_other_health: {
    category: "watch",
    icon: "🌡️",
    title: "其他健康指標（溫度、呼吸、壓力）",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在 iPhone「健康」app 可找「手腕溫度」、「呼吸頻率」與「心率變異性」。",
          "睡覺時戴著手錶，會自動記錄，做為平常的參考值。",
          "作用：溫度變高可能是發燒；呼吸變快可能表示喘；壓力與 HRV 反映身體疲勞。",
          "警訊：發高燒、呼吸每分鐘超過 25 次、胸悶或喘不過氣，請盡快就醫；呼吸困難請打 119。",
          "這些數字僅供參考，身體不舒服還是要找醫生。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在 Samsung Health 或健康 app 找「皮膚溫度」、「呼吸速率」與「壓力」（部分手錶支援）。",
          "睡覺戴著手錶，會記錄與平常的差異。",
          "作用：溫度變高可能是發燒；呼吸變快可能表示喘；壓力指數反映疲勞。",
          "警訊：發高燒、呼吸很快、胸悶或喘不過氣，請盡快就醫；呼吸困難請打 119。",
          "如果手錶沒有這些功能，代表機型不支援。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "其他健康指標（溫度、呼吸、壓力）。"
  },
  watch_fall_sos: {
    category: "watch",
    icon: "🆘",
    title: "跌倒偵測與 SOS",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在 iPhone「設定」→「SOS 緊急服務」，打開「跌倒偵測」。",
          "再打開「自動撥打緊急電話」，並確認有設定家人為緊急聯絡人。",
          "作用：嚴重跌倒且您沒有回應時，手錶會自動通知家人並撥打 119。",
          "如果誤觸，手錶會先提示，點「我沒跌倒」就可取消。",
          "警訊：跌倒後意識不清、劇痛、站不起來，請不要勉強起身，打 119 或等救援。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在 Samsung Health 或手錶「設定」→「安全」打開「跌倒偵測」（部分機型支援）。",
          "設定緊急聯絡人與自動撥號。",
          "作用：嚴重跌倒時自動傳訊息或撥打緊急電話給家人。",
          "警訊：跌倒後頭痛、嘔吐、不能動，請留在原地打 119。",
          "若手錶沒有此功能，可設 SOS：連按電源鍵幾次撥打緊急電話。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "跌倒偵測與 SOS。"
  },
  watch_find_phone: {
    category: "watch",
    icon: "🔔",
    title: "讓手錶把手機叫出來",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在手錶上打開「尋找裝置」app（雷達圖示）。",
          "點一下您的 iPhone 名稱。",
          "點「播放聲音」，手機會發出聲音。",
          "順著聲音找到手機後，點「停止」。",
          "如果手機靜音或沒電，用家人的手機到 icloud.com/find 找。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在手錶上打開「尋找我的手機」app。",
          "點「播放聲音」。",
          "手機會響，順著聲音找。",
          "找到後，按手錶上的「停止」。",
          "如果找不到，用家人的手機到 google.com/android/find 找。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "讓手錶把手機叫出來。"
  },
  watch_camera_remote: {
    category: "watch",
    icon: "📷",
    title: "用錶遙控手機相機拍照",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "在 iPhone 上打開「相機」app。",
          "在手錶上打開「相機」app（或從智慧型堆疊點相機圖示）。",
          "手錶會顯示手機的畫面，先喬好角度。",
          "點手錶上的快門鍵拍照。",
          "照片會存到手機的相簿。"
        ],
        shortName: "Apple Watch"
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在手機上打開「相機」app。",
          "在手錶上打開「相機遙控」app（若沒有，請家人從 Google Play 安裝）。",
          "手錶會顯示手機畫面，先喬好角度。",
          "點手錶上的快門鍵拍照。",
          "到手機相簿看照片。"
        ],
        shortName: "Wear OS"
      }
    ],
    summary: "用錶遙控手機相機拍照。"
  },

  /* ==================== 生活實用 ==================== */
  weather: {
    category: "life",
    icon: "🌤️",
    title: "查天氣",
    summary: "看今天和接下來幾天的天氣，出門前知道要不要帶傘。",
    tip: "天氣會隨時更新，出門前再看一次最準。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "在手機找到「天氣」app（藍色天空和雲的圖示），點一下打開。",
          "如果顯示的不是您住的地方，點下面的城市清單，選您住的縣市。",
          "看最上面的溫度，就是現在的天氣。",
          "往下看太陽、雲和雨的圖示，就知道今天會不會下雨。",
          "再往下看未來幾天，決定要不要帶傘或外套。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "打開「Google 天氣」app；或打開 Google 搜尋，打入「天氣」。",
          "如果出現的城市不對，點上面的地點，改輸入您住的地方。",
          "看最上面的溫度和天氣圖示，就知道現在天氣。",
          "往下看每小時和未來幾天的預報。",
          "看到雨傘圖示，記得帶傘再出門。",
        ],
      },
    ],
  },

  bus: {
    category: "life",
    icon: "🚌",
    title: "查公車",
    summary: "查要坐幾號公車、在哪裡上車，以及大概幾點會到。",
    tip: "公車會因為塞車晚一點，提前幾分鐘到站牌等比較安心。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "打開「地圖」app（或 Google 地圖）。",
          "點下面的「搜尋」，輸入您要去的地方，例如「某地醫院」。",
          "點「路線」或藍色箭頭。",
          "選「大眾交通工具」，再點公車圖示。",
          "畫面會告訴您坐幾號車、在哪裡上車、在哪裡下車。",
          "出發前看一眼預計抵達時間，提前到站牌等車。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "打開「Google 地圖」app。",
          "在搜尋框輸入您要去的地方，例如「某地醫院」。",
          "點藍色的「路線」按鈕。",
          "點「大眾交通工具」，再點公車圖示。",
          "記下公車號碼、上車站牌和下車站。",
          "到站牌後再看一次車號，確認是同一班車再上車。",
        ],
      },
    ],
  },

  clinic_registration: {
    category: "life",
    icon: "🏥",
    title: "線上掛號",
    summary: "用手機先預約看診時間，到醫院不用現場排長隊。",
    tip: "第一次掛號要先註冊帳號，可以請家人幫忙準備姓名、生日和健保卡資料。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "先確認要去的醫院名稱，打開該醫院的 app；沒有 app 就打開「Safari」瀏覽器。",
          "在網址列輸入醫院名稱，找到「網路掛號」或「線上掛號」。",
          "點「線上掛號」，輸入姓名、生日等資料。",
          "選要看的科別，例如「內科」或「眼科」。",
          "選一個方便的日子和時段，點「確認掛號」。",
          "把畫面上的報到號碼和時間記下來，當天帶健保卡去報到。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "確認醫院名稱，打開該醫院的 app；沒有就打開「Chrome」瀏覽器。",
          "在搜尋框輸入醫院名稱，點進「網路掛號」。",
          "點「線上掛號」，依畫面輸入姓名和生日。",
          "選要看的科別和日期時段。",
          "點「確認掛號」，等畫面出現成功訊息。",
          "記下報到號碼，看診當天帶健保卡去醫院。",
        ],
      },
    ],
  },

  vaccine_record: {
    category: "life",
    icon: "💉",
    title: "疫苗接種紀錄",
    summary: "查您打過哪些疫苗，就醫或出國時可以給醫生看。",
    tip: "紙本的「小黃卡」也要留著，手機沒電時還能用。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "請家人從 App Store 安裝「健保快易通」app。",
          "打開 app，依照畫面指示登入。",
          "點「健康存摺」或「疫苗接種紀錄」。",
          "畫面會顯示您打過的疫苗名稱和日期。",
          "需要時把畫面給醫生看，或點「分享」寄給家人。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "請家人從 Google Play 安裝「健保快易通」app。",
          "打開 app，依照指示完成登入。",
          "點「健康存摺」或「疫苗接種紀錄」。",
          "看畫面上的疫苗名稱和接種日期。",
          "把畫面給醫生看，或分享給家人保存。",
        ],
      },
    ],
  },

  /* ==================== 壞掉了怎麼辦 ==================== */
  phone_freeze: {
    category: "trouble",
    icon: "📴",
    title: "手機當機重開",
    summary: "手機卡住、按了沒反應時，先重新啟動。",
    tip: "重開機不會刪除照片和訊息，不用擔心資料不見。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "先插上充電線等 10 分鐘，確認不是沒電。",
          "按一下「音量增大」，再按一下「音量減小」。",
          "接著按住旁邊的「電源鍵」不要放。",
          "等到畫面出現蘋果標誌，再放開手指。",
          "等手機開好，輸入密碼解鎖。",
          "如果還是卡住，請家人幫忙或送到門市檢查。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "先充電 10 分鐘，確認手機有電。",
          "按住「電源鍵」約 10 秒不放。",
          "出現選單後，點「重新啟動」；如果沒有，點「關機」再按電源鍵開機。",
          "等手機開好，輸入密碼解鎖。",
          "還是一直卡住時，先不要一直亂按，找家人幫忙或送修。",
        ],
      },
    ],
  },

  network_down: {
    category: "trouble",
    icon: "📶",
    title: "網路不通",
    summary: "Wi-Fi 或行動網路連不上時，照順序檢查。",
    tip: "先問家人手機能不能連同一個 Wi-Fi，就知道是不是家裡網路壞了。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "看畫面最上面有沒有 Wi-Fi 符號；沒有就代表還沒連上。",
          "打開「設定」→「Wi-Fi」，確認 Wi-Fi 是開的。",
          "點家裡的 Wi-Fi 名稱；如果寫「無網際網路」，點「忘記此網路」再重新輸入密碼。",
          "也可以打開「行動數據」，先用行動網路試試看。",
          "還是不行，照「手機當機重開」的步驟重新啟動手機。",
          "再不行，請家人聯絡電信業者或檢查家裡的數據機。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "從螢幕頂端往下滑，打開快速設定。",
          "確認 Wi-Fi 或行動數據至少有一個是開的。",
          "到「設定」→「網路和網際網路」→「Wi-Fi」，點家裡的網路名稱。",
          "如果顯示已連上但沒有網路，點「忘記網路」再輸入一次密碼。",
          "重新啟動手機，再試一次。",
          "還是不能上網，請家人檢查數據機或聯絡電信業者。",
        ],
      },
    ],
  },

  app_crash: {
    category: "trouble",
    icon: "📲",
    title: "APP 閃退",
    summary: "app 一打開就關掉時，先更新或重新安裝。",
    tip: "刪除 app 不會刪掉帳號，重新安裝後再登入就好。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "先重新啟動手機，再試一次打開 app。",
          "打開「App Store」→ 右上角頭像，看看有沒有「更新」，有就先更新。",
          "還是閃退，長按 app 圖示 →「移除 App」→「刪除 App」。",
          "到 App Store 重新搜尋同一個 app 並安裝。",
          "打開後輸入帳號密碼，確認能不能正常使用。",
          "如果每個 app 都閃退，可能是空間不足，請家人幫忙清理照片。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "先重新啟動手機，再試一次。",
          "打開「Google Play」→ 右上角頭像 →「管理應用程式與裝置」，更新 app。",
          "還是不行，到「設定」→「應用程式」，點那個 app，選「清除快取」。",
          "再試一次；若仍閃退，點「解除安裝」。",
          "到 Google Play 重新安裝同一個 app，再登入看看。",
          "所有 app 都閃退時，可能是空間不足，請家人協助清理。",
        ],
      },
    ],
  },

  forgot_password: {
    category: "trouble",
    icon: "🔑",
    title: "忘記密碼",
    summary: "忘記 app 或網站密碼時，用手機簡訊或信箱重設。",
    tip: "驗證碼只能自己輸入。打電話或傳訊息向您要驗證碼的人，一定是詐騙。",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        shortName: "iPhone",
        icon: "🍎",
        steps: [
          "在登入畫面點「忘記密碼？」或「忘記帳號？」。",
          "輸入您的帳號，通常是手機號碼或電子郵件。",
          "選擇用「簡訊」或「電子郵件」接收驗證碼。",
          "打開「訊息」或「郵件」，記下上面提供的驗證碼。",
          "回到 app 輸入驗證碼，再設一個新密碼。",
          "把新密碼寫在紙上收好，不要告訴別人。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        shortName: "Android",
        icon: "🤖",
        steps: [
          "在登入畫面點「忘記密碼？」。",
          "輸入註冊時用的手機號碼或信箱。",
          "選「傳簡訊」或「寄信」給我驗證碼。",
          "打開「訊息」或「Gmail」，抄下驗證碼。",
          "回到 app 貼上驗證碼，輸入新密碼並確認。",
          "新密碼寫在紙上保存，不要交給任何人。",
        ],
      },
    ],
  },
};
