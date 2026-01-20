// ========================================
// OBRIGON v2 — UNHEIMLICH
// Main JavaScript (GSAP + Lenis + Interactions)
// ========================================

console.log('🖤 OBRIGON v2 — Entering the ritual...');

// ========================================
// LOADER
// ========================================

const loader = document.querySelector('.loader');

// Hide loader after 3 seconds
setTimeout(() => {
    if (loader) {
        loader.classList.add('hidden');
    }
}, 3000);

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

// Track mouse position and velocity
let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let velocityX = 0;
let velocityY = 0;
let isMoving = false;
let moveTimeout;

// Follow mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move eye to cursor position
    gsap.to(cursorEye, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: 'power2.out'
    });

    // Calculate velocity (direction and speed)
    velocityX = mouseX - lastMouseX;
    velocityY = mouseY - lastMouseY;

    // Limit pupil movement (max 15px from center for more dramatic effect)
    const maxMove = 15;
    const pupilX = Math.max(-maxMove, Math.min(maxMove, velocityX * 1.5));
    const pupilY = Math.max(-maxMove, Math.min(maxMove, velocityY * 1.5));

    // Move pupil based on mouse direction
    gsap.to(cursorPupil, {
        x: pupilX,
        y: pupilY,
        duration: 0.1,
        ease: 'power2.out'
    });

    // Update last position
    lastMouseX = mouseX;
    lastMouseY = mouseY;

    // Mark as moving
    isMoving = true;

    // Reset moving state after 100ms of no movement
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
        isMoving = false;
        // Return pupil to center when stopped
        gsap.to(cursorPupil, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    }, 100);
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
// SESSÃO 2: A PROCISSÃO (Scroll Horizontal)
// ========================================

const processionSection = document.querySelector('.procession');
const processionTrack = document.querySelector('.procession-track');

if (processionSection && processionTrack) {
    gsap.to(processionTrack, {
        x: () => -(processionTrack.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
            trigger: processionSection,
            pin: true,
            scrub: 1,
            end: () => `+=${processionTrack.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true
        }
    });

    // Fade in items
    gsap.utils.toArray('.procession-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
                trigger: item,
                containerAnimation: gsap.getById(processionTrack),
                start: 'left right',
                end: 'left center',
                scrub: true
            }
        });
    });

    // CTA buttons (link to Shopify)
    document.querySelectorAll('.procession-cta').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.closest('.procession-item').dataset.product;
            console.log(`🛒 Invoking product: ${product}`);
            // window.location.href = `https://obrigon.com/products/${product}`;
        });
    });
}

// ========================================
// SESSÃO 3: OS INICIADOS
// ========================================

// Scroll reveal
gsap.utils.toArray('.initiated-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true
        }
    });
});

// ========================================
// SESSÃO 4: A MEMBRANA (Manifesto)
// ========================================

const membraneBg = document.querySelector('.membrane-bg');

if (membraneBg) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        membraneBg.style.setProperty('--mouse-x', `${x * 100}%`);
        membraneBg.style.setProperty('--mouse-y', `${y * 100}%`);
    });
}

// Text reveal
gsap.from('.membrane-quote', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: '.membrane-quote',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
    }
});

gsap.from('.membrane-text p', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.membrane-text',
        start: 'top 70%',
        end: 'top 40%',
        scrub: true
    }
});

// ========================================
// SESSÃO 5: A ALUCINAÇÃO (Editorial)
// ========================================

// Glitch effect on scroll
const hallucinationGlitch = document.querySelector('.hallucination-glitch');

if (hallucinationGlitch) {
    ScrollTrigger.create({
        trigger: '.hallucination',
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
            const progress = self.progress;
            const glitchIntensity = Math.sin(progress * 20) * 0.3;
            hallucinationGlitch.style.opacity = Math.abs(glitchIntensity);
        }
    });
}

// ========================================
// SESSÃO 6: ANATOMIA DO ARTEFATO
// ========================================

const ritualLight = document.querySelector('.ritual-light');
const anatomyHotspots = document.querySelectorAll('.anatomy-hotspot');

// Ritual light follows mouse
if (ritualLight) {
    document.addEventListener('mousemove', (e) => {
        ritualLight.style.left = e.clientX - 150 + 'px';
        ritualLight.style.top = e.clientY - 150 + 'px';
    });
}

// Hotspot interactions
anatomyHotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', () => {
        cursorEye.classList.add('hover');
    });

    hotspot.addEventListener('mouseleave', () => {
        cursorEye.classList.remove('hover');
    });
});

// Image reveal animation
gsap.from('.anatomy-image', {
    opacity: 0,
    scale: 0.9,
    scrollTrigger: {
        trigger: '.anatomy-image',
        start: 'top 70%',
        end: 'top 40%',
        scrub: true
    }
});

// Hotspots appear sequentially
anatomyHotspots.forEach((hotspot, i) => {
    gsap.from(hotspot, {
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: '.anatomy',
            start: 'top 50%',
            end: 'top 30%',
            scrub: true
        },
        delay: i * 0.1
    });
});

// ========================================
// SESSÃO 7: O VAZIO (Footer)
// ========================================

// Form handling
const voidForm = document.querySelector('.void-form');

if (voidForm) {
    voidForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('.pact-input').value;
        console.log(`📧 Pact sealed with: ${email}`);
        alert('PACTO SELADO 🖤');
        e.target.reset();
    });
}

// Resurrect button (scroll to top)
const resurrectBtn = document.querySelector('.void-resurrect');

if (resurrectBtn) {
    resurrectBtn.addEventListener('click', () => {
        lenis.scrollTo(0, {
            duration: 3,
            easing: (t) => 1 - Math.pow(1 - t, 4)
        });
    });
}

// Glitch effect on social links
document.querySelectorAll('.void-social').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const rune = e.currentTarget.querySelector('.social-rune');
        gsap.to(rune, {
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

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
