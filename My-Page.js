document.addEventListener('scroll', function() {
    const titles = document.querySelectorAll('.title');
    const boxes = document.querySelectorAll('.box');
    const title1 = document.getElementById('title1');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const getToKnowMeContainer = document.getElementById('get-to-know-me');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    titles.forEach(title => {
        const titlePosition = title.getBoundingClientRect().top + scrollPosition;
        const fadeStart = titlePosition - windowHeight / 4;
        const fadeEnd = titlePosition + windowHeight / 4;
        const scrollEffect = scrollPosition / 10;

        if (title.classList.contains('t2') || title.classList.contains('t4')) {
            title.style.transform = `translateX(${scrollEffect}px)`;
        } else if (title.classList.contains('t1') || title.classList.contains('t3')) {
            title.style.transform = `translateX(-${scrollEffect}px)`;
        }

        let opacityEffect;
        if (scrollPosition <= fadeStart) {
            opacityEffect = 1;
        } else if (scrollPosition >= fadeEnd) {
            opacityEffect = 0;
        } else {
            opacityEffect = 0.5 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        }

        title.style.opacity = opacityEffect;
    });

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top + scrollPosition;
        const triggerPoint = windowHeight / 2;

        if (scrollPosition > boxTop - triggerPoint) {
            box.style.backgroundColor = 'transparent';
            const linkIcon = box.querySelector('.link-icon');
            const dot = box.querySelector('.dot');

            if (linkIcon) {
                linkIcon.style.color = '#ffffff';
            }

            if (dot) {
                dot.style.color = '#ffffff';
            }
        } else {
            box.style.backgroundColor = '';
            const linkIcon = box.querySelector('.link-icon');
            const dot = box.querySelector('.dot');

            if (linkIcon) {
                linkIcon.style.color = '';
            }

            if (dot) {
                dot.style.color = '';
            }
        }
    });

    const containerTop = getToKnowMeContainer.getBoundingClientRect().top + scrollPosition;
    const triggerPoint = windowHeight / 1.5;

    if (scrollPosition > containerTop - triggerPoint) {
        title1.style.opacity = 1;
        icon1.style.opacity = 1;
        icon2.style.opacity = 1;
    } else {
        title1.style.opacity = 0.3;
        icon1.style.opacity = 0.1;
        icon2.style.opacity = 0.1;
    }
});

// JavaScript function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
