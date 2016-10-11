var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var OrderStatusRestService = (function (_super) {
            __extends(OrderStatusRestService, _super);
            /** @ngInject */
            function OrderStatusRestService(Restangular, ORDER_STATUS_END_POINT) {
                _super.call(this, Restangular, ORDER_STATUS_END_POINT);
            }
            return OrderStatusRestService;
        }(RestService));
        Common.OrderStatusRestService = OrderStatusRestService;
        angular.module('amma-order-status')
            .service('AmmaOrderStatusRestService', OrderStatusRestService);
    })(Common = AmmaOrderStatus.Common || (AmmaOrderStatus.Common = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
