module AmmaProductOrderStatus.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class ProductOrderStatusGridService extends GridService {
        /** @ngInject */
        constructor(AmmaProductOrderStatusCommandService:CommandService, AmmaProductOrderStatusGridSchemaValue:Object) {
            super(AmmaProductOrderStatusCommandService, AmmaProductOrderStatusGridSchemaValue);
        }
    }
    angular.module('amma-product-order-status')
        .service('AmmaProductOrderStatusGridService', ProductOrderStatusGridService);
}
