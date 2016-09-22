var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaUserSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaUserSearch',
                controller: AmmaUserSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaUserReturnOnlyId = true;
                    if (attrs.hasOwnProperty('ammaUserReturnOnlyId')) {
                        ammaUserReturnOnlyId = attrs.ammaUserReturnOnlyId === 'true' ? true : false;
                    }
                    var ammaUserSearchModel = $parse(attrs.ammaUserSearch);
                    ammaUserSearchModel.assign(scope, ctrl.search);
                    scope.searchReturnOnlyId = ammaUserReturnOnlyId;
                }
            };
        }
        directives.AmmaUserSearchDirective = AmmaUserSearchDirective;
        var AmmaUserSearchController = (function (_super) {
            __extends(AmmaUserSearchController, _super);
            /** @ngInject */
            function AmmaUserSearchController($scope, AmmaUserCommandService, $q) {
                _super.call(this, $scope, AmmaUserCommandService, $q);
            }
            return AmmaUserSearchController;
        }(SearchDirectiveController));
        directives.AmmaUserSearchController = AmmaUserSearchController;
        angular
            .module('amma-user')
            .directive('ammaUserSearch', AmmaUserSearchDirective);
    })(directives = AmmaUser.directives || (AmmaUser.directives = {}));
})(AmmaUser || (AmmaUser = {}));
