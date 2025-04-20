/**
 * animations.js - Animation functions for NovaFeed website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Page load animation
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    pageTransition.innerHTML = '<div class="logo-animation"><span class="text-white">Nov</span><span class="text-light-blue">Feed</span></div>';
    document.body.appendChild(pageTransition);
    
    // Hide preloader after page is loaded
    setTimeout(function() {
        pageTransition.style.opacity = '0';
        setTimeout(function() {
            pageTransition.remove();
        }, 500);
    }, 1000);
    
    // Add floating animation to hero image
    const heroImage = document.querySelector('.hero-section img');
    if (heroImage) {
        heroImage.classList.add('floating');
    }
    
    // Add pulse animation to WhatsApp button
    const whatsappBtn = document.querySelector('.btn-success.rounded-circle');
    if (whatsappBtn) {
        whatsappBtn.classList.add('pulse');
    }
    
    // Init animations on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition.top < windowHeight * 0.9) {
                element.style.animationPlayState = 'running';
            }
        });
        
        // Change navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    // Run on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation classes to elements
    function addAnimationClasses() {
        // Hero section animations
        const heroTitle = document.querySelector('.hero-section h1');
        const heroText = document.querySelector('.hero-section .lead');
        const heroButtons = document.querySelector('.hero-section .d-flex');
        
        if (heroTitle) heroTitle.classList.add('animate', 'fade-in-up');
        if (heroText) heroText.classList.add('animate', 'fade-in-up', 'delay-1');
        if (heroButtons) heroButtons.classList.add('animate', 'fade-in-up', 'delay-2');
        
        // Section titles
        document.querySelectorAll('.section-title').forEach((el, index) => {
            el.classList.add('animate', 'zoom-in');
        });
        
        // About section cards
        document.querySelectorAll('#about .feature-card').forEach((el, index) => {
            el.classList.add('animate', 'fade-in-up', `delay-${index + 1}`);
        });
        
        // Technology steps
        document.querySelectorAll('#technology .d-flex.mb-3').forEach((el, index) => {
            el.classList.add('animate', 'fade-in-left', `delay-${index + 1}`);
        });
        
        // Technology image
        const techImage = document.querySelector('#technology img');
        if (techImage) techImage.classList.add('animate', 'fade-in-right', 'delay-3');
        
        // Benefit cards
        document.querySelectorAll('#technology .col-md-4').forEach((el, index) => {
            el.classList.add('animate', 'fade-in-up', `delay-${index + 1}`);
        });
        
        // Impact section
        document.querySelectorAll('#impact .col-lg-6').forEach((el, index) => {
            el.classList.add('animate', index % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
        });
        
        // Testimonial cards
        document.querySelectorAll('.testimonial-card').forEach((el, index) => {
            el.classList.add('animate', 'zoom-in', `delay-${index + 1}`);
        });
        
        // Team members
        document.querySelectorAll('.team-member').forEach((el, index) => {
            el.classList.add('animate', 'fade-in-up', `delay-${index + 1}`);
        });
        
        // Product cards
        document.querySelectorAll('#products .feature-card').forEach((el, index) => {
            el.classList.add('animate', index % 2 === 0 ? 'fade-in-left' : 'fade-in-right', `delay-${index + 1}`);
        });
        
        // Call to action
        const ctaTitle = document.querySelector('#contact h2');
        const ctaText = document.querySelector('#contact .lead');
        const ctaButtons = document.querySelector('#contact .d-flex');
        
        if (ctaTitle) ctaTitle.classList.add('animate', 'fade-in-up');
        if (ctaText) ctaText.classList.add('animate', 'fade-in-up', 'delay-1');
        if (ctaButtons) ctaButtons.classList.add('animate', 'fade-in-up', 'delay-2');
    }
    
    // Add animation classes to elements
    addAnimationClasses();
});

// Add smooth page transitions for links
document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
        // Internal link, already handled by smooth scroll
        return;
    }
    
    if (target && target.getAttribute('href') && !target.getAttribute('href').startsWith('mailto:') && !target.getAttribute('target')) {
        e.preventDefault();
        
        const pageTransition = document.createElement('div');
        pageTransition.className = 'page-transition';
        pageTransition.style.opacity = '0';
        document.body.appendChild(pageTransition);
        
        setTimeout(function() {
            pageTransition.style.opacity = '1';
            setTimeout(function() {
                window.location.href = target.getAttribute('href');
            }, 500);
        }, 10);
    }
});


// Full-Width Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    let interval;
    const animationTypes = ['fadeIn', 'slideFromRight', 'slideFromLeft', 'zoomIn', 'zoomOut'];
    let isAnimating = false;
    
    // Initialize carousel
    function initCarousel() {
        // Set initial active slide
        updateCarousel();
        
        // Start autoplay
        startAutoplay();
        
        // Add event listeners
        prevButton.addEventListener('click', function() {
            if (!isAnimating) prevSlide();
        });
        
        nextButton.addEventListener('click', function() {
            if (!isAnimating) nextSlide();
        });
        
        // Add indicator click events
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (isAnimating || currentIndex === index) return;
                currentIndex = index;
                updateCarousel();
                resetAutoplay();
            });
        });
        
        // Pause autoplay on hover
        const carouselContainer = document.querySelector('.fullscreen-carousel');
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }
    
    // Update carousel state
    function updateCarousel() {
        isAnimating = true;
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => {
            slide.classList.remove('active');
            // Remove any existing animation
            slide.style.animation = '';
        });
        
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Add active class to current slide and indicator
        const activeSlide = slides[currentIndex];
        activeSlide.classList.add('active');
        indicators[currentIndex].classList.add('active');
        
        // Apply random animation to the active slide
        const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
        activeSlide.style.animation = `${randomAnimation} 1.5s forwards`;
        
        // Reset animating flag after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 1500);
    }
    
    // Go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
        resetAutoplay();
    }
    
    // Go to next slide
    function nextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
        resetAutoplay();
    }
    
    // Start autoplay
    function startAutoplay() {
        interval = setInterval(() => {
            if (!isAnimating) nextSlide();
        }, 6000); // Change slide every 6 seconds
    }
    
    // Stop autoplay
    function stopAutoplay() {
        clearInterval(interval);
    }
    
    // Reset autoplay
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Initialize the carousel
    initCarousel();
    
    // Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carouselContainer = document.querySelector('.fullscreen-carousel');
    
    carouselContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    carouselContainer.addEventListener('touchend', function(e) {
        if (isAnimating) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - go to next slide
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right - go to previous slide
            prevSlide();
        }
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (isAnimating) return;
        
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Add parallax effect on mouse move
    carouselContainer.addEventListener('mousemove', function(e) {
        const activeSlide = document.querySelector('.carousel-slide.active img');
        if (!activeSlide) return;
        
        const xPos = (e.clientX / window.innerWidth) * 20 - 10; // -10 to 10
        const yPos = (e.clientY / window.innerHeight) * 20 - 10; // -10 to 10
        
        activeSlide.style.transform = `scale(1.1) translate(${xPos}px, ${yPos}px)`;
    });
    
    carouselContainer.addEventListener('mouseleave', function() {
        const activeSlide = document.querySelector('.carousel-slide.active img');
        if (!activeSlide) return;
        
        activeSlide.style.transform = 'scale(1.1)';
    });
});

// Navbar enhancement JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar element
    const navbar = document.querySelector('.custom-navbar');
    
    // Add scrolled class on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Check initial scroll position (in case page is loaded already scrolled)
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
            
            // Special case for home link
            if (current === '' && link.getAttribute('href') === '#') {
                link.classList.add('active');
            }
        });
    });
    
    // Close mobile menu when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Add smooth scrolling to nav links
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
});

// About Us Section Animation Script
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const animatedElements = document.querySelectorAll('.about-section .animate');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition.top < windowHeight * 0.9) {
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    // Run on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add counter animation to the benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    let currentIndex = 0;
    
    function highlightNextBenefit() {
        // Reset all items
        benefitItems.forEach(item => {
            item.classList.remove('highlight');
        });
        
        // Highlight current item
        if (benefitItems.length > 0) {
            benefitItems[currentIndex].classList.add('highlight');
            currentIndex = (currentIndex + 1) % benefitItems.length;
        }
    }
    
    // Add CSS for highlight class
    const style = document.createElement('style');
    style.textContent = `
        .benefit-item.highlight {
            background: var(--light-blue);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 86, 179, 0.1);
        }
    `;
    document.head.appendChild(style);
    
    // Start the highlight cycle
    setInterval(highlightNextBenefit, 2000);
    
    // Add parallax effect to background elements
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const aboutSection = document.querySelector('.about-section');
        
        if (aboutSection) {
            // Create parallax effect for background elements
            const parallaxTop = aboutSection.offsetTop;
            const parallaxHeight = aboutSection.offsetHeight;
            
            if (scrollPosition > parallaxTop - window.innerHeight && 
                scrollPosition < parallaxTop + parallaxHeight) {
                // Calculate relative position within the section
                const relativePosition = (scrollPosition - (parallaxTop - window.innerHeight)) / 
                                        (parallaxHeight + window.innerHeight);
                
                // Apply parallax movement to pseudo-elements
                aboutSection.style.setProperty('--parallax-offset', `${relativePosition * 30}px`);
            }
        }
    });
    
    // Add CSS for parallax
    const parallaxStyle = document.createElement('style');
    parallaxStyle.textContent = `
        .about-section::before {
            transform: translate(calc(150px - var(--parallax-offset, 0px)), -150px);
        }
        .about-section::after {
            transform: translate(calc(-100px + var(--parallax-offset, 0px)), 100px);
        }
    `;
    document.head.appendChild(parallaxStyle);
    
    // Add interactive effects to process steps
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach((step) => {
        step.addEventListener('mouseenter', function() {
            // Add active class to step
            this.classList.add('active-step');
        });
        
        step.addEventListener('mouseleave', function() {
            // Remove active class from step
            this.classList.remove('active-step');
        });
    });
    
    // Add CSS for active step
    const stepStyle = document.createElement('style');
    stepStyle.textContent = `
        .process-step.active-step {
            background-color: rgba(0, 86, 179, 0.03);
            border-radius: 10px;
        }
    `;
    document.head.appendChild(stepStyle);
    
    // Add number counter animation
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.innerHTML = value < 10 ? `0${value}` : value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Animate step numbers when they come into view
    const stepNumbers = document.querySelectorAll('.step-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(stepNumbers).indexOf(entry.target);
                animateValue(entry.target, 0, index + 1, 1000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stepNumbers.forEach(number => {
        observer.observe(number);
    });
});

