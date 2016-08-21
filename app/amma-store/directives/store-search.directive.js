var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var directives;
    (function (directives) {
        var SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
        /** @ngInject */
        function StoreSearchDirective($parse) {
            return {
                restrict: 'A',
                require: 'ammaStoreSearch',
                controller: AmmaStoreSearchController,
                link: function (scope, element, attrs, ctrl) {
                    var ammaStoreSearchModel = $parse(attrs.ammaStoreSearch);
                    console.log(ctrl);
                    ammaStoreSearchModel.assign(scope, ctrl.search);
                }
            };
        }
        directives.StoreSearchDirective = StoreSearchDirective;
        var AmmaStoreSearchController = (function (_super) {
            __extends(AmmaStoreSearchController, _super);
            /** @ngInject */
            function AmmaStoreSearchController($scope, AmmaStoreCommandService, $q) {
                _super.call(this, $scope, AmmaStoreCommandService, $q);
            }
            return AmmaStoreSearchController;
        }(SearchDirectiveController));
        directives.AmmaStoreSearchController = AmmaStoreSearchController;
        angular
            .module('amma-store')
            .directive('ammaStoreSearch', StoreSearchDirective);
    })(directives = AmmaStore.directives || (AmmaStore.directives = {}));
})(AmmaStore || (AmmaStore = {}));
