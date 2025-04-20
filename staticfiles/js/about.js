/**
 * about.js - JavaScript for the About Us page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for elements
    initAnimations();
    
    // Add parallax effect to hero section
    initParallax();
    
    // Initialize counter animations
    initCounters();
    
    // Add hover effects for team cards
    initTeamCards();
    
    // Timeline animation on scroll
    initTimelineAnimation();
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
 * Initialize parallax effect for hero section
 */
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');
    
    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `translate3d(0, ${scrollPosition * 0.4}px, 0) scale(1.1)`;
        });
    }
}

/**
 * Initialize counter animations for achievement numbers
 */
function initCounters() {
    const achievementItems = document.querySelectorAll('.achievement-content h4');
    
    if (achievementItems.length === 0) return;
    
    // Function to animate counter
    const animateCounter = function(element, start, end, duration) {
        const range = end - start;
        const startTime = performance.now();
        
        const updateCounter = function(timestamp) {
            const runtime = timestamp - startTime;
            const progress = Math.min(runtime / duration, 1);
            
            // Get the text without the numbers
            const elementText = element.textContent.replace(/[0-9+]/g, '');
            const currentValue = Math.floor(progress * range + start);
            
            // Update the text with the new number
            element.textContent = currentValue + elementText;
            
            if (runtime < duration) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    };
    
    // Observer to start animation when element is in view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Extract the number from the text
                const text = entry.target.textContent;
                const number = parseInt(text.match(/\d+/)[0]);
                
                // Animate from 0 to the number
                animateCounter(entry.target, 0, number, 2000);
                
                // Unobserve after animation starts
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all achievement items
    achievementItems.forEach(item => {
        counterObserver.observe(item);
    });
}

/**
 * Initialize hover effects for team cards
 */
function initTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        const image = card.querySelector('img');
        const socialLinks = card.querySelector('.team-social');
        
        // Add mouse enter effect
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
            if (socialLinks) {
                socialLinks.style.bottom = '0';
            }
        });
        
        // Add mouse leave effect
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
            if (socialLinks) {
                socialLinks.style.bottom = '-50px';
            }
        });
    });
}

/**
 * Initialize timeline animation on scroll
 */
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;
    
    // Observer for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('timeline-active');
                
                // Add a highlight effect to the badge
                const badge = entry.target.querySelector('.timeline-badge');
                if (badge) {
                    badge.classList.add('highlight');
                    
                    // Remove highlight after animation
                    setTimeout(() => {
                        badge.classList.remove('highlight');
                    }, 1500);
                }
                
                // Unobserve after animation
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Observe all timeline items
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Add CSS for highlight animation
    const style = document.createElement('style');
    style.textContent = `
        .timeline-badge.highlight {
            animation: pulse-badge 1.5s ease;
        }
        
        @keyframes pulse-badge {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 86, 179, 0.7); }
            50% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(0, 86, 179, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 86, 179, 0); }
        }
        
        .timeline-active .timeline-panel {
            animation: fade-in-panel 0.8s ease forwards;
        }
        
        @keyframes fade-in-panel {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
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

// Add hover effects to values cards
const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach(card => {
    const icon = card.querySelector('.value-icon');
    
    card.addEventListener('mouseenter', function() {
        if (icon) {
            icon.style.backgroundColor = 'var(--primary-blue)';
            icon.style.color = '#fff';
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (icon) {
            icon.style.backgroundColor = '#fff';
            icon.style.color = 'var(--primary-blue)';
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add 3D tilt effect to the vision-mission cards
const visionMissionCards = document.querySelectorAll('.vision-mission-card');
visionMissionCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate distance from center
        const distanceX = (mouseX - cardCenterX) / (cardRect.width / 2);
        const distanceY = (mouseY - cardCenterY) / (cardRect.height / 2);
        
        // Apply tilt effect (max 5 degrees)
        const tiltX = distanceY * 5;
        const tiltY = -distanceX * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Award card hover effects
const awardCards = document.querySelectorAll('.award-card');
awardCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--light-blue)';
        
        const logo = this.querySelector('.award-logo img');
        if (logo) {
            logo.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#fff';
        
        const logo = this.querySelector('.award-logo img');
        if (logo) {
            logo.style.transform = 'scale(1)';
        }
    });
});