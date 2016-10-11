var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrder;
(function (AmmaOrder) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var OrderRestService = (function (_super) {
            __extends(OrderRestService, _super);
            /** @ngInject */
            function OrderRestService(Restangular, ORDER_END_POINT) {
                _super.call(this, Restangular, ORDER_END_POINT);
            }
            return OrderRestService;
        }(RestService));
        Common.OrderRestService = OrderRestService;
        angular.module('amma-order')
            .service('AmmaOrderRestService', OrderRestService);
    })(Common = AmmaOrder.Common || (AmmaOrder.Common = {}));
})(AmmaOrder || (AmmaOrder = {}));
