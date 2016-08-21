var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaFeatureSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaFeatureSearch',
                controller: AmmaFeatureSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaFeatureSearchModel = $parse(attrs.ammaFeatureSearch);
                    ammaFeatureSearchModel.assign(scope, ctrl.search);
                }
            };
        }
        directives.AmmaFeatureSearchDirective = AmmaFeatureSearchDirective;
        var AmmaFeatureSearchController = (function (_super) {
            __extends(AmmaFeatureSearchController, _super);
            /** @ngInject */
            function AmmaFeatureSearchController($scope, AmmaFeatureCommandService, $q) {
                _super.call(this, $scope, AmmaFeatureCommandService, $q);
            }
            return AmmaFeatureSearchController;
        }(SearchDirectiveController));
        directives.AmmaFeatureSearchController = AmmaFeatureSearchController;
        angular
            .module('amma-feature')
            .directive('ammaFeatureSearch', AmmaFeatureSearchDirective);
    })(directives = AmmaFeature.directives || (AmmaFeature.directives = {}));
})(AmmaFeature || (AmmaFeature = {}));
