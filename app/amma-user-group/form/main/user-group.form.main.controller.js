var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormContentController = AmmaCommon.Common.FormContentController;
            var UserGroupFormMainController = (function (_super) {
                __extends(UserGroupFormMainController, _super);
                /* @ngInject */
                function UserGroupFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserGroupCommandService, AmmaRoleCommandService) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserGroupCommandService);
                    this.roleCommandService = AmmaRoleCommandService;
                }
                UserGroupFormMainController.prototype.init = function () {
                    _super.prototype.init.call(this);
                    this.loadRoles();
                };
                UserGroupFormMainController.prototype.loadRoles = function () {
                    var _this = this;
                    this.roleCommandService.getList().then(function (response) {
                        _this.roles = response;
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                    });
                };
                UserGroupFormMainController.prototype.toggle = function (item) {
                    if (!this.model.roles) {
                        this.model.roles = [];
                    }
                    var idx = this.model.roles.indexOf(this.model.roles);
                    if (idx > -1) {
                        this.model.roles.splice(idx, 1);
                    }
                    else {
                        this.model.roles.push(item);
                    }
                };
                UserGroupFormMainController.prototype.exists = function (item) {
                    if (this.model.roles && this.model.roles.length) {
                        return this.model.roles.indexOf(item) > -1;
                    }
                    return false;
                };
                return UserGroupFormMainController;
            }(FormContentController));
            Main.UserGroupFormMainController = UserGroupFormMainController;
            angular
                .module('amma-user-group')
                .controller('AmmaUserGroupFormMainController', UserGroupFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaUserGroup.Form || (AmmaUserGroup.Form = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
