module AmmaProductOrder.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import ProductOrderGridService = AmmaProductOrder.Common.ProductOrderGridService;
    import ProductOrderRestService = AmmaProductOrder.Common.ProductOrderRestService;
    import ProductOrderCommandService = AmmaProductOrder.Common.ProductOrderCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class ProductOrderListController extends ListController {

        /* @ngInject */
        constructor(AmmaProductOrderGridService:ProductOrderGridService, AmmaProductOrderCommandService:ProductOrderCommandService, AmmaMessageService, $state) {
            super(AmmaProductOrderGridService, AmmaProductOrderCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderListController', ProductOrderListController);
}

