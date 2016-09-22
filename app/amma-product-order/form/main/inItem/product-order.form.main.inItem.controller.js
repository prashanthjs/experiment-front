var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var InItem;
            (function (InItem) {
                var ProductOrderFormMainInItemController = (function () {
                    /* @ngInject */
                    function ProductOrderFormMainInItemController($mdDialog, $scope) {
                        this.dialogService = $mdDialog;
                        this.$scope = $scope;
                    }
                    ProductOrderFormMainInItemController.prototype.add = function (model, $event) {
                        this.edit(null, model, $event);
                    };
                    ProductOrderFormMainInItemController.prototype.edit = function (key, model, $event) {
                        var _this = this;
                        console.log(key);
                        var dataItem = null;
                        if (!objectPath.has(model, 'inItems')) {
                            objectPath.set(model, 'inItems', []);
                        }
                        if (key !== null && model && model.inItems && model.inItems[key]) {
                            dataItem = angular.extend({}, model.inItems[key]);
                        }
                        var promise = this.openItemDialog(dataItem, $event);
                        promise.then(function (item) {
                            if (item) {
                                if (key === null) {
                                    model.inItems.push(item);
                                }
                                else {
                                    model.inItems[key] = item;
                                }
                                _this.$scope.orderPrice();
                            }
                        }, function () {
                        });
                    };
                    ProductOrderFormMainInItemController.prototype.openItemDialog = function (dataItem, $event) {
                        return this.dialogService.show({
                            controller: 'AmmaProductOrderFormMainInItemItemController',
                            controllerAs: 'ammaProductOrderFormMainInItemItemController',
                            templateUrl: '/app/amma-product-order/form/main/inItem/item/product-order.form.main.inItem.item.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                dataItem: dataItem
                            },
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        });
                    };
                    ProductOrderFormMainInItemController.prototype.remove = function (key, model, event) {
                        var _this = this;
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
                            _this.$scope.orderPrice();
                        }, function () {
                        });
                    };
                    return ProductOrderFormMainInItemController;
                }());
                InItem.ProductOrderFormMainInItemController = ProductOrderFormMainInItemController;
                angular
                    .module('amma-product-order')
                    .controller('AmmaProductOrderFormMainInItemController', ProductOrderFormMainInItemController);
            })(InItem = Main.InItem || (Main.InItem = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
