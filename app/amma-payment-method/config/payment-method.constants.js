var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Config;
    (function (Config) {
        angular
            .module('amma-payment-method')
            .constant('PAYMENT_METHOD_END_POINT', 'payment-methods')
            .constant('PAYMENT_METHOD_BASE_EVENT_NAME', 'payment-method')
            .constant('PAYMENT_METHOD_FORM_EVENT_NAME', 'amma.payment-method.form');
    })(Config = AmmaPaymentMethod.Config || (AmmaPaymentMethod.Config = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
