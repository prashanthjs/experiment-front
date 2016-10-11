module AmmaOrderStatus.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class OrderStatusFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, ORDER_STATUS_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, ORDER_STATUS_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-order-status')
        .controller('AmmaOrderStatusFormController', OrderStatusFormController);
}

