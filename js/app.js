! function(t) {
    var e = {};

    function s(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, s), i.l = !0, i.exports
    }
    s.m = t, s.c = e, s.d = function(t, e, o) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (s.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) s.d(o, i, function(e) {
                return t[e]
            }.bind(null, i));
        return o
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "", s(s.s = 0)
}([function(t, e, s) {
    s(1), t.exports = s(2)
}, function(t, e) {
    console.log("file 1"), $((function() {
        var t = $("#bannerSlider"),
            e = $("#productSlider"),
            s = $("#producSlider"),
            o = $("#produSlider"),
            i = $("#prodSlider"),
            r = $("#proSlider"),
            n = $("#prSlider"),
            a = $("#popularSlider"),
            l = $("#populaSlider"),
            d = $("#populSlider"),
            c = $("#popuSlider"),
            p = $("#popSlider"),
            _ = $("#poSlider");
        t.slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !0,
            autoplay: !0,
            autoplaySpeed: 6e3
        }), e.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), s.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), o.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), i.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), r.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), n.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), a.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), l.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), d.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), c.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), p.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), _.slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: !1,
            arrows: !0,
            dots: !1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    arrows: !1
                }
            }, {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 592,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), $(".search__tabs-link").on("click", (function(t) {
            t.preventDefault(), $(".search__tabs-link").removeClass("search__tabs-link--active"), $(".search__content-item").removeClass("search__content-item--active"), $(this).addClass("search__tabs-link--active"), $($(this).attr("href")).addClass("search__content-item--active")
        })), $(".tab").on("click", (function(t) {
            t.preventDefault(), $(".tab").removeClass("tab--active"), $(".tabs__content").removeClass("tabs__content--active"), $(this).addClass("tab--active"), $($(this).attr("href")).addClass("tabs__content--active"), $(".products__slider").slick("setPosition")
        })), $(".popular").on("click", (function(t) {
            t.preventDefault(), $(".popular").removeClass("popular--active"), $(".popular__content").removeClass("popular__content--active"), $(this).addClass("popular--active"), $($(this).attr("href")).addClass("popular__content--active"), $(".products__slider").slick("setPosition")
        })), $(".catalog__tab").on("click", (function(t) {
            t.preventDefault(), $(".catalog__tab").removeClass("catalog__tab--active"), $(".catalog__tab-content").removeClass("catalog__tab-content--active"), $(this).addClass("catalog__tab--active"), $($(this).attr("href")).addClass("catalog__tab-content--active")
        })), $(".product-card__tab").on("click", (function(t) {
            t.preventDefault(), $(".product-card__tab").removeClass("product-card__tab--active"), $(".product-card__contents").removeClass("product-card__contents--active"), $(this).addClass("product-card__tab--active"), $($(this).attr("href")).addClass("product-card__contents--active")
        })), $(".product-description__tab").on("click", (function(t) {
            t.preventDefault(), $(".product-description__tab").removeClass("product-description__tab--active"), $(".product-description__content").removeClass("product-description__content--active"), $(this).addClass("product-description__tab--active"), $($(this).attr("href")).addClass("product-description__content--active")
        })), $(".products__link-heart").on("click", (function(t) {
            t.preventDefault(), $(this).toggleClass("products__link-heart--active")
        })), $(".filter-style").styler(), $(".aside__filter-title, .filter-extra").on("click", (function() {
            $(this).toggleClass("aside__filter-title--active"), $(this).next().slideToggle("200")
        })), $(".js-range-slider").ionRangeSlider(), $(".catalog__filter-btngrid").on("click", (function() {
            $(this).addClass("catalog__filter-button--active"), $(".catalog__filter-btnline").removeClass("catalog__filter-button--active"), $(".products__wrapper-link").removeClass("products__wrapper-link--line")
        })), $(".catalog__filter-btnline").on("click", (function() {
            $(this).addClass("catalog__filter-button--active"), $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active"), $(".products__wrapper-link").addClass("products__wrapper-link--line")
        })), $("#rateYo").rateYo({
            starWidth: "30px",
            ratedFill: "#1C62CD",
            spacing: "7px"
        }), $(".menu__btn").on("click", (function() {
            $(".menu__mobile").toggleClass("menu__mobile--active")
        }))
    }))
}, function(t, e) {
    console.log("file 2")
}]);