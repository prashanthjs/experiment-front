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
                    function ProductOrderFormMainUserController() {
                    }
                    ProductOrderFormMainUserController.prototype.userChange = function (item, model) {
                        objectPath.set(model, 'user.name.firstName', item.firstName);
                        objectPath.set(model, 'user.name.lastName', item.lastName);
                        objectPath.set(model, 'user.name.middleName', item.middleName);
                        objectPath.set(model, 'user.email', item.email);
                        objectPath.set(model, 'user._id', item._id);
                        objectPath.set(model, 'user.contactNumber', item.contactNumber);
                        objectPath.set(model, 'address.shipping', angular.copy(item.address));
                        objectPath.set(model, 'address.billing', angular.copy(item.address));
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
