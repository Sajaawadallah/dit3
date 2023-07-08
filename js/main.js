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

// slider for product  

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    loop: true,

    breakpoints: {


        773: {
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
    }

});

// slider for product  

var swiper1 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
    loop: true,

    breakpoints: {


        773: {
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
    }

});






// form validtion 
(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation');


    Array.from(forms)
        .forEach(function (form) {

            form.addEventListener('submit', function (event) {

                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${(imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
