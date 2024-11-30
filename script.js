document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progress + '%';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        
        // Simple validation checks
        if (!nameInput.value.trim()) {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        if (!messageInput.value.trim()) {
            alert('Please enter a message');
            messageInput.focus();
            return;
        }
        
        // In a real-world scenario, you'd send this to a backend service
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Email validation helper function
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Optional: Add a simple typing effect to the tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                tagline.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        
        typeWriter();
    }
});
