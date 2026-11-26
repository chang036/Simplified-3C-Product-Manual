"use strict";

/* ============================================================
   任務資料：每個任務包含要做的事情、要用的系統，以及簡單的步驟
   ============================================================ */
const tasks = {
  call: {
    category: "phone",
    icon: "📞",
    title: "打電話給家人",
    video: null,
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "找出「電話」app，圖示是綠色的。",
          "打開它。",
          "在上面輸入家人的電話號碼。",
          "按一下綠色的大按鈕「回呼」。",
          "接電話時，要掛斷請按紅色按鈕。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "找到「電話」app，圖示是綠色電話。",
          "輸入號碼，或點選家人名字。",
          "按綠色電話按鈕開始通話。",
          "接電話時，按紅色掛斷按鈕。",
        ],
      },
    ],
  },
  message: {
    category: "phone",
    icon: "💬",
    title: "傳訊息給家人",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開「訊息」app，圖示是藍色對話框。",
          "輸入家人號碼或名字。",
          "按「寄出」。",
          "確認訊息已經送給家人。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "打開「訊息」app。",
          "輸入號碼，或選擇家人。",
          "按「送出」。",
          "確認訊息已經送出。",
        ],
      },
    ],
  },
  photo: {
    category: "phone",
    icon: "📷",
    title: "拍照",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開「相機」app，圖示是灰色相機。",
          "打開後，按一下白色快門。",
          "照片會存到相簿。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "打開「相機」app。",
          "按快門鈕拍照。",
          "照片會存到相簿。",
        ],
      },
    ],
  },
  location: {
    category: "phone",
    icon: "📍",
    title: "傳送我的位置給家人",
    systems: [
      {
        id: "ios",
        name: "蘋果手機（iPhone）",
        icon: "🍎",
        steps: [
          "打開手機上的「地圖」app（Apple 地圖）。",
          "點一下地圖上的藍色圓點，那就是您現在的位置。",
          "點一下下方的「分享」按鈕。",
          "選擇「訊息」或「LINE」。",
          "選一位家人，按「傳送」。",
          "如果還是不會，畫面下方有按鈕，可以幫您把位置傳給家人。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "打開手機上的「Google 地圖」app。",
          "點一下地圖上的藍色圓點，那就是您現在的位置。",
          "點一下「分享位置資訊」。",
          "選擇「訊息」或「LINE」。",
          "選一位家人，按「傳送」。",
          "如果還是不會，畫面下方有按鈕，可以幫您把位置傳給家人。",
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
          "一直連不上時，點 Wi-Fi 名稱旁的 ⓘ →「忘記此網路」，再重新輸入密碼。",
        ],
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
          "一直連不上時，長按 Wi-Fi 名稱 →「忘記網路」，再重新輸入密碼。",
        ],
      },
    ],
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
          "第一次連好後，下次打開通常會自動連上。",
        ],
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
          "連不上時，先取消配對再試一次，或請家人幫忙。",
        ],
      },
    ],
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
          "到「照片」app →「相簿」→「螢幕截圖」可以查看。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "同時按住電源鍵和音量減小鍵。",
          "看到畫面閃一下就成功了。",
          "如果沒反應，從螢幕上方往下滑，點「截圖」。",
          "到「相簿」→「截圖」資料夾可以查看。",
        ],
      },
    ],
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
          "刪之前先確認照片已備份，才不會後悔。",
        ],
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
          "刪之前先確認照片已備份，才不會後悔。",
        ],
      },
    ],
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
          "如果手機沒電或沒網路，只能看到最後一次的位置。",
        ],
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
          "如果手機沒電或沒網路，只能看到最後一次的位置。",
        ],
      },
    ],
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
          "小提醒：不管誰打電話問驗證碼，都不要說出來。",
        ],
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
          "小提醒：不管誰打電話問驗證碼，都不要說出來。",
        ],
      },
    ],
  },
  browse: {
    category: "computer",
    icon: "🌐",
    title: "開啟網頁",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "找到桌上「瀏覽器」圖示，例如 Microsoft Edge。",
          "用滑鼠雙重按一下它。",
          "在網址列貼上網址。",
          "按一下 Enter 鍵。",
        ],
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "找「Safari」或「Chrome」圖示。",
          "用兩倍滑鼠點兩下它。",
          "貼上網址。",
          "按 Enter 鍵。",
        ],
      },
    ],
  },
  screenshot: {
    category: "computer",
    icon: "📸",
    title: "截圖",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "按一下 Windows 鍵，再按 Shift 和 S。",
          "用滑鼠畫一個框。",
          "照片會存到剪貼簿。",
        ],
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "按 Command 鍵加 Shift 加 3。",
          "照片會存到桌面。",
        ],
      },
    ],
  },
  fontsize: {
    category: "computer",
    icon: "🔍",
    title: "調整字體大小",
    systems: [
      {
        id: "windows",
        name: "Windows 電腦",
        icon: "🪟",
        steps: [
          "按一下 Windows 鍵，打開設定。",
          "點「個性化」。",
          "點「顯示」。",
          "調整字級別。",
        ],
      },
      {
        id: "mac",
        name: "Mac 電腦",
        icon: "🍎",
        steps: [
          "開啟「系統設定」。",
          "點「顯示」。",
          "調整文字大小。",
        ],
      },
    ],
  },
  watch_call: {
    category: "watch",
    icon: "⌚",
    title: "智慧手錶：打電話 / 傳訊息",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "打開「電話」app。",
          "輸入號碼，或點選家人名字。",
          "按「回呼」開始通話。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "開啟「通話」app。",
          "輸入號碼，或點選家人。",
          "按綠色按鈕撥打。",
        ],
      },
    ],
  },
  watch_health: {
    category: "watch",
    icon: "❤️",
    title: "智慧手錶：看健康數據",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "打開「健康」app。",
          "看一下心率數值。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "開啟「健康」app。",
          "看一下心率數值。",
        ],
      },
    ],
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
          "警訊：休息時一直超過 120 或低於 50，又頭昏、胸悶，請盡快就醫；胸痛或快昏倒請打 119。",
        ],
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
          "警訊：休息時一直超過 120 或低於 50，又頭昏、胸悶，請盡快就醫；胸痛或快昏倒請打 119。",
        ],
      },
    ],
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
          "警訊：低於 92%，或喘不過氣、嘴唇發紫，請盡快就醫或打 119。",
        ],
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
          "警訊：低於 92%，或喘不過氣、嘴唇發紫，請盡快就醫或打 119。",
        ],
      },
    ],
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
          "手錶結果不是醫生診斷；異常請帶著記錄去看醫生。",
        ],
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
          "如果沒有這個 app，代表手錶不支援，可改量心跳與血氧。",
        ],
      },
    ],
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
          "警訊：打呼很大聲又突然停住呼吸、睡醒頭痛，可能是睡眠呼吸中止症，請就醫。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "在 Samsung Health 或 Google 健康 app →「睡眠」設定睡眠時間。",
          "戴著手錶睡覺，隔天看睡眠時間與階段。",
          "作用：看有沒有睡飽、睡眠品質好不好。",
          "警訊：打呼很大聲、呼吸停頓、白天一直想睡，請就醫檢查。",
        ],
      },
    ],
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
          "這些數字僅供參考，身體不舒服還是要找醫生。",
        ],
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
          "如果手錶沒有這些功能，代表機型不支援。",
        ],
      },
    ],
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
          "警訊：跌倒後意識不清、劇痛、站不起來，請不要勉強起身，打 119 或等救援。",
        ],
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
          "若手錶沒有此功能，可設 SOS：連按電源鍵幾次撥打緊急電話。",
        ],
      },
    ],
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
          "如果手機靜音或沒電，用家人的手機到 icloud.com/find 找。",
        ],
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
          "如果找不到，用家人的手機到 google.com/android/find 找。",
        ],
      },
    ],
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
          "照片會存到手機的相簿。",
        ],
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
          "到手機相簿看照片。",
        ],
      },
    ],
  },
  watch_alarm: {
    category: "watch",
    icon: "⏰",
    title: "智慧手錶：設定鬧鐘",
    systems: [
      {
        id: "watch-ios",
        name: "Apple Watch",
        icon: "⌚",
        steps: [
          "開啟「鬧鐘」app。",
          "設定鬧鐘時間。",
          "打開鬧鐘。",
        ],
      },
      {
        id: "watch-android",
        name: "安卓手錶（Wear OS）",
        icon: "⌚",
        steps: [
          "開啟「鬧鐘」app。",
          "設定鬧鐘時間，並打開它。",
        ],
      },
    ],
  },
};

