module AmmaUser.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import UserGridService = AmmaUser.Common.UserGridService;
    import UserRestService = AmmaUser.Common.UserRestService;
    import UserCommandService = AmmaUser.Common.UserCommandService;
    import ListController = AmmaCommon.Common.ListController;

    export class UserListController extends ListController {

        protected $state;
        public gridOptions: Object;
        public grid;
        public commandService: UserCommandService;
        public viewRoute = '';


        /* @ngInject */
        constructor(AmmaUserGridService: UserGridService, AmmaUserCommandService: UserCommandService, AmmaMessageService, $state) {
            super(AmmaUserGridService, AmmaUserCommandService, AmmaMessageService, $state);
            this.viewRoute = 'triangular.amma-user-view';
        }

        edit(id: string, event) {
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

        view(id: string, event) {
            this.$state.go(this.viewRoute, {id: id});
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

