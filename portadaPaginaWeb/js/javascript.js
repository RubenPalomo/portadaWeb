const menuIcono = document.querySelector("#menuIcono");
const menuTexto = document.querySelector("#menuTexto");
const menu = document.querySelector("#menu");
const seccion = document.querySelector("section");
let mostrarMenu = false;

menuIcono.addEventListener("click", function() {
    menu.classList.toggle("mostrar");

    if(!mostrarMenu){
        seccion.style.marginTop=0;
        mostrarMenu = true;
        menuTexto.innerHTML="Menú";
    }
     else{
         seccion.style.marginTop="-160px";
         mostrarMenu = false;
         menuTexto.innerHTML="";
     }
})