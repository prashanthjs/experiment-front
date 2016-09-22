var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaProductSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaProductSearch',
                controller: AmmaProductSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaProductReturnOnlyId = true;
                    if (attrs.hasOwnProperty('ammaProductReturnOnlyId')) {
                        ammaProductReturnOnlyId = attrs.ammaProductReturnOnlyId === 'true' ? true : false;
                    }
                    var ammaProductSearchModel = $parse(attrs.ammaProductSearch);
                    ammaProductSearchModel.assign(scope, ctrl.search);
                    scope.searchReturnOnlyId = ammaProductReturnOnlyId;
                }
            };
        }
        directives.AmmaProductSearchDirective = AmmaProductSearchDirective;
        var AmmaProductSearchController = (function (_super) {
            __extends(AmmaProductSearchController, _super);
            /** @ngInject */
            function AmmaProductSearchController($scope, AmmaProductCommandService, $q) {
                _super.call(this, $scope, AmmaProductCommandService, $q);
            }
            return AmmaProductSearchController;
        }(SearchDirectiveController));
        directives.AmmaProductSearchController = AmmaProductSearchController;
        angular
            .module('amma-product')
            .directive('ammaProductSearch', AmmaProductSearchDirective);
    })(directives = AmmaProduct.directives || (AmmaProduct.directives = {}));
})(AmmaProduct || (AmmaProduct = {}));
