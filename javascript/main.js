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