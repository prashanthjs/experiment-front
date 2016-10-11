var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var ShippingMethodFormController = (function (_super) {
            __extends(ShippingMethodFormController, _super);
            /* @ngInject */
            function ShippingMethodFormController(id, $mdDialog, $scope, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME);
            }
            return ShippingMethodFormController;
        }(FormBaseController));
        Form.ShippingMethodFormController = ShippingMethodFormController;
        angular
            .module('amma-shipping-method')
            .controller('AmmaShippingMethodFormController', ShippingMethodFormController);
    })(Form = AmmaShippingMethod.Form || (AmmaShippingMethod.Form = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
