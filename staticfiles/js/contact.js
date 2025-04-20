/**
 * contact.js - JavaScript for the Contact Us page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for elements
    initAnimations();
    
    // Initialize map background animation
    initMapAnimation();
    
    // Initialize form validation and effects
    initContactForm();
    
    // Add interactive effects to contact cards
    initContactCards();
    
    // Add hover effects to office cards
    initOfficeCards();
    
    // Initialize FAQ accordion effects
    initFaqAccordion();
    
    // Initialize newsletter form effects
    initNewsletterForm();
});

/**
 * Initialize animations for elements when they come into view
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
    
    // Function to check if element is in viewport
    const isInViewport = function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.85) &&
            rect.bottom >= 0
        );
    };
    
    // Function to animate elements in viewport
    const animateElementsInView = function() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animate-active')) {
                element.classList.add('animate-active');
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    // Run on page load
    animateElementsInView();
    
    // Run on scroll
    window.addEventListener('scroll', animateElementsInView);
}

/**
 * Initialize map background animation
 */
function initMapAnimation() {
    const mapBg = document.querySelector('.map-background');
    
    if (mapBg) {
        // Add subtle panning animation to map
        let direction = 1;
        let position = 0;
        
        // Add CSS for smooth transition
        mapBg.style.transition = 'transform 0.5s ease-out';
        
        // Animate map background
        setInterval(() => {
            position += 0.1 * direction;
            
            // Change direction when position reaches limits
            if (position > 2 || position < -2) {
                direction *= -1;
            }
            
            mapBg.style.transform = `scale(1.1) translate(${position}px, ${position * 0.5}px)`;
        }, 50);
    }
}

/**
 * Initialize contact form validation and effects
 */
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    // Add form validation
    contactForm.addEventListener('submit', function(e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add validation class
            this.classList.add('was-validated');
            
            // Highlight first invalid field
            const firstInvalidField = this.querySelector(':invalid');
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        } else {
            // If form is valid, show loading state
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                const btnText = submitBtn.querySelector('span');
                const btnIcon = submitBtn.querySelector('i');
                
                if (btnText && btnIcon) {
                    btnText.textContent = 'Sending...';
                    btnIcon.className = 'fas fa-spinner fa-spin';
                }
                
                submitBtn.disabled = true;
            }
        }
    });
    
    // Add floating label effects
    const formControls = contactForm.querySelectorAll('.form-control, .form-select');
    
    formControls.forEach(control => {
        // Add focus animation
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('is-focused');
        });
        
        // Remove focus animation
        control.addEventListener('blur', function() {
            this.parentElement.classList.remove('is-focused');
        });
    });
}

/**
 * Initialize interactive effects for contact cards
 */
function initContactCards() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        const icon = card.querySelector('.card-icon i');
        
        // Add mouse enter effect
        card.addEventListener('mouseenter', function() {
            if (icon) {
                icon.style.transform = 'rotateY(180deg)';
            }
        });
        
        // Add mouse leave effect
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'rotateY(0)';
            }
        });
        
        // Add hover highlight effect
        card.addEventListener('mousemove', function(e) {
            const cardRect = card.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(230, 242, 255, 0.5) 0%, rgba(255, 255, 255, 1) 70%)`;
        });
        
        // Reset highlight effect on mouse leave
        card.addEventListener('mouseleave', function() {
            card.style.background = '#fff';
        });
    });
}

/**
 * Initialize hover effects for office cards
 */
function initOfficeCards() {
    const officeCards = document.querySelectorAll('.office-card');
    
    officeCards.forEach(card => {
        const detailItems = card.querySelectorAll('.detail-item');
        
        // Add hover effect for detail items
        detailItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.backgroundColor = 'var(--primary-blue)';
                    icon.style.color = '#fff';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.backgroundColor = 'var(--light-blue)';
                    icon.style.color = 'var(--primary-blue)';
                }
            });
        });
    });
}

/**
 * Initialize FAQ accordion effects
 */
function initFaqAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        const collapse = item.querySelector('.accordion-collapse');
        
        if (button && collapse) {
            // Add transition animation
            collapse.style.transition = 'all 0.3s ease';
            
            // Add smooth hover effect
            button.addEventListener('mouseenter', function() {
                if (this.classList.contains('collapsed')) {
                    this.style.color = 'var(--primary-blue)';
                    this.style.backgroundColor = 'var(--light-blue)';
                }
            });
            
            button.addEventListener('mouseleave', function() {
                if (this.classList.contains('collapsed')) {
                    this.style.color = 'var(--primary-blue)';
                    this.style.backgroundColor = '#fff';
                }
            });
        }
    });
    
    // Add highlight for currently open accordion item
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle animation to the icon
            const icon = this.querySelector('::after');
            
            if (icon) {
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    });
}

/**
 * Initialize newsletter form effects
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (!newsletterForm) return;
    
    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    if (submitBtn && emailInput) {
        // Add focus effect
        emailInput.addEventListener('focus', function() {
            submitBtn.style.backgroundColor = 'var(--primary-blue)';
            submitBtn.style.color = '#fff';
        });
        
        // Remove focus effect
        emailInput.addEventListener('blur', function() {
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
        });
        
        // Form submission effect
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (emailInput.checkValidity()) {
                // Show success message
                const formGroup = emailInput.closest('.input-group');
                
                if (formGroup) {
                    // Create success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-light mt-3 text-center';
                    successMessage.innerHTML = '<i class="fas fa-check-circle text-success me-2"></i> Thank you for subscribing to our newsletter!';
                    
                    // Hide form and show message
                    formGroup.style.display = 'none';
                    formGroup.parentNode.appendChild(successMessage);
                    
                    // Reset form
                    this.reset();
                }
            } else {
                // Show validation message
                emailInput.classList.add('is-invalid');
            }
        });
        
        // Remove validation message on input
        emailInput.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    }
}

// Add 3D effect to the contact form container
const formContainer = document.querySelector('.contact-form-container');

if (formContainer) {
    formContainer.addEventListener('mousemove', function(e) {
        const containerRect = formContainer.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate distance from center (normalized to -1 to 1)
        const distanceX = (mouseX - containerCenterX) / (containerRect.width / 2);
        const distanceY = (mouseY - containerCenterY) / (containerRect.height / 2);
        
        // Apply tilt effect (max 3 degrees)
        const tiltX = distanceY * 3;
        const tiltY = -distanceX * 3;
        
        // Apply shadow effect based on tilt
        const shadowX = -tiltY * 5;
        const shadowY = tiltX * 5;
        
        formContainer.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        formContainer.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.1)`;
    });
    
    formContainer.addEventListener('mouseleave', function() {
        formContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        formContainer.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.1)';
    });
}

// Add smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mousedown', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Add ripple to button
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple 0.6s linear;
        transform: scale(0);
        opacity: 0.5;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);