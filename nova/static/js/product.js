// products-redesign.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    // Initialize UI components
    initTabs();
    initFaqAccordion();
    initSlider();
    animateStats();
    
    // Add smooth scrolling to all links
    initSmoothScroll();
  });
  
  // Tab Functionality
  function initTabs() {
    // Product Tabs
    const productTabButtons = document.querySelectorAll('.tab-btn');
    const productTabPanes = document.querySelectorAll('.tab-pane');
    
    productTabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        productTabButtons.forEach(btn => btn.classList.remove('active'));
        productTabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(`${tabId}-tab`).classList.add('active');
      });
    });
    
    // FAQ Tabs
    const faqTabButtons = document.querySelectorAll('.faq-tab');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    faqTabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const categoryIndex = this.getAttribute('data-category');
        
        // Remove active class from all buttons and categories
        faqTabButtons.forEach(btn => btn.classList.remove('active'));
        faqCategories.forEach(category => category.classList.remove('active'));
        
        // Add active class to clicked button and corresponding category
        this.classList.add('active');
        document.querySelector(`.faq-category[data-category="${categoryIndex}"]`).classList.add('active');
      });
    });
  }
  
  // FAQ Accordion
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', function() {
        // Check if this item is already active
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('active');
        });
        
        // If the clicked item wasn't active before, make it active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
  
  // Testimonial Slider
  function initSlider() {
    const slides = document.querySelectorAll('.story-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Initialize the slider
    showSlide(currentSlide);
    
    // Previous slide button
    if (prevButton) {
      prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
      });
    }
    
    // Next slide button
    if (nextButton) {
      nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
      });
    }
    
    // Dot indicators
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    // Show specific slide
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show the current slide and activate the corresponding dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
    
    // Auto-advance the slider every 5 seconds
    setInterval(function() {
      currentSlide = (currentSlide + 1) % slideCount;
      showSlide(currentSlide);
    }, 7000);
  }
  
  // Animate Statistics
  function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count').replace(/,/g, '').replace(/\+/g, ''));
          animateValue(entry.target, 0, target, 2000);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    // Observe each stat value
    statValues.forEach(stat => {
      observer.observe(stat);
    });
    
    // Animation function
    function animateValue(element, start, end, duration) {
      let startTime = null;
      const hasComma = element.getAttribute('data-count').includes(',');
      const hasPlus = element.getAttribute('data-count').includes('+');
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        let value = Math.floor(progress * (end - start) + start);
        
        // Format with commas if original had commas
        if (hasComma) {
          value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        // Add + if original had plus
        if (!hasPlus) {
          element.textContent = value;
        }
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
    }
  }
  
  // Smooth Scrolling for Anchor Links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header if needed
            behavior: 'smooth'
          });
        }
      });
    });
  }