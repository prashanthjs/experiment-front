var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrder;
(function (AmmaOrder) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var OrderGridService = (function (_super) {
            __extends(OrderGridService, _super);
            /** @ngInject */
            function OrderGridService(AmmaOrderCommandService, AmmaOrderGridSchemaValue) {
                _super.call(this, AmmaOrderCommandService, AmmaOrderGridSchemaValue);
            }
            return OrderGridService;
        }(GridService));
        Common.OrderGridService = OrderGridService;
        angular.module('amma-order')
            .service('AmmaOrderGridService', OrderGridService);
    })(Common = AmmaOrder.Common || (AmmaOrder.Common = {}));
})(AmmaOrder || (AmmaOrder = {}));
