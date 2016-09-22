var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var ProductOrderFormController = (function (_super) {
            __extends(ProductOrderFormController, _super);
            /* @ngInject */
            function ProductOrderFormController(id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, PRODUCT_ORDER_FORM_EVENT_NAME);
            }
            return ProductOrderFormController;
        }(FormBaseController));
        Form.ProductOrderFormController = ProductOrderFormController;
        angular
            .module('amma-product-order')
            .controller('AmmaProductOrderFormController', ProductOrderFormController);
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
