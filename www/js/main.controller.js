(function() {
'use strict';

    angular
        .module('main')
        .controller('MainController', MainController);

    MainController.$inject = [];
    function MainController() {
        var mainVm = this;
        
        mainVm.text = "Hello Main";
  
    }
})();
