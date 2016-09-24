var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaProductOrderStatusSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaProductOrderStatusSearch',
                controller: AmmaProductOrderStatusSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaProductOrderStatusSearchModel = $parse(attrs.ammaProductOrderStatusSearch);
                    ammaProductOrderStatusSearchModel.assign(scope, ctrl.search);
                    var ammaProductOrderStatusSearchOnlyId = true;
                    if (attrs.hasOwnProperty('ammaProductOrderStatusSearchOnlyId')) {
                        ammaProductOrderStatusSearchOnlyId = attrs.ammaProductOrderStatusSearchOnlyId === 'true' ? true : false;
                    }
                    scope.searchReturnOnlyId = ammaProductOrderStatusSearchOnlyId;
                }
            };
        }
        directives.AmmaProductOrderStatusSearchDirective = AmmaProductOrderStatusSearchDirective;
        var AmmaProductOrderStatusSearchController = (function (_super) {
            __extends(AmmaProductOrderStatusSearchController, _super);
            /** @ngInject */
            function AmmaProductOrderStatusSearchController($scope, AmmaProductOrderStatusCommandService, $q) {
                _super.call(this, $scope, AmmaProductOrderStatusCommandService, $q);
            }
            return AmmaProductOrderStatusSearchController;
        }(SearchDirectiveController));
        directives.AmmaProductOrderStatusSearchController = AmmaProductOrderStatusSearchController;
        angular
            .module('amma-product-order-status')
            .directive('ammaProductOrderStatusSearch', AmmaProductOrderStatusSearchDirective);
    })(directives = AmmaProductOrderStatus.directives || (AmmaProductOrderStatus.directives = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
