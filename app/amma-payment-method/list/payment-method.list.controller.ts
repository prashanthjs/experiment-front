module AmmaPaymentMethod.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import PaymentMethodGridService = AmmaPaymentMethod.Common.PaymentMethodGridService;
    import PaymentMethodRestService = AmmaPaymentMethod.Common.PaymentMethodRestService;
    import PaymentMethodCommandService = AmmaPaymentMethod.Common.PaymentMethodCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class PaymentMethodListController extends ListController {

        /* @ngInject */
        constructor(AmmaPaymentMethodGridService:PaymentMethodGridService, AmmaPaymentMethodCommandService:PaymentMethodCommandService, AmmaMessageService, $state) {
            super(AmmaPaymentMethodGridService, AmmaPaymentMethodCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-payment-method')
        .controller('AmmaPaymentMethodListController', PaymentMethodListController);
}

