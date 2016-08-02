var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var List;
    (function (List) {
        var BaseController = AmmaCommon.Common.BaseController;
        var UserListController = (function (_super) {
            __extends(UserListController, _super);
            /* @ngInject */
            function UserListController(AmmaUserGridService, AmmaUserCommandService, AmmaMessageService) {
                _super.call(this, AmmaMessageService);
                this.gridOptions = AmmaUserGridService.getGridOptions();
                this.commandService = AmmaUserCommandService;
            }
            UserListController.prototype.edit = function (id, event) {
                var _this = this;
                var promise = this.commandService.openForm(id, event);
                promise.then(function () {
                    _this.grid.dataSource.read();
                }, function () {
                    _this.grid.dataSource.read();
                });
            };
            UserListController.prototype.create = function (event) {
                this.edit(null, event);
            };
            UserListController.prototype.remove = function (id, $event) {
                var _this = this;
                this.commandService.removeDialog(id, $event).then(function () {
                    _this.messageService.displaySuccessMessage('Successfully deleted');
                    _this.grid.dataSource.read();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
                });
            };
            return UserListController;
        }(BaseController));
        List.UserListController = UserListController;
        angular
            .module('amma-user')
            .controller('AmmaUserListController', UserListController);
    })(List = AmmaUser.List || (AmmaUser.List = {}));
})(AmmaUser || (AmmaUser = {}));
