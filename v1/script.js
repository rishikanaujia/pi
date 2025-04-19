/*
* Python Institute Website - Optimized CSS
* Using reusable utility classes and component-based approach
*/

/* =========== CSS VARIABLES =========== */
:root {
    /* Main Colors */
    --primary-color: #4584b6;
    --primary-dark: #3a71a1;
    --secondary-color: #ffde57;
    --secondary-dark: #ffd633;
    --text-dark: #333333;
    --text-light: #ffffff;
    --gray-dark: #333333;
    --gray-medium: #666666;
    --gray-light: #f5f5f5;
    --accent-color: #ffde57;

    /* Level Colors */
    --beginner-color: #4caf50;
    --intermediate-color: #2196f3;
    --advanced-color: #9c27b0;
    --expert-color: #f44336;

    /* Fonts */
    --font-heading: 'Roboto', sans-serif;
    --font-body: 'Open Sans', sans-serif;

    /* Spacing */
    --spacing-xs: 0.25rem;  /* 4px */
    --spacing-sm: 0.5rem;   /* 8px */
    --spacing-md: 1rem;     /* 16px */
    --spacing-lg: 1.5rem;   /* 24px */
    --spacing-xl: 2rem;     /* 32px */
    --spacing-xxl: 3rem;    /* 48px */

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 10px;
    --radius-circle: 50%;

    /* Box Shadow */
    --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 5px 15px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.1);

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
}

/* =========== RESET & BASE STYLES =========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    line-height: 1.6;
    color: var(--text-dark);
    background-color: #ffffff;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    margin-bottom: var(--spacing-md);
    font-weight: 700;
    line-height: 1.2;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.1rem; }
h6 { font-size: 1rem; }

p { margin-bottom: var(--spacing-md); }

a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-normal);
}

a:hover { color: var(--primary-dark); }

img {
    max-width: 100%;
    height: auto;
}

ul, ol {
    margin-left: 1.5rem;
    margin-bottom: var(--spacing-md);
}

li { margin-bottom: var(--spacing-sm); }

/* =========== UTILITY CLASSES =========== */

/* Container */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Sections */
section { padding: var(--spacing-xxl) 0; }

/* Text Utilities */
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-left { text-align: left; }

.text-primary { color: var(--primary-color); }
.text-secondary { color: var(--secondary-color); }
.text-light { color: var(--text-light); }
.text-dark { color: var(--text-dark); }
.text-gray { color: var(--gray-medium); }

.fw-normal { font-weight: normal; }
.fw-bold { font-weight: 700; }
.fw-medium { font-weight: 500; }

.fs-xs { font-size: 0.8rem; }
.fs-sm { font-size: 0.9rem; }
.fs-md { font-size: 1rem; }
.fs-lg { font-size: 1.2rem; }
.fs-xl { font-size: 1.5rem; }
.fs-xxl { font-size: 2rem; }

/* Margin Utilities */
.m-0 { margin: 0; }
.mb-0 { margin-bottom: 0; }
.mb-sm { margin-bottom: var(--spacing-sm); }
.mb-md { margin-bottom: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }
.mb-xl { margin-bottom: var(--spacing-xl); }
.mb-xxl { margin-bottom: var(--spacing-xxl); }

.mt-0 { margin-top: 0; }
.mt-sm { margin-top: var(--spacing-sm); }
.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }
.mt-xl { margin-top: var(--spacing-xl); }
.mt-xxl { margin-top: var(--spacing-xxl); }

.my-auto { margin-top: auto; margin-bottom: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Padding Utilities */
.p-0 { padding: 0; }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }

.px-sm { padding-left: var(--spacing-sm); padding-right: var(--spacing-sm); }
.px-md { padding-left: var(--spacing-md); padding-right: var(--spacing-md); }
.px-lg { padding-left: var(--spacing-lg); padding-right: var(--spacing-lg); }
.px-xl { padding-left: var(--spacing-xl); padding-right: var(--spacing-xl); }

.py-sm { padding-top: var(--spacing-sm); padding-bottom: var(--spacing-sm); }
.py-md { padding-top: var(--spacing-md); padding-bottom: var(--spacing-md); }
.py-lg { padding-top: var(--spacing-lg); padding-bottom: var(--spacing-lg); }
.py-xl { padding-top: var(--spacing-xl); padding-bottom: var(--spacing-xl); }

/* Display Utilities */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-inline { display: inline; }
.d-inline-block { display: inline-block; }

