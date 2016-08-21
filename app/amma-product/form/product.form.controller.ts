module AmmaProduct.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class ProductFormController extends FormBaseController {
        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, PRODUCT_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, PRODUCT_FORM_EVENT_NAME);
        }
    }
    angular
        .module('amma-product')
        .controller('AmmaProductFormController', ProductFormController);
}

