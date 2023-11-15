
// JavaScript to add the 'scrolled' class to the navbar when scrolling
    const navbar = document.querySelector('nav');
    const mobileNav = document.querySelector('nav.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.mobile-menu-container .close-icon');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');


window.addEventListener('scroll', function () {


    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
        mobileNav.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        mobileNav.classList.remove('scrolled');
    }
});

menuIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('active');
});