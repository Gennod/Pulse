import modals from "./scripts/modals.js";

$(document).ready(function () {
    $('.carousel__slider').slick({
        autoplay: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></button>'
    });
});


modals();