module AmmaOrder.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import OrderGridService = AmmaOrder.Common.OrderGridService;
    import OrderRestService = AmmaOrder.Common.OrderRestService;
    import OrderCommandService = AmmaOrder.Common.OrderCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class OrderListController extends ListController {

        /* @ngInject */
        constructor(AmmaOrderGridService:OrderGridService, AmmaOrderCommandService:OrderCommandService, AmmaMessageService, $state) {
            super(AmmaOrderGridService, AmmaOrderCommandService, AmmaMessageService, $state);
            this.viewRoute = 'triangular.amma-order-view';
        }
    }

    angular
        .module('amma-order')
        .controller('AmmaOrderListController', OrderListController);
}

