var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Store;
            (function (Store) {
                var ProductOrderFormMainStoreController = (function () {
                    /* @ngInject */
                    function ProductOrderFormMainStoreController($scope) {
                        this.$scope = $scope;
                    }
                    ProductOrderFormMainStoreController.prototype.itemChange = function (item) {
                        this.$scope.updateModel('store.name', item.title);
                        this.$scope.updateModel('store.email', item.email);
                        this.$scope.updateModel('store.contactNumber', item.contactNumber);
                        this.$scope.updateModel('store._id', item._id);
                    };
                    return ProductOrderFormMainStoreController;
                }());
                Store.ProductOrderFormMainStoreController = ProductOrderFormMainStoreController;
                angular
                    .module('amma-product-order')
                    .controller('AmmaProductOrderFormMainStoreController', ProductOrderFormMainStoreController);
            })(Store = Main.Store || (Main.Store = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
