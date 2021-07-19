const toggle = document.querySelector('.navbar .menu-btn .fa-bars');
const mobile_menu = document.querySelector('.navbar .menu');
const menu_item = document.querySelectorAll('.navbar .menu li a')
const header = document.querySelector('.navbar')
const scrollUp = document.querySelector('.scroll-up-btn')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    if (scroll_position > 500) {
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove('show');
    }
})

scrollUp.addEventListener('click', () => {
    document.querySelector('html').scrollTop = 0;
})

menu_item.addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth'
})