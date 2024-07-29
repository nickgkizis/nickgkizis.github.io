document.addEventListener('DOMContentLoaded', function() {
    let box1 = document.querySelector('.b2');
    let box2 = document.querySelector('.b1');
    let hidden = document.getElementById('hide');
    let cont = document.getElementById('contn');
    let img = document.getElementById('img-bg')

    box1.addEventListener('mouseover', function() {
        hidden.innerHTML = 'Want to join us?';
        hidden.style.opacity=1;
        cont.style.background =' linear-gradient(to left bottom, #d53ac5 0%, #0c2aec 100%)';
    });

    box1.addEventListener('mouseout', function() {
        hidden.innerHTML = 'Welcome to my Website!';
        // hidden.style.opacity=1;
        // hidden.style.color = 'grey';
        cont.style.background = 'linear-gradient(to bottom, #d53ac5 0%, #0c2aec 100%)';
        
    });

    box2.addEventListener('mouseover', function() {
        hidden.innerHTML = 'Already have an account?';
        hidden.style.opacity=1;
        cont.style.background =' linear-gradient(to right bottom, #d53ac5 0%, #0c2aec 100%)';

    });

    box2.addEventListener('mouseout', function() {
        hidden.innerHTML = 'Welcome to my Website!';
        // hidden.style.opacity=1;
        // hidden.style.color = 'grey';
        cont.style.background = 'linear-gradient(to bottom, #d53ac5 0%, #0c2aec 100%)';
    });
    
    
    function setBackgroundOpacity(opacity) {
        img.style.setProperty('--bg-opacity', opacity)
    };

    // Change opacity on mouseover
    cont.addEventListener('mouseover', function() {
        setBackgroundOpacity(0.8);
    });

    // Reset opacity on mouseout
    cont.addEventListener('mouseout', function() {
        setBackgroundOpacity(1);
    });
});
    
