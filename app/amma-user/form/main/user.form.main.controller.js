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
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var UserFormMainController = (function (_super) {
                __extends(UserFormMainController, _super);
                /* @ngInject */
                function UserFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, AmmaUserGroupCommandService, AmmaStoreCommandService, $q, $mdUtil, $rootScope, USER_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, $rootScope, USER_FORM_EVENT_NAME);
                    this.userGroupCommandService = AmmaUserGroupCommandService;
                    this.storeCommandService = AmmaStoreCommandService;
                    this.$q = $q;
                    this.$mdUtil = $mdUtil;
                    this.maxDob = new Date();
                }
                UserFormMainController.prototype.handleInit = function () {
                    var _this = this;
                    this.$q.all([this.loadUserGroups(), this.loadStores()]).then(function (data) {
                        _this.$mdUtil.nextTick(function () {
                            _this.loadModel();
                        });
                    }, function (errors) {
                        console.log(errors);
                    });
                };
                UserFormMainController.prototype.afterLoadModel = function () {
                    if (this.model.dob) {
                        this.model.dob = new Date(this.model.dob);
                    }
                };
                UserFormMainController.prototype.loadUserGroups = function () {
                    var _this = this;
                    var defer = this.$q.defer();
                    this.userGroupCommandService.getList().then(function (response) {
                        _this.userGroups = response;
                        defer.resolve(response);
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve User Groups:' + error.data.message, error);
                        defer.reject(error.data.message);
                    });
                    return defer;
                };
                UserFormMainController.prototype.loadStores = function () {
                    var _this = this;
                    var defer = this.$q.defer();
                    this.storeCommandService.getList().then(function (response) {
                        _this.stores = response;
                        defer.resolve(response);
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve Stores:' + error.data.message, error);
                        defer.reject(error.data.message);
                    });
                    return defer;
                };
                UserFormMainController.prototype.afterSubmit = function () {
                    this.$scope.ammaUserMainForm.$setPristine();
                    this.$scope.ammaUserMainForm.$setUntouched();
                };
                return UserFormMainController;
            }(FormMainContentController));
            Main.UserFormMainController = UserFormMainController;
            angular
                .module('amma-user')
                .controller('AmmaUserFormMainController', UserFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaUser.Form || (AmmaUser.Form = {}));
})(AmmaUser || (AmmaUser = {}));
