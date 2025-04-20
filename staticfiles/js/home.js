// Home Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true
    });

    // GSAP ScrollTrigger Registration
    gsap.registerPlugin(ScrollTrigger);

    // Hero Carousel Dynamic Animations
    const heroCarousel = document.getElementById('heroCarousel');
    const heroSlides = heroCarousel.querySelectorAll('.carousel-item');

    heroSlides.forEach(slide => {
        gsap.fromTo(slide.querySelector('.hero-content'), 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out' 
            }
        );
    });

    // Values Section Animations
    gsap.utils.toArray('.value-card').forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            animation: gsap.fromTo(card, 
                { 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.9 
                },
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: 'back.out(1.7)'
                }
            ),
            once: true
        });
    });

    // About Section Parallax Effect
    gsap.utils.toArray('.about-image img').forEach(img => {
        ScrollTrigger.create({
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: self => {
                const moveAmount = self.progress * 50;
                gsap.to(img, {
                    y: moveAmount,
                    ease: 'none'
                });
            }
        });
    });

    // WhatsApp Float Button Animation
    gsap.to('.whatsapp-float a', {
        y: 10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Continuous Background Gradient Animation
    const gradientAnimation = gsap.timeline({ repeat: -1 });
    gradientAnimation
        .to('.values-section', {
            background: 'linear-gradient(45deg, #e6f3ff, #ffffff)',
            duration: 5
        })
        .to('.values-section', {
            background: 'linear-gradient(45deg, #ffffff, #e6f3ff)',
            duration: 5
        });

    // Mission and Vision Text Reveal
    gsap.utils.toArray('.mission, .vision').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            animation: gsap.fromTo(element, 
                { 
                    opacity: 0, 
                    x: -50 
                },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.8,
                    ease: 'power2.out'
                }
            ),
            once: true
        });
    });

    // Image Badge Animation
    gsap.to('.image-badge', {
        rotation: 5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
});

// Hero Carousel Custom Transition
document.querySelector('#heroCarousel').addEventListener('slide.bs.carousel', function (event) {
    const slides = this.querySelectorAll('.carousel-item');
    
    slides.forEach(slide => {
        gsap.fromTo(slide.querySelector('.hero-content'), 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out' 
            }
        );
    });
});