document.addEventListener('DOMContentLoaded', function() {
    const moreInfoButtons = document.querySelectorAll('.btn-primary');
    const modalInfo = document.getElementById('modal-info');

    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productBox = button.closest('.product-box');
            const info = productBox.getAttribute('data-info');
            modalInfo.textContent = info;
        });
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const backToTopButton = document.getElementById('backToTopButton');
    backToTopButton.addEventListener('click', scrollToTop);
});
