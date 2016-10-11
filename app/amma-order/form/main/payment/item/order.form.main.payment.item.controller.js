var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Payment;
            (function (Payment) {
                var Item;
                (function (Item) {
                    var OrderFormMainPaymentItemController = (function () {
                        /* @ngInject */
                        function OrderFormMainPaymentItemController(dataItem, $mdDialog) {
                            this.stepQty = 1;
                            this.minQty = 1;
                            this.maxQty = null;
                            this.dataItem = dataItem;
                            if (!this.dataItem) {
                                this.dataItem = {};
                            }
                            this.dialogService = $mdDialog;
                        }
                        OrderFormMainPaymentItemController.prototype.saveAndClose = function () {
                            this.dialogService.hide(this.dataItem);
                        };
                        OrderFormMainPaymentItemController.prototype.cancel = function () {
                            this.dialogService.hide();
                        };
                        OrderFormMainPaymentItemController.prototype.itemChange = function (payment) {
                            console.log(payment);
                            this.set('_id', payment._id);
                            this.set('title', payment.title);
                        };
                        OrderFormMainPaymentItemController.prototype.set = function (key, value) {
                            objectPath.set(this.dataItem, key, value);
                        };
                        return OrderFormMainPaymentItemController;
                    }());
                    Item.OrderFormMainPaymentItemController = OrderFormMainPaymentItemController;
                    angular
                        .module('amma-order')
                        .controller('AmmaOrderFormMainPaymentItemController', OrderFormMainPaymentItemController);
                })(Item = Payment.Item || (Payment.Item = {}));
            })(Payment = Main.Payment || (Main.Payment = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
