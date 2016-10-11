var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Shipping;
            (function (Shipping) {
                var Item;
                (function (Item) {
                    var OrderFormMainShippingItemController = (function () {
                        /* @ngInject */
                        function OrderFormMainShippingItemController(dataItem, $mdDialog) {
                            this.dataItem = dataItem;
                            if (!this.dataItem) {
                                this.dataItem = {};
                            }
                            this.dialogService = $mdDialog;
                        }
                        OrderFormMainShippingItemController.prototype.saveAndClose = function () {
                            this.dialogService.hide(this.dataItem);
                        };
                        OrderFormMainShippingItemController.prototype.cancel = function () {
                            this.dialogService.hide();
                        };
                        OrderFormMainShippingItemController.prototype.itemChange = function (shipping) {
                            this.set('_id', shipping._id);
                            this.set('title', shipping.title);
                        };
                        OrderFormMainShippingItemController.prototype.set = function (key, value) {
                            objectPath.set(this.dataItem, key, value);
                        };
                        return OrderFormMainShippingItemController;
                    }());
                    Item.OrderFormMainShippingItemController = OrderFormMainShippingItemController;
                    angular
                        .module('amma-order')
                        .controller('AmmaOrderFormMainShippingItemController', OrderFormMainShippingItemController);
                })(Item = Shipping.Item || (Shipping.Item = {}));
            })(Shipping = Main.Shipping || (Main.Shipping = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
