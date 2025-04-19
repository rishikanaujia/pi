/**
 * Python Institute Website JavaScript
 * Handles all interactive elements on the site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon between bars and X
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });
    }

    // Course Tab Filtering
    const courseTabs = document.querySelectorAll('.course-tab');
    const courseCards = document.querySelectorAll('.course-card');

    if (courseTabs.length > 0 && courseCards.length > 0) {
        courseTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                courseTabs.forEach(t => {
                    t.classList.remove('active');
                });
                tab.classList.add('active');

                const category = tab.getAttribute('data-tab');

                // Show all courses or filter by category
                if (category === 'all') {
                    courseCards.forEach(card => card.style.display = 'block');
                } else {
                    courseCards.forEach(card => {
                        const cardCategories = card.getAttribute('data-category')?.split(' ') || [];
                        if (cardCategories.includes(category)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }

    // Exam Info Tabs
    const examTabs = document.querySelectorAll('.exam-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (examTabs.length > 0 && tabPanes.length > 0) {
        examTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-tab');

                // Update active tab
                examTabs.forEach(t => {
                    t.classList.remove('active');
                });
                tab.classList.add('active');

                // Show target tab content
                tabPanes.forEach(pane => {
                    pane.classList.remove('active');
                    if (pane.id === targetId) {
                        pane.classList.add('active');
                    }
                });
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    // Toggle active class for clicked item
                    item.classList.toggle('active');

                    // Optional: Close other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                });
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when clicked
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }

                // Scroll to target
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Validation (Simple client-side validation)
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Perform validation checks
            let isValid = true;
            const formElements = this.elements;

            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];

                if (element.hasAttribute('required') && !element.value) {
                    isValid = false;

                    // Add error styles
                    element.style.borderColor = 'red';

                    // Remove error styles when user starts typing
                    element.addEventListener('input', function() {
                        this.style.borderColor = '';
                    }, { once: true });
                }
            }

            if (isValid) {
                // Form is valid - would normally submit to server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } else {
                alert('Please enter your email address.');
            }
        });
    }

    // Add animation effects on scroll (simple reveal animations)
    const animateElements = document.querySelectorAll('.feature-card, .reason-card, .course-card, .certification-card, .roadmap-item');

    if (animateElements.length > 0) {
        // Helper function to check if element is in viewport
        const isInViewport = function(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
                rect.bottom >= 0
            );
        };

        // Initial check on page load
        animateElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
            }
        });

        // Check on scroll
        window.addEventListener('scroll', () => {
            animateElements.forEach(element => {
                if (isInViewport(element) && !element.classList.contains('animated')) {
                    element.classList.add('animated');
                }
            });
        });
    }
});