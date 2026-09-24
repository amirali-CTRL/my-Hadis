// =========================
// عناصر سایت
// =========================

const music = document.getElementById("music");
const rainContainer = document.getElementById("rain-container");
const particles = document.getElementById("background-particles");


// =========================
// متن‌های باران
// =========================

const texts = [
    "خانم کوچولو عاشقتم",
    "حدیث کوچولو عاشقتم",
    "مامان خرگوشی عاشقتم",
    "خانم کوچولو قلبمی",
    "مامان خرگوشی نفس منی",
    "حدیث یعنی آرامش",
    "همیشه عاشقتم حدیث",
    "تو قشنگ‌ترین اتفاق دنیامی",
    "دوستت دارم حدیث",
    "خانم کوچولو خوشگل‌ترین دختر دنیا",
    "مامان خرگوشی همیشه بخند",
    "قلبم فقط برای حدیث می‌تپه"
];


// =========================
// تنظیمات بهینه برای گوشی
// =========================

const isMobile = window.innerWidth <= 768;

// تعداد متن‌های همزمان
const MAX_RAIN = isMobile ? 8 : 14;


// =========================
// ساخت متن باران
// =========================

function createRain() {

    // جلوگیری از زیاد شدن متن‌ها
    if (rainContainer.children.length >= MAX_RAIN) {
        return;
    }

    const text = document.createElement("div");

    text.className = "rain";

    text.innerText =
        texts[Math.floor(Math.random() * texts.length)];

    // جای تصادفی
    text.style.left =
        Math.random() * 90 + "vw";

    // سرعت تصادفی
    const duration =
        6 + Math.random() * 5;

    text.style.animationDuration =
        duration + "s";

    // اندازه متن
    if (isMobile) {
        text.style.fontSize =
            12 + Math.random() * 5 + "px";
    } else {
        text.style.fontSize =
            14 + Math.random() * 10 + "px";
    }

    rainContainer.appendChild(text);

    // حذف بعد از پایان انیمیشن
    setTimeout(() => {

        if (text && text.parentNode) {
            text.remove();
        }

    }, duration * 1000 + 300);
}


// =========================
// شروع باران
// =========================

setInterval(
    createRain,
    isMobile ? 700 : 450
);


// چند متن اولیه
setTimeout(createRain, 500);
setTimeout(createRain, 1200);
setTimeout(createRain, 1900);


// =========================
// ذرات بنفش
// =========================

const particleCount =
    isMobile ? 25 : 40;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        7 + Math.random() * 7 + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particles.appendChild(particle);
}


// =========================
// پخش آهنگ
// =========================

// بعضی گوشی‌ها اجازه پخش
// خودکار آهنگ را نمی‌دهند.

setTimeout(() => {

    if (music) {

        music.play().catch(() => {
            // اگر مرورگر اجازه نداد،
            // سایت بدون خطا ادامه پیدا می‌کند.
        });

    }

}, 5000);