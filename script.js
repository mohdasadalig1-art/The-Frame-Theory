// ========================================
// THE FRAME THEORY — MAIN JAVASCRIPT
// ========================================


// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    '.intro, .work, .services, .service-detail, .about, .cta, .project, .service'
);


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('reveal-visible');

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.classList.add('reveal-element');

    revealObserver.observe(element);

});
// ========================================
// CUSTOM CURSOR
// ========================================

const cursorDot = document.createElement('div');
const cursorRing = document.createElement('div');

cursorDot.className = 'cursor-dot';
cursorRing.className = 'cursor-ring';

document.body.appendChild(cursorDot);
document.body.appendChild(cursorRing);

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', function (e) {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';

});

function animateCursor() {

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';

    requestAnimationFrame(animateCursor);

}

animateCursor();


// Cursor hover effect

const cursorTargets = document.querySelectorAll(
    'a, button, .project, .service'
);

cursorTargets.forEach(function (element) {

    element.addEventListener('mouseenter', function () {
        cursorRing.classList.add('cursor-hover');
    });

    element.addEventListener('mouseleave', function () {
        cursorRing.classList.remove('cursor-hover');
    });

});
// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.navbar nav');

if (menuToggle && mobileNav) {

    menuToggle.addEventListener('click', function () {

        mobileNav.classList.toggle('mobile-menu-open');
        menuToggle.classList.toggle('menu-open');

    });

    // Close menu when a link is clicked

    mobileNav.querySelectorAll('a').forEach(function (link) {

        link.addEventListener('click', function () {

            mobileNav.classList.remove('mobile-menu-open');
            menuToggle.classList.remove('menu-open');

        });

    });

}