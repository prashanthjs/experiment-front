var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Payment;
            (function (Payment) {
                var Item;
                (function (Item) {
                    var ProductOrderFormMainPaymentItemController = (function () {
                        /* @ngInject */
                        function ProductOrderFormMainPaymentItemController(dataItem, $mdDialog) {
                            this.stepQty = 1;
                            this.minQty = 1;
                            this.maxQty = null;
                            this.dataItem = dataItem;
                            if (!this.dataItem) {
                                this.dataItem = {};
                            }
                            this.dialogService = $mdDialog;
                        }
                        ProductOrderFormMainPaymentItemController.prototype.saveAndClose = function () {
                            this.dialogService.hide(this.dataItem);
                        };
                        ProductOrderFormMainPaymentItemController.prototype.cancel = function () {
                            this.dialogService.hide();
                        };
                        return ProductOrderFormMainPaymentItemController;
                    }());
                    Item.ProductOrderFormMainPaymentItemController = ProductOrderFormMainPaymentItemController;
                    angular
                        .module('amma-product-order')
                        .controller('AmmaProductOrderFormMainPaymentItemController', ProductOrderFormMainPaymentItemController);
                })(Item = Payment.Item || (Payment.Item = {}));
            })(Payment = Main.Payment || (Main.Payment = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
