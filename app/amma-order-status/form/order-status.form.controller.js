var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var OrderStatusFormController = (function (_super) {
            __extends(OrderStatusFormController, _super);
            /* @ngInject */
            function OrderStatusFormController(id, $mdDialog, $scope, $rootScope, ORDER_STATUS_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, ORDER_STATUS_FORM_EVENT_NAME);
            }
            return OrderStatusFormController;
        }(FormBaseController));
        Form.OrderStatusFormController = OrderStatusFormController;
        angular
            .module('amma-order-status')
            .controller('AmmaOrderStatusFormController', OrderStatusFormController);
    })(Form = AmmaOrderStatus.Form || (AmmaOrderStatus.Form = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
