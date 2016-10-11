var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var PaymentMethodListController = (function (_super) {
            __extends(PaymentMethodListController, _super);
            /* @ngInject */
            function PaymentMethodListController(AmmaPaymentMethodGridService, AmmaPaymentMethodCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaPaymentMethodGridService, AmmaPaymentMethodCommandService, AmmaMessageService, $state);
            }
            return PaymentMethodListController;
        }(ListController));
        List.PaymentMethodListController = PaymentMethodListController;
        angular
            .module('amma-payment-method')
            .controller('AmmaPaymentMethodListController', PaymentMethodListController);
    })(List = AmmaPaymentMethod.List || (AmmaPaymentMethod.List = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
