const carouselList = document.querySelector('.carousel-list');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
const totalItems = carouselList.children.length;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselList.style.transform = `translateX(-${currentIndex * 10}%)`;
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    carouselList.style.transform = `translateX(-${currentIndex * 10}%)`;
  }
});
