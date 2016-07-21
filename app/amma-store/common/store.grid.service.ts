module AmmaStore.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class StoreGridService extends GridService {
        /** @ngInject */
        constructor(AmmaStoreCommandService:CommandService, AmmaStoreGridSchemaValue:Object) {
            super(AmmaStoreCommandService, AmmaStoreGridSchemaValue);
        }
    }
    
    angular.module('amma-store')
        .service('AmmaStoreGridService', StoreGridService);
}
