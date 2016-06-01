var seedModule;
(function (seedModule) {
    var SeedPageController = (function () {
        /* @ngInject */
        function SeedPageController($state) {
            this.testData = ['triangular', 'is', 'great'];
        }
        return SeedPageController;
    }());
    seedModule.SeedPageController = SeedPageController;
    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);
})(seedModule || (seedModule = {}));
