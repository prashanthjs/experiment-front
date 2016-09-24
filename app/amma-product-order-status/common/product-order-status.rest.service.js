var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var ProductOrderStatusRestService = (function (_super) {
            __extends(ProductOrderStatusRestService, _super);
            /** @ngInject */
            function ProductOrderStatusRestService(Restangular, PRODUCT_ORDER_STATUS_END_POINT) {
                _super.call(this, Restangular, PRODUCT_ORDER_STATUS_END_POINT);
            }
            return ProductOrderStatusRestService;
        }(RestService));
        Common.ProductOrderStatusRestService = ProductOrderStatusRestService;
        angular.module('amma-product-order-status')
            .service('AmmaProductOrderStatusRestService', ProductOrderStatusRestService);
    })(Common = AmmaProductOrderStatus.Common || (AmmaProductOrderStatus.Common = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
