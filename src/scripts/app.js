const button = document.querySelector('[hamburger-button]');
let menu_bar = document.querySelector(".menu-bar");
let nav = document.getElementById('nav-bar__slider');

    button.addEventListener('click', () => {
            // toggles 'X' and hamburger
    menu_bar.classList.toggle('toggle');

    // slide left animation for menu box
    nav.classList.toggle('active');
    })