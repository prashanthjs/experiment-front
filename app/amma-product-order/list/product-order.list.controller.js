var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var ProductOrderListController = (function (_super) {
            __extends(ProductOrderListController, _super);
            /* @ngInject */
            function ProductOrderListController(AmmaProductOrderGridService, AmmaProductOrderCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaProductOrderGridService, AmmaProductOrderCommandService, AmmaMessageService, $state);
                this.viewRoute = 'triangular.amma-product-order-view';
            }
            return ProductOrderListController;
        }(ListController));
        List.ProductOrderListController = ProductOrderListController;
        angular
            .module('amma-product-order')
            .controller('AmmaProductOrderListController', ProductOrderListController);
    })(List = AmmaProductOrder.List || (AmmaProductOrder.List = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
