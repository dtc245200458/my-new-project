document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    function setOpen(open) {
        navLinks.classList.toggle('active', open);
        menuIcon.setAttribute('aria-expanded', String(open));
        menuIcon.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    }

    menuIcon.addEventListener('click', function () {
        setOpen(!navLinks.classList.contains('active'));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setOpen(false);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            setOpen(false);
            menuIcon.focus();
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar')) setOpen(false);
    });

    mobileQuery.addEventListener('change', function () {
        setOpen(false);
    });
});
