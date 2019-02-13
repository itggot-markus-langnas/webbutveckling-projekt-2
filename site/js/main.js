function showMenu(event){
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show")

    let fadeLayer = document.querySelector(".fade-layer")
    fadeLayer.classList.toggle("visible")
}


var targetDate = new Date("Dec 24, 2019 00:00:00")
var updateTime = setInterval(countDown, 1000)

function countDown(event){
    let today = new Date().getTime();

    let delta = targetDate - today;
    let days = Math.floor(delta/(1000 * 60 * 60 * 24));
 
    let hours = Math.floor(delta % (1000 * 60 * 60 * 24) /(1000 * 60 * 60));
    let minutes = Math.floor(delta % (1000 * 60 * 60) /(1000 * 60));
    let sekunder = Math.floor(delta % (1000 * 60) /(1000));
    let text = document.querySelector(".nedrakning")
    text.innerHTML = "Det är just nu " + days + " dagar " + hours +" timmar " + minutes +" minuter och " + sekunder + " sekunder kvar tills julafton"
    if (delta < 0){

    }
    
}