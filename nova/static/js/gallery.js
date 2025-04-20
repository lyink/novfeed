document.addEventListener('DOMContentLoaded', function() {
    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.gallery-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button styling
            filterButtons.forEach(btn => {
                btn.classList.remove('btn-primary-blue');
                btn.classList.add('btn-outline-primary-blue');
            });
            button.classList.remove('btn-outline-primary-blue');
            button.classList.add('btn-primary-blue');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.classList.add('animate', 'fade-in-up');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate', 'fade-in-up');
                }
            });
        });
    });

    // Count Up Animation for Statistics
    function animateCountUp() {
        const counters = document.querySelectorAll('.count-up');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const duration = 2000; // 2 seconds
            const increment = target / duration * 50; // Update every 50ms

            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.round(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Intersection Observer for Stats Animation
    const statsSection = document.querySelector('.bg-light');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCountUp();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe stats section
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Gallery Image Hover Effects
    const galleryImages = document.querySelectorAll('.gallery-image-container');
    galleryImages.forEach(container => {
        const image = container.querySelector('img');
        const overlay = container.querySelector('.gallery-overlay');

        container.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            overlay.style.opacity = '1';
        });

        container.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
        });
    });

    // Modal Image Zoom
    const modalImages = document.querySelectorAll('.modal img');
    modalImages.forEach(img => {
        img.addEventListener('click', function() {
            const zoomContainer = document.createElement('div');
            zoomContainer.classList.add('image-zoom-overlay');
            
            const zoomedImg = this.cloneNode(true);
            zoomedImg.classList.add('zoomed-image');
            
            zoomContainer.appendChild(zoomedImg);
            document.body.appendChild(zoomContainer);

            zoomContainer.addEventListener('click', () => {
                document.body.removeChild(zoomContainer);
            });
        });
    });

    // WhatsApp Button Pulse Effect
    const whatsappButton = document.querySelector('.whatsapp-float a');
    if (whatsappButton) {
        whatsappButton.addEventListener('mouseenter', () => {
            whatsappButton.classList.add('animate-pulse');
        });
        whatsappButton.addEventListener('mouseleave', () => {
            whatsappButton.classList.remove('animate-pulse');
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