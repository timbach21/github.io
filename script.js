// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect with show/hide
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
let isNavbarVisible = true;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && isNavbarVisible) {
        // Scrolling down & navbar is visible
        navbar.style.transform = 'translateY(-100%)';
        isNavbarVisible = false;
    } else if (currentScroll < lastScroll && !isNavbarVisible) {
        // Scrolling up & navbar is hidden
        navbar.style.transform = 'translateY(0)';
        isNavbarVisible = true;
    }
    lastScroll = currentScroll;
});

// Add animation to project cards when they come into view
const observeElements = (elements, className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
observeElements(projectCards, 'fade-in');

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});
