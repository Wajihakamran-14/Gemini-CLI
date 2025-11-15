document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                const headerOffset = 80; // Adjust for fixed header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = this.elements['name'].value;
        const email = this.elements['email'].value;
        const message = this.elements['message'].value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
            this.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});