/* ============================================================
   目前選到的任務
   ============================================================ */
let currentTaskId = null;
let currentSection = null;

const taskButtons = document.querySelectorAll(".task-btn");

function getTaskStepsEl(section) {
  return section.querySelector(".task-steps");
}

function getTaskIconEl(section) {
  return section.querySelector(".task-detail-icon");
}

function getTaskTitleEl(section) {
  return section.querySelector(".task-detail-title");
}

function renderTaskSteps(task, taskId) {
  const taskSteps = getTaskStepsEl(currentSection);
  taskSteps.innerHTML = "";
  task.systems.forEach((sys) => {
    const card = document.createElement("div");
    card.className = "system-card";

    const h4 = document.createElement("h4");
    h4.innerHTML = sys.icon + " " + sys.name;
    card.appendChild(h4);

    const ol = document.createElement("ol");
    ol.className = "steps";
    sys.steps.forEach((stepText, idx) => {
      const li = document.createElement("li");
      const num = document.createElement("span");
      num.className = "step-no";
      num.textContent = String(idx + 1);
      const text = document.createElement("span");
      text.textContent = stepText;
      li.appendChild(num);
      li.appendChild(text);
      ol.appendChild(li);
    });
    card.appendChild(ol);

    taskSteps.appendChild(card);
  });

  // 若任務有設定 video，就顯示示意影片
  if (task.video) {
    const videoWrap = document.createElement("div");
    videoWrap.className = "task-video";

    const videoTitle = document.createElement("h4");
    videoTitle.textContent = task.video.title || "示意影片";
    videoWrap.appendChild(videoTitle);

    const iframe = document.createElement("iframe");
    iframe.src = task.video.embedUrl || "";
    iframe.setAttribute("title", task.video.title || "示意影片");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoWrap.appendChild(iframe);

    taskSteps.appendChild(videoWrap);
  }

  // 「傳送我的位置」任務：加上定位分享卡片
  if (taskId === "location") {
    const locationCard = createLocationCard();
    taskSteps.appendChild(locationCard);
    wireLocationCard(locationCard);
  }
}

taskButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const taskId = btn.getAttribute("data-task");
    const task = tasks[taskId];
    if (!task) {
      // 舊快取的 script.js 找不到新按鈕的資料時，不要毫無反應
      const section = btn.closest(".category-section");
      if (section) {
        getTaskTitleEl(section).textContent = "這個項目暫時沒有內容";
        const steps = getTaskStepsEl(section);
        if (steps) steps.textContent = "請重新整理網頁（按 Ctrl + F5，手機請下拉重新整理）後再試一次。";
        section.querySelector(".task-detail").hidden = false;
      }
      return;
    }

    currentTaskId = taskId;
    currentSection = btn.closest(".category-section");
    if (!currentSection) return;

    // 把教學內容移到點選的按鈕正下方展開（而不是整排按鈕的最下面）
    const detail = currentSection.querySelector(".task-detail");
    if (detail) btn.after(detail);

    getTaskIconEl(currentSection).textContent = task.icon;
    getTaskTitleEl(currentSection).textContent = task.title;
    renderTaskSteps(task, taskId);

    taskButtons.forEach((b) => {
      b.setAttribute("aria-pressed", String(b === btn));
    });

    currentSection.querySelector(".task-detail").hidden = false;
  });
});

document.querySelectorAll(".back-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.closest(".category-section");
    if (!section) return;
    section.querySelectorAll(".task-btn").forEach((b) => b.setAttribute("aria-pressed", "false"));
    section.querySelector(".task-detail").hidden = true;
    if (currentTaskId && tasks[currentTaskId].category === section.getAttribute("data-category")) {
      currentTaskId = null;
      currentSection = null;
    }
  });
});

/* ============================================================
   分類導覽：點擊後捲動到對應分類
   ============================================================ */
