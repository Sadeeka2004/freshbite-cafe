// Smooth scrolling for buttons/links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero text fade-in animation
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero h1');
    const heroP = document.querySelector('.hero p');
    hero.style.opacity = 0;
    heroP.style.opacity = 0;

    setTimeout(() => {
        hero.style.transition = 'opacity 2s';
        hero.style.opacity = 1;
        heroP.style.transition = 'opacity 2s';
        heroP.style.opacity = 1;
    }, 500);
});