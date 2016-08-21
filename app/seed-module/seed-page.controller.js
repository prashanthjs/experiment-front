var seedModule;
(function (seedModule) {
    var SeedPageController = (function () {
        /* @ngInject */
        function SeedPageController($state, dataService) {
            this.testData = ['triangular', 'is', 'great'];
            this.category = [];
            dataService.test();
        }
        return SeedPageController;
    }());
    seedModule.SeedPageController = SeedPageController;
    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);
})(seedModule || (seedModule = {}));
