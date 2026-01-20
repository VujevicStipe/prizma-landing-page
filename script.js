gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
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

gsap.from('.hero-grid', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.fromTo('.process-card',
    { opacity: 0, y: 40 },
    {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.process',
            start: 'top 80%',
            once: true
        }
    }
);

const mapContainer = document.getElementById('lottie-map');
if (mapContainer) {
    const animation = lottie.loadAnimation({
        container: mapContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie-repo.vercel.app/croatia-map-animation.json'
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
        console.log('Lottie width:', animation.animationData.w);
        console.log('Lottie height:', animation.animationData.h);
        console.log('Aspect ratio:', animation.animationData.w / animation.animationData.h);
        ScrollTrigger.refresh();
    });
}

const phoneContainer = document.getElementById('lottie-phone');

if (phoneContainer) {
    const phoneAnimation = lottie.loadAnimation({
        container: phoneContainer,
        renderer: 'svg',
        loop: true,          
        autoplay: false,
        path: 'https://lottie-repo.vercel.app/showreel-grid-prizma-app.json'
    });

    ScrollTrigger.create({
        trigger: '.app-grid',
        start: 'top 70%',
        delay: '1',
        once: true,
        onEnter: () => setTimeout(() => {
                phoneAnimation.play();
            }, 500)
    });
}

gsap.fromTo('.app-content',
    { opacity: 0, y: 40 },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.app-grid',
            start: 'top 70%',
            once: true
        }
    }
);

gsap.fromTo('.area-card',
    { opacity: 0, y: 20 },
    {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.areas-grid',
            start: 'top 75%',
            once: true
        }
    }
);

gsap.fromTo('.features-card',
    { opacity: 0, y: 40 },
    {
        opacity: 1,
        y: 0,
        duration: 0.6, 
        stagger: 0.15, 
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%', 
            once: true
        }
    }
);

document.querySelectorAll('.section-header').forEach(header => {
    gsap.fromTo(
        header.children,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%', 
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

const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button');
        const originalText = btn.textContent;
        
        btn.disabled = true;
        btn.textContent = 'Šaljem...';
        
        setTimeout(() => {
            btn.textContent = 'Poslano';
            btn.style.background = '#10B981';
            
            setTimeout(() => {
                this.reset();
                btn.disabled = false;
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);
        }, 1500);
    });
}

document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, { scale: 1.02, duration: 0.1 });
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
