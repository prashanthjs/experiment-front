var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var Form;
    (function (Form) {
        var ChangePassword;
        (function (ChangePassword) {
            var FormContentController = AmmaCommon.Common.FormContentController;
            var UserFormChangePasswordController = (function (_super) {
                __extends(UserFormChangePasswordController, _super);
                /* @ngInject */
                function UserFormChangePasswordController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, $rootScope, USER_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, $rootScope, USER_FORM_EVENT_NAME);
                }
                UserFormChangePasswordController.prototype.submit = function () {
                    var _this = this;
                    this.loaderService.setLoaderActive(true);
                    this.commandService.changePassword(this.eventData.id, this.model.password).then(function (resp) {
                        _this.model = {};
                        _this.messageService.displaySuccessMessage('Successfully saved');
                        _this.loaderService.setLoaderActive(false);
                        _this.$scope.ammaUserChangePasswordForm.$setPristine();
                        _this.$scope.ammaUserChangePasswordForm.$setUntouched();
                    }, function (error) {
                        _this.loaderService.setLoaderActive(false);
                        _this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
                    });
                };
                return UserFormChangePasswordController;
            }(FormContentController));
            ChangePassword.UserFormChangePasswordController = UserFormChangePasswordController;
            angular
                .module('amma-user')
                .controller('AmmaUserFormChangePasswordController', UserFormChangePasswordController);
        })(ChangePassword = Form.ChangePassword || (Form.ChangePassword = {}));
    })(Form = AmmaUser.Form || (AmmaUser.Form = {}));
})(AmmaUser || (AmmaUser = {}));
