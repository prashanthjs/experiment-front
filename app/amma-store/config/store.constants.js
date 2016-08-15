var AmmaStore;
(function (AmmaStore) {
    var Config;
    (function (Config) {
        angular
            .module('amma-store')
            .constant('STORE_END_POINT', 'stores')
            .constant('STORE_BASE_EVENT_NAME', 'store')
            .constant('STORE_FORM_EVENT_NAME', 'amma.store.form');
    })(Config = AmmaStore.Config || (AmmaStore.Config = {}));
})(AmmaStore || (AmmaStore = {}));
