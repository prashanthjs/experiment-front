module AmmaProductOrder.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: any, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderCommandService, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderCommandService, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME);
            $scope.updateOrderPrice = this.updateOrderPrice;
        }

        updateOrderPrice = ()=> {
            this.commandService.calcOrderPrice(this.model);
        };
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainController', ProductOrderFormMainController);
}

