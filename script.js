// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL
            if(history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});

// Dark mode toggle (handled in navbar.js)
const darkModeToggle = document.getElementById('darkModeToggle');
if(darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    });

    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'false') {
        document.documentElement.classList.remove('dark');
    }
}

// Initialize animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Initialize Feather icons
    if(typeof feather !== 'undefined') {
        feather.replace();
    }
});

// Form submission handler for contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    const originalText = submitBtn.textContent;

    // Hide messages
    if(successMsg) successMsg.classList.add('hidden');
    if(errorMsg) errorMsg.classList.add('hidden');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('Name'),
        email: formData.get('Email'),
        phone: formData.get('phone') || '',
        service: formData.get('Service'),
        message: formData.get('Message')
    };
    
    try {
        const response = await fetch('/api/sendmail', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            if(successMsg) {
                successMsg.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
                successMsg.classList.remove('hidden');
            }
            e.target.reset();
        } else {
            if(errorMsg) {
                errorMsg.textContent = '✗ Error: ' + (result.error || 'Failed to send message');
                errorMsg.classList.remove('hidden');
            }
        }
    } catch (error) {
        console.error('Form error:', error);
        if(errorMsg) {
            errorMsg.textContent = '✗ Failed to send message. Please try again or contact us directly.';
            errorMsg.classList.remove('hidden');
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

// Add active class to current navigation link
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('custom-navbar a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || 
            (currentPath === '/' && href === '/') ||
            (currentPath.endsWith('/') && href.endsWith(currentPath.slice(0, -1)))) {
            link.classList.add('active');
        }
    });
});

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize events
const handleResize = debounce(() => {
    // Re-initialize components if needed
    if(typeof feather !== 'undefined') {
        feather.replace();
    }
}, 250);

window.addEventListener('resize', handleResize);

// Log page load performance (optional)
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
});