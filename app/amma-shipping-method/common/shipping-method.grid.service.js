var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var ShippingMethodGridService = (function (_super) {
            __extends(ShippingMethodGridService, _super);
            /** @ngInject */
            function ShippingMethodGridService(AmmaShippingMethodCommandService, AmmaShippingMethodGridSchemaValue) {
                _super.call(this, AmmaShippingMethodCommandService, AmmaShippingMethodGridSchemaValue);
            }
            return ShippingMethodGridService;
        }(GridService));
        Common.ShippingMethodGridService = ShippingMethodGridService;
        angular.module('amma-shipping-method')
            .service('AmmaShippingMethodGridService', ShippingMethodGridService);
    })(Common = AmmaShippingMethod.Common || (AmmaShippingMethod.Common = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
