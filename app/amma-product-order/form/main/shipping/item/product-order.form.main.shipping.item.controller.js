var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Shipping;
            (function (Shipping) {
                var Item;
                (function (Item) {
                    var ProductOrderFormMainShippingItemController = (function () {
                        /* @ngInject */
                        function ProductOrderFormMainShippingItemController(dataItem, $mdDialog) {
                            this.stepQty = 1;
                            this.minQty = 1;
                            this.maxQty = null;
                            this.dataItem = dataItem;
                            if (!this.dataItem) {
                                this.dataItem = {};
                            }
                            this.dialogService = $mdDialog;
                        }
                        ProductOrderFormMainShippingItemController.prototype.saveAndClose = function () {
                            this.dialogService.hide(this.dataItem);
                        };
                        ProductOrderFormMainShippingItemController.prototype.cancel = function () {
                            this.dialogService.hide();
                        };
                        return ProductOrderFormMainShippingItemController;
                    }());
                    Item.ProductOrderFormMainShippingItemController = ProductOrderFormMainShippingItemController;
                    angular
                        .module('amma-product-order')
                        .controller('AmmaProductOrderFormMainShippingItemController', ProductOrderFormMainShippingItemController);
                })(Item = Shipping.Item || (Shipping.Item = {}));
            })(Shipping = Main.Shipping || (Main.Shipping = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
