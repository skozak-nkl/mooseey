let welcomelImage = document.getElementById('welcome-carousel-image');
let welcomeImageBtnNext = document.getElementById('welcome-carousel-next');
let welcomeImageBtnPrev = document.getElementById('welcome-carousel-prev');
let welcomeIndexes = document.querySelectorAll('.welcome-carousel-indexes p1');

const welcomeBGOpts = 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.5) 16.19%, rgba(0, 0, 0, 0) 30.73%)'
const welcomeImagePrefix = '/dist/assets/img/welcome-slider';
const welcomeImageURLs = [
    `${welcomeImagePrefix}/1.jpg`,
    `${welcomeImagePrefix}/2.jpg`,
    `${welcomeImagePrefix}/3.jpg`,
    `${welcomeImagePrefix}/4.jpg`,
    `${welcomeImagePrefix}/5.jpg`
];

let welcomeSquares = document.querySelectorAll('.welcome-carousel-squares div');

welcomeImageBtnNext.addEventListener('click', (event) => {
    let continueLoop = true;

    welcomeSquares.forEach(function(sq, index) {
        if (sq.classList.contains('welcome-active-square') && continueLoop) {
            sq.classList.remove('welcome-active-square');
            sq.classList.add('welcome-square');

            if (index === welcomeSquares.length-1) {
                welcomeSquares[0].classList.add('welcome-active-square');
                welcomeSquares[0].classList.remove('welcome-square');

                welcomeIndexes[0].innerHTML = "01";
                welcomelImage.setAttribute("style", `background: ${welcomeBGOpts}, url('${welcomeImageURLs[0]}') no-repeat;`);

            } else {
                welcomeSquares[index+1].classList.add('welcome-active-square') ;
                welcomeSquares[index+1].classList.remove('welcome-square');

                welcomeIndexes[0].innerHTML = `0${index+2}`;
                welcomelImage.setAttribute("style", `background: ${welcomeBGOpts}, url('${welcomeImageURLs[index+1]}') no-repeat;`);
            }
            continueLoop = false;
        }
    });
});

welcomeImageBtnPrev.addEventListener('click', (event) => {
    let continueLoop = true;

    welcomeSquares.forEach(function(sq, index) {
        if (sq.classList.contains('welcome-active-square') && continueLoop) {

            sq.classList.remove('welcome-active-square');
            sq.classList.add('welcome-square');

            if (index === 0) {
                welcomeSquares[welcomeSquares.length-1].classList.add('welcome-active-square');
                welcomeSquares[welcomeSquares.length-1].classList.remove('welcome-square');

                welcomeIndexes[0].innerHTML = `0${welcomeSquares.length}`;
                welcomelImage.setAttribute("style", `background: ${welcomeBGOpts}, url('${welcomeImageURLs[4]}') no-repeat;`);
            } else {
                welcomeSquares[index-1].classList.add('welcome-active-square') ;
                welcomeSquares[index-1].classList.remove('welcome-square');

                welcomeIndexes[0].innerHTML = `0${index}`;
                welcomelImage.setAttribute("style", `background: ${welcomeBGOpts}, url('${welcomeImageURLs[index-1]}') no-repeat;`);
            }
            continueLoop = false;
        }
    });
});