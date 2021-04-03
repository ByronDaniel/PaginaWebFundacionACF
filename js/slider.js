const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function Next(){
    console.log('next boton');
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500);
}
btnRight.addEventListener('click',(ev)=>{
    console.log(ev);
    Next();
});
function Prev(){
    console.log('left boton');
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft ="0";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft="-100%";
    },500);
}
btnLeft.addEventListener('click',()=>{
    Prev();
});
setInterval (async function(){
    await Next();
},6000); 