var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var View;
    (function (View) {
        var ViewMainController = AmmaCommon.Common.ViewMainController;
        var ProductOrderViewController = (function (_super) {
            __extends(ProductOrderViewController, _super);
            /* @ngInject */
            function ProductOrderViewController(AmmaProductOrderCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_ORDER_CONTENT_EVENT_NAME) {
                _super.call(this, AmmaProductOrderCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_ORDER_CONTENT_EVENT_NAME);
                this.listRoute = 'triangular.amma-product-order-list';
                this.viewRoute = 'triangular.amma-product-order-view';
            }
            ProductOrderViewController.prototype.afterLoad = function () {
                var subTotal = 0;
                var model = this.getModel();
                if (model && objectPath.has(model, 'inItems')) {
                    for (var i = 0; i < model.inItems.length; i++) {
                        subTotal += model.inItems[i].totalPrice.sell || 0;
                    }
                }
                this.subTotal = subTotal;
            };
            ProductOrderViewController.prototype.productSubTotal = function (product) {
                var subTotal = product.price.sell || 0;
                if (product && objectPath.has(product, 'inItems')) {
                    for (var i = 0; i < product.inItems.length; i++) {
                        subTotal += product.inItems[i].price.sell || 0;
                    }
                }
                return subTotal;
            };
            return ProductOrderViewController;
        }(ViewMainController));
        View.ProductOrderViewController = ProductOrderViewController;
        angular
            .module('amma-product-order')
            .controller('AmmaProductOrderViewController', ProductOrderViewController);
    })(View = AmmaProductOrder.View || (AmmaProductOrder.View = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
