document.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

var videoPlayer = document.getElementById('discord-video');

document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 32: // Spacebar for mute/unmute
            toggleMute();
            break;
        case 38: 
            adjustVolume(10); // Arrow up for volume up
            break;
        case 40: 
            adjustVolume(-10); // Arrow down for volume down
            break;
    }
});

function toggleMute() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        document.getElementById('mute-toggle').textContent = 'Mute';
    } else {
        videoPlayer.muted = true;
        document.getElementById('mute-toggle').textContent = 'Unmute';
    }
}

function adjustVolume(change) {
    const currentVolume = videoPlayer.volume;
    let newVolume = currentVolume + (change / 100);
    
    if (newVolume > 1) {
        newVolume = 1;
    } else if (newVolume < 0) {
        newVolume = 0;
    }
    
    videoPlayer.volume = newVolume;
}

document.addEventListener('DOMContentLoaded', () => {
    const loadingBar = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    let progress = 0;
    const maxProgress = 100;
    const speed = 0.1;
    
    function animateLoading() {
        progress += speed;
        if (progress >= maxProgress) {
            progress = 0;
        }
        loadingBar.style.width = progress + '%';
        loadingText.textContent = Math.round(progress) + '%';
    
        requestAnimationFrame(animateLoading);
    }
    
    requestAnimationFrame(animateLoading);
});

function fillSquares(percentage) {
    const squaresContainer = document.querySelector(".loading-squares");

    if (!squaresContainer.hasChildNodes()) {
        for (let i = 0; i < 50; i++) {
            let square = document.createElement("div");
            squaresContainer.appendChild(square);
        }
    }

    const squares = squaresContainer.querySelectorAll("div");
    const totalSquares = squares.length;
    const filledSquaresCount = Math.floor(percentage / 100 * totalSquares);

    for (let i = 0; i < filledSquaresCount; i++) {
        squares[i].style.backgroundColor = "rgb(255, 0, 0)";
    }
    for (let i = filledSquaresCount; i < totalSquares; i++) {
        squares[i].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }

    const loadingText = document.querySelector(".loading-text");
    loadingText.textContent = percentage + "%";
}

window.addEventListener("message", function(event) {
    if (event.data.eventName === "loadProgress") {
        fillSquares(parseInt(event.data.loadFraction * 100));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.server-owner-card').style.transform = 'translateX(0)';
});

const updateText = () => {
    const welcomeDisplay = document.getElementById('welcomeDisplay');
    welcomeDisplay.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
};

document.addEventListener('mousemove', function(e) {
    var cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);
    cursorTrail.style.left = e.pageX + 'px';
    cursorTrail.style.top = e.pageY + 'px';
    cursorTrail.style.visibility = 'visible';

    setTimeout(function() {
        document.body.removeChild(cursorTrail);
    }, 500);
});
