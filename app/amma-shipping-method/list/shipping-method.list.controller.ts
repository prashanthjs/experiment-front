module AmmaShippingMethod.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import ShippingMethodGridService = AmmaShippingMethod.Common.ShippingMethodGridService;
    import ShippingMethodRestService = AmmaShippingMethod.Common.ShippingMethodRestService;
    import ShippingMethodCommandService = AmmaShippingMethod.Common.ShippingMethodCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class ShippingMethodListController extends ListController {

        /* @ngInject */
        constructor(AmmaShippingMethodGridService:ShippingMethodGridService, AmmaShippingMethodCommandService:ShippingMethodCommandService, AmmaMessageService, $state) {
            super(AmmaShippingMethodGridService, AmmaShippingMethodCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-shipping-method')
        .controller('AmmaShippingMethodListController', ShippingMethodListController);
}

