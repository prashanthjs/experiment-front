module AmmaStore.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import StoreGridService = AmmaStore.Common.StoreGridService;
    import StoreRestService = AmmaStore.Common.StoreRestService;
    import StoreCommandService = AmmaStore.Common.StoreCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class StoreListController extends ListController {

        public gridOptions:Object;
        public grid;
        public commandService:StoreCommandService;

        /* @ngInject */
        constructor(AmmaStoreGridService:StoreGridService, AmmaStoreCommandService:StoreCommandService, AmmaMessageService, $state) {
            super(AmmaStoreGridService, AmmaStoreCommandService, AmmaMessageService, $state);
        }

    }
    angular
        .module('amma-store')
        .controller('AmmaStoreListController', StoreListController);
}

