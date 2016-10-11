module AmmaOrder.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class OrderFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, ORDER_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, ORDER_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-order')
        .controller('AmmaOrderFormController', OrderFormController);
}

