var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var CategoryListController = (function (_super) {
            __extends(CategoryListController, _super);
            /* @ngInject */
            function CategoryListController(AmmaCategoryGridService, AmmaCategoryCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaCategoryGridService, AmmaCategoryCommandService, AmmaMessageService, $state);
            }
            return CategoryListController;
        }(ListController));
        List.CategoryListController = CategoryListController;
        angular
            .module('amma-category')
            .controller('AmmaCategoryListController', CategoryListController);
    })(List = AmmaCategory.List || (AmmaCategory.List = {}));
})(AmmaCategory || (AmmaCategory = {}));
