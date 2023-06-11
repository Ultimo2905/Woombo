const lesson = document.querySelector('body');
const modalBlock = document.querySelector('.modal-block');
const buttonSubmit = document.querySelector('.button-submit');

function showConsoleModal() {
    modalBlock.classList.remove('active');
}

function showConsole2() {
    modalBlock.classList.toggle('active');
}

lesson.addEventListener("click", function (event) {
    if (!event.target.closest('.modal-block')) {
        showConsoleModal();
    }
    if (event.target.closest('.button-submit')) {
        event.preventDefault();
        document.location.reload();
    }
});

lesson.addEventListener("click", function (event) {
    if (event.target.closest('.getStarted')) {
        showConsole2();
    }

});


let swiper = new Swiper(".sliderSection__swiper", {
    mousewheel: {
        invert: true,
    },
    keyboard: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 376px
        376: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        // when window width is >=1224px
        1224: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});