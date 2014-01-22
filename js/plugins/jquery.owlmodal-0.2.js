/*!
 * pluginName: OwlModal
 * author: Chester Rivas
 * website: crivas.net
 * description: modal jquery plugin, includes built-in lightbox
 * version: 1.0
 * Copyright (c) 2014 Crivas Inc.
 */

var Owl = Owl || {};

Owl.event = Owl.event || {};
Owl.event.OPENMODALCLICKED = "openmodalclicked";
Owl.event.CLOSEMODALCLICKED = "closemodalclicked";
Owl.event.OPENMODALSTARTED = "openmodalstarted";
Owl.event.OPENMODALCOMPLETE = "openmodalcomplete";
Owl.event.CLOSEMODALSTARTED = "closemodalstarted";
Owl.event.CLOSEMODALCOMPLETE = "closemodalcomplete";

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
    $this.initModal = function() {

        var i;

        for ( i = 0; i < settings.revealWhenClicked.length; i++ ) {
            $(settings.revealWhenClicked[i]).on('click', function(){
	            $this.openModal();
            });
        }

        for ( i = 0; i < settings.hideWhenClicked.length; i++ ) {
            $(settings.hideWhenClicked[i]).on('click', function(){
	            $this.closeModal();
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
            top: '50%'
        });
        
        $clonedTarget.addClass(owlModalClassName);
        

    };

	$this.openModal = function() {

        $this.trigger(Owl.event.OPENMODALCLICKED);
        $this.trigger(Owl.event.OPENMODALSTARTED);

        $modal.css({
            left: '50%',
            display: 'block'
        });

        $lightBox.css({
            display: 'block'
        });

        TweenLite.to($modal, settings.animationSpeed, {
            autoAlpha: 1, ease: 'Strong.easeOut', onComplete: $this.onOpenModalComplete
        });

        TweenLite.to($lightBox, settings.animationSpeed, {
            autoAlpha: 1, ease: 'Strong.easeOut'
        });

    };

	$this.closeModal = function() {

        $this.trigger(Owl.event.CLOSEMODALCLICKED);
		$this.trigger(Owl.event.CLOSEMODALSTARTED);

        TweenLite.to($modal, settings.animationSpeed, {
            autoAlpha: 0, ease: 'Strong.easeOut', onComplete: $this.onCloseModalComplete
        });

        TweenLite.to($lightBox, settings.animationSpeed, {
            autoAlpha: 0, ease: 'Strong.easeOut'
        });

        if (settings.clickAnywhereToClose) {
            $('body').off('click');
        }

    };

	$this.onOpenModalComplete = function() {
        $this.trigger(Owl.event.OPENMODALCOMPLETE);
        if (settings.clickAnywhereToClose) {
            $('body').on('click', $this.closeModal);
        }
    };

	$this.onCloseModalComplete = function() {
        $this.trigger(Owl.event.CLOSEMODALCOMPLETE);
        $modal.css({
            left: '-500%'
        });
    };

	$this.initModal();

};