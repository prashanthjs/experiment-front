var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var StoreRestService = (function (_super) {
            __extends(StoreRestService, _super);
            /** @ngInject */
            function StoreRestService(Restangular, AmmaEventEmitterService, $q) {
                _super.call(this, Restangular, AmmaEventEmitterService, $q);
                this.endPoint = 'stores';
                this.eventName = 'store';
            }
            return StoreRestService;
        }(RestService));
        Common.StoreRestService = StoreRestService;
        angular.module('amma-store')
            .service('AmmaStoreRestService', StoreRestService);
    })(Common = AmmaStore.Common || (AmmaStore.Common = {}));
})(AmmaStore || (AmmaStore = {}));
