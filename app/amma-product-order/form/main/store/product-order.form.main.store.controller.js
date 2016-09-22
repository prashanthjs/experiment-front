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
                    function ProductOrderFormMainStoreController() {
                    }
                    ProductOrderFormMainStoreController.prototype.storeChange = function (item, model) {
                        objectPath.set(model, 'store.name', item.title);
                        objectPath.set(model, 'store.email', item.email);
                        objectPath.set(model, 'store.contactNumber', item.contactNumber);
                        objectPath.set(model, 'store._id', item._id);
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
