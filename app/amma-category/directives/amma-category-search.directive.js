var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function CategorySearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaCategorySearch',
                controller: AmmaCategorySearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaCategorySearchModel = $parse(attrs.ammaCategorySearch);
                    ammaCategorySearchModel.assign(scope, ctrl.search);
                }
            };
        }
        directives.CategorySearchDirective = CategorySearchDirective;
        var AmmaCategorySearchController = (function (_super) {
            __extends(AmmaCategorySearchController, _super);
            /** @ngInject */
            function AmmaCategorySearchController($scope, AmmaCategoryCommandService, $q) {
                _super.call(this, $scope, AmmaCategoryCommandService, $q);
            }
            return AmmaCategorySearchController;
        }(SearchDirectiveController));
        directives.AmmaCategorySearchController = AmmaCategorySearchController;
        angular
            .module('amma-category')
            .directive('ammaCategorySearch', CategorySearchDirective);
    })(directives = AmmaCategory.directives || (AmmaCategory.directives = {}));
})(AmmaCategory || (AmmaCategory = {}));
