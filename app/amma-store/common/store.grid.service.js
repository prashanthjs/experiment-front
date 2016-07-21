var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var StoreGridService = (function (_super) {
            __extends(StoreGridService, _super);
            /** @ngInject */
            function StoreGridService(AmmaStoreCommandService, AmmaStoreGridSchemaValue) {
                _super.call(this, AmmaStoreCommandService, AmmaStoreGridSchemaValue);
            }
            return StoreGridService;
        }(GridService));
        Common.StoreGridService = StoreGridService;
        angular.module('amma-store')
            .service('AmmaStoreGridService', StoreGridService);
    })(Common = AmmaStore.Common || (AmmaStore.Common = {}));
})(AmmaStore || (AmmaStore = {}));
