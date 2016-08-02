module AmmaStore.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class StoreFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope) {
            super(id, $mdDialog, $scope);
        }

    }
    angular
        .module('amma-store')
        .controller('AmmaStoreFormController', StoreFormController);
}

