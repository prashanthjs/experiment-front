module AmmaUserGroup.Form.Main {

    import FormContentController = AmmaCommon.Common.FormContentController;
    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    export class UserGroupFormMainController extends FormContentController {
        protected roleCommandService;
        public roles;
        /* @ngInject */
        constructor($scope:IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserGroupCommandService, AmmaRoleCommandService:CommandService) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserGroupCommandService);
            this.roleCommandService = AmmaRoleCommandService;
        }

        init() {
            super.init();
            this.loadRoles();
        }

        loadRoles() {
            this.roleCommandService.getList().then((response)=> {
                this.roles = response;
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
            });
        }

        toggle(item) {

            if (!this.model.roles) {
                this.model.roles = [];
            }
            const idx = this.model.roles.indexOf(this.model.roles);
            if (idx > -1) {
                this.model.roles.splice(idx, 1);
            }
            else {
                this.model.roles.push(item);
            }
        }

        exists(item) {
            if (this.model.roles && this.model.roles.length) {
                return this.model.roles.indexOf(item) > -1;
            }
            return false;

        }

    }

    angular
        .module('amma-user-group')
        .controller('AmmaUserGroupFormMainController', UserGroupFormMainController);
}

