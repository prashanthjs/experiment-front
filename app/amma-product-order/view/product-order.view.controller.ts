module AmmaProductOrder.View {

    import BaseController = AmmaCommon.Common.BaseController;
    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;
    import ViewMainController = AmmaCommon.Common.ViewMainController;

    export class ProductOrderViewController extends ViewMainController {

        public subTotal;

        /* @ngInject */
        constructor(AmmaProductOrderCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService: GalleryCommandService, $state, $rootScope, $scope, PRODUCT_ORDER_CONTENT_EVENT_NAME) {
            super(AmmaProductOrderCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_ORDER_CONTENT_EVENT_NAME);
            this.listRoute = 'triangular.amma-product-order-list';
            this.viewRoute = 'triangular.amma-product-order-view';
        }

        afterLoad() {
            let subTotal = 0;
            let model = this.getModel();
            if (model && objectPath.has(model, 'inItems')) {
                for (let i = 0; i < model.inItems.length; i++) {
                    subTotal += model.inItems[i].totalPrice.sell || 0;
                }
            }
            this.subTotal = subTotal;
        }

        productSubTotal(product){
            let subTotal = product.price.sell||0;
            if (product && objectPath.has(product, 'inItems')) {
                for (let i = 0; i < product.inItems.length; i++) {
                    subTotal += product.inItems[i].price.sell || 0;
                }
            }
            return subTotal;
        }

    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderViewController', ProductOrderViewController);
}

