// ========================================
// OBRIGON v2 — UNHEIMLICH
// Main JavaScript (GSAP + Lenis + Interactions)
// ========================================

console.log('🖤 OBRIGON v2 — Entering the ritual...');

// ========================================
// LENIS SMOOTH SCROLL
// ========================================

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ========================================
// GSAP + SCROLLTRIGGER SETUP
// ========================================

gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// ========================================
// CUSTOM CURSOR (Eye)
// ========================================

const cursorEye = document.querySelector('.cursor-eye');
const cursorPupil = document.querySelector('.cursor-pupil');

// Follow mouse
document.addEventListener('mousemove', (e) => {
    gsap.to(cursorEye, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .altar-pedestal, .altar-product');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorEye.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        cursorEye.classList.remove('hover');
    });
});

// ========================================
// SESSÃO 1: O ALTAR
// ========================================

// Parallax no produto (mouse move)
const altarProduct = document.querySelector('.altar-product');

if (altarProduct) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;

        gsap.to(altarProduct, {
            x: x,
            y: y,
            duration: 1.5,
            ease: 'power2.out'
        });
    });
}

// Pedestal CTA (click to scroll)
const altarPedestal = document.querySelector('.altar-pedestal');

if (altarPedestal) {
    altarPedestal.addEventListener('click', () => {
        lenis.scrollTo('#procession', {
            duration: 2,
            easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        });
    });
}

// Scroll indicator (hide on scroll)
gsap.to('.altar-scroll', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.altar',
        start: 'top top',
        end: '+=100',
        scrub: true
    }
});

// ========================================
// SESSÃO 2: A PROCISSÃO (Placeholder)
// ========================================

// TODO: Implementar scroll horizontal

// ========================================
// PERFORMANCE MONITORING
// ========================================

if (typeof performance !== 'undefined') {
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page load time: ${pageLoadTime}ms`);
    });
}

console.log('✅ OBRIGON v2 initialized');
