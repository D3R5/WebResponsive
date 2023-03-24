document.getElementById("iconMenu").addEventListener("click", showMenu);

function showMenu(){
    document.querySelector(".menu").classList.toggle("showMenu");
}

window.onscroll = function () {
    var position = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("iconGame");
    var elemento2 = document.getElementById("iconJoystick");
    elemento1.style.bottom = position * 0.15 + "px";
    elemento2.style.top = position * 0.15 + "px";
}