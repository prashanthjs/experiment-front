var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaShippingMethodSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaShippingMethodSearch',
                controller: AmmaShippingMethodSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaShippingMethodSearchModel = $parse(attrs.ammaShippingMethodSearch);
                    ammaShippingMethodSearchModel.assign(scope, ctrl.search);
                    var ammaShippingMethodSearchOnlyId = true;
                    if (attrs.hasOwnProperty('ammaShippingMethodSearchOnlyId')) {
                        ammaShippingMethodSearchOnlyId = attrs.ammaShippingMethodSearchOnlyId === 'true' ? true : false;
                    }
                    scope.searchReturnOnlyId = ammaShippingMethodSearchOnlyId;
                }
            };
        }
        directives.AmmaShippingMethodSearchDirective = AmmaShippingMethodSearchDirective;
        var AmmaShippingMethodSearchController = (function (_super) {
            __extends(AmmaShippingMethodSearchController, _super);
            /** @ngInject */
            function AmmaShippingMethodSearchController($scope, AmmaShippingMethodCommandService, $q) {
                _super.call(this, $scope, AmmaShippingMethodCommandService, $q);
            }
            return AmmaShippingMethodSearchController;
        }(SearchDirectiveController));
        directives.AmmaShippingMethodSearchController = AmmaShippingMethodSearchController;
        angular
            .module('amma-shipping-method')
            .directive('ammaShippingMethodSearch', AmmaShippingMethodSearchDirective);
    })(directives = AmmaShippingMethod.directives || (AmmaShippingMethod.directives = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
