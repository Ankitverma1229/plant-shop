const clientSlides = document.querySelectorAll(".slide");
const clientLeftSlider = document.querySelector(".left-slider");
const clientRightSlider = document.querySelector(".right-slider");
const collectionSlides = document.querySelectorAll(".collection-slide");
const collectionLeftSLider = document.querySelector(".collection-left-slider");
const collectionRightSLider = document.querySelector(".collection-right-slider");

let clientFirstSlide = 0;
let clientLastSlide = clientSlides.length - 1;
let clientCurrentSlide = Math.round((clientFirstSlide + clientLastSlide - clientFirstSlide) / 2);

clientLeftSlider.addEventListener('click', previousSlide);
clientRightSlider.addEventListener('click', nextSlide);

clientSlides[clientCurrentSlide].classList.remove("hidden-slides");

function previousSlide() {
    clientSlides[clientCurrentSlide].classList.add("hidden-slides");
    clientCurrentSlide = (clientCurrentSlide === clientFirstSlide) ? clientLastSlide : clientCurrentSlide - 1;
    clientSlides[clientCurrentSlide].classList.remove("hidden-slides");
}

function nextSlide() {
    clientSlides[clientCurrentSlide].classList.add("hidden-slides");
    clientCurrentSlide = (clientCurrentSlide === clientLastSlide) ? 0 : clientCurrentSlide + 1;
    clientSlides[clientCurrentSlide].classList.remove("hidden-slides");
}

let collectionFirstSLide = 0;
let collectionLastSLide = collectionSlides.length - 1;
let collectionCurrentSlide = Math.round((collectionFirstSLide + collectionLastSLide - collectionFirstSLide) / 2);

collectionSlides[collectionCurrentSlide].classList.remove("hidden-slides");

collectionLeftSLider.addEventListener('click', () => {
    collectionSlides[collectionCurrentSlide].classList.add("hidden-slides");
    collectionCurrentSlide = (collectionCurrentSlide === collectionFirstSLide) ? collectionLastSLide : collectionCurrentSlide - 1;
    collectionSlides[collectionCurrentSlide].classList.remove("hidden-slides");

});

collectionRightSLider.addEventListener('click', () => {
    collectionSlides[collectionCurrentSlide].classList.add("hidden-slides");
    collectionCurrentSlide = (collectionCurrentSlide === collectionLastSLide) ? 0 : collectionCurrentSlide + 1;
    collectionSlides[collectionCurrentSlide].classList.remove("hidden-slides");

});
