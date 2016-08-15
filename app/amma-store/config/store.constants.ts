module AmmaStore.Config {

    angular
        .module('amma-store')
        .constant('STORE_END_POINT', 'stores')
        .constant('STORE_BASE_EVENT_NAME', 'store')
        .constant('STORE_FORM_EVENT_NAME', 'amma.store.form');
}
