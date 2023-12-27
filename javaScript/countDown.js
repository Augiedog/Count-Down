const days =document.querySelector("#days");
const hours =document.querySelector("#hours");
const min =document.querySelector("#min");
const sec =document.querySelector("#sec");

function UpdateTimer(){
    let currentYear = new Date().getFullYear();
const newYearDate = new Date(`January 1 ${currentYear + 1} 00:00:00`);
const currentDate = new Date();
const different = newYearDate - currentDate;
const d = Math.floor(different / 1000 / 60 / 60 / 24);
const h = Math.floor((different / 1000 / 60 / 60) % 24);
const m = Math.floor((different / 1000 / 60) % 60);
const s = Math.floor((different / 1000) % 60);

days.innerHTML =d<10?"0"+d:d;
hours.innerHTML =h<10?"0"+h:h;
min.innerHTML =m<10?"0"+m:m;
sec.innerHTML =s<10?"0"+s:s;
}

setInterval(UpdateTimer,1000);