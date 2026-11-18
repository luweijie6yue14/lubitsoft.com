// LubitSoft Official Catalog & Theme/Mobile Controller
const ASSET_PREFIX = document.querySelector('script[src*="../js/main.js"]') ? "../" : "";

const LUBIT_CATALOG = [
  {
    id: "and-puredasher",
    platform: "android",
    name: "PureDasher",
    version: "v2.1.0",
    size: "2.05 MB",
    req: "Android 8.0+ (API 26+)",
    iconImg: `${ASSET_PREFIX}assets/puredasher-logo.svg`,
    apkUrl: `${ASSET_PREFIX}downloads/PureDasher_v2.1.0-release.apk`,
    apkFileName: "PureDasher_v2.1.0-release.apk",
    packageId: "com.weijielu.puredasher",
    detailPage: "/puredasher",
    privacyPage: "/privacy-puredasher",
    playUrl: "https://play.google.com/store/apps/details?id=com.weijielu.puredasher",
    sha256: "f77d4626e3cf52c4afe7d095e1733ef89261362868571b9653f63e1f408b5842"
  },
  {
    id: "and-aircompass",
    platform: "android",
    name: "AirCompass",
    version: "v2.2.0",
    size: "8.20 MB",
    req: "Android 8.0+ (API 26+)",
    iconImg: `${ASSET_PREFIX}assets/aircompass-logo.png`,
    apkUrl: `${ASSET_PREFIX}downloads/AirCompass_v2.2.0-release.apk`,
    apkFileName: "AirCompass_v2.2.0-release.apk",
    packageId: "com.weijielu.aircompass",
    detailPage: "/aircompass",
    privacyPage: "/privacy-aircompass",
    playUrl: "https://play.google.com/store/apps/details?id=com.weijielu.aircompass",
    sha256: "ce26ef8910f15cfc6f3b2b8cea3c4eed5d54dc2f8ff6e2eec89c2eb21e7c9409"
  },
  {
    id: "win-hardwarelens",
    platform: "windows",
    isPaid: true,
    name: "HardwareLens",
    version: "v1.0.0",
    size: "54.82 MB",
    req: "Windows 10 / Windows 11",
    iconImg: `${ASSET_PREFIX}assets/hardwarelens-logo.png`,
    apkUrl: `${ASSET_PREFIX}downloads/HardwareLens_Setup_v1.0.0.exe`,
    apkFileName: "HardwareLens_Setup_v1.0.0.exe",
    packageId: "LubitSoft.HardwareLens",
    detailPage: "/hardwarelens"
  },
  {
    id: "win-forceuninstaller",
    platform: "windows",
    isPaid: false,
    hasPaidFeatures: true,
    name: "ForceUninstaller",
    version: "v1.0.0",
    size: "16.48 MB",
    req: "Windows 10 / Windows 11",
    iconImg: `${ASSET_PREFIX}assets/forceuninstaller-logo.png`,
    apkUrl: `${ASSET_PREFIX}downloads/ForceUninstaller_Setup_v1.0.0.exe`,
    apkFileName: "ForceUninstaller_Setup_v1.0.0.exe",
    packageId: "LubitSoft.ForceUninstaller",
    detailPage: "/forceuninstaller"
  }
];

