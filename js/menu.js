//Menús
var btnmenu = document.getElementById("btnmenu");
var menu = document.getElementById("menu");
var btnInicio = document.getElementById("btnInicio");
var menu2 = document.getElementById("menu2");

btnmenu.addEventListener('click',()=>{
    menu.classList.toggle('nav-show');
});

//Slider con Glider js
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'),{
            slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay:2000,
    dots: '.carousel__indicadores',
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
    }}
    );
});