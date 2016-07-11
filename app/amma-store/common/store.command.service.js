var AmmaStore;
(function (AmmaStore) {
    var Common;
    (function (Common) {
        var StoreCommandService = (function () {
            /* @ngInject */
            function StoreCommandService(AmmaStoreRestService, AmmaStoreGridService) {
                this.setGridService(AmmaStoreGridService);
                this.setRestService(AmmaStoreRestService);
            }
            StoreCommandService.prototype.getGridService = function () {
                return this.gridService;
            };
            StoreCommandService.prototype.setGridService = function (gridService) {
                this.gridService = gridService;
            };
            StoreCommandService.prototype.getRestService = function () {
                return this.restService;
            };
            StoreCommandService.prototype.setRestService = function (restService) {
                this.restService = restService;
            };
            StoreCommandService.prototype.getGridOptions = function () {
                return this.getGridService().getGridOptions();
            };
            return StoreCommandService;
        }());
        Common.StoreCommandService = StoreCommandService;
        angular.module('amma-store')
            .service('AmmaStoreCommandService', StoreCommandService);
    })(Common = AmmaStore.Common || (AmmaStore.Common = {}));
})(AmmaStore || (AmmaStore = {}));
