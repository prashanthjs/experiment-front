var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Payment;
            (function (Payment) {
                var OrderFormMainPaymentController = (function () {
                    /* @ngInject */
                    function OrderFormMainPaymentController($mdDialog, $scope) {
                        this.dialogService = $mdDialog;
                        this.$scope = $scope;
                    }
                    OrderFormMainPaymentController.prototype.add = function ($event) {
                        this.edit(null, $event);
                    };
                    OrderFormMainPaymentController.prototype.edit = function (key, $event) {
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
                    OrderFormMainPaymentController.prototype.openItemDialog = function (dataItem, $event) {
                        return this.dialogService.show({
                            controller: 'AmmaOrderFormMainPaymentItemController',
                            controllerAs: 'ammaOrderFormMainPaymentItemController',
                            templateUrl: '/app/amma-order/form/main/payment/item/order.form.main.payment.item.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                dataItem: dataItem
                            },
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        });
                    };
                    OrderFormMainPaymentController.prototype.remove = function (key, event) {
                        var model = this.$scope.getModel();
                        var dataItem = model.payment[key];
                        var id = dataItem._id || dataItem.title;
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
                            model.payment.splice(key, 1);
                        }, function () {
                        });
                    };
                    return OrderFormMainPaymentController;
                }());
                Payment.OrderFormMainPaymentController = OrderFormMainPaymentController;
                angular
                    .module('amma-order')
                    .controller('AmmaOrderFormMainPaymentController', OrderFormMainPaymentController);
            })(Payment = Main.Payment || (Main.Payment = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
