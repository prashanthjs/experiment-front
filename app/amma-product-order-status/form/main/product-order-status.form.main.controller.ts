module AmmaProductOrderStatus.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderStatusFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderStatusCommandService, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderStatusCommandService, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME);
        }
    }

    angular
        .module('amma-product-order-status')
        .controller('AmmaProductOrderStatusFormMainController', ProductOrderStatusFormMainController);
}

