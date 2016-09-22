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

        addOutItem(model, $event) {
            if (!objectPath.has(model, 'outItems')) {
                objectPath.set(model, 'outItems', [])
            }
            model.outItems.push({});

        }

        removeOutItem(key, model, $event) {
            model.outItems.splice(key, 1);
            this.$scope.orderPrice();
        }
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainOutItemController', ProductOrderFormMainOutItemController);
}

