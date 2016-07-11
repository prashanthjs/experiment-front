module AmmaStore.Common {
    import GridService = AmmaCommon.Common.GridService;
    export class StoreGridService extends GridService {
        /** @ngInject */
        constructor(AmmaStoreRestService:StoreRestService, AmmaStoreGridSchemaValue:Object) {
            super(AmmaStoreRestService, AmmaStoreGridSchemaValue);
        }
    }
    
    angular.module('amma-store')
        .service('AmmaStoreGridService', StoreGridService);
}
