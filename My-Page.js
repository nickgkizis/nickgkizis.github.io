function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('scroll', function() {
    const titles = document.querySelectorAll('.title');
    const boxes = document.querySelectorAll('.box');
    const title1 = document.getElementById('title1');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const getToKnowMeContainer = document.getElementById('get-to-know-me');
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const maxTranslateValue = windowWidth / 20; // Adjust this value as needed

    titles.forEach(title => {
        const titlePosition = title.getBoundingClientRect().top + scrollPosition;
        const titleCenter = windowWidth / 2; // Center of the screen

        // Calculate scroll effect based on distance from the center of the screen
        let scrollEffect = ((titlePosition - titleCenter) / windowWidth) * maxTranslateValue;

        // Clamp the scrollEffect to not exceed maxTranslateValue
        scrollEffect = Math.max(-maxTranslateValue, Math.min(maxTranslateValue, scrollEffect));

        // Ensure the title stays within its container
        const titleContainer = title.closest('.title-container');
        const containerRect = titleContainer.getBoundingClientRect();
        const titleRect = title.getBoundingClientRect();


        // Adjust opacity based on scroll position
        let opacityEffect;
        if (scrollPosition <= titlePosition - window.innerHeight / 4) {
            opacityEffect = 1;
        } else if (scrollPosition >= titlePosition + window.innerHeight / 4) {
            opacityEffect = 0;
        } else {
            opacityEffect = 0.5 - (scrollPosition - (titlePosition - window.innerHeight / 4)) / (window.innerHeight / 2);
        }

        // Adjust font size based on opacity
        const maxFontSize = 60;
        const minFontSize = 20;
        const fontSize = minFontSize + (maxFontSize - minFontSize) * opacityEffect;
        title.style.fontSize = `${fontSize}px`;

        // Apply opacity and font size changes
        title.style.opacity = opacityEffect;
    });

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top + scrollPosition;
        const triggerPoint = window.innerHeight / 2;

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
    const triggerPoint = window.innerHeight / 1.5;

    if (scrollPosition > containerTop - triggerPoint) {
        title1.style.opacity = 1;
        icon1.style.opacity = 1;
        icon2.style.opacity = 1;
        icon3.style.opacity = 1;

    } else {
        title1.style.opacity = 0;
        icon1.style.opacity = 0;
        icon2.style.opacity = 0;
        icon3.style.opacity = 0;
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
        setTimeout(type, 400); // Speed for text2
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

