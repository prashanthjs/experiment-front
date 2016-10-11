var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrder;
(function (AmmaOrder) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var OrderListController = (function (_super) {
            __extends(OrderListController, _super);
            /* @ngInject */
            function OrderListController(AmmaOrderGridService, AmmaOrderCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaOrderGridService, AmmaOrderCommandService, AmmaMessageService, $state);
                this.viewRoute = 'triangular.amma-order-view';
            }
            return OrderListController;
        }(ListController));
        List.OrderListController = OrderListController;
        angular
            .module('amma-order')
            .controller('AmmaOrderListController', OrderListController);
    })(List = AmmaOrder.List || (AmmaOrder.List = {}));
})(AmmaOrder || (AmmaOrder = {}));
