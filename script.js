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

function renderTaskSteps(task) {
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
    renderTaskSteps(task);

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
