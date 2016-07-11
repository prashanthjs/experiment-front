module seedModule {

    import DataService = seed.DataService;
    export class SeedPageController {
        public testData = ['triangular', 'is', 'great'];

        /* @ngInject */
        constructor($state:angular.ui.IState, dataService:DataService) {
           dataService.test();
        }

    }

    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);
}
