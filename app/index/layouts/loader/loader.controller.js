(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('LoaderController', LoaderController);

    /* @ngInject */
    function LoaderController(triSettings) {
        var vm = this;

        vm.triSettings = triSettings;
    }
})();
