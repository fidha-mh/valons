const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const frontCover = document.querySelector(".front-cover");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");

const animationContainer = document.getElementById("animationContainer");
const messageText = document.getElementById("messageText");

// Your letter text
const loveLetter = `Hey ee valentines day njn kurch spcl aaknm vechata ormich time spend chyth but situations set aayela ath potte.
Ormich ee day indvnm vechatha oru memory polle create chyn but patela anyway ee day mathrm allalo enneym days elle athond scn ella.
Sry njn nentt situations onnm nokila manslakella eth njn thanne type chyth indknth kond kurch difficult an kuree situations indyind enik eth pattela annoke pryna but still in that tough situations i choose you again and again nmde oru imperfect aaya story aayalm still ath ente fav ann ethonum munb njn write aakiyth polle chat gpt alla mansalvm vaykumbo.
I jst want u to know how much u mean to me.
I love you more than words can ever explain "I adore everything abt u". enik ariyella enne entha prynn I Love you ❤️.Dennis, nammalude story perfect alla, pakshe athu real aanu. Nammal chirichu, samsarichu, misunderstand cheythu, pakshe njan ninne choose cheythu. Ee Valentine’s Day, njan ninakku oru promise cheyyunnu—nammalude story njan easy aayi vittu kalayilla`;

// Move NO button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// When YES clicked
yesBtn.addEventListener("click", () => {
    frontCover.classList.add("hidden");
    envelopeScreen.classList.remove("hidden");
});

// When envelope clicked
document.getElementById("envelope").addEventListener("click", () => {
    envelopeScreen.classList.add("hidden");
    showAnimation();
    typeLetter(loveLetter, 0);
});

// Show floating hearts+gifts
function showAnimation() {
    const icons = ["💖 "," 🎁"," 🌟"," 💝"," 🥰 ","🎉"];
    for (let i = 0; i < 40; i++) {
        const el = document.createElement("div");
        el.classList.add("floating");
        el.textContent = icons[Math.floor(Math.random()*icons.length)];

        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.top = window.innerHeight + "px";
        animationContainer.appendChild(el);

        setTimeout(() => el.remove(), 4500);
    }
}

// Typing effect
function typeLetter(text, index) {
    letterScreen.classList.remove("hidden");
    if (index < text.length) {
        messageText.innerHTML += text.charAt(index).replace(/\n/g, "<br>");
        setTimeout(() => typeLetter(text, index + 1), 40);
    }
}