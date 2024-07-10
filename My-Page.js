document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to top with smooth behavior
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function to toggle Back to Top button visibility based on scroll position
    function toggleBackToTopButton() {
        const navigationBar = document.getElementById('grad'); // Replace 'grad' with your navigation bar ID
        const backToTopButton = document.getElementById('backToTopButton');

        if (window.scrollY > navigationBar.offsetTop + navigationBar.offsetHeight) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Smooth scroll to top button click event listener
    const backToTopButton = document.getElementById('backToTopButton');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }

    // Listen for scroll events to toggle Back to Top button visibility
    document.addEventListener('scroll', toggleBackToTopButton);

    // Function to handle scroll effects on titles, boxes, and get-to-know-me container
    function handleScrollEffects() {
        const titles = document.querySelectorAll('.title');
        const boxes = document.querySelectorAll('.box');
        const title1 = document.getElementById('title1');
        const icon1 = document.getElementById('icon1');
        const icon2 = document.getElementById('icon2');
        const icon3 = document.getElementById('icon3');
        const getToKnowMeContainer = document.getElementById('get-to-know-me');
        const scrollPosition = window.scrollY;
        const windowWidth = window.innerWidth;
        const maxTranslateValue = windowWidth / 20; 

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
    }

    // Initial call to handle scroll effects on page load
    handleScrollEffects();

    // Listen for scroll events to handle scroll effects
    document.addEventListener('scroll', handleScrollEffects);

    // Updated scroll to section functionality
    // const links = document.querySelectorAll('.nav-link');

    // links.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();

    //         const targetId = this.getAttribute('href').substring(1);
    //         const target = document.getElementById(targetId);

    //         if (target) {
    //             window.scrollTo({
    //                 top: target.offsetTop,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // Updated scroll animation for dots inside container-1
    const containers = document.querySelectorAll('.container-1');

    containers.forEach(container => {
        const dots = container.querySelectorAll('.dot');
        const textDots = container.querySelectorAll('.text .dot');
        const triggerPoint = window.innerHeight / 2;

        // Function to toggle dot opacity based on scroll position
        function toggleDotOpacity() {
            dots.forEach(dot => {
                const dotTop = dot.getBoundingClientRect().top + window.scrollY;
                if (window.scrollY > dotTop - triggerPoint) {
                    dot.style.opacity = 1;
                } else {
                    dot.style.opacity = 0;
                }
            });

            textDots.forEach(textDot => {
                const textDotTop = textDot.getBoundingClientRect().top + window.scrollY;
                if (window.scrollY > textDotTop - triggerPoint) {
                    textDot.style.opacity = 1;
                } else {
                    textDot.style.opacity = 0;
                }
            });
        }

        // Listen for scroll events
        document.addEventListener('scroll', toggleDotOpacity);

        // Initial check on page load
        toggleDotOpacity();
    });

    // Typing effect
    let text1 = "print";
    let text2 = "('hello ";
    let text3 = "world')";
    let index = 0;
    const textElement = document.getElementById("title-text");
    let typingInterval; // Variable to hold the typing interval

    function type() {
        if (index < text1.length) {
            textElement.innerHTML += text1.charAt(index);
            index++;
            typingInterval = setTimeout(type, 100); // Speed for text1
        } else if (index - text1.length < text2.length) {
            textElement.innerHTML += text2.charAt(index - text1.length);
            index++;
            typingInterval = setTimeout(type, 400); // Speed for text2
        } else if (index - (text1.length + text2.length) < text3.length) {
            textElement.innerHTML += text3.charAt(index - (text1.length + text2.length));
            index++;
            typingInterval = setTimeout(type, 200); // Speed for text3
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

    // Start typing effect initially
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
});