const FALLBACK_TEXT = {
  "btn.gp_dl": "Google Play 下载",
  "btn.apk_backup": "下载 APK",
  "btn.dl_installer": "下载安装程序",
  "btn.free_software": "免费软件",
  "btn.buy_license": "微信 / 支付宝付款",
  "btn.taobao": "淘宝官方店铺购买",
  "toast.taobao_soon": "淘宝官方店铺即将开放，敬请期待！",
  "taobao.modal_desc": "淘宝官方店铺正在筹备上线中，即将开放，敬请期待！目前您可通过微信或支付宝渠道购买 HardwareLens 正版激活码。",
  "taobao.modal_ok": "我知道了",
  "hl.confirm_title": "付费软件下载确认",
  "hl.confirm_desc": "HardwareLens 为付费软件（新用户提供 1 小时免费试用），是否确认下载安装程序？",
  "hl.btn_confirm_dl": "确认下载",
  "hl.btn_buy_and_dl": "购买并下载",
  "hl.btn_cancel": "取消",
  "btn.details": "详情",
  "btn.privacy": "隐私权政策",
  "hl.badge_paid": "付费软件 · 1小时免费试用",
  "fu.badge_freemium": "部分功能付费",
  "pay.title": "HardwareLens 正版激活码购买",
  "fu.pay_title": "ForceUninstaller 高级功能激活码购买",
  "fu.taobao_modal_desc": "淘宝官方店铺正在筹备上线中，即将开放，敬请期待！目前您可通过微信或支付宝渠道购买 ForceUninstaller 高级功能激活码。",
  "pay.wechat": "微信支付 (WeChat)",
  "pay.alipay": "支付宝 (Alipay)",
  "pay.step_note": "请使用对应 App 扫描上方收款码完成人民币支付（月卡 ¥3 / 季卡 ¥5 / 年卡 ¥10 / 永久 ¥20）。支付成功后，请将以下 4 项信息发送至 <strong>payment@lubitsoft.com</strong> 申请激活码：<br>1. 付款截图<br>2. 交易单号<br>3. 购买的激活时长（月卡 / 季卡 / 年卡 / 永久激活）<br>4. 软件提供的机器码<br>我们会在 <strong>24 小时内</strong> 处理您的购买申请，并将激活码发送至您的买家邮箱。",
  "nav.home": "官网首页",
  "nav.support": "支持",
  "theme.auto": "跟随系统",
  "theme.light": "浅色",
  "theme.dark": "深色",
  "footer.desc": "LubitSoft 专注于研发轻量、纯净、安全可靠的跨平台实用工具软件，服务 Android 与 Windows 用户。",
  "footer.col1": "软件专栏与专属渠道",
  "footer.col2": "关于与隐私合规",
  "footer.l_and": "Android 软件下载",
  "footer.l_win": "Windows 软件专栏",
  "footer.l_ios": "iOS 软件专栏",
  "footer.l_macos": "macOS 软件专栏",
  "apple.empty_t": "暂无软件，敬请期待",
  "apple.empty_d": "该平台软件正在筹备规划中，目前您可先浏览已正式上架的 Android 与 Windows 软件。",
  "footer.l_about": "公司简介与愿景",
  "footer.l_ppd": "PureDasher 隐私权政策",
  "footer.l_pac": "AirCompass 隐私权政策",
  "footer.l_contact": "商务合作与联系",
  "footer.copy": "© 2026 LubitSoft Inc. All rights reserved.",
  "footer.slogan": "纯净软件 · 安全下载 · 隐私优先",
  "cookie.banner": "本网站使用 Cookie 保存您的语言与深浅色主题偏好。",
  "cookie.accept": "接受 Cookie",
  "cookie.clear_btn": "清除 Cookie",
  "cookie.cleared": "✓ 已清除所有网站 Cookie 与本地偏好设置",
  "win.empty_t": "Windows 软件专栏即将上线",
  "win.empty_d": "目前官网已优先开放 Android 端两款核心应用（PureDasher 与 AirCompass）的官方下载与服务，Windows 桌面软件正在筹备发布中。",
  "win.empty_btn": "前往 Android 软件专栏",
  "modal.dl_title": "正在下载",
  "modal.dl_ok": "✓ 已为您触发真实 APK 文件下载，若未自动开始请点击下方按钮重试。",
  "modal.dl_retry": "手动再次下载 APK",
  "modal.dl_gp": "Google Play",
  "modal.close": "关闭",
  "toast.contact_ok": "感谢您的留言！LubitSoft 团队将在 24 小时内与您联系。",
  "verify.auto_checking": "正在进行安全环境自动人机验证...",
  "verify.auto_pass": "验证通过，正在为您下载 APK...",
  "verify.auto_pass_win": "验证通过，正在为您下载安装程序...",
  "verify.manual_title": "请完成人机验证后下载",
  "verify.manual_desc": "自动安全检测未通过，请向右拖动滑块完成验证：",
  "verify.slider_hint": "向右滑动完成验证 →",
  "verify.manual_pass": "✓ 验证成功，正在开始下载..."
};

function tr(key) {
  if (typeof t === "function") {
    const res = t(key);
    if (res && res !== key) return res;
  }
  return FALLBACK_TEXT[key] || key;
}

// Theme Management (auto / light / dark)
const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getThemeMode() {
  return localStorage.getItem("lubitsoft_theme") || "auto";
}

function updateThemeDropdownUI() {
  const mode = getThemeMode();
  document.querySelectorAll("#themeSegmented .theme-seg-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.val === mode);
  });
}

