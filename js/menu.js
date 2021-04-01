var btnmenu = document.getElementById("btnmenu");
var menu = document.getElementById("menu");

btnmenu.addEventListener('click',()=>{
    menu.classList.toggle('nav-show');
});

var btnInicio = document.getElementById("btnInicio");
var menu2 = document.getElementById("menu2");

btnInicio.addEventListener('click',()=>{
    menu2.classList.toggle('nav-show2');
});
