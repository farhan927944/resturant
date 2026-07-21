// Toggle Icon Navbar (Mobile view ke liye)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Icon change toggle
    navbar.classList.toggle('active');     // Menu open/close toggle
};

// Scroll Sections Active Link (Jis page zone mein user hoga, navbar link activate ho jayega)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove toggle icon and navbar when click navbar links (scroll karne par menu close ho jaye)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};