function applyTheme(mode) {
  const effective = mode === "auto" ? (systemDarkQuery.matches ? "dark" : "light") : mode;
  document.documentElement.setAttribute("data-theme", effective);
  document.documentElement.style.backgroundColor = effective === "dark" ? "#0B1120" : "#FFFFFF";

  const brandLogo = document.querySelector(".brand-link img");
  if (brandLogo) {
    brandLogo.src = effective === "dark" ? `${ASSET_PREFIX}logo-dark.svg` : `${ASSET_PREFIX}logo.svg`;
  }

  updateThemeDropdownUI();
}

function injectThemeSwitcher() {
  const actions = document.querySelector(".nav-actions");
  if (!actions || document.getElementById("themeSegmented")) return;

  const mode = getThemeMode();
  const wrap = document.createElement("div");
  wrap.id = "themeSegmented";
  wrap.className = "theme-segmented";
  wrap.innerHTML = `
    <button type="button" class="theme-seg-btn ${mode === 'light' ? 'active' : ''}" data-val="light" aria-label="Light Mode" title="Light">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
      </svg>
    </button>
    <button type="button" class="theme-seg-btn ${mode === 'dark' ? 'active' : ''}" data-val="dark" aria-label="Dark Mode" title="Dark">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
    <button type="button" class="theme-seg-btn ${mode === 'auto' ? 'active' : ''}" data-val="auto" aria-label="System Auto Mode" title="Auto">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    </button>
  `;

  wrap.querySelectorAll(".theme-seg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.val;
      localStorage.setItem("lubitsoft_theme", val);
      setSiteCookie("lubitsoft_theme", val, 365);
      applyTheme(val);
    });
  });

  actions.prepend(wrap);
}

// Apply theme immediately to avoid flash
applyTheme(getThemeMode());
systemDarkQuery.addEventListener("change", () => {
  if (getThemeMode() === "auto") applyTheme("auto");
});

// Resolve Clean URLs when opened locally via file://
function resolveLocalUrl(href) {
  if (window.location.protocol !== "file:") return href;
  if (!href || !href.startsWith("/")) return href;
  const [pathPart, hashPart] = href.split("#");
  const clean = pathPart.replace(/^\/+|\/+$/g, "");
  const target = clean === "" ? `${ASSET_PREFIX}index.html` : `${ASSET_PREFIX}${clean}/index.html`;
  return hashPart ? `${target}#${hashPart}` : target;
}

function patchLocalLinks() {
  if (window.location.protocol !== "file:") return;
  document.querySelectorAll('a[href^="/"]').forEach(a => {
    a.setAttribute("href", resolveLocalUrl(a.getAttribute("href")));
  });
}

function navigateCard(evt, detailPath) {
  if (evt.target.closest("a, button")) return;
  window.location.href = resolveLocalUrl(detailPath);
}

