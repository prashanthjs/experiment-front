var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Payment;
            (function (Payment) {
                var ProductOrderFormMainPaymentController = (function () {
                    /* @ngInject */
                    function ProductOrderFormMainPaymentController($mdDialog, $scope) {
                        this.dialogService = $mdDialog;
                        this.$scope = $scope;
                    }
                    ProductOrderFormMainPaymentController.prototype.add = function ($event) {
                        this.edit(null, $event);
                    };
                    ProductOrderFormMainPaymentController.prototype.edit = function (key, $event) {
                        var _this = this;
                        var model = this.$scope.getModel();
                        var dataItem = null;
                        if (!model || !objectPath.has(model, 'payment')) {
                            this.$scope.updateModel('payment', []);
                        }
                        if (key !== null && model && model.payment && model.payment[key]) {
                            dataItem = angular.extend({}, model.payment[key]);
                        }
                        var promise = this.openItemDialog(dataItem, $event);
                        promise.then(function (item) {
                            if (item) {
                                var inItems = _this.$scope.getModel().payment;
                                if (key === null) {
                                    inItems.push(item);
                                }
                                else {
                                    inItems[key] = item;
                                }
                            }
                        }, function () {
                        });
                    };
                    ProductOrderFormMainPaymentController.prototype.openItemDialog = function (dataItem, $event) {
                        return this.dialogService.show({
                            controller: 'AmmaProductOrderFormMainPaymentItemController',
                            controllerAs: 'ammaProductOrderFormMainPaymentItemController',
                            templateUrl: '/app/amma-product-order/form/main/payment/item/product-order.form.main.payment.item.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                dataItem: dataItem
                            },
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        });
                    };
                    ProductOrderFormMainPaymentController.prototype.remove = function (key, event) {
                        var model = this.$scope.getModel();
                        var dataItem = model.inItems[key];
                        var id = dataItem._id;
                        var confirm = this.dialogService.confirm({
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        }).title('Would you like to delete ' + id + '?')
                            .ariaLabel('Delete ' + id)
                            .targetEvent(event)
                            .ok('Yes')
                            .cancel('No');
                        this.dialogService.show(confirm).then(function () {
                            model.inItems.splice(key, 1);
                        }, function () {
                        });
                    };
                    return ProductOrderFormMainPaymentController;
                }());
                Payment.ProductOrderFormMainPaymentController = ProductOrderFormMainPaymentController;
                angular
                    .module('amma-product-order')
                    .controller('AmmaProductOrderFormMainPaymentController', ProductOrderFormMainPaymentController);
            })(Payment = Main.Payment || (Main.Payment = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
