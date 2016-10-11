var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var PaymentMethodFormController = (function (_super) {
            __extends(PaymentMethodFormController, _super);
            /* @ngInject */
            function PaymentMethodFormController(id, $mdDialog, $scope, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME);
            }
            return PaymentMethodFormController;
        }(FormBaseController));
        Form.PaymentMethodFormController = PaymentMethodFormController;
        angular
            .module('amma-payment-method')
            .controller('AmmaPaymentMethodFormController', PaymentMethodFormController);
    })(Form = AmmaPaymentMethod.Form || (AmmaPaymentMethod.Form = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
