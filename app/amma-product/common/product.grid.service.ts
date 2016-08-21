module AmmaProduct.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class ProductGridService extends GridService {
        /** @ngInject */
        constructor(AmmaProductCommandService:CommandService, AmmaProductGridSchemaValue:Object) {
            super(AmmaProductCommandService, AmmaProductGridSchemaValue);
        }
    }

    angular.module('amma-product')
        .service('AmmaProductGridService', ProductGridService);
}
