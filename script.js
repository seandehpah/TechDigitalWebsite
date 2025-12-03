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
let isFormSubmitting = false;

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Prevent double submission
    if (isFormSubmitting) {
        console.log('Form already submitting...');
        return;
    }
    
    isFormSubmitting = true;
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const feedback = document.getElementById('formFeedback');
    const originalText = submitBtn.textContent;

    // Hide previous feedback
    if(feedback) feedback.textContent = '';
    if(feedback) feedback.className = '';

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        service: formData.get('service'),
        message: formData.get('message')
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
            if(feedback) {
                feedback.textContent = '✓ ' + result.message;
                feedback.className = 'text-center mt-4 text-lg text-green-600 font-semibold';
            }
            e.target.reset();
            
            // Auto-clear success message after 5 seconds
            setTimeout(() => {
                if(feedback) {
                    feedback.textContent = '';
                    feedback.className = '';
                }
            }, 5000);
        } else {
            if(feedback) {
                feedback.textContent = '✗ Error: ' + (result.error || 'Failed to send message');
                feedback.className = 'text-center mt-4 text-lg text-red-600 font-semibold';
            }
        }
    } catch (error) {
        console.error('Form error:', error);
        if(feedback) {
            feedback.textContent = '✗ Failed to send message. Please try again or contact us directly.';
            feedback.className = 'text-center mt-4 text-lg text-red-600 font-semibold';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        isFormSubmitting = false;
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