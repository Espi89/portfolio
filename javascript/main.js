let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move")
};
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove("move")
};


/* =========== REVIEWS SWIPER =========== */

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/* =========== MAIL JS =========== */
// Funcion que valida que los campos no esten vacios a la hora de enviar el formulario

function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email, msg){
    emailjs.send("service_8etdtsb","template_2ag3zdc",{
        name: email,
        email: name,
        textarea: msg,
        });
};

function emptyerror(){
    swal({
        title: "Oh no...",
        text: "Los campos no pueden quedar vacios!",
        icon: "error",
    });
}

function success(){
    swal({
        title: "Email enviado correctamente",
        text: "Trataremos de contestarte a la brevedad",
        icon: "success",
    });
}

/* =========== HEADER BACKGROUND CHANGE ON SCROLL =========== */
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});

/* =========== SCROLL TOP =========== */
let scrollTop = document.querySelector('.scroll-top')
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});











particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":14,"direction":"left","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

