var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var CategoryFormMainController = (function (_super) {
                __extends(CategoryFormMainController, _super);
                /* @ngInject */
                function CategoryFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaCategoryCommandService, $rootScope, CATEGORY_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaCategoryCommandService, $rootScope, CATEGORY_FORM_EVENT_NAME);
                }
                CategoryFormMainController.prototype.handleInit = function () {
                    this.loadCategories();
                };
                CategoryFormMainController.prototype.loadCategories = function () {
                    var _this = this;
                    this.commandService.getList().then(function (response) {
                        _this.categories = response;
                        _this.loadModel();
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                    });
                };
                return CategoryFormMainController;
            }(FormMainContentController));
            Main.CategoryFormMainController = CategoryFormMainController;
            angular
                .module('amma-category')
                .controller('AmmaCategoryFormMainController', CategoryFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaCategory.Form || (AmmaCategory.Form = {}));
})(AmmaCategory || (AmmaCategory = {}));
