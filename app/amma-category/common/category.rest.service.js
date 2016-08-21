var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var CategoryRestService = (function (_super) {
            __extends(CategoryRestService, _super);
            /** @ngInject */
            function CategoryRestService(Restangular, CATEGORY_END_POINT) {
                _super.call(this, Restangular, CATEGORY_END_POINT);
            }
            return CategoryRestService;
        }(RestService));
        Common.CategoryRestService = CategoryRestService;
        angular.module('amma-category')
            .service('AmmaCategoryRestService', CategoryRestService);
    })(Common = AmmaCategory.Common || (AmmaCategory.Common = {}));
})(AmmaCategory || (AmmaCategory = {}));
