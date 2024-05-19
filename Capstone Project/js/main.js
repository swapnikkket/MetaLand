// main.js
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Ensure loader is visible until content is fully loaded
    window.addEventListener('load', function() {
        loader.style.display = 'none';
        content.classList.remove('hidden');
    });

    // Scroll-triggered animations
    const faders = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    faders.forEach(fader => {
        observer.observe(fader);
    });
});
