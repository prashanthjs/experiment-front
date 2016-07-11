module AmmaStore.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import StoreGridService = AmmaStore.Common.StoreGridService;
    import StoreRestService = AmmaStore.Common.StoreRestService;
    import StoreCommandService = AmmaStore.Common.StoreCommandService;
    export class StoreListController extends BaseController {

        public gridOptions:Object;
        public grid;

        /* @ngInject */
        constructor(AmmaStoreCommandService:StoreCommandService, AmmaMessageService) {
            super(AmmaMessageService);
            this.gridOptions = AmmaStoreCommandService.getGridOptions();
        }
        
    }
    angular
        .module('amma-store')
        .controller('AmmaStoreListController', StoreListController);
}

