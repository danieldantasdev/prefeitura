/* ==================== Slider swiper ==================== */
const swiper = new Swiper('.swiper', {
    // slidesPerView: '3',
    // spaceBetween: 10,

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    autoplay: {
        delay: 1500
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    mousewheel: true,
    keyboard: true,
    grabCursor: true
})
