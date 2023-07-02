//  invoke animation function  
new WOW().init();



// slider for our partners  


new Swiper(".mySwiper1", {
    autoplay: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 0,

    },
    loop: true,
    breakpoints: {


        400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },



});


// slider for our clints  


new Swiper(".mySwiper", {
    autoplay: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 0,

    },
    loop: true,
    breakpoints: {


        400: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 60,
        },
    },



});


// slider for our expe 
new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        575: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
