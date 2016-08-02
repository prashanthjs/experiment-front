var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var List;
    (function (List) {
        var BaseController = AmmaCommon.Common.BaseController;
        var UserGroupListController = (function (_super) {
            __extends(UserGroupListController, _super);
            /* @ngInject */
            function UserGroupListController(AmmaUserGroupGridService, AmmaUserGroupCommandService, AmmaMessageService) {
                _super.call(this, AmmaMessageService);
                this.gridOptions = AmmaUserGroupGridService.getGridOptions();
                this.commandService = AmmaUserGroupCommandService;
            }
            UserGroupListController.prototype.edit = function (id, event) {
                var _this = this;
                var promise = this.commandService.openForm(id, event);
                promise.then(function () {
                    _this.grid.dataSource.read();
                }, function () {
                    _this.grid.dataSource.read();
                });
            };
            UserGroupListController.prototype.create = function (event) {
                this.edit(null, event);
            };
            UserGroupListController.prototype.remove = function (id, $event) {
                var _this = this;
                this.commandService.removeDialog(id, $event).then(function () {
                    _this.messageService.displaySuccessMessage('Successfully deleted');
                    _this.grid.dataSource.read();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
                });
            };
            return UserGroupListController;
        }(BaseController));
        List.UserGroupListController = UserGroupListController;
        angular
            .module('amma-user-group')
            .controller('AmmaUserGroupListController', UserGroupListController);
    })(List = AmmaUserGroup.List || (AmmaUserGroup.List = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
