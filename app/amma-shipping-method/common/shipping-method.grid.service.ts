module AmmaShippingMethod.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class ShippingMethodGridService extends GridService {
        /** @ngInject */
        constructor(AmmaShippingMethodCommandService:CommandService, AmmaShippingMethodGridSchemaValue:Object) {
            super(AmmaShippingMethodCommandService, AmmaShippingMethodGridSchemaValue);
        }
    }
    angular.module('amma-shipping-method')
        .service('AmmaShippingMethodGridService', ShippingMethodGridService);
}
