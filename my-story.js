// script.js
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const stationContainers = Array.from(document.querySelectorAll('.station-container'));
    const texts = Array.from(document.querySelectorAll('.textMyS'));
    let currentStation = 0;

    function moveProgressBar() {
        if (currentStation >= stationContainers.length) {
            currentStation = 0;
        }

        // Show the text and animate the icon
        texts.forEach((text, index) => {
            text.style.display = index === currentStation ? 'flex' : 'none';
            
            if (index === currentStation) {
                const station = stationContainers[index].querySelector('.station');
                station.classList.add('blink');
                setTimeout(() => station.classList.remove('blink'), 500);
            }
        });

        // Move progress bar
        const stationContainer = stationContainers[currentStation];
        const rect = stationContainer.getBoundingClientRect();
        const timelineRect = document.querySelector('.timeline').getBoundingClientRect();
        const progressWidth = rect.left - timelineRect.left + (rect.width / 2);

        progressBar.style.width = `${progressWidth}px`;

        // Move to the next station
        currentStation++;
        setTimeout(moveProgressBar, 3000); // Slower progress (3 seconds)
    }

    moveProgressBar();
});
