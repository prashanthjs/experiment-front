var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var ProductOrderStatusFormController = (function (_super) {
            __extends(ProductOrderStatusFormController, _super);
            /* @ngInject */
            function ProductOrderStatusFormController(id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_STATUS_FORM_EVENT_NAME);
            }
            return ProductOrderStatusFormController;
        }(FormBaseController));
        Form.ProductOrderStatusFormController = ProductOrderStatusFormController;
        angular
            .module('amma-product-order-status')
            .controller('AmmaProductOrderStatusFormController', ProductOrderStatusFormController);
    })(Form = AmmaProductOrderStatus.Form || (AmmaProductOrderStatus.Form = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
