let slider = $('.slider__wrap');
slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    arrows: false,
    adaptiveHeight: true,
    // centerMode: true,
    responsive: [{
            breakpoint: 1025,
            settings: {
                adaptiveHeight: false,
            }
        },
        {
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});