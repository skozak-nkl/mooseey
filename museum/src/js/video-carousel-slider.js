let slider = document.querySelector('.video-list-controls');
let sliderPrev = document.getElementById('slider-prev');
let sliderNext = document.getElementById('slider-next');
let sliderDots = slider.querySelectorAll('.slider-dot');

const videoFolderPrefix = '/museum/dist/assets/video';
const videoURLs = [
    `${videoFolderPrefix}/video0.mp4`,
    `${videoFolderPrefix}/video1.mp4`,
    `${videoFolderPrefix}/video2.mp4`,
    `${videoFolderPrefix}/video3.mp4`,
    `${videoFolderPrefix}/video4.mp4`
];
const videoPosters = [
    `${videoFolderPrefix}/poster0.jpg`,
    `${videoFolderPrefix}/poster1.jpg`,
    `${videoFolderPrefix}/poster2.jpg`,
    `${videoFolderPrefix}/poster3.jpg`,
    `${videoFolderPrefix}/poster4.jpg`
];

let videoListItems = document.querySelectorAll('.video-list .video-list-item');

console.log(videoListItems);


// sliderDots.forEach(function (el) {
//     el.addEventListener('click', (event) => {
        
//         sliderDots.forEach(function(dot, index) {
//             if (dot !== event.target) dot.classList.remove('slider-dot-active');
//         })
//         event.target.classList.add('slider-dot-active');

//     });
// });

sliderNext.addEventListener('click', (event) => {
    let continueLoop = true;

    sliderDots.forEach(function(dot, index) {
        if (dot.classList.contains('slider-dot-active') && continueLoop) {

            dot.classList.remove('slider-dot-active');

            if (index === sliderDots.length-1) {
                sliderDots[0].classList.add('slider-dot-active');


                // BIG VIDEO CHANGE
                currentVideo.setAttribute('poster', `${videoPosters[0]}`);
                currentVideo.querySelector('source').setAttribute('src', `${videoURLs[0]}`);

                // SMALL VIDEOS ROTATE
                videoListItems.forEach(function(item, i) {
                    let result = i+1;
                    item.setAttribute('style', `background-image: url('${videoPosters[result]}')`)
                });

            } else {
                sliderDots[index+1].classList.add('slider-dot-active');

                // BIG VIDEO CHANGE
                currentVideo.setAttribute('poster', `${videoPosters[index+1]}`);
                currentVideo.querySelector('source').setAttribute('src', `${videoURLs[index+1]}`);

                // SMALL VIDEOS ROTATE
                videoListItems.forEach(function(item, i) {
                    let result = index+i+2;
                    if (result >= 5) result -= 5;
                    item.setAttribute('style', `background-image: url('${videoPosters[result]}')`)
                });
            }
            currentVideo.load();
            videoTogglePlay();
            continueLoop = false;
        }
    })
});

sliderPrev.addEventListener('click', (event) => {
    currentVideo.pause();
    let continueLoop = true;
    
    sliderDots.forEach(function(dot, index) {
        if (dot.classList.contains('slider-dot-active') && continueLoop) {

            dot.classList.remove('slider-dot-active');

            if (index === 0) {
                sliderDots[sliderDots.length-1].classList.add('slider-dot-active');

                // BIG VIDEO CHANGE
                currentVideo.setAttribute('poster', `${videoPosters[4]}`);
                currentVideo.querySelector('source').setAttribute('src', `${videoURLs[4]}`);

                // SMALL VIDEOS ROTATE
                videoListItems.forEach(function(item, i) {
                    item.setAttribute('style', `background-image: url('${videoPosters[i]}')`)
                });
            } else {
                sliderDots[index-1].classList.add('slider-dot-active');

                // BIG VIDEO CHANGE
                currentVideo.setAttribute('poster', `${videoPosters[index-1]}`);
                currentVideo.querySelector('source').setAttribute('src', `${videoURLs[index-1]}`);

                // SMALL VIDEOS ROTATE
                videoListItems.forEach(function(item, n) {
                    let result = index+n;
                    if (result >= 5) result -= 5

                    item.setAttribute('style', `background-image: url('${videoPosters[result]}')`)
                });
            }
            currentVideo.load();
            videoTogglePlay();
            continueLoop = false;
        }
    })
});