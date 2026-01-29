gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const ticker = document.querySelector('.ticker-track');
if (ticker) {
    const items = Array.from(ticker.children);
    items.forEach(item => {
        ticker.appendChild(item.cloneNode(true));
    });
    items.forEach(item => {
        ticker.appendChild(item.cloneNode(true));
    });
    
    const singleWidth = ticker.scrollWidth / 3;
    
    gsap.set(ticker, { x: 0 });
    gsap.to(ticker, {
        x: -singleWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
            gsap.set(ticker, { x: 0 });
        }
    });
}

gsap.from('.hero-content', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.hero-image', {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.process-grid',
        start: 'top 80%'
    }
});

gsap.utils.toArray('.process-card').forEach((card, i) => {
    gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.process-grid',
                start: 'top 80%',
                once: true
            }
        }
    );
});

gsap.utils.toArray('.feature-item').forEach((item, i) => {
    gsap.fromTo(item,
        { opacity: 0, x: 40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                once: true
            }
        }
    );
});

gsap.utils.toArray('.area-item').forEach((item, i) => {
    gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.areas-list',
                start: 'top 75%',
                once: true
            }
        }
    );
});

const mapContainer = document.getElementById('lottie-map');
if (mapContainer) {
    const animation = lottie.loadAnimation({
        container: mapContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie-repo.vercel.app/whole-croatia-animation.json'
    });
    ScrollTrigger.create({
        trigger: '.map-container',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            animation.play();
        }
    });

    animation.addEventListener('DOMLoaded', () => {
        ScrollTrigger.refresh();
    });
}

const imageContainer = document.getElementById('image');
if(imageContainer) {
    const imageAnimation = lottie
}

// const phoneContainer = document.getElementById('lottie-phone');
// if (phoneContainer) {
//     const phoneAnimation = lottie.loadAnimation({
//         container: phoneContainer,
//         renderer: 'svg',
//         loop: true,
//         autoplay: false,
//         path: 'https://lottie-repo.vercel.app/showreel-grid-prizma-app.json'
//     });

//     ScrollTrigger.create({
//         trigger: '.app-grid',
//         start: 'top 70%',
//         once: true,
//         onEnter: () => {
//             setTimeout(() => {
//                 phoneAnimation.play();
//             }, 500);
//         }
//     });
// }

// gsap.fromTo('.app-content',
//     { opacity: 0, y: 40 },
//     {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//         scrollTrigger: {
//             trigger: '.app-grid',
//             start: 'top 70%',
//             once: true
//         }
//     }
// );

gsap.utils.toArray('.section-header').forEach(header => {
    gsap.fromTo(header.children,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                once: true
            }
        }
    );
});

gsap.fromTo('.contact-grid',
    { opacity: 0, y: 40 },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 80%',
            once: true
        }
    }
);
emailjs.init("TjBDVHLjkgMXbSlVN");

const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Šaljem...';
        btn.disabled = true;
        
        emailjs.sendForm('service_2bhshaa', 'template_azi1nvl', this)
            .then(() => {
                return emailjs.sendForm('service_2bhshaa', 'template_2eftgtz', this);
            })
            .then(() => {
                btn.textContent = 'Poslano ✓';
                btn.style.background = '#10B981';
                this.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2000);
            })
            .catch((error) => {
                alert('Greška: ' + error.text);
                btn.textContent = originalText;
                btn.disabled = false;
            });
    });
}

document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, { scale: 1.01, duration: 0.2 });
    });
    btn.addEventListener('mouseleave', function() {
        gsap.to(this, { scale: 1, duration: 0.3 });
    });
});

window.addEventListener('load', () => {
    gsap.from('body', {
        opacity: 0,
        duration: 0.4
    });
    
    ScrollTrigger.refresh();
});

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
