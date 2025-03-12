document.addEventListener("DOMContentLoaded", function () {
  // --- Back to Top Functionality ---
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function toggleBackToTopButton() {
    const navigationBar = document.getElementById("grad"); // Replace 'grad' with your navigation bar ID if needed
    const backToTopButton = document.getElementById("backToTopButton");
    if (window.scrollY > navigationBar.offsetTop + navigationBar.offsetHeight) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  const backToTopButton = document.getElementById("backToTopButton");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);
  }
  window.addEventListener("scroll", toggleBackToTopButton);

  // --- Scroll Effects for Titles, Boxes, and "Get-to-Know-Me" Container ---
  function handleScrollEffects() {
    const titles = document.querySelectorAll(".title");
    const boxes = document.querySelectorAll(".box");
    const title1 = document.getElementById("title1");
    const title2 = document.getElementById("title2");
    const title3 = document.getElementById("title3");
    const title4 = document.getElementById("title4");
    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");
    const icon3 = document.getElementById("icon3");
    const getToKnowMeContainer = document.getElementById("get-to-know-me");
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const maxTranslateValue = windowWidth / 20;

    // Update titles
    titles.forEach((title) => {
      const titlePosition = title.getBoundingClientRect().top + scrollPosition;
      const titleCenter = windowWidth / 2;
      let scrollEffect =
        ((titlePosition - titleCenter) / windowWidth) * maxTranslateValue;
      scrollEffect = Math.max(
        -maxTranslateValue,
        Math.min(maxTranslateValue, scrollEffect)
      );

      let opacityEffect;
      if (scrollPosition <= titlePosition - window.innerHeight / 4) {
        opacityEffect = 1;
      } else if (scrollPosition >= titlePosition + window.innerHeight / 4) {
        opacityEffect = 0;
      } else {
        opacityEffect =
          0.5 -
          (scrollPosition - (titlePosition - window.innerHeight / 4)) /
            (window.innerHeight / 2);
      }

      const maxFontSize = 60;
      const minFontSize = 20;
      const fontSize =
        minFontSize + (maxFontSize - minFontSize) * opacityEffect;
      title.style.fontSize = `${fontSize}px`;
      title.style.opacity = opacityEffect;
    });

    // Update boxes
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top + scrollPosition;
      const triggerPoint = window.innerHeight / 2;
      if (scrollPosition > boxTop - triggerPoint) {
        box.style.backgroundColor = "transparent";
        const linkIcon = box.querySelector(".link-icon");
        const dot = box.querySelector(".dot");
        if (linkIcon) linkIcon.style.color = "#ffffff";
        if (dot) dot.style.color = "#ffffff";
      } else {
        box.style.backgroundColor = "";
        const linkIcon = box.querySelector(".link-icon");
        const dot = box.querySelector(".dot");
        if (linkIcon) linkIcon.style.color = "";
        if (dot) dot.style.color = "";
      }
    });

    // Handle get-to-know-me container titles and icons
    if (getToKnowMeContainer) {
      const containerTop =
        getToKnowMeContainer.getBoundingClientRect().top + scrollPosition;
      const triggerPoint = window.innerHeight / 1.5;
      if (scrollPosition > containerTop - triggerPoint) {
        setTimeout(() => {
          title1.style.opacity = 1;
        }, 1000);
        setTimeout(() => {
          title2.style.opacity = 1;
        }, 2000);
        setTimeout(() => {
          title3.style.opacity = 1;
        }, 2000);
        setTimeout(() => {
          title4.style.opacity = 1;
        }, 3000);
        if (icon1) icon1.style.opacity = 1;
        if (icon2) icon2.style.opacity = 1;
        if (icon3) icon3.style.opacity = 1;
      } else {
        title1.style.opacity = 0;
        title2.style.opacity = 0;
        title3.style.opacity = 0;
        title4.style.opacity = 0;
        if (icon1) icon1.style.opacity = 0;
        if (icon2) icon2.style.opacity = 0;
        if (icon3) icon3.style.opacity = 0;
      }
    }
  }
  window.addEventListener("scroll", handleScrollEffects);
  handleScrollEffects();

  // --- Dot Opacity Animation for .container-1 ---
  const containers = document.querySelectorAll(".container-1");
  containers.forEach((container) => {
    const dots = container.querySelectorAll(".dot");
    const textDots = container.querySelectorAll(".text .dot");
    const triggerPoint = window.innerHeight / 2;

    function toggleDotOpacity() {
      dots.forEach((dot) => {
        const dotTop = dot.getBoundingClientRect().top + window.scrollY;
        dot.style.opacity = window.scrollY > dotTop - triggerPoint ? 1 : 0;
      });
      textDots.forEach((textDot) => {
        const textDotTop = textDot.getBoundingClientRect().top + window.scrollY;
        textDot.style.opacity =
          window.scrollY > textDotTop - triggerPoint ? 1 : 0;
      });
    }
    window.addEventListener("scroll", toggleDotOpacity);
    toggleDotOpacity();
  });

  // --- Typing Effect ---
  let text1 = "print";
  let text2 = "(";
  let text3 = "'hello world'";
  let text4 = ")";
  let index = 0;
  const textElement = document.getElementById("title-text");

  function type() {
    if (index < text1.length) {
      textElement.innerHTML += `<span style="color: moccasin">${text1.charAt(
        index
      )}</span>`;
      index++;
      setTimeout(type, 100);
    } else if (index - text1.length < text2.length) {
      textElement.innerHTML += `<span style="color: yellow">${text2.charAt(
        index - text1.length
      )}</span>`;
      index++;
      setTimeout(type, 100);
    } else if (index - (text1.length + text2.length) < text3.length) {
      textElement.innerHTML += `<span style="color: orange">${text3.charAt(
        index - (text1.length + text2.length)
      )}</span>`;
      index++;
      setTimeout(type, 100);
    } else if (
      index - (text1.length + text2.length + text3.length) <
      text4.length
    ) {
      textElement.innerHTML += `<span style="color: yellow">${text4.charAt(
        index - (text1.length + text2.length + text3.length)
      )}</span>`;
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(deleteText, 2000);
    }
  }

  function deleteText() {
    // Remove one character (span) at a time
    if (textElement.childNodes.length > 0) {
      textElement.removeChild(textElement.lastChild);
      setTimeout(deleteText, 50);
    } else {
      index = 0;
      setTimeout(type, 500);
    }
  }

  // Start the typewriter effect
  type();


  // --- Close Navbar Collapse on Link Click ---
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });

  // --- Intersection Observer for Project Elements (.p-el) ---
  const projects = document.querySelectorAll(".p-el");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.5 }
  ); 

  projects.forEach((project) => {
    observer.observe(project);
  });
});
