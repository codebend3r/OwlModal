var CS = {};


CS.init = function () {

    ko.applyBindings(CS.ViewModel());

    CS.initSwipe();

};

CS.initSwipe = function() {

    $('.target').owlmodal({
    	revealWhenClicked: ['.open-modal-button']
    });

};
