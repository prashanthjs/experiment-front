var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var ProductOrderStatusFormMainController = (function (_super) {
                __extends(ProductOrderStatusFormMainController, _super);
                /* @ngInject */
                function ProductOrderStatusFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderStatusCommandService, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductOrderStatusCommandService, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME);
                }
                return ProductOrderStatusFormMainController;
            }(FormMainContentController));
            Main.ProductOrderStatusFormMainController = ProductOrderStatusFormMainController;
            angular
                .module('amma-product-order-status')
                .controller('AmmaProductOrderStatusFormMainController', ProductOrderStatusFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrderStatus.Form || (AmmaProductOrderStatus.Form = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
