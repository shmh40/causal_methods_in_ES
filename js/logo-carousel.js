$(document).ready(function() {
   $('.customer-logos').slick({
       slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
    breakpoint: 768,
    settings: {
        slidesToShow: 3
    }
    }, {
    breakpoint: 520,
    settings: {
        slidesToShow: 2
    }
    }]
});
});