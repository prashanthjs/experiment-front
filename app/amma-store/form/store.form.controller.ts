module AmmaStore.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class StoreFormController extends FormBaseController {

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, STORE_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, STORE_FORM_EVENT_NAME);
        }

    }
    angular
        .module('amma-store')
        .controller('AmmaStoreFormController', StoreFormController);
}

