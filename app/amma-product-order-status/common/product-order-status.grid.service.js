var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var ProductOrderStatusGridService = (function (_super) {
            __extends(ProductOrderStatusGridService, _super);
            /** @ngInject */
            function ProductOrderStatusGridService(AmmaProductOrderStatusCommandService, AmmaProductOrderStatusGridSchemaValue) {
                _super.call(this, AmmaProductOrderStatusCommandService, AmmaProductOrderStatusGridSchemaValue);
            }
            return ProductOrderStatusGridService;
        }(GridService));
        Common.ProductOrderStatusGridService = ProductOrderStatusGridService;
        angular.module('amma-product-order-status')
            .service('AmmaProductOrderStatusGridService', ProductOrderStatusGridService);
    })(Common = AmmaProductOrderStatus.Common || (AmmaProductOrderStatus.Common = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
