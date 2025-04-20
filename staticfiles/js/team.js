/**
 * team_magazine.js - Scroll animations and interactions for team page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effects
    initParallaxEffects();
    
    // Initialize image hover effects
    initImageEffects();
    
    // Initialize smooth scrolling
    initSmoothScroll();
});

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    // Elements to animate when they enter viewport
    const animElements = document.querySelectorAll('.featured-wrapper, .expertise-area, .area-header, .member-card, .collaboration-wrapper, .join-wrapper');
    
    // Create animation classes based on position
    animElements.forEach(element => {
        if (element.classList.contains('featured-wrapper') || 
            element.classList.contains('expertise-area') || 
            element.classList.contains('collaboration-wrapper') ||
            element.classList.contains('join-wrapper')) {
            element.classList.add('fade-in');
        } else if (element.classList.contains('area-header')) {
            element.classList.add('fade-in-left');
        } else if (element.classList.contains('member-card')) {
            // Alternate left/right animations for cards
            const parentRow = element.closest('.row');
            const cards = parentRow ? parentRow.querySelectorAll('.member-card') : null;
            
            if (cards) {
                Array.from(cards).forEach((card, index) => {
                    if (index % 2 === 0) {
                        card.classList.add('fade-in-left');
                    } else {
                        card.classList.add('fade-in-right');
                    }
                    
                    // Add sequential delays
                    card.classList.add(`delay-${(index + 1) * 100}`);
                });
            } else {
                element.classList.add('fade-in');
            }
        }
    });
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Special case for featured quote animation
                if (entry.target.classList.contains('featured-wrapper')) {
                    const quote = entry.target.querySelector('.featured-quote');
                    if (quote) {
                        setTimeout(() => {
                            quote.style.transform = 'translateX(0)';
                            quote.style.opacity = '1';
                        }, 500);
                    }
                }
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    });
    
    // Observe all elements
    animElements.forEach(el => {
        observer.observe(el);
    });
    
    // Pre-style featured quote for animation
    const featuredQuote = document.querySelector('.featured-quote');
    if (featuredQuote) {
        featuredQuote.style.transform = 'translateX(50px)';
        featuredQuote.style.opacity = '0';
        featuredQuote.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
    }
}

/**
 * Initialize parallax scrolling effects
 */
function initParallaxEffects() {
    const magazineCover = document.querySelector('.magazine-cover');
    
    if (magazineCover) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const coverContent = magazineCover.querySelector('.cover-content');
            
            // Parallax effect for cover content
            if (coverContent && scrollPosition <= magazineCover.offsetHeight) {
                coverContent.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            }
        });
    }
}

/**
 * Initialize image hover effects for team members
 */
function initImageEffects() {
    // Member card hover effects
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        const image = card.querySelector('.member-photo img');
        
        if (image) {
            // Mouse enter effect - slight zoom and tilt
            card.addEventListener('mouseenter', function() {
                image.style.transform = 'scale(1.1)';
                
                // Add 3D tilt effect based on card position
                const cardRect = card.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2;
                const windowCenterX = window.innerWidth / 2;
                
                // Tilt based on position relative to screen center
                const tiltDirection = cardCenterX > windowCenterX ? '-3deg' : '3deg';
                card.style.transform = `translateY(-10px) rotateY(${tiltDirection})`;
            });
            
            // Mouse leave effect - reset
            card.addEventListener('mouseleave', function() {
                image.style.transform = 'scale(1)';
                card.style.transform = 'translateY(0) rotateY(0)';
            });
        }
    });
    
    // Featured image hover effect
    const featuredImage = document.querySelector('.featured-image');
    
    if (featuredImage) {
        const img = featuredImage.querySelector('img');
        const quote = featuredImage.querySelector('.featured-quote');
        
        featuredImage.addEventListener('mouseenter', function() {
            if (img) img.style.transform = 'scale(1.05)';
            if (quote) quote.style.transform = 'translateX(-10px)';
        });
        
        featuredImage.addEventListener('mouseleave', function() {
            if (img) img.style.transform = 'scale(1)';
            if (quote) quote.style.transform = 'translateX(0)';
        });
    }
    
    // Collaboration grid hover effects
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        const img = item.querySelector('img');
        
        if (img) {
            item.addEventListener('mouseenter', function() {
                img.style.transform = 'scale(1.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                img.style.transform = 'scale(1)';
            });
        }
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Text animation for magazine cover on page load
 */
function animateCoverText() {
    const coverTitle = document.querySelector('.cover-title');
    const tagline = document.querySelector('.cover-tagline');
    
    if (coverTitle && tagline) {
        // Split text into words for animation
        const words = coverTitle.textContent.trim().split(' ');
        coverTitle.textContent = '';
        
        // Animate each word with a delay
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = (index < words.length - 1) ? word + ' ' : word;
            wordSpan.style.opacity = '0';
            wordSpan.style.transform = 'translateY(20px)';
            wordSpan.style.display = 'inline-block';
            wordSpan.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            wordSpan.style.transitionDelay = `${0.3 + (index * 0.1)}s`;
            
            coverTitle.appendChild(wordSpan);
            
            // Trigger animation after a small delay
            setTimeout(() => {
                wordSpan.style.opacity = '1';
                wordSpan.style.transform = 'translateY(0)';
            }, 100);
        });
        
        // Animate tagline
        tagline.style.opacity = '0';
        tagline.style.transform = 'translateY(20px)';
        tagline.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        tagline.style.transitionDelay = '0.7s';
        
        setTimeout(() => {
            tagline.style.opacity = '1';
            tagline.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Run cover text animation on page load
window.addEventListener('load', animateCoverText);

/**
 * Add animation to expertise area icons
 */
function animateAreaIcons() {
    const areaIcons = document.querySelectorAll('.area-icon');
    
    areaIcons.forEach(icon => {
        // Add pulse animation on hover
        icon.addEventListener('mouseenter', function() {
            this.classList.add('pulse-animation');
        });
        
        icon.addEventListener('mouseleave', function() {
            // Remove class after animation completes
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 1000);
        });
    });
    
    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .pulse-animation {
            animation: pulse 1s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize icon animations
animateAreaIcons();