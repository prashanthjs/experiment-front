module AmmaOrder.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class OrderGridService extends GridService {
        /** @ngInject */
        constructor(AmmaOrderCommandService:CommandService, AmmaOrderGridSchemaValue:Object) {
            super(AmmaOrderCommandService, AmmaOrderGridSchemaValue);
        }
    }
    angular.module('amma-order')
        .service('AmmaOrderGridService', OrderGridService);
}
