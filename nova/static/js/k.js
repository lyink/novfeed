// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: 50
    });
  
    // Form validation and handling
    const enquiryForm = document.getElementById('enquiry-form');
    
    if (enquiryForm) {
      // Add floating label effect
      const formInputs = enquiryForm.querySelectorAll('input, textarea, select');
      
      formInputs.forEach(input => {
        // Add appropriate classes based on input state
        if (input.value.trim() !== '') {
          input.classList.add('has-value');
        }
        
        input.addEventListener('focus', () => {
          input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
          input.parentElement.classList.remove('focused');
          if (input.value.trim() !== '') {
            input.classList.add('has-value');
          } else {
            input.classList.remove('has-value');
          }
          
          // Simple validation on blur
          validateField(input);
        });
      });
      
      // Form submission handling
      enquiryForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Validate all fields before submitting
        formInputs.forEach(input => {
          if (!validateField(input)) {
            isValid = false;
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          
          // Scroll to first error
          const firstError = enquiryForm.querySelector('.has-error');
          if (firstError) {
            firstError.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }
      });
    }
    
    // Field validation function
    function validateField(field) {
      const fieldName = field.getAttribute('name');
      const fieldValue = field.value.trim();
      const fieldType = field.getAttribute('type');
      const formGroup = field.closest('.form-group');
      let errorMessage = '';
      
      // Remove any existing error messages
      const existingError = formGroup.querySelector('.error-message');
      if (existingError) {
        existingError.remove();
      }
      
      formGroup.classList.remove('has-error');
      
      // Required fields validation
      if (field.hasAttribute('required') && fieldValue === '') {
        errorMessage = 'This field is required';
        formGroup.classList.add('has-error');
      }
      
      // Email validation
      if (fieldType === 'email' && fieldValue !== '') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(fieldValue)) {
          errorMessage = 'Please enter a valid email address';
          formGroup.classList.add('has-error');
        }
      }
      
      // Phone validation (simple)
      if (fieldName === 'phone' && fieldValue !== '') {
        const phonePattern = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        if (!phonePattern.test(fieldValue)) {
          errorMessage = 'Please enter a valid phone number';
          formGroup.classList.add('has-error');
        }
      }
      
      // Add error message if needed
      if (errorMessage) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        formGroup.appendChild(errorElement);
        return false;
      }
      
      return true;
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Add animation to success message if present
    const successMessage = document.querySelector('.alert-success');
    if (successMessage) {
      successMessage.style.animation = 'fadeInDown 0.5s ease forwards';
      
      // Auto hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.animation = 'fadeOutUp 0.5s ease forwards';
        setTimeout(() => {
          successMessage.remove();
        }, 500);
      }, 5000);
    }
  });
  
