var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function AmmaOrderStatusSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaOrderStatusSearch',
                controller: AmmaOrderStatusSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaOrderStatusSearchModel = $parse(attrs.ammaOrderStatusSearch);
                    ammaOrderStatusSearchModel.assign(scope, ctrl.search);
                    var ammaOrderStatusSearchOnlyId = true;
                    if (attrs.hasOwnProperty('ammaOrderStatusSearchOnlyId')) {
                        ammaOrderStatusSearchOnlyId = attrs.ammaOrderStatusSearchOnlyId === 'true' ? true : false;
                    }
                    scope.searchReturnOnlyId = ammaOrderStatusSearchOnlyId;
                }
            };
        }
        directives.AmmaOrderStatusSearchDirective = AmmaOrderStatusSearchDirective;
        var AmmaOrderStatusSearchController = (function (_super) {
            __extends(AmmaOrderStatusSearchController, _super);
            /** @ngInject */
            function AmmaOrderStatusSearchController($scope, AmmaOrderStatusCommandService, $q) {
                _super.call(this, $scope, AmmaOrderStatusCommandService, $q);
            }
            return AmmaOrderStatusSearchController;
        }(SearchDirectiveController));
        directives.AmmaOrderStatusSearchController = AmmaOrderStatusSearchController;
        angular
            .module('amma-order-status')
            .directive('ammaOrderStatusSearch', AmmaOrderStatusSearchDirective);
    })(directives = AmmaOrderStatus.directives || (AmmaOrderStatus.directives = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
