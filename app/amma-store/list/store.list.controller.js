var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var List;
    (function (List) {
        var BaseController = AmmaCommon.Common.BaseController;
        var StoreListController = (function (_super) {
            __extends(StoreListController, _super);
            /* @ngInject */
            function StoreListController(AmmaStoreGridService, AmmaStoreCommandService, AmmaMessageService) {
                _super.call(this, AmmaMessageService);
                this.gridOptions = AmmaStoreGridService.getGridOptions();
                this.commandService = AmmaStoreCommandService;
            }
            StoreListController.prototype.edit = function (id, event) {
                var _this = this;
                var promise = this.commandService.openForm(id, event);
                promise.then(function () {
                    _this.grid.dataSource.read();
                }, function () {
                    _this.grid.dataSource.read();
                });
            };
            StoreListController.prototype.create = function (event) {
                this.edit(null, event);
            };
            StoreListController.prototype.remove = function (id, $event) {
                var _this = this;
                this.commandService.removeDialog(id, $event).then(function () {
                    _this.messageService.displaySuccessMessage('Successfully deleted');
                    _this.grid.dataSource.read();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
                });
            };
            return StoreListController;
        }(BaseController));
        List.StoreListController = StoreListController;
        angular
            .module('amma-store')
            .controller('AmmaStoreListController', StoreListController);
    })(List = AmmaStore.List || (AmmaStore.List = {}));
})(AmmaStore || (AmmaStore = {}));
