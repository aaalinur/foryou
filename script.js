
const envelope = document.getElementById("envelope");

const openButton = document.getElementById("openButton");

const replayButton = document.getElementById("replayButton");

const footer = document.getElementById("footer");

let isOpened = false;


/* =====================================
   КОНВЕРТТІ АШУ
===================================== */

openButton.addEventListener("click", () => {

   if (isOpened) return;

   isOpened = true;

   // 1. Конверт ашылады
   envelope.classList.add("opened");

   // Батырма қайта басылмасын
   openButton.disabled = true;

   // 2. Хат жоғары шығады
   setTimeout(() => {

      envelope.classList.add("zoomed");

   }, 1100);


   // 3. Төменгі жазу жоғалады
   footer.style.opacity = "0";


   // 4. Қайта оқу батырмасы көрінеді
   setTimeout(() => {

      replayButton.classList.add("visible");

   }, 2300);

});


/* =====================================
   ҚАЙТА БАСТАУ
===================================== */

replayButton.addEventListener("click", () => {

   // Хат қайта конвертке оралады
   envelope.classList.remove("zoomed");

   envelope.classList.remove("opened");

   replayButton.classList.remove("visible");

   footer.style.opacity = "1";

   openButton.disabled = false;

   isOpened = false;

});