// Render Software Card (No Details button — click anywhere on card to open details)
function createSoftwareCard(item, mode = "column") {
  let actionsHtml = "";
  let extraSpec = "";

  if (item.platform === "windows" && (item.isPaid || item.hasPaidFeatures)) {
    const badgeKey = item.isPaid ? "hl.badge_paid" : "fu.badge_freemium";
    extraSpec = `<span class="spec-chip spec-chip-pro">${tr(badgeKey)}</span>`;
    actionsHtml = `
      <div class="card-actions-grid">
        <button type="button" class="btn btn-sm btn-windows" onclick="startApkDownload(event, '${item.id}')">${tr("btn.dl_installer")}</button>
        <button type="button" class="btn btn-sm btn-android" onclick="openPaymentModal('${item.name}')">${tr("btn.buy_license")}</button>
        <button type="button" class="btn btn-sm btn-taobao-disabled" style="grid-column: 1 / -1;" onclick="showTaobaoComingSoon('${item.name}')">${tr("btn.taobao")}</button>
      </div>
    `;
  } else if (item.platform === "windows") {
    extraSpec = `<span class="spec-chip" style="background: var(--android-green-soft); color: var(--android-green); font-weight:600;">${tr("btn.free_software")}</span>`;
    actionsHtml = `
      <div class="card-actions">
        <button type="button" class="btn btn-sm btn-windows" onclick="startApkDownload(event, '${item.id}')">${tr("btn.dl_installer")}</button>
      </div>
    `;
  } else if (mode === "home") {
    actionsHtml = `
      <div class="card-actions">
        <a class="btn btn-sm btn-android" href="${item.playUrl}" target="_blank" rel="noopener noreferrer">${tr("btn.gp_dl")}</a>
      </div>
    `;
  } else {
    const privacyHref = resolveLocalUrl(item.privacyPage);
    actionsHtml = `
      <div class="card-actions-grid">
        <a class="btn btn-sm btn-android" href="${item.playUrl}" target="_blank" rel="noopener noreferrer">${tr("btn.gp_dl")}</a>
        <button type="button" class="btn btn-sm btn-gray" onclick="startApkDownload(event, '${item.id}')">${tr("btn.apk_backup")}</button>
        <a class="btn btn-sm btn-outline" style="grid-column: 1 / -1;" href="${privacyHref}">${tr("btn.privacy")}</a>
      </div>
    `;
  }

  return `
    <article class="software-card" onclick="navigateCard(event, '${item.detailPage}')">
      <div>
        <div class="card-top">
          <div class="card-title-wrap">
            <img class="app-logo-img" src="${item.iconImg}" alt="${item.name} Logo" />
            <div>
              <h3>${item.name}</h3>
              <div class="card-meta">${item.version} · ${item.size}</div>
            </div>
          </div>
        </div>
        <div class="card-specs" style="margin-bottom: 18px;">
          ${extraSpec}
          <span class="spec-chip">${item.req}</span>
          <span class="spec-chip">${item.version}</span>
          <span class="spec-chip">${item.size}</span>
        </div>
      </div>
      ${actionsHtml}
    </article>
  `;
}

function showTaobaoComingSoon(appName = "HardwareLens") {
  ensureModalsExist();
  document.getElementById("noticeModalTitle").textContent = tr("toast.taobao_soon");
  document.getElementById("noticeModalDesc").textContent = appName === "ForceUninstaller" ? tr("fu.taobao_modal_desc") : tr("taobao.modal_desc");
  const payBtn = document.getElementById("noticePayBtn");
  payBtn.textContent = tr("btn.buy_license");
  payBtn.onclick = () => {
    closeModal("noticeModal");
    openPaymentModal(appName);
  };
  document.getElementById("noticeOkBtn").textContent = tr("taobao.modal_ok");
  document.getElementById("noticeModal").classList.add("open");
}

