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
          "用 Safari 打開這個網站。",
          "按一下藍色大按鈕「取得我的位置」。",
          "看到詢問時，按「允許」。",
          "等幾秒鐘，畫面會顯示您的位置。",
          "按「分享給家人」或「用 LINE 傳送」，選擇要傳給的家人。",
        ],
      },
      {
        id: "android",
        name: "安卓手機（Android）",
        icon: "🤖",
        steps: [
          "用 Chrome 打開這個網站。",
          "按一下藍色大按鈕「取得我的位置」。",
          "看到詢問時，按「允許」。",
          "等幾秒鐘，畫面會顯示您的位置。",
          "按「分享給家人」或「用 LINE 傳送」，選擇要傳給的家人。",
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
    if (!task) return;

    currentTaskId = taskId;
    currentSection = btn.closest(".category-section");
    if (!currentSection) return;

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
    <p class="location-lead">出門在外，按一下下面的按鈕，就能把您現在的位置傳給家人。</p>

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

      <a class="location-map-link" id="locationMapLink" href="#" target="_blank" rel="noopener">
        🗺️ 在地圖上看我的位置
      </a>

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
  const mapLink = $("locationMapLink");
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
      loc.mapUrl +
      "\n（座標 " + loc.coordsText + "，時間 " + loc.timeText + "）"
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
    const mapUrl = "https://www.google.com/maps?q=" + lat.toFixed(6) + "," + lng.toFixed(6);
    const timeText = new Date().toLocaleString("zh-TW", { hour12: false });

    lastLocation = {
      lat: lat,
      lng: lng,
      accuracy: acc,
      coordsText: coordsText,
      mapUrl: mapUrl,
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
    mapLink.href = mapUrl;
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
        "定位功能需要 HTTPS 網址。用 Cloudflare Pages 的網址就沒問題；本機測試請用 http://localhost。",
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
        : "無法自動分享，請按「在地圖上看」後，複製網址傳給家人。",
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
