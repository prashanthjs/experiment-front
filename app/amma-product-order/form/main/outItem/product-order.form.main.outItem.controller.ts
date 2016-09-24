module AmmaProductOrder.Form.Main.OutItem {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import ProductOrderCommandService = AmmaProductOrder.Common.ProductOrderCommandService;

    export class ProductOrderFormMainOutItemController {
         protected $scope;

        /* @ngInject */
        constructor($scope) {
            this.$scope = $scope;
        }

        addOutItem() {
            let model = this.$scope.getModel();
            if (!model || !objectPath.has(model, 'outItems')) {
                this.$scope.updateModel('outItems', [])
            }
            model.outItems.push({});
        }

        removeOutItem(key) {
            let model = this.$scope.getModel();
            model.outItems.splice(key, 1);
            this.$scope.updateOrderPrice();
        }
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainOutItemController', ProductOrderFormMainOutItemController);
}

