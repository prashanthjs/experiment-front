module AmmaUserGroup.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import UserGroupGridService = AmmaUserGroup.Common.UserGroupGridService;
    import UserGroupRestService = AmmaUserGroup.Common.UserGroupRestService;
    import UserGroupCommandService = AmmaUserGroup.Common.UserGroupCommandService;
    export class UserGroupListController extends BaseController {

        public gridOptions:Object;
        public grid;
        public commandService:UserGroupCommandService;

        /* @ngInject */
        constructor(AmmaUserGroupGridService:UserGroupGridService, AmmaUserGroupCommandService:UserGroupCommandService, AmmaMessageService) {
            super(AmmaMessageService);
            this.gridOptions = AmmaUserGroupGridService.getGridOptions();
            this.commandService = AmmaUserGroupCommandService;
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
        .module('amma-user-group')
        .controller('AmmaUserGroupListController', UserGroupListController);
}

