var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var OrderStatusFormMainController = (function (_super) {
                __extends(OrderStatusFormMainController, _super);
                /* @ngInject */
                function OrderStatusFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaOrderStatusCommandService, $rootScope, ORDER_STATUS_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaOrderStatusCommandService, $rootScope, ORDER_STATUS_FORM_EVENT_NAME);
                }
                return OrderStatusFormMainController;
            }(FormMainContentController));
            Main.OrderStatusFormMainController = OrderStatusFormMainController;
            angular
                .module('amma-order-status')
                .controller('AmmaOrderStatusFormMainController', OrderStatusFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrderStatus.Form || (AmmaOrderStatus.Form = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
