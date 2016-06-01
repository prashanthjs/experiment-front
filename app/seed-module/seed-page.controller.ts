module seedModule {

    export class SeedPageController {
        public testData = ['triangular', 'is', 'great'];

        /* @ngInject */
        constructor($state:angular.ui.IState) {

        }

    }

    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);
}
