var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var OutItem;
            (function (OutItem) {
                var OrderFormMainOutItemController = (function () {
                    /* @ngInject */
                    function OrderFormMainOutItemController($scope) {
                        this.$scope = $scope;
                    }
                    OrderFormMainOutItemController.prototype.addOutItem = function () {
                        var model = this.$scope.getModel();
                        if (!model || !objectPath.has(model, 'outItems')) {
                            this.$scope.updateModel('outItems', []);
                        }
                        model.outItems.push({});
                    };
                    OrderFormMainOutItemController.prototype.removeOutItem = function (key) {
                        var model = this.$scope.getModel();
                        model.outItems.splice(key, 1);
                        this.$scope.updateOrderPrice();
                    };
                    return OrderFormMainOutItemController;
                }());
                OutItem.OrderFormMainOutItemController = OrderFormMainOutItemController;
                angular
                    .module('amma-order')
                    .controller('AmmaOrderFormMainOutItemController', OrderFormMainOutItemController);
            })(OutItem = Main.OutItem || (Main.OutItem = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
