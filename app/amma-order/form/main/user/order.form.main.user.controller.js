var AmmaOrder;
(function (AmmaOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var User;
            (function (User) {
                var OrderFormMainUserController = (function () {
                    /* @ngInject */
                    function OrderFormMainUserController($scope) {
                        this.$scope = $scope;
                    }
                    OrderFormMainUserController.prototype.itemChange = function (item) {
                        console.log(item);
                        this.$scope.updateModel('user.name.firstName', item.firstName);
                        this.$scope.updateModel('user.name.firstName', item.firstName);
                        this.$scope.updateModel('user.name.lastName', item.lastName);
                        this.$scope.updateModel('user.name.middleName', item.middleName);
                        this.$scope.updateModel('user.email', item.email);
                        this.$scope.updateModel('user._id', item._id);
                        this.$scope.updateModel('user.contactNumber', item.contactNumber);
                        this.$scope.updateModel('address.shipping', angular.copy(item.address));
                        this.$scope.updateModel('address.billing', angular.copy(item.address));
                    };
                    return OrderFormMainUserController;
                }());
                User.OrderFormMainUserController = OrderFormMainUserController;
                angular
                    .module('amma-order')
                    .controller('AmmaOrderFormMainUserController', OrderFormMainUserController);
            })(User = Main.User || (Main.User = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaOrder.Form || (AmmaOrder.Form = {}));
})(AmmaOrder || (AmmaOrder = {}));
