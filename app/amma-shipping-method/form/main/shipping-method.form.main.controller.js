var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var ShippingMethodFormMainController = (function (_super) {
                __extends(ShippingMethodFormMainController, _super);
                /* @ngInject */
                function ShippingMethodFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaShippingMethodCommandService, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaShippingMethodCommandService, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME);
                }
                return ShippingMethodFormMainController;
            }(FormMainContentController));
            Main.ShippingMethodFormMainController = ShippingMethodFormMainController;
            angular
                .module('amma-shipping-method')
                .controller('AmmaShippingMethodFormMainController', ShippingMethodFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaShippingMethod.Form || (AmmaShippingMethod.Form = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
