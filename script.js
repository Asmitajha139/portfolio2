//TYPED JS

var type = new Typed('.text', {
    strings: ['Data Scientist', 'Web Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// SHOW EDUCATION & EXPERINECE
let EducationBtn = document.querySelector('.education');
let ExperienceBtn = document.querySelector('.experience');
let show_box = document.querySelectorAll('.show_box');
let hide_box = document.querySelectorAll('.hide_box');

EducationBtn.addEventListener('click', () => {
    show_box.forEach(Sbox =>{
        Sbox.style.opacity = '0';
    });
    hide_box.forEach(Hbox =>{
        Hbox.style.opacity = '1';
    });
});
ExperienceBtn.addEventListener('click', () => {
    show_box.forEach(Sbox =>{
        Sbox.style.opacity = '1';
    });
    hide_box.forEach(Hbox =>{
        Hbox.style.opacity = '0';
    });
});

//MIXITUP Js 
var mixer=mixitup('.project_cards')

// certificate Swiper Slider
var swiper=new Swiper('.certificateSwiper',{
    slidesPerView:1,
     spaceBetween: 30,
    loop:true,

   autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});

// Spotlight Stories Swiper Slider
var swiper=new Swiper('.storiesSwiper',{
    slidesPerView:2,
     spaceBetween: 30,
    loop:true,

   autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        1200:{
            slidesPerView:1,
        },
        0:{
            slidesPerView:1,
        },
    },

});
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_menu');
    menu.classList.toggle('nav_border');
});