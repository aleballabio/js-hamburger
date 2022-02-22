let menudrop = document.querySelector('.faBars');
let hamburger = document.querySelector('.hamburgerMenu')

if (menudrop.style.display = none) {
    menudrop.addEventListener('click', function () {
        hamburger.classList.toggle('active');
    })
}
