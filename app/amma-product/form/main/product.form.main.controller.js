var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var ProductFormMainController = (function (_super) {
                __extends(ProductFormMainController, _super);
                /* @ngInject */
                function ProductFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, $q, $mdUtil, $rootScope, PRODUCT_FORM_EVENT_NAME, PRODUCT_PROFILE_IMAGE_TYPE) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, $rootScope, PRODUCT_FORM_EVENT_NAME);
                    this.imageType = '';
                    this.$q = $q;
                    this.$mdUtil = $mdUtil;
                    this.imageType = PRODUCT_PROFILE_IMAGE_TYPE;
                }
                ProductFormMainController.prototype.handleInit = function () {
                    var _this = this;
                    this.model = {
                        categories: [],
                        features: [],
                        tags: [],
                        available: {
                            store: {
                                name: []
                            },
                            userGroup: []
                        }
                    };
                    this.$mdUtil.nextTick(function () {
                        _this.loadModel();
                    });
                };
                ProductFormMainController.prototype.afterSubmit = function () {
                    this.$scope.ammaProductMainForm.$setPristine();
                    this.$scope.ammaProductMainForm.$setUntouched();
                };
                return ProductFormMainController;
            }(FormMainContentController));
            Main.ProductFormMainController = ProductFormMainController;
            angular
                .module('amma-product')
                .controller('AmmaProductFormMainController', ProductFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProduct.Form || (AmmaProduct.Form = {}));
})(AmmaProduct || (AmmaProduct = {}));
