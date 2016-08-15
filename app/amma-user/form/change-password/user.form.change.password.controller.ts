module AmmaUser.Form.ChangePassword {

    import FormContentController = AmmaCommon.Common.FormContentController;

    interface  IFormScope extends AmmaCommon.Common.IFormScope {
        ammaUserChangePasswordForm: ng.IFormController
    }
    export class UserFormChangePasswordController extends FormContentController {

        protected $scope: IFormScope;
        public model;

        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, $rootScope, USER_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, $rootScope, USER_FORM_EVENT_NAME);
        }

        submit() {
            this.loaderService.setLoaderActive(true);
            this.commandService.changePassword(this.eventData.id, this.model.password).then((resp)=> {
                this.model = {};
                this.messageService.displaySuccessMessage('Successfully saved');
                this.loaderService.setLoaderActive(false);
                this.$scope.ammaUserChangePasswordForm.$setPristine();
                this.$scope.ammaUserChangePasswordForm.$setUntouched();
            }, (error)=> {
                this.loaderService.setLoaderActive(false);
                this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
            });
        }

    }
    angular
        .module('amma-user')
        .controller('AmmaUserFormChangePasswordController', UserFormChangePasswordController);
}

