// novafeed Product Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // GSAP ScrollTrigger and Advanced Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Floating Elements Animation
    gsap.utils.toArray('.floating-badge').forEach(badge => {
        gsap.to(badge, {
            y: 15,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    });

    // Hero Image Float Animation
    gsap.to('.hero-image img', {
        y: 20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });

    // Categories Card Hover and Scroll Animations
    gsap.utils.toArray('.category-card').forEach(card => {
        // Hover Effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                duration: 0.3
            });
        });

        // Scroll Reveal
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            animation: gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out'
            }),
            once: true
        });
    });

    // Product Section Reveal Animations
    gsap.utils.toArray('.products-section .row').forEach((row, index) => {
        ScrollTrigger.create({
            trigger: row,
            start: 'top 80%',
            animation: gsap.from(row, {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                duration: 1,
                ease: 'power2.out'
            }),
            once: true
        });
    });

    // Testimonial Carousel Enhanced Transitions
    const testimonialCarousel = document.getElementById('testimonialsCarousel');
    if (testimonialCarousel) {
        testimonialCarousel.addEventListener('slide.bs.carousel', function (event) {
            const activeSlides = this.querySelectorAll('.carousel-item');
            activeSlides.forEach(slide => {
                gsap.fromTo(slide, 
                    { opacity: 0, x: event.direction === 'right' ? 100 : -100 },
                    { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
                );
            });
        });
    }

    // WhatsApp Button Pulse Animation
    gsap.to('.pulse', {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Inquiry Form Reveal
    ScrollTrigger.create({
        trigger: '#inquiry',
        start: 'top 80%',
        animation: gsap.from('#inquiry .inquiry-form-container', {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: 'back.out(1.7)'
        }),
        once: true
    });

    // FAQ Accordion Interactive Animations
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (this.classList.contains('collapsed')) {
                gsap.to(icon, { rotation: 0, duration: 0.3 });
            } else {
                gsap.to(icon, { rotation: 180, duration: 0.3 });
            }
        });
    });

    // Service Cards Parallax Effect
    gsap.utils.toArray('.service-card').forEach(card => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: self => {
                const moveAmount = self.progress * 50;
                gsap.to(card.querySelector('.service-image img'), {
                    y: moveAmount,
                    ease: 'none'
                });
            }
        });
    });
});

// AOS (Animate on Scroll) Additional Configuration
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});