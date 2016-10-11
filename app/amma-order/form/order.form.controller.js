var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var OrderFormController = (function (_super) {
            __extends(OrderFormController, _super);
            /* @ngInject */
            function OrderFormController(id, $mdDialog, $scope, $rootScope, ORDER_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, ORDER_FORM_EVENT_NAME);
            }
            return OrderFormController;
        }(FormBaseController));
        Form.OrderFormController = OrderFormController;
        angular
            .module('amma-order')
            .controller('AmmaOrderFormController', OrderFormController);
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
