module AmmaOrderStatus.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class OrderStatusFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaOrderStatusCommandService, $rootScope, ORDER_STATUS_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaOrderStatusCommandService, $rootScope, ORDER_STATUS_FORM_EVENT_NAME);
        }
    }

    angular
        .module('amma-order-status')
        .controller('AmmaOrderStatusFormMainController', OrderStatusFormMainController);
}

