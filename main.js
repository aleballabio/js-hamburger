let menudrop = document.querySelector('.fa-bars');
let hamburger = document.querySelector('.hamburger-menu')
let cross = document.querySelector('.close')

menudrop.addEventListener('click', function () {
    hamburger.classList.toggle('active');
})

cross.addEventListener('click', function () {
    hamburger.classList.toggle('active');
})

