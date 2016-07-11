module AmmaStore.Common {
    import StoreGridService = AmmaStore.Common.StoreGridService;
    import MessageService = AmmaCommon.Services.MessageService;
    import RestService = AmmaCommon.Common.RestService;
    import GridService = AmmaCommon.Common.GridService;
    export class StoreCommandService {

        protected gridService:GridService;
        protected restService:RestService;
        /* @ngInject */
        constructor(AmmaStoreRestService:RestService, AmmaStoreGridService:StoreGridService) {
            this.setGridService(AmmaStoreGridService);
            this.setRestService(AmmaStoreRestService);
        }

        getGridService():GridService {
            return this.gridService;
        }

        setGridService(gridService:GridService) {
            this.gridService = gridService;
        }

        getRestService():RestService {

            return this.restService;
        }

        setRestService(restService:RestService) {
            this.restService = restService;
        }

        getGridOptions():Object {
            return this.getGridService().getGridOptions();
        }
    }

    angular.module('amma-store')
        .service('AmmaStoreCommandService', StoreCommandService);
}
