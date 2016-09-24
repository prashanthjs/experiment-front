var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var ProductOrderFormMainController = (function (_super) {
                __extends(ProductOrderFormMainController, _super);
                /* @ngInject */
                function ProductOrderFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderCommandService, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME) {
                    var _this = this;
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderCommandService, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME);
                    this.updateOrderPrice = function () {
                        _this.commandService.calcOrderPrice(_this.model);
                    };
                    $scope.updateOrderPrice = this.updateOrderPrice;
                }
                return ProductOrderFormMainController;
            }(FormMainContentController));
            Main.ProductOrderFormMainController = ProductOrderFormMainController;
            angular
                .module('amma-product-order')
                .controller('AmmaProductOrderFormMainController', ProductOrderFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
