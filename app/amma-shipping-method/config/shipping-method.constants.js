var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Config;
    (function (Config) {
        angular
            .module('amma-shipping-method')
            .constant('SHIPPING_METHOD_END_POINT', 'shipping-methods')
            .constant('SHIPPING_METHOD_BASE_EVENT_NAME', 'shipping-method')
            .constant('SHIPPING_METHOD_FORM_EVENT_NAME', 'amma.shipping-method.form');
    })(Config = AmmaShippingMethod.Config || (AmmaShippingMethod.Config = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
