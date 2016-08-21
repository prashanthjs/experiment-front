var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var ProductGridService = (function (_super) {
            __extends(ProductGridService, _super);
            /** @ngInject */
            function ProductGridService(AmmaProductCommandService, AmmaProductGridSchemaValue) {
                _super.call(this, AmmaProductCommandService, AmmaProductGridSchemaValue);
            }
            return ProductGridService;
        }(GridService));
        Common.ProductGridService = ProductGridService;
        angular.module('amma-product')
            .service('AmmaProductGridService', ProductGridService);
    })(Common = AmmaProduct.Common || (AmmaProduct.Common = {}));
})(AmmaProduct || (AmmaProduct = {}));
