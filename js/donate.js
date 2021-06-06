const slidePage = document.querySelector(".slidepage");
const firstNextbtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

firstNextbtn.addEventListener("click", function(){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnSec.addEventListener("click", function () {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

submitBtn.addEventListener("click", function(){
    event.preventDefault();
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });
prevBtnSec.addEventListener("click", function(){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function () {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

function check() {
    var bt = document.getElementById('btn');
    if ((text2.value == ' ' && text1.value == ' ') && (text3.value == ' ' && text4.value == ' ' ) ) {
        bt.disabled = true;
    }
    else {
        bt.disabled = false ;
    }
}
function check1() {
    var bt1 = document.getElementById('btn1');
    if (text5.value == ' ' && text8.value == 'Select Ngo' ) {
        bt1.disabled = true;
    }
    else {
        bt1.disabled = false ;
    }
}
function check2() {
    var bt2 = document.getElementById('btn2');
    if (text6.value == ' ' && text7.value == ' ' ) {
        bt2.disabled = true;
    }
    else {
        bt2.disabled = false ;
    }
}