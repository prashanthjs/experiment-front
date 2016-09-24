var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var OutItem;
            (function (OutItem) {
                var ProductOrderFormMainOutItemController = (function () {
                    /* @ngInject */
                    function ProductOrderFormMainOutItemController($scope) {
                        this.$scope = $scope;
                    }
                    ProductOrderFormMainOutItemController.prototype.addOutItem = function () {
                        var model = this.$scope.getModel();
                        if (!model || !objectPath.has(model, 'outItems')) {
                            this.$scope.updateModel('outItems', []);
                        }
                        model.outItems.push({});
                    };
                    ProductOrderFormMainOutItemController.prototype.removeOutItem = function (key) {
                        var model = this.$scope.getModel();
                        model.outItems.splice(key, 1);
                        this.$scope.updateOrderPrice();
                    };
                    return ProductOrderFormMainOutItemController;
                }());
                OutItem.ProductOrderFormMainOutItemController = ProductOrderFormMainOutItemController;
                angular
                    .module('amma-product-order')
                    .controller('AmmaProductOrderFormMainOutItemController', ProductOrderFormMainOutItemController);
            })(OutItem = Main.OutItem || (Main.OutItem = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
