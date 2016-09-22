module AmmaProductOrder.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class ProductOrderFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormController', ProductOrderFormController);
}

