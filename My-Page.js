document.addEventListener('scroll', function() {
    const titles = document.querySelectorAll('.title');
    const boxes = document.querySelectorAll('.box');
    const title1 = document.getElementById('title1');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const getToKnowMeContainer = document.getElementById('get-to-know-me');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    titles.forEach(title => {
        const titlePosition = title.getBoundingClientRect().top + scrollPosition;
        const fadeStart = titlePosition - windowHeight / 4;
        const fadeEnd = titlePosition + windowHeight / 4;
        let scrollEffect = scrollPosition / 6;

        // Limit scrollEffect to prevent titles from going out of view
        if (windowWidth > 992) { // Adjust this value based on your design and media queries
            if (title.classList.contains('t2') || title.classList.contains('t4')) {
                scrollEffect = Math.min(scrollEffect, windowWidth / 2);
            } else if (title.classList.contains('t1') || title.classList.contains('t3')) {
                scrollEffect = Math.min(scrollEffect, windowWidth / 2);
            }
        }

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
        title1.style.opacity = 0;
        icon1.style.opacity = 0.1;
        icon2.style.opacity = 0.1;
    }
});

// Select the Back to Top button
const backToTopButton = document.getElementById('backToTopButton');

// Function to check scroll position and toggle button visibility
function toggleBackToTopButton() {
    const navigationBar = document.getElementById('grad'); // Replace 'grad' with your navigation bar ID
    if (window.scrollY > navigationBar.offsetTop + navigationBar.offsetHeight) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Listen for scroll events
document.addEventListener('scroll', function() {
    toggleBackToTopButton();
});

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Typing effect
let text1 = "print";
let text2 = "('hello ";
let text3 = "world')";
let index = 0;
const textElement = document.getElementById("title-text");

function type() {
    if (index < text1.length) {
        textElement.innerHTML += text1.charAt(index);
        index++;
        setTimeout(type, 100); // Speed for text1
    } else if (index - text1.length < text2.length) {
        textElement.innerHTML += text2.charAt(index - text1.length);
        index++;
        setTimeout(type, 200); // Speed for text2
    } else if (index - (text1.length + text2.length) < text3.length) {
        textElement.innerHTML += text3.charAt(index - (text1.length + text2.length));
        index++;
        setTimeout(type, 200); // Speed for text3
    }

    // Start blinking cursor after all text is typed
    if (index >= text1.length + text2.length + text3.length) {
        setInterval(function() {
            if (textElement.innerHTML.endsWith("_")) {
                textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            } else {
                textElement.innerHTML += "_";
            }
        }, 2000); // Adjust blinking speed as needed
    }
}

type();


// Close navbar collapse on link click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

