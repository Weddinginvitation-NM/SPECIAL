const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

if (openBtn && opening && mainContent) {
  openBtn.addEventListener("click", function () {

    // Button disable
    openBtn.disabled = true;
    openBtn.style.opacity = "0";
    openBtn.style.pointerEvents = "none";

    // Envelope fade out
    setTimeout(function () {
      opening.style.transition = "opacity 0.7s ease";
      opening.style.opacity = "0";

      // Show invitation
      setTimeout(function () {
        opening.style.display = "none";
        mainContent.classList.remove("hidden");

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 700);

    }, 400);
  });
}
