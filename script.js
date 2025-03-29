const carouselImages = document.querySelector('.carousel-images');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
const imageWidth = 200;

nextButton.addEventListener('click', () => {
  if (currentIndex < carouselImages.children.length - 1) {
    currentIndex++;
    console.log(currentIndex);
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    console.log(currentIndex);
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * imageWidth;
  console.log(offset);
  carouselImages.style.transform = `translateX(${offset}px)`;
}
