const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.header ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Optional: Change icon from bars to an 'X'
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
document.querySelectorAll('.header ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});