// Render Catalog on Android / Windows Pages (No category tabs)
function initPlatformCatalog(platform) {
  const grid = document.getElementById("softwareGrid");
  if (!grid) return;

  const tabsContainer = document.getElementById("filterTabs");
  if (tabsContainer) tabsContainer.innerHTML = "";

  const searchInput = document.getElementById("searchInput");
  const items = LUBIT_CATALOG.filter(item => item.platform === platform);

  if (items.length === 0) {
    const andHref = resolveLocalUrl("/android");
    const winHref = resolveLocalUrl("/windows");
    const isApple = platform === "ios" || platform === "macos";
    const titleText = isApple ? tr("apple.empty_t") : tr("win.empty_t");
    const descText = isApple ? tr("apple.empty_d") : tr("win.empty_d");
    grid.style.gridTemplateColumns = "1fr";
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 64px 24px; background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
        <h3 style="font-size:1.35rem; margin-bottom:10px; color: var(--text-primary);">${titleText}</h3>
        <p style="color: var(--text-secondary); max-width:520px; margin: 0 auto 24px;">${descText}</p>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <a href="${andHref}" class="btn btn-android">${tr("win.empty_btn")}</a>
          <a href="${winHref}" class="btn btn-windows">${tr("footer.l_win")}</a>
        </div>
      </div>
    `;
    return;
  }

  let searchQuery = "";
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = "1";
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderFiltered();
    });
  }

  function renderFiltered() {
    const filtered = items.filter(item =>
      !searchQuery || item.name.toLowerCase().includes(searchQuery) || item.version.toLowerCase().includes(searchQuery)
    );
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 380px))";
    grid.innerHTML = filtered.length
      ? filtered.map(item => createSoftwareCard(item, "column")).join("")
      : `<div style="grid-column: 1 / -1; text-align:center; padding: 48px 0; color: var(--text-muted);">No matching applications found.</div>`;
  }

  renderFiltered();
}

// Render Featured on Homepage
function initFeaturedCatalog() {
  const featuredGrid = document.getElementById("featuredGrid");
  if (!featuredGrid) return;
  featuredGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 380px))";
  featuredGrid.innerHTML = LUBIT_CATALOG.map(item => createSoftwareCard(item, "home")).join("");
}

// Modals Injection & Control (Auto + Manual Human Verification, No Package/SHA-256)
function ensureModalsExist() {
  if (document.getElementById("lubitModalRoot")) return;
  const root = document.createElement("div");
  root.id = "lubitModalRoot";
  root.innerHTML = `
    <div class="modal-backdrop" id="verifyModal">
      <div class="modal-box" style="background: var(--bg-card); color: var(--text-primary); max-width: 420px;">
        <div class="modal-header">
          <h3 id="verifyTitle"></h3>
          <button class="modal-close" onclick="closeModal('verifyModal')">&times;</button>
        </div>
        <p id="verifyDesc" style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 16px;"></p>
        <div id="verifySliderWrap" style="display:none; margin-bottom: 14px;">
          <input type="range" id="verifySlider" min="0" max="100" value="0" style="width:100%; accent-color: var(--android-green); cursor:pointer;" />
          <div style="font-size:0.8rem; color: var(--text-muted); text-align:center; margin-top:6px;" id="verifySliderHint"></div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop" id="paymentModal">
      <div class="modal-box" style="background: var(--bg-card); color: var(--text-primary); max-width: 480px;">
        <div class="modal-header">
          <h3 id="payModalTitle"></h3>
          <button class="modal-close" onclick="closeModal('paymentModal')">&times;</button>
        </div>
        <div id="payPricingBar" style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: 10px; padding: 10px 12px; font-size: 0.85rem; color: var(--text-primary); font-weight: 600; text-align: center; margin-bottom: 14px;"></div>
        <div class="pay-tabs">
          <button type="button" class="pay-tab active-wechat" id="payTabWechat" onclick="switchPayMethod('wechat')"></button>
          <button type="button" class="pay-tab" id="payTabAlipay" onclick="switchPayMethod('alipay')"></button>
        </div>
        <div class="qr-box">
          <img id="payQrImg" src="${ASSET_PREFIX}wechat.jpg" alt="Payment QR Code" />
        </div>
        <div class="pay-notice" id="payStepNote"></div>
      </div>
    </div>

    <div class="modal-backdrop" id="noticeModal">
      <div class="modal-box" style="background: var(--bg-card); color: var(--text-primary); max-width: 420px; text-align: center;">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🛍️</div>
        <h3 id="noticeModalTitle" style="margin-bottom: 10px;"></h3>
        <p id="noticeModalDesc" style="color: var(--text-secondary); font-size: 0.94rem; margin-bottom: 22px; line-height: 1.7;"></p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button type="button" class="btn btn-sm btn-android" id="noticePayBtn" onclick="closeModal('noticeModal'); openPaymentModal();"></button>
          <button type="button" class="btn btn-sm btn-primary" id="noticeOkBtn" onclick="closeModal('noticeModal')"></button>
        </div>
      </div>
    </div>

    <div class="modal-backdrop" id="paidConfirmModal">
      <div class="modal-box" style="background: var(--bg-card); color: var(--text-primary); max-width: 450px;">
        <div class="modal-header">
          <h3 id="paidConfirmTitle"></h3>
          <button class="modal-close" onclick="closeModal('paidConfirmModal')">&times;</button>
        </div>
        <p id="paidConfirmDesc" style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 22px; line-height: 1.7;"></p>
        <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end;">
          <button type="button" class="btn btn-sm btn-gray" id="paidCancelBtn" onclick="closeModal('paidConfirmModal')"></button>
          <button type="button" class="btn btn-sm btn-windows" id="paidConfirmDlBtn"></button>
          <button type="button" class="btn btn-sm btn-android" id="paidBuyAndDlBtn"></button>
        </div>
      </div>
    </div>

    <div class="toast" id="lubitToast"></div>
  `;
  document.body.appendChild(root);
}

function triggerRealApkFile(item) {
  const link = document.createElement("a");
  link.href = item.apkUrl;
  link.setAttribute("download", item.apkFileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function runAutoHumanCheck(evt) {
  const isTrusted = evt && evt.isTrusted === true;
  const notWebDriver = navigator.webdriver !== true;
  const hasViewport = window.innerWidth > 0 && window.innerHeight > 0;
  return isTrusted && notWebDriver && hasViewport;
}

function startApkDownload(evt, productId) {
  ensureModalsExist();
  const item = LUBIT_CATALOG.find(p => p.id === productId);
  if (!item) return;

  if (item.id === "win-hardwarelens") {
    openPaidConfirmModal(evt, item);
    return;
  }

  proceedDownload(evt, item);
}

function proceedDownload(evt, item) {
  showToast(tr("verify.auto_checking"));

  setTimeout(() => {
    if (runAutoHumanCheck(evt)) {
      showToast(item.platform === "windows" ? tr("verify.auto_pass_win") : tr("verify.auto_pass"));
      triggerRealApkFile(item);
    } else {
      openManualVerifyModal(item);
    }
  }, 450);
}

function openPaidConfirmModal(evt, item) {
  ensureModalsExist();
  document.getElementById("paidConfirmTitle").textContent = tr("hl.confirm_title");
  document.getElementById("paidConfirmDesc").textContent = tr("hl.confirm_desc");
  document.getElementById("paidCancelBtn").textContent = tr("hl.btn_cancel");

  const confirmBtn = document.getElementById("paidConfirmDlBtn");
  confirmBtn.textContent = tr("hl.btn_confirm_dl");
  confirmBtn.onclick = () => {
    closeModal("paidConfirmModal");
    proceedDownload(evt, item);
  };

  const buyBtn = document.getElementById("paidBuyAndDlBtn");
  buyBtn.textContent = tr("hl.btn_buy_and_dl");
  buyBtn.onclick = () => {
    closeModal("paidConfirmModal");
    openPaymentModal();
    proceedDownload(evt, item);
  };

  document.getElementById("paidConfirmModal").classList.add("open");
}

function openManualVerifyModal(item) {
  ensureModalsExist();
  document.getElementById("verifyTitle").textContent = tr("verify.manual_title");
  document.getElementById("verifyDesc").textContent = tr("verify.manual_desc");
  document.getElementById("verifySliderHint").textContent = tr("verify.slider_hint");

  const wrap = document.getElementById("verifySliderWrap");
  const slider = document.getElementById("verifySlider");
  wrap.style.display = "block";
  slider.value = 0;

  slider.oninput = () => {
    if (parseInt(slider.value, 10) >= 95) {
      slider.oninput = null;
      closeModal("verifyModal");
      showToast(tr("verify.manual_pass"));
      triggerRealApkFile(item);
    }
  };

  document.getElementById("verifyModal").classList.add("open");
}

function openPaymentModal(appName = "HardwareLens") {
  ensureModalsExist();
  document.getElementById("payModalTitle").textContent = appName === "ForceUninstaller" ? tr("fu.pay_title") : tr("pay.title");
  document.getElementById("payPricingBar").textContent = `${tr("hl.t_month")} ${tr("hl.p_month")} · ${tr("hl.t_quarter")} ${tr("hl.p_quarter")} · ${tr("hl.t_year")} ${tr("hl.p_year")} · ${tr("hl.t_perm")} ${tr("hl.p_perm")}`;
  document.getElementById("payTabWechat").textContent = tr("pay.wechat");
  document.getElementById("payTabAlipay").textContent = tr("pay.alipay");
  document.getElementById("payStepNote").innerHTML = tr("pay.step_note");
  switchPayMethod("wechat");
  document.getElementById("paymentModal").classList.add("open");
}

function switchPayMethod(method) {
  const wBtn = document.getElementById("payTabWechat");
  const aBtn = document.getElementById("payTabAlipay");
  const img = document.getElementById("payQrImg");
  if (!wBtn || !aBtn || !img) return;

  if (method === "alipay") {
    wBtn.className = "pay-tab";
    aBtn.className = "pay-tab active-alipay";
    img.src = `${ASSET_PREFIX}alipay.jpg`;
  } else {
    wBtn.className = "pay-tab active-wechat";
    aBtn.className = "pay-tab";
    img.src = `${ASSET_PREFIX}wechat.jpg`;
  }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("open");
}

function showToast(msg) {
  ensureModalsExist();
  const toast = document.getElementById("lubitToast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// Cookie Management
function setSiteCookie(name, value, days = 365) {
  const maxAge = days * 86400;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function getSiteCookie(name) {
  const prefix = `${encodeURIComponent(name)}=`;
  const parts = document.cookie.split(";").map(s => s.trim());
  for (const part of parts) {
    if (part.startsWith(prefix)) return decodeURIComponent(part.slice(prefix.length));
  }
  return null;
}

function clearAllSiteCookies() {
  document.cookie.split(";").forEach(c => {
    const eq = c.indexOf("=");
    const name = (eq > -1 ? c.slice(0, eq) : c).trim();
    if (name) {
      document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
    }
  });
  ["lubitsoft_lang", "lubitsoft_theme", "lubitsoft_cookie_consent"].forEach(k => {
    localStorage.removeItem(k);
  });
  applyTheme("auto");
  showToast(tr("cookie.cleared"));
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.style.display = "flex";
}

function acceptSiteCookies() {
  setSiteCookie("lubitsoft_cookie_consent", "accepted", 365);
  setSiteCookie("lubitsoft_theme", getThemeMode(), 365);
  if (typeof getCurrentLang === "function") {
    setSiteCookie("lubitsoft_lang", getCurrentLang(), 365);
  }
  localStorage.setItem("lubitsoft_cookie_consent", "accepted");
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.style.display = "none";
}

function initCookieBanner() {
  const consented = getSiteCookie("lubitsoft_cookie_consent") || localStorage.getItem("lubitsoft_cookie_consent");
  if (consented === "accepted" || document.getElementById("cookieBanner")) return;

  const banner = document.createElement("div");
  banner.id = "cookieBanner";
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <p id="cookieBannerText">${tr("cookie.banner")}</p>
    <div class="cookie-banner-actions">
      <button type="button" class="btn btn-sm btn-primary" id="cookieAcceptBtn" onclick="acceptSiteCookies()">${tr("cookie.accept")}</button>
      <button type="button" class="btn btn-sm btn-gray" id="cookieClearBtn" onclick="clearAllSiteCookies()">${tr("cookie.clear_btn")}</button>
    </div>
  `;
  document.body.appendChild(banner);
}

// Unified 3-column Footer across all pages (No individual app download or privacy policy links)
function renderUnifiedFooter() {
  const footer = document.querySelector("footer.site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${ASSET_PREFIX}logo-dark.svg" alt="LubitSoft Logo" />
          <p>${tr("footer.desc")}</p>
        </div>
        <div class="footer-col">
          <h4>${tr("footer.col1")}</h4>
          <ul>
            <li><a href="${resolveLocalUrl("/android")}">${tr("footer.l_and")}</a></li>
            <li><a href="${resolveLocalUrl("/windows")}">${tr("footer.l_win")}</a></li>
            <li><a href="${resolveLocalUrl("/ios")}">${tr("footer.l_ios")}</a></li>
            <li><a href="${resolveLocalUrl("/macos")}">${tr("footer.l_macos")}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>${tr("footer.col2")}</h4>
          <ul>
            <li><a href="${resolveLocalUrl("/")}">${tr("nav.home")}</a></li>
            <li><a href="${resolveLocalUrl("/about")}">${tr("footer.l_about")}</a></li>
            <li><a href="${resolveLocalUrl("/support")}">${tr("nav.support")}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${tr("footer.copy")}</span>
        <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
          <span>${tr("footer.slogan")}</span>
          <button type="button" class="cookie-clear-btn" onclick="clearAllSiteCookies()">${tr("cookie.clear_btn")}</button>
        </div>
      </div>
    </div>
  `;
}

function updateCookieBannerText() {
  const bt = document.getElementById("cookieBannerText");
  const ba = document.getElementById("cookieAcceptBtn");
  const bc = document.getElementById("cookieClearBtn");
  if (bt) bt.textContent = tr("cookie.banner");
  if (ba) ba.textContent = tr("cookie.accept");
  if (bc) bc.textContent = tr("cookie.clear_btn");
}

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  ensureModalsExist();
  injectThemeSwitcher();
  applyTheme(getThemeMode());
  patchLocalLinks();
  initFeaturedCatalog();
  renderUnifiedFooter();
  initCookieBanner();

  const pageType = document.body.dataset.page;
  if (pageType === "android" || pageType === "windows" || pageType === "ios" || pageType === "macos") {
    initPlatformCatalog(pageType);
  }

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      contactForm.reset();
      showToast(tr("toast.contact_ok"));
    });
  }
});
