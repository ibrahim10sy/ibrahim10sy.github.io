const menubar = document.querySelector(".menu-bar")
const navLink = document.querySelector(".nav-link")

menubar.addEventListener('click',()=>{

    navLink.classList.toggle('mobile-menu')
})

// const txtAnim = document.querySelector('.slide');

// new Typewriter(txtAnim, {
//     deleteSpeed: 20
// })

// .changeDelay(20)
// .typeString(' Salut! moi c\'est ')
// .pauseFor(300)
// .typeString("<strong>Ibrahim SY</strong>")
// .pauseFor(300)
// .start()

const type = new Typed(".slide", {
    strings :["Je suis développeur","Front-End," ,"D\'application web","&Mobile"],
    typeSpeed:90,
    backSpeed:50,
    typeDelay:1000,
    loop:true

});