
$(document).ready(function () {
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: true,
            rows: 2,
            slidesPerRow: 3,
            centerMode: true,
            arrows: true,
            appendArrows: $('.arrows-dots'),
            appendDots: $('.arrows-dots'),

            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: true,
                        infinite: true,
                        dots: true,
                        arrows: true,
                        rows:2,
                        slidesPerRow: 3
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: true,
                        centerMode: true,
                        infinite: true,
                        dots: true,
                        rows:2,
                        slidesPerRow: 2
                    }
                },
                {
                    breakpoint: 376,
                    settings:
                        {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "24px",
                        centerMode: true,
                        infinite: true,
                        dots: true,
                        rows: 1,
                        slidesPerRow: 1,
                        arrows: false
                    }

                }

            ]
        });
});




