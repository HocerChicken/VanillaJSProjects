let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let hrs = $("#hrs");
let mins = $("#mins");
let secs = $("#secs");

setInterval(getTime, 1000);

function getTime() {
    let currentDate = new Date();
    hrs.innerHTML = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
    mins.innerHTML = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    secs.innerHTML = (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
}
