var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var CategoryFormController = (function (_super) {
            __extends(CategoryFormController, _super);
            /* @ngInject */
            function CategoryFormController(id, $mdDialog, $scope, $rootScope, CATEGORY_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, CATEGORY_FORM_EVENT_NAME);
            }
            return CategoryFormController;
        }(FormBaseController));
        Form.CategoryFormController = CategoryFormController;
        angular
            .module('amma-category')
            .controller('AmmaCategoryFormController', CategoryFormController);
    })(Form = AmmaCategory.Form || (AmmaCategory.Form = {}));
})(AmmaCategory || (AmmaCategory = {}));
