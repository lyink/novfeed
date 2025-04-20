// Animation handling with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Elements to animate
    const elementsToAnimate = [
      '.intro-text',
      '.featured-wrapper',
      '.expertise-area',
      '.member-card',
      '.collaboration-image-grid .grid-item',
      '.collaboration-content',
      '.testimonial-item',
      '.join-wrapper'
    ];
    
    // Add animation classes to elements
    document.querySelectorAll('.intro-text').forEach(el => el.classList.add('fade-in'));
    document.querySelectorAll('.featured-wrapper').forEach(el => el.classList.add('fade-in-up'));
    document.querySelectorAll('.expertise-area').forEach(el => el.classList.add('fade-in-up'));
    document.querySelectorAll('.collaboration-content').forEach(el => el.classList.add('slide-in-right'));
    document.querySelectorAll('.join-wrapper').forEach(el => el.classList.add('fade-in'));
    
    // Testimonials get sequential animation delays
    document.querySelectorAll('.testimonial-item').forEach((el, index) => {
      el.classList.add('slide-in-left');
      if (index === 0) el.classList.add('delay-100');
      if (index === 1) el.classList.add('delay-300');
      if (index === 2) el.classList.add('delay-500');
    });
  
    // Set up the intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animation is done, unobserve the element
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -100px 0px' // Slight offset to trigger earlier
    });
  
    // Observe all elements that need animation
    elementsToAnimate.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
      });
    });
  
    // Special handling for staggered member card animations
    document.querySelectorAll('.team-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.member-card');
      cards.forEach((card, index) => {
        // Add staggered delay classes
        const delay = index * 100;
        card.style.transitionDelay = `${delay}ms`;
      });
    });
  
    // Add parallax effect to the magazine cover
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const coverSection = document.querySelector('.magazine-cover');
      
      if (coverSection) {
        // Create a subtle parallax scrolling effect
        const translateY = scrollPosition * 0.4;
        coverSection.style.backgroundPositionY = `-${translateY}px`;
      }
    });
  
    // Enhance hover effects on member cards
    document.querySelectorAll('.member-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Create a slight pop effect on hover
        this.style.transform = 'translateY(-15px)';
        this.style.boxShadow = '0 20px 30px rgba(0,0,0,0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        // Return to normal state
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
    
    // Add a subtle hover effect to the featured image
    const featuredImage = document.querySelector('.featured-image');
    if (featuredImage) {
      featuredImage.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.05)';
      });
      
      featuredImage.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = '';
      });
    }
  });