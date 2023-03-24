document.getElementById("iconMenu").addEventListener("click", mostrarMenu);

function mostrarMenu(){
    document.querySelector(".menu").classList.toggle("mostrarMenu");
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("iconGame");
    var elemento2 = document.getElementById("iconJoystick");
    elemento1.style.bottom = posicion * 0.15 + "px";
    elemento2.style.top = posicion * 0.15 + "px";
}