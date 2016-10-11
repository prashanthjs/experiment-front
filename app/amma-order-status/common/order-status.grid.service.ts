module AmmaOrderStatus.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class OrderStatusGridService extends GridService {
        /** @ngInject */
        constructor(AmmaOrderStatusCommandService:CommandService, AmmaOrderStatusGridSchemaValue:Object) {
            super(AmmaOrderStatusCommandService, AmmaOrderStatusGridSchemaValue);
        }
    }
    angular.module('amma-order-status')
        .service('AmmaOrderStatusGridService', OrderStatusGridService);
}
