var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var ProductFormController = (function (_super) {
            __extends(ProductFormController, _super);
            /* @ngInject */
            function ProductFormController(id, $mdDialog, $scope, $rootScope, PRODUCT_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, PRODUCT_FORM_EVENT_NAME);
            }
            return ProductFormController;
        }(FormBaseController));
        Form.ProductFormController = ProductFormController;
        angular
            .module('amma-product')
            .controller('AmmaProductFormController', ProductFormController);
    })(Form = AmmaProduct.Form || (AmmaProduct.Form = {}));
})(AmmaProduct || (AmmaProduct = {}));
