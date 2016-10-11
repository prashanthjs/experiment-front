var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var Store;
            (function (Store) {
                var OrderFormMainStoreController = (function () {
                    /* @ngInject */
                    function OrderFormMainStoreController($scope) {
                        this.$scope = $scope;
                    }
                    OrderFormMainStoreController.prototype.itemChange = function (item) {
                        this.$scope.updateModel('store.name', item.title);
                        this.$scope.updateModel('store.email', item.email);
                        this.$scope.updateModel('store.contactNumber', item.contactNumber);
                        this.$scope.updateModel('store._id', item._id);
                    };
                    return OrderFormMainStoreController;
                }());
                Store.OrderFormMainStoreController = OrderFormMainStoreController;
                angular
                    .module('amma-order')
                    .controller('AmmaOrderFormMainStoreController', OrderFormMainStoreController);
            })(Store = Main.Store || (Main.Store = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
