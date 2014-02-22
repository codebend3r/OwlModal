var CS = {};


CS.init = function () {

    ko.applyBindings(CS.ViewModel());

    CS.initSwipe();

};

CS.initSwipe = function() {

    $('.target-1').owlmodal({
    	revealElements: ['.open-modal-button-1']
    });

    $('.target-2').owlmodal({
    	revealElements: ['.open-modal-button-2']
    });

    /*
    $('.open-modal-button-2').on('click', function(){
    	debugger;
    	$('.target-2').owlmodal();
    });
	*/

};
