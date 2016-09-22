var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var ProductOrderGridService = (function (_super) {
            __extends(ProductOrderGridService, _super);
            /** @ngInject */
            function ProductOrderGridService(AmmaProductOrderCommandService, AmmaProductOrderGridSchemaValue) {
                _super.call(this, AmmaProductOrderCommandService, AmmaProductOrderGridSchemaValue);
            }
            return ProductOrderGridService;
        }(GridService));
        Common.ProductOrderGridService = ProductOrderGridService;
        angular.module('amma-product-order')
            .service('AmmaProductOrderGridService', ProductOrderGridService);
    })(Common = AmmaProductOrder.Common || (AmmaProductOrder.Common = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
