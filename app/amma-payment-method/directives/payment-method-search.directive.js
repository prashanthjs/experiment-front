var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaPaymentMethodSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaPaymentMethodSearch',
                controller: AmmaPaymentMethodSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaPaymentMethodSearchModel = $parse(attrs.ammaPaymentMethodSearch);
                    ammaPaymentMethodSearchModel.assign(scope, ctrl.search);
                    var ammaPaymentMethodSearchOnlyId = true;
                    if (attrs.hasOwnProperty('ammaPaymentMethodSearchOnlyId')) {
                        ammaPaymentMethodSearchOnlyId = attrs.ammaPaymentMethodSearchOnlyId === 'true' ? true : false;
                    }
                    scope.searchReturnOnlyId = ammaPaymentMethodSearchOnlyId;
                }
            };
        }
        directives.AmmaPaymentMethodSearchDirective = AmmaPaymentMethodSearchDirective;
        var AmmaPaymentMethodSearchController = (function (_super) {
            __extends(AmmaPaymentMethodSearchController, _super);
            /** @ngInject */
            function AmmaPaymentMethodSearchController($scope, AmmaPaymentMethodCommandService, $q) {
                _super.call(this, $scope, AmmaPaymentMethodCommandService, $q);
            }
            return AmmaPaymentMethodSearchController;
        }(SearchDirectiveController));
        directives.AmmaPaymentMethodSearchController = AmmaPaymentMethodSearchController;
        angular
            .module('amma-payment-method')
            .directive('ammaPaymentMethodSearch', AmmaPaymentMethodSearchDirective);
    })(directives = AmmaPaymentMethod.directives || (AmmaPaymentMethod.directives = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
