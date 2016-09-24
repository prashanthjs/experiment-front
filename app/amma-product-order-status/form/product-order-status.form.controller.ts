module AmmaProductOrderStatus.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class ProductOrderStatusFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-product-order-status')
        .controller('AmmaProductOrderStatusFormController', ProductOrderStatusFormController);
}

