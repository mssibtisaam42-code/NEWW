const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function updateClock(){
  const now = new Date();

  hrs.textContent = String(now.getHours()).padStart(2,'0');
  min.textContent = String(now.getMinutes()).padStart(2,'0');
  sec.textContent = String(now.getSeconds()).padStart(2,'0');
}

setInterval(updateClock,1000);
updateClock();