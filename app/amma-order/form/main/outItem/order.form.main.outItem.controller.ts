module AmmaOrder.Form.Main.OutItem {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import OrderCommandService = AmmaOrder.Common.OrderCommandService;

    export class OrderFormMainOutItemController {
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
        .module('amma-order')
        .controller('AmmaOrderFormMainOutItemController', OrderFormMainOutItemController);
}

