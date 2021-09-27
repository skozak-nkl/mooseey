let galleryImgs = document.querySelectorAll('.gallery-grid img');

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function rotateGalleryImages(count) {
    const galleryImgPrefix = "../assets/img/galery/galery"
    const galleryImgPostfix = ".jpg"

    let indexArr = [];
    for (let i = 1; i <= count; i++) {
        indexArr.push(i);
    }

    console.log(indexArr);

    const shuffledArr = shuffle(indexArr);
    console.log(shuffledArr);

    galleryImgs.forEach(function(image, index) {
        let newSrc = `${galleryImgPrefix}${shuffledArr[index]}${galleryImgPostfix}`;
        image.src = newSrc;
    });
}

rotateGalleryImages(15);