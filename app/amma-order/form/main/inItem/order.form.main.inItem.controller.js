var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var InItem;
            (function (InItem) {
                var OrderFormMainInItemController = (function () {
                    /* @ngInject */
                    function OrderFormMainInItemController($mdDialog, $scope) {
                        this.dialogService = $mdDialog;
                        this.$scope = $scope;
                    }
                    OrderFormMainInItemController.prototype.add = function ($event) {
                        this.edit(null, $event);
                    };
                    OrderFormMainInItemController.prototype.edit = function (key, $event) {
                        var _this = this;
                        var model = this.$scope.getModel();
                        var dataItem = null;
                        if (!model || !objectPath.has(model, 'inItems')) {
                            this.$scope.updateModel('inItems', []);
                        }
                        if (key !== null && model && model.inItems && model.inItems[key]) {
                            dataItem = angular.extend({}, model.inItems[key]);
                        }
                        var promise = this.openItemDialog(dataItem, $event);
                        promise.then(function (item) {
                            if (item) {
                                var inItems = _this.$scope.getModel().inItems;
                                if (key === null) {
                                    inItems.push(item);
                                }
                                else {
                                    inItems[key] = item;
                                }
                                _this.$scope.updateOrderPrice();
                            }
                        }, function () {
                        });
                    };
                    OrderFormMainInItemController.prototype.openItemDialog = function (dataItem, $event) {
                        return this.dialogService.show({
                            controller: 'AmmaOrderFormMainInItemItemController',
                            controllerAs: 'ammaOrderFormMainInItemItemController',
                            templateUrl: '/app/amma-order/form/main/inItem/item/order.form.main.inItem.item.tmpl.html',
                            targetEvent: $event,
                            locals: {
                                dataItem: dataItem
                            },
                            preserveScope: true,
                            autoWrap: true,
                            skipHide: true
                        });
                    };
                    OrderFormMainInItemController.prototype.remove = function (key, event) {
                        var _this = this;
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
                            _this.$scope.orderPrice();
                        }, function () {
                        });
                    };
                    return OrderFormMainInItemController;
                }());
                InItem.OrderFormMainInItemController = OrderFormMainInItemController;
                angular
                    .module('amma-order')
                    .controller('AmmaOrderFormMainInItemController', OrderFormMainInItemController);
            })(InItem = Main.InItem || (Main.InItem = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
