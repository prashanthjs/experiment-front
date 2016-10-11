var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var OrderStatusGridService = (function (_super) {
            __extends(OrderStatusGridService, _super);
            /** @ngInject */
            function OrderStatusGridService(AmmaOrderStatusCommandService, AmmaOrderStatusGridSchemaValue) {
                _super.call(this, AmmaOrderStatusCommandService, AmmaOrderStatusGridSchemaValue);
            }
            return OrderStatusGridService;
        }(GridService));
        Common.OrderStatusGridService = OrderStatusGridService;
        angular.module('amma-order-status')
            .service('AmmaOrderStatusGridService', OrderStatusGridService);
    })(Common = AmmaOrderStatus.Common || (AmmaOrderStatus.Common = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
