// ========================================
// THE FRAME THEORY — MAIN JAVASCRIPT
// ========================================


// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

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

    if (!navbar) {
        return;
    }

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
    '.work, .services, .about, .project, .service, .contact-section'
);


if ('IntersectionObserver' in window) {

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

}



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



// ========================================
// CURSOR HOVER EFFECT
// ========================================

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



// ========================================
// THE FRAME THEORY — WHATSAPP INQUIRY
// ========================================

const contactForm = document.querySelector('.contact-form');


if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();


        // ====================================
        // GET FORM VALUES
        // ====================================

        const name =
            document.getElementById('name').value.trim();

        const email =
            document.getElementById('email').value.trim();

        const company =
            document.getElementById('company').value.trim();

        const service =
            document.getElementById('service').value;

        const budget =
            document.getElementById('budget').value;

        const message =
            document.getElementById('message').value.trim();



        // ====================================
        // VALIDATION
        // ====================================

        if (!name || !email || !service || !message) {

            alert(
                'Please complete all required fields before sending your inquiry.'
            );

            return;

        }



        // ====================================
        // WHATSAPP NUMBER
        // ====================================

        const whatsappNumber = '919927259910';



        // ====================================
        // WHATSAPP MESSAGE
        // ====================================

        const whatsappMessage =
`THE FRAME THEORY
NEW PROJECT INQUIRY
━━━━━━━━━━━━━━━━━━━━

CLIENT DETAILS

Name:
${name}

Email:
${email}

Company / Brand:
${company || 'Not provided'}

PROJECT DETAILS

Service Required:
${service}

Approximate Budget:
${budget || 'Not specified'}

Project Brief:
${message}

━━━━━━━━━━━━━━━━━━━━

Submitted via THE FRAME THEORY website.

Looking forward to discussing the project.

THE FRAME THEORY
Creative Agency`;



        // ====================================
        // CREATE WHATSAPP URL
        // ====================================

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;



        // ====================================
        // SUBMIT BUTTON
        // ====================================

        const submitButton =
            contactForm.querySelector('.contact-submit');


        if (submitButton) {

            submitButton.innerHTML =
                'OPENING WHATSAPP...';

            submitButton.disabled = true;

        }



        // ====================================
        // OPEN WHATSAPP
        // ====================================

        window.open(
            whatsappURL,
            '_blank'
        );



        // ====================================
        // RESET BUTTON
        // ====================================

        setTimeout(function () {

            if (submitButton) {

                submitButton.innerHTML =
                    'SEND INQUIRY →';

                submitButton.disabled = false;

            }

        }, 2000);

    });

}