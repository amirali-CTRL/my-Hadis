const ring = document.getElementById("heart-ring");
const music = document.getElementById("music");
const rainContainer = document.getElementById("rain-container");
const particles = document.getElementById("background-particles");

// حلقه قلب
const hearts = 36;

for(let i=0;i<hearts;i++){

    let heart=document.createElement("div");
    heart.innerHTML="❤️";
    heart.className="heart";

    let angle=(i/hearts)*360;
    let radius=170;

    heart.style.left=170+radius*Math.cos(angle*Math.PI/180)+"px";
    heart.style.top=170+radius*Math.sin(angle*Math.PI/180)+"px";

    ring.appendChild(heart);

}

// متن‌های عاشقونه
const texts=[
"خانم کوچولو عاشقتم 💗",
"حدیث کوچولو عاشقتم 🌸",
"مامان خرگوشی عاشقتم 🐇",
"خانم کوچولو قلبمی ❤️",
"مامان خرگوشی نفس منی 💜",
"حدیث یعنی آرامش 🌙",
"همیشه عاشقتم حدیث ❤️",
"تو قشنگ‌ترین اتفاق دنیامی ✨",
"دوستت دارم حدیث 💖",
"خانم کوچولو خوشگل‌ترین دختر دنیا 🌹",
"مامان خرگوشی همیشه بخند 🌸",
"قلبم فقط برای حدیث می‌تپه ❤️"
];

function createRain(){

let text=document.createElement("div");
text.className="rain";

text.innerText=texts[Math.floor(Math.random()*texts.length)];

text.style.left=Math.random()*window.innerWidth+"px";

let duration=5+Math.random()*7;
text.style.animationDuration=duration+"s";

text.style.fontSize=(14+Math.random()*14)+"px";

rainContainer.appendChild(text);

setTimeout(()=>{
text.remove();
},duration*1000);

}

setInterval(createRain,180);

// ذره‌های بنفش
for(let i=0;i<50;i++){

let p=document.createElement("div");
p.className="particle";

p.style.left=Math.random()*100+"vw";
p.style.animationDuration=6+Math.random()*8+"s";
p.style.animationDelay=Math.random()*8+"s";

particles.appendChild(p);

}

// آهنگ بعد از ۲ ثانیه
setTimeout(()=>{
music.play().catch(()=>{});
},5000);