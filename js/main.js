jQuery.fn.exists = function () {
    return $(this).length;
};

jQuery(document).ready(function ($) {

        $(".search-icon").click(function () {
            $(".search").fadeToggle();
        });

    var mainCarousel = $('.owl-carousel-about');

    mainCarousel.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    var mainCarousel = $('.main-carousel');

    mainCarousel.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        dotsContainer: '.main-carousel-dots',
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.main-carousel-prev').click(function () {
        mainCarousel.trigger('prev.owl.carousel');
    })

    $('.main-carousel-next').click(function () {
        mainCarousel.trigger('next.owl.carousel');
    })

    $('.about-arms-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.presentation-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.item-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoWidth: true,
        center: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            }
        }
    });

    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });

    $('.tabs-caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    window.onload = function () {
        initMap();
    };

    var windowHeight = $(window).height();
    var video = $('.video');
    $(video).height(windowHeight);

    $(window).on('resize', function () {
        windowHeight = $(window).height();
        $(video).height(windowHeight);
    });

    $('.mobile-burger').click(function (e) {
        $(this).toggleClass('open');
        $('.header-menu').slideToggle(300);
    });

    $('.up').click(function () {
        $('html, body').animate({scrollTop: $('.banner').outerHeight()}, 900);
    });

    // var aside = $('.aside');
    // var asideTop = $(aside).offset().top;
    // var asideHeight = $(aside).outerHeight();
    // var asideTopHeight = asideTop + asideHeight;
    //
    // var articles = $('.articles');
    // var articlesTop = $(articles).offset().top;
    // var articlesHeight = $(articles).outerHeight();
    // var articlesTopHeight = articlesTop + articlesHeight;
    // var up = $('.up');
    //
    // if (( $(this).scrollTop() > (asideTopHeight - $(this).height() + 200) && ( $(this).scrollTop() < (articlesTopHeight - $(this).height()) ) )) {
    //     $(up).fadeIn(100);
    // } else {
    //     $(up).fadeOut(100);
    // }
    //
    // $(window).on('scroll', function () {
    //     if (( $(this).scrollTop() > (asideTopHeight - $(this).height() + 200) && ( $(this).scrollTop() < (articlesTopHeight - $(this).height()) ) )) {
    //         $(up).fadeIn(100);
    //     } else {
    //         $(up).fadeOut(100);
    //     }
    // });

    function initMap() {

        var curPosition = new google.maps.LatLng(54.7191549, 37.1409915);

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            scrollwheel: false,
            center: curPosition,
            scrollwheel: false,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ],

        });


        (function () {
            var b = true, f = false;

            function g(a) {
                var c = a || {};
                this.d = this.c = f;
                if (a.visible == undefined) a.visible = b;
                if (a.shadow == undefined) a.shadow = "7px -3px 5px rgba(88,88,88,0.7)";
                if (a.anchor == undefined) a.anchor = i.BOTTOM;
                this.setValues(c)
            }

            g.prototype = new google.maps.OverlayView;
            window.RichMarker = g;
            g.prototype.getVisible = function () {
                return this.get("visible")
            };
            g.prototype.getVisible = g.prototype.getVisible;
            g.prototype.setVisible = function (a) {
                this.set("visible", a)
            };
            g.prototype.setVisible = g.prototype.setVisible;
            g.prototype.s = function () {
                if (this.c) {
                    this.a.style.display = this.getVisible() ? "" : "none";
                    this.draw()
                }
            };
            g.prototype.visible_changed = g.prototype.s;
            g.prototype.setFlat = function (a) {
                this.set("flat", !!a)
            };
            g.prototype.setFlat = g.prototype.setFlat;
            g.prototype.getFlat = function () {
                return this.get("flat")
            };
            g.prototype.getFlat = g.prototype.getFlat;
            g.prototype.p = function () {
                return this.get("width")
            };
            g.prototype.getWidth = g.prototype.p;
            g.prototype.o = function () {
                return this.get("height")
            };
            g.prototype.getHeight = g.prototype.o;
            g.prototype.setShadow = function (a) {
                this.set("shadow", a);
                this.g()
            };
            g.prototype.setShadow = g.prototype.setShadow;
            g.prototype.getShadow = function () {
                return this.get("shadow")
            };
            g.prototype.getShadow = g.prototype.getShadow;
            g.prototype.g = function () {
                if (this.c) this.a.style.boxShadow = this.a.style.webkitBoxShadow = this.a.style.MozBoxShadow = this.getFlat() ? "" : this.getShadow()
            };
            g.prototype.flat_changed = g.prototype.g;
            g.prototype.setZIndex = function (a) {
                this.set("zIndex", a)
            };
            g.prototype.setZIndex = g.prototype.setZIndex;
            g.prototype.getZIndex = function () {
                return this.get("zIndex")
            };
            g.prototype.getZIndex = g.prototype.getZIndex;
            g.prototype.t = function () {
                if (this.getZIndex() && this.c) this.a.style.zIndex = this.getZIndex()
            };
            g.prototype.zIndex_changed = g.prototype.t;
            g.prototype.getDraggable = function () {
                return this.get("draggable")
            };
            g.prototype.getDraggable = g.prototype.getDraggable;
            g.prototype.setDraggable = function (a) {
                this.set("draggable", !!a)
            };
            g.prototype.setDraggable = g.prototype.setDraggable;
            g.prototype.k = function () {
                if (this.c) this.getDraggable() ? j(this, this.a) : k(this)
            };
            g.prototype.draggable_changed = g.prototype.k;
            g.prototype.getPosition = function () {
                return this.get("position")
            };
            g.prototype.getPosition = g.prototype.getPosition;
            g.prototype.setPosition = function (a) {
                this.set("position", a)
            };
            g.prototype.setPosition = g.prototype.setPosition;
            g.prototype.q = function () {
                this.draw()
            };
            g.prototype.position_changed = g.prototype.q;
            g.prototype.l = function () {
                return this.get("anchor")
            };
            g.prototype.getAnchor = g.prototype.l;
            g.prototype.r = function (a) {
                this.set("anchor", a)
            };
            g.prototype.setAnchor = g.prototype.r;
            g.prototype.n = function () {
                this.draw()
            };
            g.prototype.anchor_changed = g.prototype.n;
            function l(a, c) {
                var d = document.createElement("DIV");
                d.innerHTML = c;
                if (d.childNodes.length == 1)return d.removeChild(d.firstChild); else {
                    for (var e = document.createDocumentFragment(); d.firstChild;)e.appendChild(d.firstChild);
                    return e
                }
            }

            function m(a, c) {
                if (c)for (var d; d = c.firstChild;)c.removeChild(d)
            }

            g.prototype.setContent = function (a) {
                this.set("content", a)
            };
            g.prototype.setContent = g.prototype.setContent;
            g.prototype.getContent = function () {
                return this.get("content")
            };
            g.prototype.getContent = g.prototype.getContent;
            g.prototype.j = function () {
                if (this.b) {
                    m(this, this.b);
                    var a = this.getContent();
                    if (a) {
                        if (typeof a == "string") {
                            a = a.replace(/^\s*([\S\s]*)\b\s*$/, "$1");
                            a = l(this, a)
                        }
                        this.b.appendChild(a);
                        var c = this;
                        a = this.b.getElementsByTagName("IMG");
                        for (var d = 0, e; e = a[d]; d++) {
                            google.maps.event.addDomListener(e, "mousedown", function (h) {
                                if (c.getDraggable()) {
                                    h.preventDefault && h.preventDefault();
                                    h.returnValue = f
                                }
                            });
                            google.maps.event.addDomListener(e, "load", function () {
                                c.draw()
                            })
                        }
                        google.maps.event.trigger(this, "domready")
                    }
                    this.c &&
                    this.draw()
                }
            };
            g.prototype.content_changed = g.prototype.j;
            function n(a, c) {
                if (a.c) {
                    var d = "";
                    if (navigator.userAgent.indexOf("Gecko/") !== -1) {
                        if (c == "dragging") d = "-moz-grabbing";
                        if (c == "dragready") d = "-moz-grab"
                    } else if (c == "dragging" || c == "dragready") d = "move";
                    if (c == "draggable") d = "pointer";
                    if (a.a.style.cursor != d) a.a.style.cursor = d
                }
            }

            function o(a, c) {
                if (a.getDraggable())if (!a.d) {
                    a.d = b;
                    var d = a.getMap();
                    a.m = d.get("draggable");
                    d.set("draggable", f);
                    a.h = c.clientX;
                    a.i = c.clientY;
                    n(a, "dragready");
                    a.a.style.MozUserSelect = "none";
                    a.a.style.KhtmlUserSelect = "none";
                    a.a.style.WebkitUserSelect = "none";
                    a.a.unselectable = "on";
                    a.a.onselectstart = function () {
                        return f
                    };
                    p(a);
                    google.maps.event.trigger(a, "dragstart")
                }
            }

            function q(a) {
                if (a.getDraggable())if (a.d) {
                    a.d = f;
                    a.getMap().set("draggable", a.m);
                    a.h = a.i = a.m = null;
                    a.a.style.MozUserSelect = "";
                    a.a.style.KhtmlUserSelect = "";
                    a.a.style.WebkitUserSelect = "";
                    a.a.unselectable = "off";
                    a.a.onselectstart = function () {
                    };
                    r(a);
                    n(a, "draggable");
                    google.maps.event.trigger(a, "dragend");
                    a.draw()
                }
            }

            function s(a, c) {
                if (!a.getDraggable() || !a.d) q(a); else {
                    var d = a.h - c.clientX, e = a.i - c.clientY;
                    a.h = c.clientX;
                    a.i = c.clientY;
                    d = parseInt(a.a.style.left, 10) - d;
                    e = parseInt(a.a.style.top, 10) - e;
                    a.a.style.left = d + "px";
                    a.a.style.top = e + "px";
                    var h = t(a);
                    a.setPosition(a.getProjection().fromDivPixelToLatLng(new google.maps.Point(d - h.width, e - h.height)));
                    n(a, "dragging");
                    google.maps.event.trigger(a, "drag")
                }
            }

            function k(a) {
                if (a.f) {
                    google.maps.event.removeListener(a.f);
                    delete a.f
                }
                n(a, "")
            }

            function j(a, c) {
                if (c) {
                    a.f = google.maps.event.addDomListener(c, "mousedown", function (d) {
                        o(a, d)
                    });
                    n(a, "draggable")
                }
            }

            function p(a) {
                if (a.a.setCapture) {
                    a.a.setCapture(b);
                    a.e = [google.maps.event.addDomListener(a.a, "mousemove", function (c) {
                        s(a, c)
                    }, b), google.maps.event.addDomListener(a.a, "mouseup", function () {
                        q(a);
                        a.a.releaseCapture()
                    }, b)]
                } else a.e = [google.maps.event.addDomListener(window, "mousemove", function (c) {
                    s(a, c)
                }, b), google.maps.event.addDomListener(window, "mouseup", function () {
                    q(a)
                }, b)]
            }

            function r(a) {
                if (a.e) {
                    for (var c = 0, d; d = a.e[c]; c++)google.maps.event.removeListener(d);
                    a.e.length = 0
                }
            }

            function t(a) {
                var c = a.l();
                if (typeof c == "object")return c;
                var d = new google.maps.Size(0, 0);
                if (!a.b)return d;
                var e = a.b.offsetWidth;
                a = a.b.offsetHeight;
                switch (c) {
                    case i.TOP:
                        d.width = -e / 2;
                        break;
                    case i.TOP_RIGHT:
                        d.width = -e;
                        break;
                    case i.LEFT:
                        d.height = -a / 2;
                        break;
                    case i.MIDDLE:
                        d.width = -e / 2;
                        d.height = -a / 2;
                        break;
                    case i.RIGHT:
                        d.width = -e;
                        d.height = -a / 2;
                        break;
                    case i.BOTTOM_LEFT:
                        d.height = -a;
                        break;
                    case i.BOTTOM:
                        d.width = -e / 2;
                        d.height = -a;
                        break;
                    case i.BOTTOM_RIGHT:
                        d.width = -e;
                        d.height = -a
                }
                return d
            }

            g.prototype.onAdd = function () {
                if (!this.a) {
                    this.a = document.createElement("DIV");
                    this.a.style.position = "absolute"
                }
                if (this.getZIndex()) this.a.style.zIndex = this.getZIndex();
                this.a.style.display = this.getVisible() ? "" : "none";
                if (!this.b) {
                    this.b = document.createElement("DIV");
                    this.a.appendChild(this.b);
                    var a = this;
                    google.maps.event.addDomListener(this.b, "click", function () {
                        google.maps.event.trigger(a, "click")
                    });
                    google.maps.event.addDomListener(this.b, "mouseover", function () {
                        google.maps.event.trigger(a, "mouseover")
                    });
                    google.maps.event.addDomListener(this.b, "mouseout", function () {
                        google.maps.event.trigger(a, "mouseout")
                    })
                }
                this.c = b;
                this.j();
                this.g();
                this.k();
                var c = this.getPanes();
                c && c.overlayImage.appendChild(this.a);
                google.maps.event.trigger(this, "ready")
            };
            g.prototype.onAdd = g.prototype.onAdd;
            g.prototype.draw = function () {
                if (!(!this.c || this.d)) {
                    var a = this.getProjection();
                    if (a) {
                        var c = this.get("position");
                        a = a.fromLatLngToDivPixel(c);
                        c = t(this);
                        this.a.style.top = a.y + c.height + "px";
                        this.a.style.left = a.x + c.width + "px";
                        a = this.b.offsetHeight;
                        c = this.b.offsetWidth;
                        c != this.get("width") && this.set("width", c);
                        a != this.get("height") && this.set("height", a)
                    }
                }
            };
            g.prototype.draw = g.prototype.draw;
            g.prototype.onRemove = function () {
                this.a && this.a.parentNode && this.a.parentNode.removeChild(this.a);
                k(this)
            };
            g.prototype.onRemove = g.prototype.onRemove;
            var i = {
                TOP_LEFT: 1,
                TOP: 2,
                TOP_RIGHT: 3,
                LEFT: 4,
                MIDDLE: 5,
                RIGHT: 6,
                BOTTOM_LEFT: 7,
                BOTTOM: 8,
                BOTTOM_RIGHT: 9
            };
            window.RichMarkerPosition = i;
        })();


        markerCompany = new RichMarker({
            position: curPosition,
            map: map,
            shadow: 'none',
            content: '<div class="html-marker"><img src="./img/marker.png" alt=""></div>'
        });

        // infowindow = new google.maps.InfoWindow();

        // google.maps.event.addListener(markerCompany, 'click', function() {
        //   infowindow.setContent("Lobaev Arms");
        //   infowindow.open(map, this);
        // });


    }

});