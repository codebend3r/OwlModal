/*!
 * Owl Modal
 * crivas.net
 *
 * Copyright (c) Chester Rivas 2013
 */

/*
 * Owl Modal is a simple JQuery plugin for opening up a modal with often used options such as lightbox
 *
 * Authors        Chester Rivas
 */

var Owl = Owl || {};

$.fn.owlmodal = function(options) {

    var settings = $.extend({
        // These are the defaults.
        closeElement: null,
        modalWidth: 600,
        modalHeight: 500,
        lightBoxOn: true,
        revealWhenClicked: [],
        hideWhenClicked: ['body']
    }, options);

    var $this = this,
        modalWidth = settings.modalWidth,
        modalHeight = settings.modalHeight,
        lightBoxOn = settings.lightBoxOn,
        owlModalClassName = 'owl-modal',
        $clonedTarget,
        $modal;

    /**
     init plugin

     @method initModal
     **/
    var initModal = function() {

        var i;

        for ( i = 0; i < settings.revealWhenClicked.length; i++ ) {
            $(settings.revealWhenClicked[i]).on('click', function(){
                showModal();
            });
        }

        for ( i = 0; i < settings.hideWhenClicked.length; i++ ) {
            $(settings.hideWhenClicked[i]).on('click', function(){
                closeModal();
            });
        }

        if (lightBoxOn && !$('#lightbox').length > 0) {
            $('body').append("<div id='lightbox'></div>");
            $('#lightbox').css({
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,.5)',
                width: '100%',
                height: '100%',
                zIndex: 998,
                opacity: 0
            });
        }

        $clonedTarget = $this.clone();
        $this.remove();
        $modal = $('body').append($clonedTarget);
        $clonedTarget.css({
            position: 'fixed',
            //display: 'none',
            opacity: 0,
            zIndex: 999,
            width: modalWidth,
            height: modalHeight,
            margin: -( modalHeight / 2 ) + 'px 0 0' + -( modalWidth / 2 ) + 'px',
            left: '50%',
            top: '50%',
        });
        
        $clonedTarget.addClass(owlModalClassName);
        

    };

    var showModal = function() {

        $clonedTarget.css({
            display: 'block',
            opacity: 0
        });

        TweenLite.to($clonedTarget, 2, {
            opacity: 1, ease: 'Strong.easeOut'
        });

        TweenLite.to($('#lightbox'), 2, {
            opacity: 1, ease: 'Strong.easeOut'
        });

    }

    var closeModal = function() {
        //$modal.fadeOut();
        TweenLite.to($clonedTarget, 1, {
            opacity: 0, ease: 'Strong.easeOut', onComplete: function(){
                $clonedTarget.css({
                    display: 'none',
                });
            }
        });
    }

    initModal();

};