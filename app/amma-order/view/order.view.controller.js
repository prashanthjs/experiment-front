var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrder;
(function (AmmaOrder) {
    var View;
    (function (View) {
        var ViewMainController = AmmaCommon.Common.ViewMainController;
        var OrderViewController = (function (_super) {
            __extends(OrderViewController, _super);
            /* @ngInject */
            function OrderViewController(AmmaOrderCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, ORDER_CONTENT_EVENT_NAME) {
                _super.call(this, AmmaOrderCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, ORDER_CONTENT_EVENT_NAME);
                this.listRoute = 'triangular.amma-order-list';
                this.viewRoute = 'triangular.amma-order-view';
            }
            OrderViewController.prototype.afterLoad = function () {
                var subTotal = 0;
                var model = this.getModel();
                if (model && objectPath.has(model, 'inItems')) {
                    for (var i = 0; i < model.inItems.length; i++) {
                        subTotal += model.inItems[i].totalPrice.sell || 0;
                    }
                }
                this.subTotal = subTotal;
            };
            OrderViewController.prototype.productSubTotal = function (product) {
                var subTotal = product.price.sell || 0;
                if (product && objectPath.has(product, 'inItems')) {
                    for (var i = 0; i < product.inItems.length; i++) {
                        subTotal += product.inItems[i].price.sell || 0;
                    }
                }
                return subTotal;
            };
            return OrderViewController;
        }(ViewMainController));
        View.OrderViewController = OrderViewController;
        angular
            .module('amma-order')
            .controller('AmmaOrderViewController', OrderViewController);
    })(View = AmmaOrder.View || (AmmaOrder.View = {}));
})(AmmaOrder || (AmmaOrder = {}));
