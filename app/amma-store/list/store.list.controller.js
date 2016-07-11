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
            function StoreListController(AmmaStoreCommandService, AmmaMessageService) {
                _super.call(this, AmmaMessageService);
                this.gridOptions = AmmaStoreCommandService.getGridOptions();
            }
            return StoreListController;
        }(BaseController));
        List.StoreListController = StoreListController;
        angular
            .module('amma-store')
            .controller('AmmaStoreListController', StoreListController);
    })(List = AmmaStore.List || (AmmaStore.List = {}));
})(AmmaStore || (AmmaStore = {}));
