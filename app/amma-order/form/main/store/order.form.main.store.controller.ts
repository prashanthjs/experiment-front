module AmmaOrder.Form.Main.Store {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class OrderFormMainStoreController {
        private $scope;
        /* @ngInject */
        constructor($scope) {
            this.$scope = $scope;
        }

        itemChange(item) {
            this.$scope.updateModel('store.name', item.title);
            this.$scope.updateModel('store.email', item.email);
            this.$scope.updateModel('store.contactNumber', item.contactNumber);
            this.$scope.updateModel('store._id', item._id);
        }
    }

    angular
        .module('amma-order')
        .controller('AmmaOrderFormMainStoreController', OrderFormMainStoreController);
}

