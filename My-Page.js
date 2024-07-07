document.addEventListener('scroll', function() {
    const titles = document.querySelectorAll('.title');
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
});
document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight / 2; // Adjust this value as needed

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top + scrollPosition;

        if (scrollPosition > boxTop - triggerPoint) {
            box.style.backgroundColor = 'transparent';
            const linkIcon = box.querySelector('.link-icon');
            const dot = box.querySelector('.dot');

            if (linkIcon) {
                linkIcon.style.color = '#ffffff';
                // linkIcon.style.left = '60px'; // Uncomment and adjust if needed
            }

            if (dot) {
                dot.style.color = '#ffffff';
                // dot.style.right = '-70px'; // Uncomment and adjust if needed
            }
        } else {
            // Reset to initial styles if needed
            box.style.backgroundColor = ''; // Reset to initial background color
            const linkIcon = box.querySelector('.link-icon');
            const dot = box.querySelector('.dot');

            if (linkIcon) {
                linkIcon.style.color = ''; // Reset to initial color
                // linkIcon.style.left = ''; // Reset to initial position if needed
            }

            if (dot) {
                dot.style.color = ''; // Reset to initial color
                // dot.style.right = ''; // Reset to initial position if needed
            }
        }
    });
});

// JavaScript function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
