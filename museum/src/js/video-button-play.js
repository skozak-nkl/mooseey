let playButton = document.getElementById('videoToggle');
let currentVideo = document.getElementById("video_current");
let minVideoToggle = document.getElementById("minVideoToggle");
let videoSlider = document.getElementById("videoLengthSlider");
let volumeSlider = document.getElementById("videoVolSlider");

currentVideo.addEventListener('play', (event) => {
    console.log(`Video Play Toggled. Pause = ${event.target.paused}`)

    videoSlider.max = event.target.duration;

    minVideoToggle.innerHTML = "||";

    playButton.classList.remove("video-play-button");
    playButton.classList.add("video-pause-button");
})

currentVideo.addEventListener('pause', (event) => {
    console.log(`Video Play Toggled. Pause = ${event.target.paused}`)
    
    minVideoToggle.innerHTML = ">";

    playButton.classList.remove("video-pause-button");
    playButton.classList.add("video-play-button");
})

currentVideo.addEventListener("timeupdate", (event) => {
    videoSlider.value = event.target.currentTime;
});

videoSlider.addEventListener('change', (event) => {
    currentVideo.currentTime = event.target.value;
});

videoSlider.addEventListener('input', (event) => {
    currentVideo.currentTime = event.target.value;
});

volumeSlider.addEventListener('change', (event) => {
    currentVideo.volume = event.target.value;
});

volumeSlider.addEventListener('input', (event) => {
    currentVideo.volume = event.target.value;
});



  
// function makeBig() { 
//     myVideo.width = 560; 
// } 

// function makeSmall() { 
//     myVideo.width = 320; 
// } 

// function makeNormal() { 
//     myVideo.width = 420; 
// } 