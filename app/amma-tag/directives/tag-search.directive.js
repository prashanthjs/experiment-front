var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaTagSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaTagSearch',
                controller: AmmaTagSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaTagSearchModel = $parse(attrs.ammaTagSearch);
                    ammaTagSearchModel.assign(scope, ctrl.search);
                }
            };
        }
        directives.AmmaTagSearchDirective = AmmaTagSearchDirective;
        var AmmaTagSearchController = (function (_super) {
            __extends(AmmaTagSearchController, _super);
            /** @ngInject */
            function AmmaTagSearchController($scope, AmmaTagCommandService, $q) {
                _super.call(this, $scope, AmmaTagCommandService, $q);
            }
            return AmmaTagSearchController;
        }(SearchDirectiveController));
        directives.AmmaTagSearchController = AmmaTagSearchController;
        angular
            .module('amma-tag')
            .directive('ammaTagSearch', AmmaTagSearchDirective);
    })(directives = AmmaTag.directives || (AmmaTag.directives = {}));
})(AmmaTag || (AmmaTag = {}));
