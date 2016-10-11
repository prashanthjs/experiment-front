module AmmaShippingMethod.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ShippingMethodFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaShippingMethodCommandService, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaShippingMethodCommandService, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME);
        }
    }

    angular
        .module('amma-shipping-method')
        .controller('AmmaShippingMethodFormMainController', ShippingMethodFormMainController);
}

