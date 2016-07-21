module AmmaStore.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import StoreGridService = AmmaStore.Common.StoreGridService;
    import StoreRestService = AmmaStore.Common.StoreRestService;
    import StoreCommandService = AmmaStore.Common.StoreCommandService;
    export class StoreListController extends BaseController {

        public gridOptions:Object;
        public grid;
        public commandService:StoreCommandService;

        /* @ngInject */
        constructor(AmmaStoreGridService:StoreGridService, AmmaStoreCommandService:StoreCommandService, AmmaMessageService) {
            super(AmmaMessageService);
            this.gridOptions = AmmaStoreGridService.getGridOptions();
            this.commandService = AmmaStoreCommandService;
        }

        edit(id:string, event) {
            const promise = this.commandService.openForm(id, event);
            promise.then(()=> {
                this.grid.dataSource.read();
            }, ()=> {
                this.grid.dataSource.read();
            });
        }

        create(event) {
            this.edit(null, event);
        }

        remove(id, $event) {
            this.commandService.removeDialog(id, $event).then(()=> {
                this.messageService.displaySuccessMessage('Successfully deleted');
                this.grid.dataSource.read();
            }, (error)=> {
                this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
            })
        }

    }
    angular
        .module('amma-store')
        .controller('AmmaStoreListController', StoreListController);
}

