var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Config;
    (function (Config) {
        angular
            .module('amma-product-order-status')
            .constant('PRODUCT_ORDER_STATUS_END_POINT', 'product-order-statuses')
            .constant('PRODUCT_ORDER_STATUS_BASE_EVENT_NAME', 'product-order-status')
            .constant('PRODUCT_ORDER_STATUS_FORM_EVENT_NAME', 'amma.product-order-status.form');
    })(Config = AmmaProductOrderStatus.Config || (AmmaProductOrderStatus.Config = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
