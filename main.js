
// JavaScript to add the 'scrolled' class to the navbar when scrolling
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    const mobileNav = document.querySelector('nav.mobile-nav');

    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
        mobileNav.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        mobileNav.classList.remove('scrolled');
    }
});
