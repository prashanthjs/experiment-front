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
                function ProductFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, AmmaUserGroupCommandService, AmmaStoreCommandService, $q, $mdUtil, $rootScope, PRODUCT_FORM_EVENT_NAME, PRODUCT_PROFILE_IMAGE_TYPE) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, $rootScope, PRODUCT_FORM_EVENT_NAME);
                    this.selectedCategories = [];
                    this.imageType = '';
                    this.userGroupCommandService = AmmaUserGroupCommandService;
                    this.storeCommandService = AmmaStoreCommandService;
                    this.$q = $q;
                    this.$mdUtil = $mdUtil;
                    this.maxDob = new Date();
                    this.imageType = PRODUCT_PROFILE_IMAGE_TYPE;
                    this.selectedCategories = [];
                }
                ProductFormMainController.prototype.handleInit = function () {
                    var _this = this;
                    this.model = { categories: [] };
                    this.$q.all([this.loadUserGroups(), this.loadStores()]).then(function (data) {
                        _this.$mdUtil.nextTick(function () {
                            _this.loadModel();
                        });
                    }, function (errors) {
                        console.log(errors);
                    });
                };
                ProductFormMainController.prototype.loadUserGroups = function () {
                    var _this = this;
                    var defer = this.$q.defer();
                    this.userGroupCommandService.getList().then(function (response) {
                        _this.productGroups = response;
                        defer.resolve(response);
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve Product Groups:' + error.data.message, error);
                        defer.reject(error.data.message);
                    });
                    return defer;
                };
                ProductFormMainController.prototype.loadStores = function () {
                    var _this = this;
                    var defer = this.$q.defer();
                    this.storeCommandService.getList().then(function (response) {
                        _this.stores = response;
                        defer.resolve(response);
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve Stores:' + error.data.message, error);
                        defer.reject(error.data.message);
                    });
                    return defer;
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
