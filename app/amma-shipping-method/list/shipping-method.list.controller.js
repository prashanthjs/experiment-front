var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var ShippingMethodListController = (function (_super) {
            __extends(ShippingMethodListController, _super);
            /* @ngInject */
            function ShippingMethodListController(AmmaShippingMethodGridService, AmmaShippingMethodCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaShippingMethodGridService, AmmaShippingMethodCommandService, AmmaMessageService, $state);
            }
            return ShippingMethodListController;
        }(ListController));
        List.ShippingMethodListController = ShippingMethodListController;
        angular
            .module('amma-shipping-method')
            .controller('AmmaShippingMethodListController', ShippingMethodListController);
    })(List = AmmaShippingMethod.List || (AmmaShippingMethod.List = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
