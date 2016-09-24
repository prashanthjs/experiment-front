module AmmaProductOrderStatus.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import ProductOrderStatusGridService = AmmaProductOrderStatus.Common.ProductOrderStatusGridService;
    import ProductOrderStatusRestService = AmmaProductOrderStatus.Common.ProductOrderStatusRestService;
    import ProductOrderStatusCommandService = AmmaProductOrderStatus.Common.ProductOrderStatusCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class ProductOrderStatusListController extends ListController {

        /* @ngInject */
        constructor(AmmaProductOrderStatusGridService:ProductOrderStatusGridService, AmmaProductOrderStatusCommandService:ProductOrderStatusCommandService, AmmaMessageService, $state) {
            super(AmmaProductOrderStatusGridService, AmmaProductOrderStatusCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-product-order-status')
        .controller('AmmaProductOrderStatusListController', ProductOrderStatusListController);
}

