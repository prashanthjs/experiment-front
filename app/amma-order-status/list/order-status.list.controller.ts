module AmmaOrderStatus.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import OrderStatusGridService = AmmaOrderStatus.Common.OrderStatusGridService;
    import OrderStatusRestService = AmmaOrderStatus.Common.OrderStatusRestService;
    import OrderStatusCommandService = AmmaOrderStatus.Common.OrderStatusCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class OrderStatusListController extends ListController {

        /* @ngInject */
        constructor(AmmaOrderStatusGridService:OrderStatusGridService, AmmaOrderStatusCommandService:OrderStatusCommandService, AmmaMessageService, $state) {
            super(AmmaOrderStatusGridService, AmmaOrderStatusCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-order-status')
        .controller('AmmaOrderStatusListController', OrderStatusListController);
}

