$(function(){
    $('.banner-section__slider').slick({
        dots: false,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow-right"></button>'
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');
    });

    $('.product-item__favorite').on('click', function() {
        $('.product-item__favorite').toggleClass('product-item__favorite-active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="banner-section__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="banner-section__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow-right"></button>'
    });

    $('.product-item__favorite').on('click', function() {
        $('.product-item__favorite').toggleClass('product-item__favorite-active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="banner-section__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="banner-section__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow-right"></button>'
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

});