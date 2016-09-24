var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var InItem;
            (function (InItem) {
                var Item;
                (function (Item) {
                    var ProductOrderFormMainInItemItemController = (function () {
                        /* @ngInject */
                        function ProductOrderFormMainInItemItemController(dataItem, $mdDialog) {
                            this.stepQty = 1;
                            this.minQty = 1;
                            this.maxQty = null;
                            this.dataItem = dataItem;
                            if (!this.dataItem) {
                                this.dataItem = {};
                            }
                            this.dialogService = $mdDialog;
                        }
                        ProductOrderFormMainInItemItemController.prototype.itemChange = function (product) {
                            this.stepQty = product.inventory.quantity.step || 1;
                            this.minQty = product.inventory.quantity.min || 1;
                            this.maxQty = product.inventory.quantity.max || null;
                            if (this.maxQty === -1) {
                                this.maxQty = null;
                            }
                            this.set('_id', product._id);
                            this.set('title', product.title);
                            this.set('sku', product.sku);
                            this.set('price.sell', product.price.sell);
                            this.set('price.cost', product.price.cost);
                            this.set('price.list', product.price.list);
                            this.set('shipping.weight', product.shipping.weight);
                            this.set('shipping.box.length', product.shipping.box.length);
                            this.set('shipping.box.width', product.shipping.box.width);
                            this.set('shipping.box.height', product.shipping.box.height);
                        };
                        ProductOrderFormMainInItemItemController.prototype.set = function (key, value) {
                            objectPath.set(this.dataItem, key, value);
                        };
                        ProductOrderFormMainInItemItemController.prototype.saveAndClose = function () {
                            this.dialogService.hide(this.dataItem);
                        };
                        ProductOrderFormMainInItemItemController.prototype.cancel = function () {
                            this.dialogService.hide();
                        };
                        ProductOrderFormMainInItemItemController.prototype.addInItem = function () {
                            if (!objectPath.has(this.dataItem, 'inItems')) {
                                this.set('inItems', []);
                            }
                            this.dataItem.inItems.push({});
                        };
                        ProductOrderFormMainInItemItemController.prototype.removeInItem = function (key) {
                            this.dataItem.inItems.splice(key, 1);
                        };
                        ProductOrderFormMainInItemItemController.prototype.addOutItem = function () {
                            if (!objectPath.has(this.dataItem, 'outItems')) {
                                this.set('outItems', []);
                            }
                            this.dataItem.outItems.push({});
                        };
                        ProductOrderFormMainInItemItemController.prototype.removeOutItem = function (key) {
                            this.dataItem.outItems.splice(key, 1);
                        };
                        return ProductOrderFormMainInItemItemController;
                    }());
                    Item.ProductOrderFormMainInItemItemController = ProductOrderFormMainInItemItemController;
                    angular
                        .module('amma-product-order')
                        .controller('AmmaProductOrderFormMainInItemItemController', ProductOrderFormMainInItemItemController);
                })(Item = InItem.Item || (InItem.Item = {}));
            })(InItem = Main.InItem || (Main.InItem = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
