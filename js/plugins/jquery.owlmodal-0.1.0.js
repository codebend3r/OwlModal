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

var Owl = {};

$.fn.owlmodal = function(options) {

    var settings = $.extend({
        // These are the defaults.
        closeElement: null,
        modalWidth: 600,
        modalHeight: 500,
        lightBoxOn: true
    }, options);

    var $this = this,
        modalWidth = settings.modalWidth,
        modalHeight = settings.modalHeight,
        lightBoxOn = settings.lightBoxOn,
        owlModalClassName = 'owl-modal',
        $target = options.target,
        $clonedTarget,
        $modal;

    /**
     init plugin

     @method initModal
     **/
    var initModal = function() {

        console.log('$this = ' + $this);
        console.log('$target = ' + $target);

        if (lightBoxOn && $('#lightbox').length > 0) {
            $('html').html("<div id='lightbox'></div>");
            $('#lightbox').css({
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.5)',
                width: '100%',
                height: '100%',
                zIndex: 998
            });
        }

        $clonedTarget = $target.clone();
        $this.remove();
        $modal = $this.append($clonedTarget);
        $modal.css({
            position: 'absolute',
            display: 'block !important',
            zIndex: 999,
            width: modalWidth,
            height: modalHeight,
            margin: -( modalHeight / 2 ) + 'px 0 0' + -( modalWidth / 2 ) + 'px',
            left: '50%',
            top: '50%'
        });
        $modal.removeClass('hidden');
        $modal.addClass(owlModalClassName);
        $('.modal-close-button').on('click', JE.closeModal);
        $modal.fadeIn();

    };

    initModal();

};