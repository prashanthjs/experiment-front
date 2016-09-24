var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Config;
    (function (Config) {
        angular
            .module('amma-product-order')
            .constant('PRODUCT_ORDER_END_POINT', 'orders')
            .constant('PRODUCT_ORDER_BASE_EVENT_NAME', 'product-order')
            .constant('PRODUCT_ORDER_FORM_EVENT_NAME', 'amma.product-order.form')
            .constant('PRODUCT_ORDER_CONTENT_EVENT_NAME', 'amma.product-order.content');
    })(Config = AmmaProductOrder.Config || (AmmaProductOrder.Config = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