document.querySelectorAll(".cat-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ============================================================
   字級切換（小：18 / 中：20 / 大：24，預設大）
   ============================================================ */
const fontButtons = document.querySelectorAll(".font-btn");
const FONT_KEY = "simple-device-font";
const FONT_MAP = {
  small: "18px",
  medium: "20px",
  large: "24px",
};

function applyFont(size) {
  document.documentElement.style.fontSize = FONT_MAP[size] || "24px";
  try {
    localStorage.setItem(FONT_KEY, size);
  } catch (e) {
    /* 忽略無法寫入的環境 */
  }
  fontButtons.forEach((b) => {
    b.setAttribute("aria-pressed", String(b.getAttribute("data-size") === size));
  });
}

fontButtons.forEach((b) => {
  b.addEventListener("click", () => {
    applyFont(b.getAttribute("data-size"));
  });
});

let savedFont = "large";
try {
  savedFont = localStorage.getItem(FONT_KEY) || "large";
} catch (e) {
  /* ignore */
}
applyFont(["small", "medium", "large"].includes(savedFont) ? savedFont : "large");

/* ============================================================
   回到頂端按鈕
   ============================================================ */
const toTopBtn = document.getElementById("toTop");
function toggleToTop() {
  if (toTopBtn) {
    toTopBtn.classList.toggle("show", window.scrollY > 400);
  }
}
window.addEventListener("scroll", toggleToTop, { passive: true });
toggleToTop();

if (toTopBtn) {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   傳送我的位置：取得 GPS 座標，產生地圖連結並分享
   ============================================================ */

// 建立定位分享卡片（只有「傳送我的位置」任務才會用到）
function createLocationCard() {
  const card = document.createElement("div");
  card.className = "location-card";
  card.innerHTML = `
    <h3 class="location-title">📍 傳送我的位置給家人</h3>
    <p class="location-lead">上面的步驟是教您用 Apple 地圖（iPhone）或 Google 地圖（Android）傳位置。如果真的不會操作，再按下面的按鈕，這個網站會幫您把位置變成連結，一樣可以傳給家人。</p>

    <button type="button" class="location-btn" id="locationBtn" aria-busy="false">
      <span class="location-btn-icon" aria-hidden="true">📍</span>
      <span id="locationBtnText">取得我的位置</span>
    </button>

    <p class="location-status" id="locationStatus" role="status" aria-live="polite"></p>

    <div class="location-result" id="locationResult" hidden>
      <p class="location-address" id="locationAddress">已經找到您的位置</p>
      <p class="location-coords" id="locationCoords"></p>
      <p class="location-accuracy" id="locationAccuracy"></p>
      <p class="location-time" id="locationTime"></p>

      <div class="location-map-links">
        <a class="location-map-link" id="locationGoogleMapLink" href="#" target="_blank" rel="noopener">
          🗺️ 在 Google 地圖看
        </a>
        <a class="location-map-link" id="locationAppleMapLink" href="#" target="_blank" rel="noopener">
          🍎 在 Apple 地圖看
        </a>
      </div>

      <div class="location-actions">
        <button type="button" class="location-action location-action-primary" id="locationShareBtn">
          📤 分享給家人
        </button>
        <button type="button" class="location-action" id="locationCopyBtn">
          📋 複製位置連結
        </button>
        <a class="location-action location-action-line" id="locationLineLink" href="#" target="_blank" rel="noopener">
          💚 用 LINE 傳送
        </a>
        <a class="location-action" id="locationSmsLink" href="#">
          💬 用簡訊傳送
        </a>
      </div>

      <p class="location-tip">小提醒：傳送前，請先確認是要傳給認識的家人。</p>
    </div>
  `;
  return card;
}

// 把定位卡片的按鈕接上功能
function wireLocationCard(card) {
  const $ = (id) => card.querySelector("#" + id);

  const btn = $("locationBtn");
  const btnText = $("locationBtnText");
  const status = $("locationStatus");
  const result = $("locationResult");
  const address = $("locationAddress");
  const coords = $("locationCoords");
  const accuracy = $("locationAccuracy");
  const timeEl = $("locationTime");
  const googleMapLink = $("locationGoogleMapLink");
  const appleMapLink = $("locationAppleMapLink");
  const shareBtn = $("locationShareBtn");
  const copyBtn = $("locationCopyBtn");
  const lineLink = $("locationLineLink");
  const smsLink = $("locationSmsLink");

  let lastLocation = null;
  let isLocating = false;

  function setStatus(text, type) {
    status.textContent = text;
    status.classList.remove("is-error", "is-ok");
    if (type) status.classList.add("is-" + type);
  }

  function buildMessage(loc) {
    return (
      "我現在的位置：\n" +
      "Google 地圖：" + loc.googleMapUrl + "\n" +
      "Apple 地圖：" + loc.appleMapUrl + "\n" +
      "（座標 " + loc.coordsText + "，時間 " + loc.timeText + "）"
    );
  }

  function buildSmsHref(message) {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    return "sms:" + (isIOS ? "&" : "?") + "body=" + encodeURIComponent(message);
  }

  function buildLineHref(message) {
    // LINE 分享網址：開啟 LINE 後，讓使用者選擇要傳給哪位家人
    return "https://line.me/R/msg/text/?" + encodeURIComponent(message);
  }

  function renderPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const acc = Math.round(position.coords.accuracy || 0);
    const coordsText = lat.toFixed(6) + ", " + lng.toFixed(6);
    const googleMapUrl = "https://www.google.com/maps?q=" + lat.toFixed(6) + "," + lng.toFixed(6);
    const appleMapUrl = "https://maps.apple.com/?q=" + lat.toFixed(6) + "," + lng.toFixed(6);
    const timeText = new Date().toLocaleString("zh-TW", { hour12: false });

    lastLocation = {
      lat: lat,
      lng: lng,
      accuracy: acc,
      coordsText: coordsText,
      googleMapUrl: googleMapUrl,
      appleMapUrl: appleMapUrl,
      timeText: timeText,
    };
    lastLocation.message = buildMessage(lastLocation);

    address.textContent = "✅ 已經找到您的位置";
    coords.textContent = "緯度 " + lat.toFixed(6) + "　經度 " + lng.toFixed(6);
    accuracy.textContent =
      acc > 0
        ? "定位誤差大約 " + acc + " 公尺" + (acc > 200 ? "（室內或收訊較弱時，位置會比較不準）" : "")
        : "";
    timeEl.textContent = "更新時間：" + timeText;
    googleMapLink.href = googleMapUrl;
    appleMapLink.href = appleMapUrl;
    smsLink.href = buildSmsHref(lastLocation.message);
    lineLink.href = buildLineHref(lastLocation.message);

    result.hidden = false;
    btnText.textContent = "🔄 重新取得位置";
    setStatus("位置已取得，可以按下面的按鈕傳給家人。", "ok");
  }

  function errorMessage(err) {
    if (!err) return "取得位置時發生問題，請再按一次。";
    if (err.code === 1) return "沒有取得定位權限。請在瀏覽器網址列旁允許「位置」，再按一次按鈕。";
    if (err.code === 2) return "目前找不到定位訊號。請到窗邊或空曠處，再按一次按鈕。";
    if (err.code === 3) return "等太久沒有收到位置。請再按一次按鈕。";
    return "取得位置時發生問題，請再按一次。";
  }

  function getMyLocation() {
    if (isLocating) return;

    if (!navigator.geolocation) {
      setStatus("這個瀏覽器不支援定位功能，請改用 Safari、Chrome 或 Edge。", "error");
      return;
    }

    if (!window.isSecureContext) {
      setStatus(
        "定位功能需要 HTTPS 網址。請用 GitHub Pages 的網址開啟；本機測試請用 http://localhost。",
        "error"
      );
      return;
    }

    isLocating = true;
    btn.disabled = true;
    btn.setAttribute("aria-busy", "true");
    btnText.textContent = "正在找您的位置…";
    setStatus("正在透過 GPS 找位置，請稍等（最多 20 秒）。");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        isLocating = false;
        btn.disabled = false;
        btn.setAttribute("aria-busy", "false");
        renderPosition(position);
      },
      (err) => {
        isLocating = false;
        btn.disabled = false;
        btn.setAttribute("aria-busy", "false");
        btnText.textContent = lastLocation ? "🔄 重新取得位置" : "📍 再試一次";
        setStatus(
          lastLocation
            ? errorMessage(err) + " 下面顯示的是上一次取得的位置（" + lastLocation.timeText + "）。"
            : errorMessage(err),
          "error"
        );
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
    );
  }

  async function copyText() {
    if (!lastLocation) return false;
    const text = lastLocation.message;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
      /* 改用下面的舊方法 */
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-1000px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch (e) {
      return false;
    }
  }

  async function shareLocation() {
    if (!lastLocation) {
      setStatus("請先按「取得我的位置」。", "error");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "我的位置",
          text: lastLocation.message,
        });
        setStatus("已開啟分享選單，請選擇要傳給哪位家人。", "ok");
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }

    const copied = await copyText();
    setStatus(
      copied
        ? "這個瀏覽器沒有分享選單，位置連結已複製，請貼到訊息裡傳給家人。"
        : "無法自動分享，請按「在 Google 地圖看」或「在 Apple 地圖看」後，複製網址傳給家人。",
      copied ? "ok" : "error"
    );
  }

  btn.addEventListener("click", getMyLocation);
  shareBtn.addEventListener("click", shareLocation);
  copyBtn.addEventListener("click", async () => {
    const ok = await copyText();
    setStatus(
      ok ? "位置資訊已複製！請貼到訊息裡傳給家人。" : "複製失敗，請按「在地圖上看」後複製網址。",
      ok ? "ok" : "error"
    );
  });
}
