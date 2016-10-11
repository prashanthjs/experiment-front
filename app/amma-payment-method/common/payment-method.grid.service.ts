module AmmaPaymentMethod.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class PaymentMethodGridService extends GridService {
        /** @ngInject */
        constructor(AmmaPaymentMethodCommandService:CommandService, AmmaPaymentMethodGridSchemaValue:Object) {
            super(AmmaPaymentMethodCommandService, AmmaPaymentMethodGridSchemaValue);
        }
    }
    angular.module('amma-payment-method')
        .service('AmmaPaymentMethodGridService', PaymentMethodGridService);
}
