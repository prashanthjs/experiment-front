var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var CategoryGridService = (function (_super) {
            __extends(CategoryGridService, _super);
            /** @ngInject */
            function CategoryGridService(AmmaCategoryCommandService, AmmaCategoryGridSchemaValue) {
                _super.call(this, AmmaCategoryCommandService, AmmaCategoryGridSchemaValue);
            }
            return CategoryGridService;
        }(GridService));
        Common.CategoryGridService = CategoryGridService;
        angular.module('amma-category')
            .service('AmmaCategoryGridService', CategoryGridService);
    })(Common = AmmaCategory.Common || (AmmaCategory.Common = {}));
})(AmmaCategory || (AmmaCategory = {}));
