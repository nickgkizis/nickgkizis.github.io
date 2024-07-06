document.addEventListener('scroll', function() {
    const titles = document.querySelectorAll('.title');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const fadeStart = maxScroll / 4;

    titles.forEach(title => {
        const scrollEffect = scrollPosition / 10;
        const opacityEffect = 2 - scrollPosition / (fadeStart * 2);

        if (title.classList.contains('t2') || title.classList.contains('t4')) {
            title.style.transform = `translateX(${scrollEffect}px)`;
        } else if (title.classList.contains('t1') || title.classList.contains('t3')) {
            title.style.transform = `translateX(-${scrollEffect}px)`;
        }

        title.style.opacity = opacityEffect;
    });
});
// JavaScript function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
