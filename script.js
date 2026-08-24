const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const envelope = document.querySelector(".envelope");

openBtn.addEventListener("click", function () {
    envelope.classList.add("opened");

    setTimeout(function () {
        opening.style.opacity = "0";

        setTimeout(function () {
            opening.style.display = "none";
            mainContent.classList.remove("hidden");
            window.scrollTo(0, 0);
        }, 800);

    }, 500);
});
