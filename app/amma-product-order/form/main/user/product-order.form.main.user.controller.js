var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var User;
            (function (User) {
                var ProductOrderFormMainUserController = (function () {
                    /* @ngInject */
                    function ProductOrderFormMainUserController($scope) {
                        this.$scope = $scope;
                    }
                    ProductOrderFormMainUserController.prototype.itemChange = function (item) {
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
                    return ProductOrderFormMainUserController;
                }());
                User.ProductOrderFormMainUserController = ProductOrderFormMainUserController;
                angular
                    .module('amma-product-order')
                    .controller('AmmaProductOrderFormMainUserController', ProductOrderFormMainUserController);
            })(User = Main.User || (Main.User = {}));
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaProductOrder.Form || (AmmaProductOrder.Form = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
