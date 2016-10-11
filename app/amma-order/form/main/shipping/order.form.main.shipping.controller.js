var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Shipping;
            (function (Shipping) {
                var OrderFormMainShippingController = (function () {
                    /* @ngInject */
                    function OrderFormMainShippingController($mdDialog, $scope) {
                        this.dialogService = $mdDialog;
                        this.$scope = $scope;
                    }
                    OrderFormMainShippingController.prototype.add = function ($event) {
                        this.edit(null, $event);
                    };
                    OrderFormMainShippingController.prototype.edit = function (key, $event) {
                        var _this = this;
                        var model = this.$scope.getModel();
                        var dataItem = null;
                        if (!model || !objectPath.has(model, 'shipping')) {
                            this.$scope.updateModel('shipping', []);
                        }
                        if (key !== null && model && model.shipping && model.shipping[key]) {
                            dataItem = angular.extend({}, model.shipping[key]);
                        }
                        var promise = this.openItemDialog(dataItem, $event);
                        promise.then(function (item) {
                            if (item) {
                                var inItems = _this.$scope.getModel().shipping;
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
                    OrderFormMainShippingController.prototype.openItemDialog = function (dataItem, $event) {
                        return this.dialogService.show({
                            controller: 'AmmaOrderFormMainShippingItemController',
                            controllerAs: 'ammaOrderFormMainShippingItemController',
                            templateUrl: '/app/amma-order/form/main/shipping/item/order.form.main.shipping.item.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                dataItem: dataItem
                            },
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        });
                    };
                    OrderFormMainShippingController.prototype.remove = function (key, event) {
                        var model = this.$scope.getModel();
                        var dataItem = model.shipping[key];
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
                            model.shipping.splice(key, 1);
                        }, function () {
                        });
                    };
                    return OrderFormMainShippingController;
                }());
                Shipping.OrderFormMainShippingController = OrderFormMainShippingController;
                angular
                    .module('amma-order')
                    .controller('AmmaOrderFormMainShippingController', OrderFormMainShippingController);
            })(Shipping = Main.Shipping || (Main.Shipping = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
