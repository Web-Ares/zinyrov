$( function(){

    "use strict";

    $.each( $( '.review' ), function() {
        new Sliders ( $( this ) );
    } );

    $.each( $( '.menu-btn' ), function() {
        new Menu ( $( this ) );
    } );

} );

var Sliders = function( obj ) {

    //private properties
    var _obj = obj,
        _reviewSlider = _obj.find( '.review__swiper'),
        _reviewNextSlider = _obj.find( '.review-button-next'),
        _reviewPrevSlider = _obj.find( '.review-button-prev'),
        _slider;


    //private methods
    var _initSlider = function() {

            _slider = new Swiper ( _reviewSlider, {
                autoplay: 4000,
                speed: 500,
                effect : 'fade',
                loop: true,
                nextButton: _reviewNextSlider,
                prevButton: _reviewPrevSlider
            } );

        },
        _init = function() {
            _initSlider();
        };

    //public properties

    //public methods

    _init();
};

var Menu = function( obj ) {

    //private properties
    var _obj = obj,
        _menu = $( '.menu'),
        _window = $( window );


    //private methods
    var _initSlider = function() {

            _obj.on( {
                'click': function() {

                    if ( _obj.hasClass( 'menu-btn_close' ) ) {

                        _obj.removeClass( 'menu-btn_close' );
                        _menu.removeClass( 'menu_visible' );

                    } else {

                        _obj.addClass( 'menu-btn_close' );
                        _menu.addClass( 'menu_visible' );

                        if ( _menu.height() - 10 > _window.height() ) {
                            _initContentScroll();
                            $( _menu ).getNiceScroll().show();
                        } else {
                            $( _menu ).getNiceScroll().hide();
                        }

                    }
                }
            } ),
                _window.on( {
                    'resize': function() {

                        if ( _menu.height() - 10 > _window.height() && _obj.hasClass( 'menu-btn_close' ) ) {
                            _initContentScroll();
                            $( _menu ).getNiceScroll().show();
                        } else {
                            $( _menu ).getNiceScroll().hide();
                        }

                    }
                } )

        },
        _initContentScroll = function() {
            $( _menu ).niceScroll( {
                autohidemode: 'false',
                cursorborder: '',
                cursorcolor: "#fff",
                cursorwidth: "6px",
                cursorborderradius: "0"
            } );
        },
        _init = function() {
            _initSlider();
        };

    //public properties

    //public methods

    _init();
};