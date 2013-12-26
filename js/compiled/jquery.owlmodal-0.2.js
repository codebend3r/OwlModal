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

Owl.event = Owl.event || {};
Owl.event.OPENMODALCLICKED = "OPENMODALCLICKED";
Owl.event.CLOSEMODALCLICKED = "CLOSEMODALCLICKED";
Owl.event.OPENMODALCOMPLETE = "OPENMODALCOMPLETE";
Owl.event.CLOSEMODALCOMPLETE = "CLOSEMODALCOMPLETE";

$.fn.owlmodal = function(options) {

    var settings = $.extend({
        // These are the defaults.
        closeElement: null,
        modalWidth: 600,
        modalHeight: 500,
        lightBoxOn: true,
        clickAnywhereToClose: true,
        animationSpeed: .6,
        revealWhenClicked: [],
        hideWhenClicked: []
    }, options);

    var $this = this,
        modalWidth = settings.modalWidth,
        modalHeight = settings.modalHeight,
        lightBoxOn = settings.lightBoxOn,
        owlModalClassName = 'owl-modal',
        $clonedTarget,
        $lightBox,
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
            $lightBox = $('#lightbox');
            $lightBox .css({
                display: 'none',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,.5)',
                width: '100%',
                height: '100%',
                zIndex: 998,
                opacity: 0
            });
        }

        $('body').append("<div id='owlmodal-target'></div>");

        $clonedTarget = $this.clone();
        $this.remove();
        $('#owlmodal-target').append($clonedTarget);
        $modal = $('#owlmodal-target');
        $modal.css({
            position: 'fixed',
            display: 'block',
            opacity: 0,
            zIndex: 999,
            width: modalWidth,
            height: modalHeight,
            margin: -( modalHeight / 2 ) + 'px 0 0' + -( modalWidth / 2 ) + 'px',
            left: '-500%',
            top: '50%',
        });
        
        $clonedTarget.addClass(owlModalClassName);
        

    };

    var showModal = function() {

        $this.trigger(Owl.event.OPENMODALCLICKED);

        $modal.css({
            left: '50%',
            display: 'block'
        });

        $lightBox.css({
            display: 'block'
        });

        TweenLite.to($modal, settings.animationSpeed, {
            autoAlpha: 1, ease: 'Strong.easeOut', onComplete: onOpenModalComplete
        });

        TweenLite.to($lightBox, settings.animationSpeed, {
            autoAlpha: 1, ease: 'Strong.easeOut'
        });

    };

    var closeModal = function() {

        $this.trigger(Owl.event.CLOSEMODALCLICKED);

        TweenLite.to($modal, settings.animationSpeed, {
            autoAlpha: 0, ease: 'Strong.easeOut', onComplete: onCloseModalComplete
        });

        TweenLite.to($lightBox, settings.animationSpeed, {
            autoAlpha: 0, ease: 'Strong.easeOut'
        });

        if (settings.clickAnywhereToClose) {
            $('body').off('click');
        }

    };

    var onOpenModalComplete = function() {
        $this.trigger(Owl.event.OPENMODALCOMPLETE);
        if (settings.clickAnywhereToClose) {
            $('body').on('click', closeModal);
        }
    };

    var onCloseModalComplete = function() {
        $this.trigger(Owl.event.CLOSEMODALCOMPLETE);
        $modal.css({
            left: '-500%'
        });
    };

    initModal();

};