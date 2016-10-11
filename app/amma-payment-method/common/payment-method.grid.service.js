var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var PaymentMethodGridService = (function (_super) {
            __extends(PaymentMethodGridService, _super);
            /** @ngInject */
            function PaymentMethodGridService(AmmaPaymentMethodCommandService, AmmaPaymentMethodGridSchemaValue) {
                _super.call(this, AmmaPaymentMethodCommandService, AmmaPaymentMethodGridSchemaValue);
            }
            return PaymentMethodGridService;
        }(GridService));
        Common.PaymentMethodGridService = PaymentMethodGridService;
        angular.module('amma-payment-method')
            .service('AmmaPaymentMethodGridService', PaymentMethodGridService);
    })(Common = AmmaPaymentMethod.Common || (AmmaPaymentMethod.Common = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
