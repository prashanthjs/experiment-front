var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaUserGroupSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaUserGroupSearch',
                controller: AmmaUserGroupSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaUserGroupSearchModel = $parse(attrs.ammaUserGroupSearch);
                    ammaUserGroupSearchModel.assign(scope, ctrl.search);
                }
            };
        }
        directives.AmmaUserGroupSearchDirective = AmmaUserGroupSearchDirective;
        var AmmaUserGroupSearchController = (function (_super) {
            __extends(AmmaUserGroupSearchController, _super);
            /** @ngInject */
            function AmmaUserGroupSearchController($scope, AmmaUserGroupCommandService, $q) {
                _super.call(this, $scope, AmmaUserGroupCommandService, $q);
            }
            return AmmaUserGroupSearchController;
        }(SearchDirectiveController));
        directives.AmmaUserGroupSearchController = AmmaUserGroupSearchController;
        angular
            .module('amma-user-group')
            .directive('ammaUserGroupSearch', AmmaUserGroupSearchDirective);
    })(directives = AmmaUserGroup.directives || (AmmaUserGroup.directives = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
