/*submenu*/

document.addEventListener('DOMContentLoaded', function() {
    var ids = ['menu', 'menu-HID', 'menu-CAFE', 'menu-MATE', 'menu-KIDS', 'menu-CAMP', 'menu-EXP'];
    var currentOpenSubmenu = null;

    ids.forEach(function(id) {
        var menuLink = document.getElementById(id);

        if (menuLink) {
            menuLink.addEventListener('click', function(e) {
                e.preventDefault();
                var submenu = this.parentNode.querySelector('.menu__submenu');
                
                
                if (currentOpenSubmenu && currentOpenSubmenu !== submenu) {
                    currentOpenSubmenu.style.display = 'none';
                }
                
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
                
                currentOpenSubmenu = submenu.style.display === 'none' ? null : submenu;
            });
        }
    });
});

/*carousel*/

document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
    let intervalId;

    function goToSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function goToNextSlide() {
        if (currentIndex < carouselItems.length - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(carouselItems.length - 1);
        }
    }

    /*function startCarousel() {
        intervalId = setInterval(goToNextSlide, 3000); // 3000 milliseconds = 3 seconds
    }*/

    function stopCarousel() {
        clearInterval(intervalId);
    }

    prevButton.addEventListener("click", function () {
        stopCarousel();
        goToPrevSlide();
        startCarousel();
    });

    nextButton.addEventListener("click", function () {
        stopCarousel();
        goToNextSlide();
        startCarousel();
    });

    carouselItems[0].classList.add('active');

    startCarousel();
});

/*swiper slide*/

let currentIndex = 0;
const slides = document.querySelectorAll('.swiper-slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    if ((currentIndex === 0 && direction === -1) || (currentIndex === 2 && direction === 1)) {
        return;
    }

    currentIndex += direction;

    const newPosition = currentIndex * -54 + '%';
    document.querySelector('.carousel-product').style.transform = `translateX(${newPosition})`;
}

let isDragging = false;
let startPosition = 0;
let deltaX = 0;

document.querySelector('.carousel-product').addEventListener('mousedown', startDrag);
document.querySelector('.carousel-product').addEventListener('mousemove', drag);
document.querySelector('.carousel-product').addEventListener('mouseup', endDrag);
document.querySelector('.carousel-product').addEventListener('mouseleave', endDrag);

function startDrag(event) {
    event.preventDefault();
    isDragging = true;
    startPosition = event.clientX;
}

function drag(event) {
    event.preventDefault();
    if (!isDragging) return;
    deltaX = event.clientX - startPosition;
    const newPosition = (currentIndex * -54 + deltaX) + '%';
    document.querySelector('.carousel-product').style.transform = `translateX(${newPosition})`;
}

function endDrag(event) {
    event.preventDefault();
    if (!isDragging) return;
    isDragging = false;
    if (Math.abs(deltaX) > 50) {
        moveSlide(deltaX > 0 ? -1 : 1);
    } else {
        const newPosition = currentIndex * -54 + '%';
        document.querySelector('.carousel-product').style.transform = `translateX(${newPosition})`;
    }
    deltaX = 0;
}


document.querySelector('.carousel-product').addEventListener('touchstart', startDrag);
document.querySelector('.carousel-product').addEventListener('touchmove', drag);
document.querySelector('.carousel-product').addEventListener('touchend', endDrag);





