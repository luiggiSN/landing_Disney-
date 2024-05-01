/*submenu*/
document.addEventListener('DOMContentLoaded', function() {
    var ids = ['menu', 'menu-HID', 'menu-CAFE', 'menu-MATE', 'menu-KIDS', 'menu-CAMP', 'menu-EXP', 'menu-BAR-MOB', 'menu-HID-MOB', 'menu-CAFE-MOB', 'menu-MATE-MOB', 'menu-KIDS-MOB', 'menu-CAMP-MOB', 'menu-EXP-MOB'];
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

/** submenu mobilie */
document.addEventListener('DOMContentLoaded', function() {
    var headerTabs = document.getElementById('headerTabs');
    var headerMask = document.querySelector('.header__mask');
    var menuClose = document.querySelector('.menu__close');

    headerTabs.addEventListener('click', function() {
        if (headerMask.style.opacity === '1') {
            headerMask.style.opacity = '0';
            headerMask.style.display = 'none';
            headerMenu.style.left = '-100%'
        } else {
            headerMask.style.opacity = '1';
            headerMask.style.display = 'block';
            headerMenu.style.left = '0%'
        }
    });
    /** fechar submenu */
    menuClose.addEventListener('click', function() {
        headerMask.style.opacity = '0';
        headerMask.style.display = 'none';
        headerMenu.style.left = '-100%'
    });
});

/**sub itens */
document.addEventListener('DOMContentLoaded', function() {
    var ids = ['menu-BAR-MOB', 'menu-HID-MOB', 'menu-CAFE-MOB', 'menu-MATE-MOB', 'menu-KIDS-MOB', 'menu-CAMP-MOB', 'menu-EXP-MOB'];
    var currentOpenSubmenu = null;

    ids.forEach(function(id) {
        var menuLink = document.getElementById(id);

        if (menuLink) {
            menuLink.addEventListener('click', function(e) {
                e.preventDefault();
                var submenu = this.parentNode.querySelector('.submenu__mobile');
                
                
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
const totalSlides = 8; // Defina o número total de slides aqui

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction) % totalSlides;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 4;
        }

        const newPosition = currentIndex * -71 + '%';
        document.querySelector('.carousel-product').style.transform = `translateX(${newPosition})`;
    }

    let isDragging = false;
    let startPosition = 0;
    let deltaX = 0;

    document.querySelector('.carousel-product').addEventListener('mousedown', startDrag);
    document.querySelector('.carousel-product').addEventListener('touchstart', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    function startDrag(event) {
        event.preventDefault();
        isDragging = true;
        startPosition = (event.type === 'touchstart') ? event.touches[0].clientX : event.clientX;
    }

    function drag(event) {
        event.preventDefault();
        if (!isDragging) return;
        const currentPosition = (event.type === 'touchmove') ? event.touches[0].clientX : event.clientX;
        deltaX = currentPosition - startPosition;
        const newPosition = (currentIndex * -70 + deltaX) + '%';
        document.querySelector('.carousel-product').style.transform = `translateX(${newPosition})`;
    }

    function endDrag(event) {
        event.preventDefault();
        if (!isDragging) return;
        isDragging = false;
        if (Math.abs(deltaX) > 200) {
            moveSlide(deltaX > 0 ? -1 : 1);
        } else {
            const newPosition = currentIndex * -71 + '%';
            document.querySelector('.carousel-product').style.transform = `translateX(${newPosition})`;
        }
        deltaX = 0;
    }
    

    /**teste */
    
    let currentIndexColorsColors = 0;
    const totalSlidesColors = 8; // Defina o número total de slides aqui

    function moveSlide(direction) {
        currentIndexColors = (currentIndexColors + direction) % totalSlidesColors;
        if (currentIndexColors < 0) {
            currentIndexColors = totalSlidesColors - 4;
        }

        const newPosition = currentIndexColors * -71 + '%';
        document.querySelector('.colors').style.transform = `translateX(${newPosition})`;
    }

    document.querySelector('.colors').addEventListener('mousedown', startDrag);
    document.querySelector('.colors').addEventListener('touchstart', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    function startDrag(event) {
        event.preventDefault();
        isDragging = true;
        startPosition = (event.type === 'touchstart') ? event.touches[0].clientX : event.clientX;
    }

    function drag(event) {
        event.preventDefault();
        if (!isDragging) return;
        const currentPosition = (event.type === 'touchmove') ? event.touches[0].clientX : event.clientX;
        deltaX = currentPosition - startPosition;
        const newPosition = (currentIndexColors * -70 + deltaX) + '%';
        document.querySelector('.colors').style.transform = `translateX(${newPosition})`;
    }

    function endDrag(event) {
        event.preventDefault();
        if (!isDragging) return;
        isDragging = false;
        if (Math.abs(deltaX) > 200) {
            moveSlide(deltaX > 0 ? -1 : 1);
        } else {
            const newPosition = currentIndexColors * -71 + '%';
            document.querySelector('.colors').style.transform = `translateX(${newPosition})`;
        }
        deltaX = 0;
    }

/** */

