module AmmaUser.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import UserGridService = AmmaUser.Common.UserGridService;
    import UserRestService = AmmaUser.Common.UserRestService;
    import UserCommandService = AmmaUser.Common.UserCommandService;
    export class UserListController extends BaseController {

        public gridOptions:Object;
        public grid;
        public commandService:UserCommandService;

        /* @ngInject */
        constructor(AmmaUserGridService:UserGridService, AmmaUserCommandService:UserCommandService, AmmaMessageService) {
            super(AmmaMessageService);
            this.gridOptions = AmmaUserGridService.getGridOptions();
            this.commandService = AmmaUserCommandService;
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
        .module('amma-user')
        .controller('AmmaUserListController', UserListController);
}

