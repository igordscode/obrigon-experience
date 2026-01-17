/* ========================================
   OBRIGON — Landing Page JavaScript
   GSAP Animations + Interactivity
   ======================================== */

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ============================================
// Custom Cursor
// ============================================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Cursor follows immediately
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    // Follower has more delay
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .collection-item, .worn-by-card');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('active');
    });
});

// ============================================
// Loader Animation
// ============================================
function initLoader() {
    const loader = document.getElementById('loader');
    const loaderLogo = document.querySelector('.loader-logo');
    const loaderText = document.querySelector('.loader-text');
    const loaderBar = document.querySelector('.loader-bar');
    const loaderProgress = document.querySelector('.loader-progress');

    const tl = gsap.timeline({
        onComplete: () => {
            // Hide loader and start hero animations
            gsap.to(loader, {
                yPercent: -100,
                duration: 0.8,
                ease: 'power4.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    initHeroAnimations();
                }
            });
        }
    });

    tl.to(loaderLogo, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    })
        .to(loaderText, {
            opacity: 1,
            duration: 0.4,
            ease: 'power3.out'
        }, '-=0.2')
        .to(loaderBar, {
            opacity: 1,
            duration: 0.3
        }, '-=0.2')
        .to(loaderProgress, {
            width: '100%',
            duration: 1.5,
            ease: 'power2.inOut'
        })
        .to([loaderLogo, loaderText, loaderBar], {
            opacity: 0,
            duration: 0.3
        });
}

// ============================================
// Hero Animations
// ============================================
function initHeroAnimations() {
    const heroTl = gsap.timeline();

    // Animate eyebrow
    heroTl.to('.hero-eyebrow', {
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
    })

        // Animate title words
        .to('.hero-title-word', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power4.out'
        }, '-=0.3')

        // Animate subtitle
        .to('.hero-subtitle', {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')

        // Animate CTA buttons
        .to('.hero-cta', {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.3')

        // Animate scroll indicator
        .to('.hero-scroll', {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.2');
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const nav = document.getElementById('nav');

    ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => {
            if (self.direction === 1) {
                nav.classList.add('scrolled');
            } else if (window.scrollY < 80) {
                nav.classList.remove('scrolled');
            }
        }
    });
}

// ============================================
// Manifesto Section Animations
// ============================================
function initManifestoAnimations() {
    // Header animation
    gsap.from('.manifesto-header', {
        scrollTrigger: {
            trigger: '.manifesto-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Quote animation
    gsap.from('.manifesto-quote', {
        scrollTrigger: {
            trigger: '.manifesto-quote',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Body paragraphs animation
    gsap.from('.manifesto-body p', {
        scrollTrigger: {
            trigger: '.manifesto-body',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Image parallax
    gsap.to('.manifesto-image', {
        scrollTrigger: {
            trigger: '.manifesto-visual',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        yPercent: -15,
        ease: 'none'
    });
}

// ============================================
// Worn By Section Animations
// ============================================
function initWornByAnimations() {
    // Header
    gsap.from('.worn-by-header', {
        scrollTrigger: {
            trigger: '.worn-by-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Cards stagger animation
    gsap.from('.worn-by-card', {
        scrollTrigger: {
            trigger: '.worn-by-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
    });
}

// ============================================
// Collection Section Animations
// ============================================
function initCollectionAnimations() {
    // Header
    gsap.from('.collection-header', {
        scrollTrigger: {
            trigger: '.collection-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Categories
    gsap.from('.collection-categories', {
        scrollTrigger: {
            trigger: '.collection-categories',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
    });

    // Items stagger
    gsap.from('.collection-item', {
        scrollTrigger: {
            trigger: '.collection-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        stagger: {
            each: 0.1,
            grid: 'auto',
            from: 'start'
        },
        duration: 0.8,
        ease: 'power3.out'
    });
}

// ============================================
// Footer CTA Animations
// ============================================
function initFooterCTAAnimations() {
    gsap.from('.footer-cta-title', {
        scrollTrigger: {
            trigger: '.footer-cta',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.footer-cta .btn', {
        scrollTrigger: {
            trigger: '.footer-cta',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// ============================================
// Collection Category Filter
// ============================================
function initCollectionFilter() {
    const buttons = document.querySelectorAll('.collection-cat');
    const items = document.querySelectorAll('.collection-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            items.forEach(item => {
                const itemCategory = item.dataset.category;

                if (category === 'all' || itemCategory === category) {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: 'power3.out'
                    });
                    item.style.display = 'block';
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.3,
                        ease: 'power3.in',
                        onComplete: () => {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// ============================================
// Smooth scroll for anchor links
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.2
                });
            }
        });
    });
}

// ============================================
// Parallax for floating elements
// ============================================
function initParallax() {
    gsap.to('.hero-float-1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -200,
        ease: 'none'
    });

    gsap.to('.hero-float-2', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -150,
        ease: 'none'
    });

    gsap.to('.hero-float-3', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        ease: 'none'
    });
}

// ============================================
// Initialize everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNavigation();
    initSmoothScroll();
    initParallax();
    initManifestoAnimations();
    initWornByAnimations();
    initCollectionAnimations();
    initFooterCTAAnimations();
    initCollectionFilter();
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
