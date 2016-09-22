var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var ProductOrderRestService = (function (_super) {
            __extends(ProductOrderRestService, _super);
            /** @ngInject */
            function ProductOrderRestService(Restangular, PRODUCT_ORDER_END_POINT) {
                _super.call(this, Restangular, PRODUCT_ORDER_END_POINT);
            }
            return ProductOrderRestService;
        }(RestService));
        Common.ProductOrderRestService = ProductOrderRestService;
        angular.module('amma-product-order')
            .service('AmmaProductOrderRestService', ProductOrderRestService);
    })(Common = AmmaProductOrder.Common || (AmmaProductOrder.Common = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
