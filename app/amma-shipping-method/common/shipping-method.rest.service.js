var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var ShippingMethodRestService = (function (_super) {
            __extends(ShippingMethodRestService, _super);
            /** @ngInject */
            function ShippingMethodRestService(Restangular, SHIPPING_METHOD_END_POINT) {
                _super.call(this, Restangular, SHIPPING_METHOD_END_POINT);
            }
            return ShippingMethodRestService;
        }(RestService));
        Common.ShippingMethodRestService = ShippingMethodRestService;
        angular.module('amma-shipping-method')
            .service('AmmaShippingMethodRestService', ShippingMethodRestService);
    })(Common = AmmaShippingMethod.Common || (AmmaShippingMethod.Common = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
