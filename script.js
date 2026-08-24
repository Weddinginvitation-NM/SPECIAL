const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const envelope = document.querySelector(".envelope");
const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

/* =========================
   OPEN INVITATION
========================= */
openBtn.addEventListener("click", async () => {
  envelope.classList.add("opened");

  try {
    await music.play();
    musicToggle.textContent = "♫";
  } catch (e) {}

  setTimeout(() => {
    opening.style.transition = "opacity .8s";
    opening.style.opacity = "0";

    setTimeout(() => {
      opening.style.display = "none";
      mainContent.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 800);
  }, 850);
});


/* =========================
   MUSIC BUTTON
========================= */
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.textContent = "♫";
    } catch (e) {}
  } else {
    music.pause();
    musicToggle.textContent = "♪";
  }
});


/* =========================
   SCRATCH CARD
========================= */

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

let scratching = false;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;

  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const gradient = ctx.createLinearGradient(
    0,
    0,
    rect.width,
    rect.height
  );

  gradient.addColorStop(0, "#b87945");
  gradient.addColorStop(1, "#8d503c");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, rect.width, rect.height);

  ctx.fillStyle = "#f6e7c7";
  ctx.font = "600 18px DM Sans";
  ctx.textAlign = "center";

  ctx.fillText(
    "SCRATCH HERE ✦",
    rect.width / 2,
    rect.height / 2
  );
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


function scratch(e) {
  if (!scratching) return;

  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.globalCompositeOperation = "destination-out";

  ctx.beginPath();
  ctx.arc(x, y, 25, 0, Math.PI * 2);
  ctx.fill();
}


canvas.addEventListener("pointerdown", (e) => {
  scratching = true;
  scratch(e);
});

canvas.addEventListener("pointermove", scratch);

window.addEventListener("pointerup", () => {
  scratching = false;
});


/* =========================
   COUNTDOWN
========================= */

const target = new Date(
  "2026-12-15T00:00:00+05:30"
).getTime();


function updateCountdown() {

  const now = Date.now();

  let diff = Math.max(0, target - now);

  const days = Math.floor(
    diff / 86400000
  );

  diff %= 86400000;

  const hours = Math.floor(
    diff / 3600000
  );

  diff %= 3600000;

  const minutes = Math.floor(
    diff / 60000
  );

  const seconds = Math.floor(
    (diff % 60000) / 1000
  );


  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   SHARE INVITATION
========================= */

document
  .getElementById("shareBtn")
  .addEventListener("click", async () => {

    const shareData = {
      title: "Nikita & Mahendra — Wedding Invitation",

      text:
        "You are warmly invited to celebrate the wedding of Nikita & Mahendra.",

      url: window.location.href
    };


    if (navigator.share) {

      try {
        await navigator.share(shareData);
      } catch (e) {}

    } else {

      try {

        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Invitation link copied!");

      } catch (e) {

        alert("Copy this page URL to share the invitation.");

      }
    }

  });
