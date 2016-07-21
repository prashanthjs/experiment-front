var AmmaStore;
(function (AmmaStore) {
    var Config;
    (function (Config) {
        angular
            .module('amma-store')
            .constant('STORE_END_POINT', 'stores')
            .constant('STORE_BASE_EVENT_NAME', 'store');
    })(Config = AmmaStore.Config || (AmmaStore.Config = {}));
})(AmmaStore || (AmmaStore = {}));
