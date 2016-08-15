var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var StoreListController = (function (_super) {
            __extends(StoreListController, _super);
            /* @ngInject */
            function StoreListController(AmmaStoreGridService, AmmaStoreCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaStoreGridService, AmmaStoreCommandService, AmmaMessageService, $state);
            }
            return StoreListController;
        }(ListController));
        List.StoreListController = StoreListController;
        angular
            .module('amma-store')
            .controller('AmmaStoreListController', StoreListController);
    })(List = AmmaStore.List || (AmmaStore.List = {}));
})(AmmaStore || (AmmaStore = {}));
