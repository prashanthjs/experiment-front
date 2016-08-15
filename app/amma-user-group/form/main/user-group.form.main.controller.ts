module AmmaUserGroup.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class UserGroupFormMainController extends FormMainContentController {
        protected roleCommandService;
        public roles;
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserGroupCommandService, AmmaRoleCommandService: CommandService, $rootScope, USER_GROUP_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserGroupCommandService, $rootScope, USER_GROUP_FORM_EVENT_NAME);
            this.roleCommandService = AmmaRoleCommandService;
        }

        handleInit() {
            this.loadRoles();
        }

        loadRoles() {
            this.roleCommandService.getList().then((response)=> {
                this.roles = response;
                this.loadModel();
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
            });
        }

        toggle(item) {
            if (!this.model.roles) {
                this.model.roles = [];
            }
            const idx = this.model.roles.indexOf(item);
            if (idx > -1) {
                this.model.roles.splice(idx, 1);
            }
            else {
                this.model.roles.push(item);
            }
        }

        exists(item) {

            if (this.model && this.model.roles && this.model.roles.length) {
                return this.model.roles.indexOf(item) > -1;
            }
            return false;

        }

    }

    angular
        .module('amma-user-group')
        .controller('AmmaUserGroupFormMainController', UserGroupFormMainController);
}

