document.addEventListener('DOMContentLoaded', function() {
    // Parallax Cover Effect
    const magazineCover = document.querySelector('.rd-magazine-cover');
    
    if (magazineCover) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const coverContent = magazineCover.querySelector('.cover-content');
            const coverOverlay = magazineCover.querySelector('.cover-overlay');
            
            // Parallax scrolling
            if (coverContent) {
                coverContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
            
            // Fade out effect
            if (coverOverlay) {
                coverOverlay.style.opacity = 1 - (scrollPosition / (magazineCover.offsetHeight * 0.7));
            }
        });
    }

    // Research Area Interactions
    const expertiseAreas = document.querySelectorAll('.expertise-area');
    
    expertiseAreas.forEach(area => {
        const areaIcon = area.querySelector('.area-icon');
        const areaTitle = area.querySelector('.area-title');
        
        // Hover effects for area icons
        if (areaIcon) {
            areaIcon.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    rotation: 360,
                    duration: 0.5,
                    ease: 'power1.inOut'
                });
            });
        }

        // Reveal content on scroll
        ScrollTrigger.create({
            trigger: area,
            start: 'top 80%',
            animation: gsap.from(area, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            }),
            toggleActions: 'play none none reverse'
        });
    });

    // Project Card Interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectImage = card.querySelector('.project-image img');
        const projectOverlay = card.querySelector('.project-overlay');
        
        card.addEventListener('mouseenter', function() {
            gsap.to(projectImage, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power1.inOut'
            });
            
            gsap.to(projectOverlay, {
                opacity: 1,
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(projectImage, {
                scale: 1,
                duration: 0.5,
                ease: 'power1.inOut'
            });
            
            gsap.to(projectOverlay, {
                opacity: 0,
                duration: 0.3
            });
        });
    });

    // Publications Hover Effects
    const publicationCards = document.querySelectorAll('.publication-card');
    
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power1.inOut'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                duration: 0.3,
                ease: 'power1.inOut'
            });
        });
    });

    // Text Reveal Animation for Cover Title
    const coverTitle = document.querySelector('.cover-title');
    
    if (coverTitle) {
        const words = coverTitle.innerHTML.split(/\s+/);
        coverTitle.innerHTML = words.map((word, index) => 
            `<span style="display: inline-block; opacity: 0; transform: translateY(20px);" class="word-${index}">${word} </span>`
        ).join('');
        
        words.forEach((word, index) => {
            gsap.to(`.word-${index}`, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        });
    }

    // Join Research Team CTA Pulse Animation
    const joinBtn = document.querySelector('.join-btn');
    
    if (joinBtn) {
        gsap.to(joinBtn, {
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: 'power1.inOut'
        });
    }

    // Performance and Error Tracking
    window.addEventListener('error', (event) => {
        console.error('Uncaught error:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            error: event.error
        });
    });

    // Performance Tracking
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = window.performance.now();
            console.log(`Page load time: ${loadTime.toFixed(2)} milliseconds`);
        });
    }
});