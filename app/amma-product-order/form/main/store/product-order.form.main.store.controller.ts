module AmmaProductOrder.Form.Main.Store {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderFormMainStoreController {
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
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainStoreController', ProductOrderFormMainStoreController);
}

