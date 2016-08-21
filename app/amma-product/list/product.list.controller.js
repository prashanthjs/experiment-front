var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var ProductListController = (function (_super) {
            __extends(ProductListController, _super);
            /* @ngInject */
            function ProductListController(AmmaProductGridService, AmmaProductCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaProductGridService, AmmaProductCommandService, AmmaMessageService, $state);
                this.viewRoute = '';
                this.viewRoute = 'triangular.amma-product-view';
            }
            ProductListController.prototype.edit = function (id, event) {
                var _this = this;
                var promise = this.commandService.openForm(id, event);
                promise.then(function () {
                    _this.grid.dataSource.read();
                }, function () {
                    _this.grid.dataSource.read();
                });
            };
            ProductListController.prototype.create = function (event) {
                this.edit(null, event);
            };
            ProductListController.prototype.view = function (id, event) {
                this.$state.go(this.viewRoute, { id: id });
            };
            ProductListController.prototype.remove = function (id, $event) {
                var _this = this;
                this.commandService.removeDialog(id, $event).then(function () {
                    _this.messageService.displaySuccessMessage('Successfully deleted');
                    _this.grid.dataSource.read();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
                });
            };
            return ProductListController;
        }(ListController));
        List.ProductListController = ProductListController;
        angular
            .module('amma-product')
            .controller('AmmaProductListController', ProductListController);
    })(List = AmmaProduct.List || (AmmaProduct.List = {}));
})(AmmaProduct || (AmmaProduct = {}));
