var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var ListController = (function (_super) {
            __extends(ListController, _super);
            /* @ngInject */
            function ListController(GridService, CommandService, MessageService, $state) {
                _super.call(this, MessageService);
                this.viewRoute = '';
                this.gridOptions = GridService.getGridOptions();
                this.commandService = CommandService;
                this.$state = $state;
            }
            ListController.prototype.edit = function (id, $event) {
                var _this = this;
                if ($event) {
                    $event.preventDefault();
                }
                var promise = this.commandService.openForm(id, $event);
                promise.then(function () {
                    _this.grid.dataSource.read();
                }, function () {
                    _this.grid.dataSource.read();
                });
            };
            ListController.prototype.create = function ($event) {
                this.edit(null, $event);
            };
            ListController.prototype.view = function (id, event) {
                this.$state.go(this.viewRoute, { id: id });
            };
            ListController.prototype.remove = function (id, $event) {
                var _this = this;
                this.commandService.removeDialog(id, $event).then(function () {
                    _this.messageService.displaySuccessMessage('Successfully deleted');
                    _this.grid.dataSource.read();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
                });
            };
            return ListController;
        }(Common.BaseController));
        Common.ListController = ListController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
