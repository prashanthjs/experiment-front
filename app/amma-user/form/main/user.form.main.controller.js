var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormContentController = AmmaCommon.Common.FormContentController;
            var UserFormMainController = (function (_super) {
                __extends(UserFormMainController, _super);
                /* @ngInject */
                function UserFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, AmmaUserGroupCommandService, AmmaStoreCommandService) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService);
                    this.userGroupCommandService = AmmaUserGroupCommandService;
                    this.storeCommandService = AmmaStoreCommandService;
                }
                UserFormMainController.prototype.init = function () {
                    _super.prototype.init.call(this);
                    this.loadUserGroups();
                    this.loadStores();
                };
                UserFormMainController.prototype.loadUserGroups = function () {
                    var _this = this;
                    this.userGroupCommandService.getList().then(function (response) {
                        console.log(response);
                        _this.userGroups = response;
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve User Groups:' + error.data.message, error);
                    });
                };
                UserFormMainController.prototype.loadStores = function () {
                    var _this = this;
                    this.storeCommandService.getList().then(function (response) {
                        _this.stores = response;
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve Stores:' + error.data.message, error);
                    });
                };
                return UserFormMainController;
            }(FormContentController));
            Main.UserFormMainController = UserFormMainController;
            angular
                .module('amma-user')
                .controller('AmmaUserFormMainController', UserFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaUser.Form || (AmmaUser.Form = {}));
})(AmmaUser || (AmmaUser = {}));
