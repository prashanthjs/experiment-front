var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var ProductRestService = (function (_super) {
            __extends(ProductRestService, _super);
            /** @ngInject */
            function ProductRestService(Restangular, PRODUCT_END_POINT) {
                _super.call(this, Restangular, PRODUCT_END_POINT);
            }
            ProductRestService.prototype.changePassword = function (id, password) {
                return this.restService.one(id).one('change-password').customPUT({ password: password });
            };
            return ProductRestService;
        }(RestService));
        Common.ProductRestService = ProductRestService;
        angular.module('amma-product')
            .service('AmmaProductRestService', ProductRestService);
    })(Common = AmmaProduct.Common || (AmmaProduct.Common = {}));
})(AmmaProduct || (AmmaProduct = {}));
