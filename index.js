const mainSlide = new Swiper('.mainSlide', {
    pagination: {
        el: '.swiper-pagination',
        mousewheel: true,
        keyboard: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 2500
    },
    loop: true,
    slidesPerView: 1, //화면 당 이미지 수
    spaceBetween: 20, // 이미지 사이의 간격
    // effect: 'flip', flipEffect: {   slideShadows: false, },
});

// 원하는 이미지로 이동(loop 버전)
const menu = document.querySelectorAll('.menu');
menu.forEach((item, idx) => {
    item.addEventListener('click', () => {
        mainSlide.slideToLoop(idx); // 해당 페이지로 이동
        mainSlide
            .autoplay
            .start(); // 자동 시작
    });
});