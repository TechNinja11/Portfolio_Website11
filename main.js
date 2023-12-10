var typed = new Typed(".typing",{
    strings:["","College Student","Web Developer","Problem Solving"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

var typed = new Typed(".type",{
    strings:["","IT-REPRESENTATIVE","INFORMATION TECHNOLOGY"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ====== Sscroll Start ======= */

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
    });
    
    ScrollReveal().reveal('.hello, .btn-hire', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.my-profession, .typer', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.home-img', { delay: 500, origin: 'right' });
    ScrollReveal().reveal('.social-icons', { delay: 500, origin: 'bottom' });


/* ====== Sscroll End ======= */