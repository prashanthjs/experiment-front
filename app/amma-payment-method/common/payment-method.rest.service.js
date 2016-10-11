var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var PaymentMethodRestService = (function (_super) {
            __extends(PaymentMethodRestService, _super);
            /** @ngInject */
            function PaymentMethodRestService(Restangular, PAYMENT_METHOD_END_POINT) {
                _super.call(this, Restangular, PAYMENT_METHOD_END_POINT);
            }
            return PaymentMethodRestService;
        }(RestService));
        Common.PaymentMethodRestService = PaymentMethodRestService;
        angular.module('amma-payment-method')
            .service('AmmaPaymentMethodRestService', PaymentMethodRestService);
    })(Common = AmmaPaymentMethod.Common || (AmmaPaymentMethod.Common = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
