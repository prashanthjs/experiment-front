var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Shipping;
            (function (Shipping) {
                var ProductOrderFormMainShippingController = (function () {
                    /* @ngInject */
                    function ProductOrderFormMainShippingController($mdDialog, $scope) {
                        this.dialogService = $mdDialog;
                        this.$scope = $scope;
                    }
                    ProductOrderFormMainShippingController.prototype.add = function ($event) {
                        this.edit(null, $event);
                    };
                    ProductOrderFormMainShippingController.prototype.edit = function (key, $event) {
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
                    ProductOrderFormMainShippingController.prototype.openItemDialog = function (dataItem, $event) {
                        return this.dialogService.show({
                            controller: 'AmmaProductOrderFormMainShippingItemController',
                            controllerAs: 'ammaProductOrderFormMainShippingItemController',
                            templateUrl: '/app/amma-product-order/form/main/shipping/item/product-order.form.main.shipping.item.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                dataItem: dataItem
                            },
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        });
                    };
                    ProductOrderFormMainShippingController.prototype.remove = function (key, event) {
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
                    return ProductOrderFormMainShippingController;
                }());
                Shipping.ProductOrderFormMainShippingController = ProductOrderFormMainShippingController;
                angular
                    .module('amma-product-order')
                    .controller('AmmaProductOrderFormMainShippingController', ProductOrderFormMainShippingController);
            })(Shipping = Main.Shipping || (Main.Shipping = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
