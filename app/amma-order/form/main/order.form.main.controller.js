var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var OrderFormMainController = (function (_super) {
                __extends(OrderFormMainController, _super);
                /* @ngInject */
                function OrderFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaOrderCommandService, $rootScope, ORDER_FORM_EVENT_NAME) {
                    var _this = this;
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaOrderCommandService, $rootScope, ORDER_FORM_EVENT_NAME);
                    this.updateOrderPrice = function () {
                        _this.commandService.calcOrderPrice(_this.model);
                    };
                    $scope.updateOrderPrice = this.updateOrderPrice;
                }
                return OrderFormMainController;
            }(FormMainContentController));
            Main.OrderFormMainController = OrderFormMainController;
            angular
                .module('amma-order')
                .controller('AmmaOrderFormMainController', OrderFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
