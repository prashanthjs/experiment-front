module AmmaProductOrder.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class ProductOrderGridService extends GridService {
        /** @ngInject */
        constructor(AmmaProductOrderCommandService:CommandService, AmmaProductOrderGridSchemaValue:Object) {
            super(AmmaProductOrderCommandService, AmmaProductOrderGridSchemaValue);
        }
    }
    angular.module('amma-product-order')
        .service('AmmaProductOrderGridService', ProductOrderGridService);
}
