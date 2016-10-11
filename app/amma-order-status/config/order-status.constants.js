var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Config;
    (function (Config) {
        angular
            .module('amma-order-status')
            .constant('ORDER_STATUS_END_POINT', 'order-statuses')
            .constant('ORDER_STATUS_BASE_EVENT_NAME', 'order-status')
            .constant('ORDER_STATUS_FORM_EVENT_NAME', 'amma.order-status.form');
    })(Config = AmmaOrderStatus.Config || (AmmaOrderStatus.Config = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
