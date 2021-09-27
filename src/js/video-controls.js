function videoTogglePlay() { 
    if (currentVideo.paused) {
        currentVideo.play();
    }
    else {
        currentVideo.pause();
    }
} 

function videoToggleFullscreen() {
    if (currentVideo.mozRequestFullScreen) {
        currentVideo.mozRequestFullScreen();
    } else if (currentVideo.webkitRequestFullScreen) {
        currentVideo.webkitRequestFullScreen();
    }  
}

function videoToggleMute() {
    if (currentVideo.muted === true) {
        currentVideo.muted = false;
        event.target.innerHTML = "M";
    }
    else {
        currentVideo.muted = true;
        event.target.innerHTML = "U";
    }
}