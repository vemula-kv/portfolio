// =============================================================================
// Theme Management
// =============================================================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// =============================================================================
// Navigation
// =============================================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            
            // Smooth scroll to section
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// =============================================================================
// Back to Top Button
// =============================================================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =============================================================================
// Contact Form Handling with Formspree
// =============================================================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Create FormData object
    const formData = new FormData(contactForm);
    
    // Send form data to Formspree
    fetch('https://formspree.io/f/mwvpdgpv', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success
            formStatus.style.display = 'block';
            formStatus.style.backgroundColor = '#dcfce7';
            formStatus.style.color = '#166534';
            formStatus.style.borderLeft = '4px solid #10b981';
            formStatus.innerHTML = '<strong>✓ Success!</strong> Thank you for your message. I\'ll get back to you soon!';
            
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
            
            // Reset button
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                formStatus.style.display = 'none';
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        // Error
        console.error('Error:', error);
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = '#fee2e2';
        formStatus.style.color = '#7f1d1d';
        formStatus.style.borderLeft = '4px solid #ef4444';
        formStatus.innerHTML = '<strong>✗ Error!</strong> There was a problem sending your message. Please try again.';
        
        showNotification('Failed to send message', 'error');
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
});

// =============================================================================
// Notification System
// =============================================================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// =============================================================================
// Intersection Observer for Animations
// =============================================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .skill-category, .project-card, .highlight-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// =============================================================================
// Dynamic Year Update
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('.footer-content p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Vinod Kumar Vemula. All rights reserved.`;
    }
});

// =============================================================================
// Smooth Page Load
// =============================================================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});

// =============================================================================
// Performance Optimization - Debounce Scroll Events
// =============================================================================
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

// Apply debounce to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// =============================================================================
// Console Easter Egg
// =============================================================================
console.log(
    '%c🚀 Vinod Kumar Vemula - Portfolio',
    'color: #2563eb; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cSenior AI/Data Engineer | GenAI Specialist',
    'color: #10b981; font-size: 16px;'
);
console.log(
    '%cInterested in collaborating? Let\'s connect!',
    'color: #6b7280; font-size: 14px;'
);
console.log(
    '%c📧 vvinodvemula03@gmail.com',
    'color: #2563eb; font-size: 14px;'
);

// =============================================================================
// Social Links Analytics (Optional - can be replaced with real analytics)
// =============================================================================
const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.getAttribute('aria-label') || 'Unknown';
        console.log(`Social link clicked: ${platform}`);
        // Add your analytics tracking here (e.g., Google Analytics, Mixpanel)
    });
});

// =============================================================================
// Keyboard Navigation Enhancement
// =============================================================================
document.addEventListener('keydown', (e) => {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            themeToggle.click();
        }
    }
});

// =============================================================================
// Copy Email to Clipboard
// =============================================================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    // Add click handler to show copied notification
    link.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const email = link.textContent;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy email', 'error');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('Email copied to clipboard!', 'success');
            } catch (err) {
                showNotification('Failed to copy email', 'error');
            }
            document.body.removeChild(textArea);
        }
    });
});

// =============================================================================
// Preload Critical Resources
// =============================================================================
const preloadFonts = () => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadFonts);
} else {
    preloadFonts();
}

// =============================================================================
// Form Validation Enhancement
// =============================================================================
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.validity.valid) {
            input.style.borderColor = 'var(--secondary-color)';
        } else {
            input.style.borderColor = '#ef4444';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--primary-color)';
    });
});

// =============================================================================
// Print Styles Handler
// =============================================================================
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// =============================================================================
// Performance Monitoring
// =============================================================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;
            
            console.log('📊 Performance Metrics:');
            console.log(`   Page Load Time: ${pageLoadTime}ms`);
            console.log(`   Connect Time: ${connectTime}ms`);
            console.log(`   Render Time: ${renderTime}ms`);
        }, 0);
    });
}