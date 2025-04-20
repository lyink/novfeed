/**
 * Nova Feed - Main JavaScript File
 */

(function ($) {
    'use strict';
    
    // Document Ready
    $(document).ready(function () {
        
        // Initialize Bootstrap Tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Initialize Bootstrap Popovers
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
        
        // Back to top button
        var backToTopBtn = $('#back-to-top');
        
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                backToTopBtn.addClass('show');
            } else {
                backToTopBtn.removeClass('show');
            }
        });
        
        backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, '300');
        });
        
        // Sticky Header on Scroll
        var header = $('.header');
        var headerHeight = header.outerHeight();
        var scrollPosition = $(window).scrollTop();
        
        checkHeaderSticky(scrollPosition);
        
        $(window).on('scroll', function () {
            scrollPosition = $(window).scrollTop();
            checkHeaderSticky(scrollPosition);
        });
        
        function checkHeaderSticky(scrollPos) {
            if (scrollPos > headerHeight) {
                header.addClass('sticky-header');
                $('body').css('padding-top', headerHeight);
            } else {
                header.removeClass('sticky-header');
                $('body').css('padding-top', 0);
            }
        }
        
        // Mobile Menu Toggle
        $('.navbar-toggler').on('click', function () {
            $(this).toggleClass('active');
        });
        
        // Comment Reply Functionality
        $('.reply-btn').on('click', function (e) {
            e.preventDefault();
            var commentId = $(this).data('comment-id');
            $('#parent_id').val(commentId);
            
            // Smooth scroll to comment form
            $('html, body').animate({
                scrollTop: $('.comment-form').offset().top - 100
            }, 500);
            
            // Focus on comment textarea
            $('#id_content').focus();
        });
        
        // Form Validation
        (function () {
            'use strict'
            var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        form.classList.add('was-validated')
                    }, false)
                })
        })();
        
        // Animate Elements on Scroll
        function animateElementsOnScroll() {
            $('.animate-on-scroll').each(function () {
                var elementPosition = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                var windowHeight = $(window).height();
                
                if (elementPosition < topOfWindow + windowHeight - 50) {
                    $(this).addClass('animated');
                }
            });
        }
        
        // Run on initial load
        animateElementsOnScroll();
        
        // Run on scroll
        $(window).scroll(function () {
            animateElementsOnScroll();
        });
        
        // Newsletter Form AJAX Submission
        $('.newsletter-form').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var formMessages = form.find('.form-message');
            
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form.serialize(),
                success: function (response) {
                    if (response.success) {
                        formMessages.html('<div class="alert alert-success">Thank you for subscribing!</div>');
                        form[0].reset();
                    } else {
                        let errorMsg = '';
                        for (const [key, value] of Object.entries(response.errors)) {
                            errorMsg += `${value.join(', ')}<br>`;
                        }
                        formMessages.html(`<div class="alert alert-danger">${errorMsg}</div>`);
                    }
                },
                error: function () {
                    formMessages.html('<div class="alert alert-danger">An error occurred. Please try again.</div>');
                }
            });
        });
        
        // Lazy Loading Images
        var lazyLoadImages = function () {
            var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
            
            if ('IntersectionObserver' in window) {
                let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove('lazy');
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
                
                lazyImages.forEach(function (lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            } else {
                // Fallback for browsers without IntersectionObserver support
                let active = false;
                
                const lazyLoad = function () {
                    if (active === false) {
                        active = true;
                        
                        setTimeout(function () {
                            lazyImages.forEach(function (lazyImage) {
                                if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== 'none') {
                                    lazyImage.src = lazyImage.dataset.src;
                                    lazyImage.classList.remove('lazy');
                                    
                                    lazyImages = lazyImages.filter(function (image) {
                                        return image !== lazyImage;
                                    });
                                    
                                    if (lazyImages.length === 0) {
                                        document.removeEventListener('scroll', lazyLoad);
                                        window.removeEventListener('resize', lazyLoad);
                                        window.removeEventListener('orientationchange', lazyLoad);
                                    }
                                }
                            });
                            
                            active = false;
                        }, 200);
                    }
                };
                
                document.addEventListener('scroll', lazyLoad);
                window.addEventListener('resize', lazyLoad);
                window.addEventListener('orientationchange', lazyLoad);
                lazyLoad();
            }
        };
        
        // Initialize lazy loading
        lazyLoadImages();
        
        // Search Form Toggle
        $('.search-toggle').on('click', function (e) {
            e.preventDefault();
            $('.search-form-wrapper').toggleClass('active');
            
            if ($('.search-form-wrapper').hasClass('active')) {
                $('.search-form-wrapper .form-control').focus();
            }
        });
        
        // Close search form when clicking outside
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.search-form-wrapper, .search-toggle').length) {
                $('.search-form-wrapper').removeClass('active');
            }
        });
        
        // Dropdown hover effect on desktop
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('.navbar .dropdown').hover(
                function () {
                    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
                },
                function () {
                    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
                }
            );
        }
        
        // Dynamic Year for Copyright
        $('.copyright-year').text(new Date().getFullYear());
        
        // Add Back to Top Button dynamically
        if (!$('#back-to-top').length) {
            $('body').append('<a id="back-to-top" href="#" class="btn btn-primary back-to-top" role="button"><i class="fas fa-arrow-up"></i></a>');
            $('#back-to-top').css({
                'position': 'fixed',
                'bottom': '20px',
                'right': '20px',
                'display': 'none',
                'z-index': '99',
                'width': '40px',
                'height': '40px',
                'text-align': 'center',
                'line-height': '40px',
                'border-radius': '50%',
                'padding': '0'
            });
        }
        
        // Social Share Buttons
        $('.social-share a').on('click', function(e) {
            e.preventDefault();
            
            var windowWidth = 600;
            var windowHeight = 400;
            var windowLeft = (screen.width - windowWidth) / 2;
            var windowTop = (screen.height - windowHeight) / 2;
            
            window.open(this.href, '', 'width=' + windowWidth + ',height=' + windowHeight + ',left=' + windowLeft + ',top=' + windowTop);
        });
        
        // Smooth scroll for in-page links
        $('a[href^="#"]:not([href="#"])').on('click', function(e) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
                return false;
            }
        });
        
        // Image lightbox for article content images
        if (typeof $.fn.magnificPopup !== 'undefined') {
            $('.content img').each(function() {
                var $this = $(this);
                if (!$this.parent().is('a')) {
                    $this.wrap('<a href="' + $this.attr('src') + '" class="image-link"></a>');
                }
            });
            
            $('.content .image-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out'
                }
            });
        }
        
        // Reading Progress Bar
        if ($('.article-content').length) {
            var progressBar = $('<div class="reading-progress-bar"></div>');
            $('body').append(progressBar);
            
            progressBar.css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'width': '0%',
                'height': '3px',
                'background': '#0056b3',
                'z-index': '9999',
                'transition': 'width 0.1s ease'
            });
            
            $(window).scroll(function() {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                progressBar.css('width', scrolled + '%');
            });
        }
        
        // Estimated Reading Time
        if ($('.article-content .content').length) {
            var text = $('.article-content .content').text();
            var words = text.trim().split(/\s+/).length;
            var readingTime = Math.ceil(words / 200); // Assuming 200 words per minute reading speed
            
            if ($('.reading-time').length) {
                $('.reading-time').text(readingTime + ' min read');
            } else {
                $('.article-meta').append('<div class="reading-time ms-4"><i class="far fa-clock me-1"></i> ' + readingTime + ' min read</div>');
            }
        }
        
        // Handle breaking news ticker auto-scrolling
        var tickerItems = $('.ticker-item');
        var tickerWidth = 0;
        
        tickerItems.each(function() {
            tickerWidth += $(this).outerWidth(true);
        });
        
        // Clone items if needed to ensure continuous scrolling
        if (tickerWidth < $('.ticker-wrapper').width() * 2) {
            tickerItems.clone().appendTo('.ticker');
        }
        
        // Category Filter Animation
        $('.category-filter .btn').on('click', function() {
            $('.category-filter .btn').removeClass('active');
            $(this).addClass('active');
            
            var filterValue = $(this).attr('data-filter');
            
            if (filterValue === '*') {
                $('.filtered-item').show(300);
            } else {
                $('.filtered-item').hide(300);
                $('.filtered-item' + filterValue).show(300);
            }
        });
    });
    
    // Window Load
    $(window).on('load', function () {
        // Hide preloader if exists
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }
    });
    
})(jQuery);