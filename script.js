const openBtn =
  document.getElementById("openBtn");

const opening =
  document.getElementById("opening");

const envelope =
  document.querySelector(".envelope");

const nameReveal =
  document.getElementById("nameReveal");

const mainContent =
  document.getElementById("mainContent");


/* =========================
   OPEN INVITATION
========================= */

openBtn.addEventListener("click", function () {

  /* Open envelope */

  envelope.classList.add("opened");


  /* Hide button */

  openBtn.style.opacity = "0";

  openBtn.style.pointerEvents = "none";


  /*
    Wait for envelope
    opening animation
  */

  setTimeout(function () {

    /*
      Hide envelope screen
    */

    opening.style.transition =
      "opacity .7s ease";

    opening.style.opacity = "0";


    setTimeout(function () {

      opening.style.display = "none";


      /*
        Show couple names
      */

      nameReveal.classList.add("show");


      /*
        After 2.8 seconds
        move to invitation
      */

      setTimeout(function () {

        nameReveal.style.transition =
          "opacity .8s ease";

        nameReveal.style.opacity = "0";


        setTimeout(function () {

          nameReveal.style.display =
            "none";


          /*
            Show main invitation
          */

          mainContent.classList.remove(
            "hidden"
          );


          /*
            Start from top
          */

          window.scrollTo({

            top: 0,

            behavior: "smooth"

          });

        }, 800);

      }, 2800);


    }, 700);

  }, 1100);

});
/* ==============================
   SCRATCH TO REVEAL
============================== */

const canvas = document.getElementById("scratchCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let scratching = false;

    function setupScratch() {

        const rect = canvas.getBoundingClientRect();

        const ratio = window.devicePixelRatio || 1;

        canvas.width = rect.width * ratio;
        canvas.height = rect.height * ratio;

        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );

        /* Golden cover */

        const gradient = ctx.createLinearGradient(
            0,
            0,
            rect.width,
            rect.height
        );

        gradient.addColorStop(0, "#d8b875");
        gradient.addColorStop(0.5, "#b78a43");
        gradient.addColorStop(1, "#8d6530");

        ctx.fillStyle = gradient;

        ctx.fillRect(
            0,
            0,
            rect.width,
            rect.height
        );

        /* Text */

        ctx.fillStyle = "#fff8e8";

        ctx.textAlign = "center";

        ctx.font = "24px serif";

        ctx.fillText(
            "✦",
            rect.width / 2,
            rect.height / 2 - 35
        );

        ctx.font = "600 14px sans-serif";

        ctx.fillText(
            "SCRATCH TO REVEAL",
            rect.width / 2,
            rect.height / 2
        );

        ctx.font = "24px serif";

        ctx.fillText(
            "❈",
            rect.width / 2,
            rect.height / 2 + 45
        );
    }

    setupScratch();

    window.addEventListener(
        "resize",
        setupScratch
    );


    function scratch(e) {

        if (!scratching) return;

        const rect =
            canvas.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        ctx.globalCompositeOperation =
            "destination-out";

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            30,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }


    canvas.addEventListener(
        "pointerdown",
        function(e) {

            scratching = true;

            scratch(e);
        }
    );


    canvas.addEventListener(
        "pointermove",
        scratch
    );


    window.addEventListener(
        "pointerup",
        function() {

            scratching = false;

        }
    );
}
