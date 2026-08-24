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
