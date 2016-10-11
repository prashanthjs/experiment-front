module AmmaPaymentMethod.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class PaymentMethodFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaPaymentMethodCommandService, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaPaymentMethodCommandService, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME);
        }
    }

    angular
        .module('amma-payment-method')
        .controller('AmmaPaymentMethodFormMainController', PaymentMethodFormMainController);
}

