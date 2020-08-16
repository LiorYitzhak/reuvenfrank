const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const carouselNav = document.querySelector('.carousel-nav');
const types = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width * 1.05;

slides.forEach(function(slide, index) {
    slide.style.right = slideWidth * index + 'px';
});

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(' + targetSlide.style.right + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

function updateCarouselNav(currentType, targetType) {
    currentType.classList.remove('current-slide');
    targetType.classList.add('current-slide');
}

carouselNav.addEventListener('click', function(e) {
    const targetType = e.target.closest('a');
    if(!targetType) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentType = carouselNav.querySelector('.current-slide');
    const targetIndex = types.findIndex(type => type === targetType);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateCarouselNav(currentType, targetType);
});