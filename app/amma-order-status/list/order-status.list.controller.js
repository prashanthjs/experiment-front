var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var OrderStatusListController = (function (_super) {
            __extends(OrderStatusListController, _super);
            /* @ngInject */
            function OrderStatusListController(AmmaOrderStatusGridService, AmmaOrderStatusCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaOrderStatusGridService, AmmaOrderStatusCommandService, AmmaMessageService, $state);
            }
            return OrderStatusListController;
        }(ListController));
        List.OrderStatusListController = OrderStatusListController;
        angular
            .module('amma-order-status')
            .controller('AmmaOrderStatusListController', OrderStatusListController);
    })(List = AmmaOrderStatus.List || (AmmaOrderStatus.List = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