/* Flex Utilities */
.flex-column { flex-direction: column; }
.flex-row { flex-direction: row; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-end { justify-content: flex-end; }
.align-center { align-items: center; }
.align-start { align-items: flex-start; }
.align-end { align-items: flex-end; }
.flex-wrap { flex-wrap: wrap; }
.flex-grow-1 { flex-grow: 1; }
.flex-shrink-0 { flex-shrink: 0; }
.gap-sm { gap: var(--spacing-sm); }
.gap-md { gap: var(--spacing-md); }
.gap-lg { gap: var(--spacing-lg); }

/* Background Colors */
.bg-white { background-color: #ffffff; }
.bg-light { background-color: var(--gray-light); }
.bg-primary { background-color: var(--primary-color); }
.bg-secondary { background-color: var(--secondary-color); }
.bg-dark { background-color: var(--gray-dark); }

/* Border Utilities */
.border { border: 1px solid #e0e0e0; }
.border-top { border-top: 1px solid #e0e0e0; }
.border-bottom { border-bottom: 1px solid #e0e0e0; }
.border-0 { border: none; }

/* Border Radius */
.rounded-sm { border-radius: var(--radius-sm); }
.rounded-md { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-circle { border-radius: var(--radius-circle); }

/* Shadow Utilities */
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }

/* Width/Height Utilities */
.w-100 { width: 100%; }
.w-50 { width: 50%; }
.w-auto { width: auto; }
.h-100 { height: 100%; }
.h-auto { height: auto; }

/* Positioning */
.position-relative { position: relative; }
.position-absolute { position: absolute; }
.position-fixed { position: fixed; }
.position-sticky { position: sticky; }

/* Overflow */
.overflow-hidden { overflow: hidden; }
.overflow-auto { overflow: auto; }

/* Visibility */
.visible { visibility: visible; }
.invisible { visibility: hidden; }

/* =========== COMPONENT CLASSES =========== */

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 24px;
    font-weight: 600;
    border-radius: var(--radius-sm);
    cursor: pointer;
    text-align: center;
    transition: all var(--transition-normal);
    border: none;
    font-family: var(--font-body);
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--text-light);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
    color: var(--text-light);
}

.btn-secondary {
    background-color: #ffffff;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: #f5f5f5;
}

.btn-light {
    background-color: #ffffff;
    color: var(--primary-color);
}

.btn-light:hover {
    background-color: #f5f5f5;
}

.btn-accent {
    background-color: var(--accent-color);
    color: var(--gray-dark);
}

.btn-accent:hover {
    background-color: var(--secondary-dark);
}

.btn-block {
    display: block;
    width: 100%;
}

.btn-outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-outline:hover {
    background-color: #f5f5f5;
}

.btn-sm {
    padding: 8px 16px;
    font-size: 0.9rem;
}

.btn-lg {
    padding: 16px 32px;
    font-size: 1.1rem;
}

/* Cards */
.card {
    background-color: #ffffff;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.card-header {
    padding: var(--spacing-lg);
    border-bottom: 1px solid #e0e0e0;
}

.card-body {
    padding: var(--spacing-lg);
}

.card-footer {
    padding: var(--spacing-lg);
    border-top: 1px solid #e0e0e0;
}

/* Level Indicators */
.level {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    text-transform: uppercase;
}

.level-beginner {
    background-color: rgba(76, 175, 80, 0.1);
    color: var(--beginner-color);
}

.level-intermediate {
    background-color: rgba(33, 150, 243, 0.1);
    color: var(--intermediate-color);
}

.level-advanced {
    background-color: rgba(156, 39, 176, 0.1);
    color: var(--advanced-color);
}

.level-expert {
    background-color: rgba(244, 67, 54, 0.1);
    color: var(--expert-color);
}

/* Icons */
.icon-circle {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-circle);
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
}

.icon-circle i {
    font-size: 1.5rem;
    color: white;
}

.icon-sm {
    width: 40px;
    height: 40px;
}

.icon-lg {
    width: 80px;
    height: 80px;
}

.icon-sm i {
    font-size: 1.2rem;
}

.icon-lg i {
    font-size: 2rem;
}

/* Lists */
.list-unstyled {
    list-style: none;
    margin-left: 0;
}

.list-check li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 8px;
}

.list-check li:before {
    content: '\f00c';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    color: var(--primary-color);
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
}

.section-header h2 {
    color: var(--primary-color);
    font-size: 2.2rem;
    margin-bottom: var(--spacing-sm);
}

.section-header p {
    max-width: 700px;
    margin: 0 auto var(--spacing-md);
    color: var(--gray-medium);
}

.section-divider {
    width: 80px;
    height: 4px;
    background-color: var(--secondary-color);
    margin: 0 auto var(--spacing-md);
}

/* Grid System */
.grid {
    display: grid;
    gap: var(--spacing-lg);
}

.grid-2 {
    grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
    grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
    grid-template-columns: repeat(4, 1fr);
}

.grid-auto-fill {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

/* Tabs */
.tabs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--spacing-lg);
}

