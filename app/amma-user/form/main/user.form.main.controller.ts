module AmmaUser.Form.Main {

    import FormContentController = AmmaCommon.Common.FormContentController;
    import IFormScope = AmmaCommon.Common.IFormScope;
    export class UserFormMainController extends FormContentController {

        private userGroupCommandService;
        private storeCommandService;

        public stores;
        public userGroups;

        /* @ngInject */
        constructor($scope:IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, AmmaUserGroupCommandService, AmmaStoreCommandService) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService);
            this.userGroupCommandService = AmmaUserGroupCommandService;
            this.storeCommandService = AmmaStoreCommandService;
        }

        init() {
            super.init();
            this.loadUserGroups();
            this.loadStores();
        }

        loadUserGroups() {
            this.userGroupCommandService.getList().then((response)=> {
                console.log(response);
                this.userGroups = response;
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve User Groups:' + error.data.message, error);
            });
        }

        loadStores(){
            this.storeCommandService.getList().then((response)=> {
                this.stores = response;
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve Stores:' + error.data.message, error);
            });
        }
    }
    angular
        .module('amma-user')
        .controller('AmmaUserFormMainController', UserFormMainController);
}

