document.addEventListener('DOMContentLoaded', function() {
    var box1 = document.querySelector('.b2');
    var box2 = document.querySelector('.b1');
    var hidden = document.getElementById('hide');

    box1.addEventListener('mouseover', function() {
        hidden.innerHTML = 'Do you want to join us?';
        hidden.style.opacity=1;
    });

    box1.addEventListener('mouseout', function() {
        // hidden.innerHTML = '.';
        hidden.style.opacity=0;
    });

    box2.addEventListener('mouseover', function() {
        hidden.innerHTML = 'Do you have an account already?';
        hidden.style.opacity=1;
    });

    box2.addEventListener('mouseout', function() {
        // hidden.innerHTML = '.';
        hidden.style.opacity=0;
    });
});
