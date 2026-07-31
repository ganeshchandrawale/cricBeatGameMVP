// App Initialization
console.log("CricBeat (CricBeatGame) Client Ready.");

// Carousel Variables
let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');
const totalSlides = 5; // 4 front cards + 1 back card

function updateCarousel() {
  if (!track) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Update dots active status
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Exposed globally for onclick handlers
window.moveCarousel = function(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateCarousel();
  resetAutoSlide();
};

window.jumpToSlide = function(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
  resetAutoSlide();
};

// Auto slide functionality
let autoSlideInterval = setInterval(() => {
  window.moveCarousel(1);
}, 5000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    window.moveCarousel(1);
  }, 5000);
}

// Pause auto slide on hover
const container = document.querySelector('.carousel-container');
if (container) {
  container.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  container.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      window.moveCarousel(1);
    }, 5000);
  });
}
