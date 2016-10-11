module AmmaOrder.Form.Main.User {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class OrderFormMainUserController {
        private $scope;
        /* @ngInject */
        constructor($scope) {
            this.$scope = $scope;
        }

        itemChange(item) {
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
        }
    }

    angular
        .module('amma-order')
        .controller('AmmaOrderFormMainUserController', OrderFormMainUserController);
}