.tab {
    padding: var(--spacing-sm) var(--spacing-lg);
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-weight: 500;
    transition: all var(--transition-normal);
}

.tab.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Forms */
.form-group {
    margin-bottom: var(--spacing-md);
}

.form-group label {
    display: block;
    margin-bottom: var(--spacing-sm);
    font-weight: 500;
}

.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(69, 132, 182, 0.2);
}

.form-row {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

/* CTA Banners */
.cta-banner {
    text-align: center;
    padding: var(--spacing-xl) 0;
}

.cta-banner h3 {
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
}

/* Accordions */
.accordion-item {
    margin-bottom: var(--spacing-md);
    border: 1px solid #e0e0e0;
    border-radius: var(--radius-md);
    overflow: hidden;
}

.accordion-header {
    padding: var(--spacing-md);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
}

.accordion-header h4 {
    margin-bottom: 0;
}

.accordion-icon {
    transition: transform var(--transition-normal);
}

.accordion-content {
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-normal), padding var(--transition-normal);
}

.accordion-item.active .accordion-icon {
    transform: rotate(180deg);
}

.accordion-item.active .accordion-content {
    padding: var(--spacing-md);
    max-height: 500px;
}

/* Badges */
.badge {
    display: inline-block;
    padding: 0.25em 0.5em;
    font-size: 0.75em;
    font-weight: 700;
    border-radius: var(--radius-sm);
    line-height: 1;
}

.badge-primary {
    background-color: var(--primary-color);
    color: white;
}

.badge-secondary {
    background-color: var(--secondary-color);
    color: var(--gray-dark);
}

/* Alerts */
.alert {
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
}

.alert-primary {
    background-color: rgba(69, 132, 182, 0.1);
    color: var(--primary-color);
    border: 1px solid rgba(69, 132, 182, 0.2);
}

.alert-warning {
    background-color: rgba(255, 222, 87, 0.1);
    color: var(--gray-dark);
    border: 1px solid rgba(255, 222, 87, 0.2);
}

/* Testimonials */
.testimonial {
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    background-color: #ffffff;
    box-shadow: var(--shadow-md);
}

.testimonial-content {
    font-style: italic;
    margin-bottom: var(--spacing-md);
}

.testimonial-author {
    display: flex;
    align-items: center;
}

.testimonial-avatar {
    width: 50px;
    height: 50px;
    border-radius: var(--radius-circle);
    margin-right: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: white;
}

/* =========== SPECIFIC COMPONENTS =========== */

/* Header */
#header {
    background-color: #ffffff;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-links ul {
    display: flex;
    list-style: none;
    margin: 0;
}

.nav-links li {
    margin: 0 15px;
}

.nav-link {
    color: var(--gray-dark);
    font-weight: 500;
    padding: 10px 0;
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);
    transition: width var(--transition-normal);
}

.nav-link:hover:after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    padding: 80px 0;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
}

.hero-text {
    flex: 1;
    padding-right: 30px;
}

.hero-text h1 {
    color: var(--primary-color);
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.python-logo {
    width: 250px;
    height: 250px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/* Footer */
#footer {
    background-color: var(--gray-dark);
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-about {
    margin-right: 40px;
}

.footer-logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.footer-links h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-links h3:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

/* Back to Top Button */
#back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-sm);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
    z-index: 99;
}

#back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

#back-to-top:hover {
    background-color: var(--primary-dark);
    transform: translateY(-5px);
}

/* =========== RESPONSIVE STYLES =========== */
@media (max-width: 1024px) {
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.8rem; }

    .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    .footer-about {
        grid-column: span 2;
        margin-right: 0;
        margin-bottom: 20px;
    }

    .grid-4 {
        grid-template-columns: repeat(2, 1fr);
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 768px) {
    section {
        padding: 60px 0;
    }

    .nav-links {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .hero-content {
        flex-direction: column;
    }

    .hero-text {
        order: 2;
        padding-right: 0;
        text-align: center;
    }

    .hero-image {
        order: 1;
        margin-bottom: 30px;
    }

    .grid-2, .grid-3, .grid-4 {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    .footer-about {
        grid-column: span 1;
    }

    .form-row {
        flex-direction: column;
    }
}

@media (max-width: 576px) {
    .btn {
        width: 100%;
    }

    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
}