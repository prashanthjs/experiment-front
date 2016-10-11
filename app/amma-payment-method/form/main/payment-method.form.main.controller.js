var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var PaymentMethodFormMainController = (function (_super) {
                __extends(PaymentMethodFormMainController, _super);
                /* @ngInject */
                function PaymentMethodFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaPaymentMethodCommandService, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaPaymentMethodCommandService, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME);
                }
                return PaymentMethodFormMainController;
            }(FormMainContentController));
            Main.PaymentMethodFormMainController = PaymentMethodFormMainController;
            angular
                .module('amma-payment-method')
                .controller('AmmaPaymentMethodFormMainController', PaymentMethodFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaPaymentMethod.Form || (AmmaPaymentMethod.Form = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
