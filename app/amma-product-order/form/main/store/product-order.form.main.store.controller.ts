module AmmaProductOrder.Form.Main.Store {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderFormMainStoreController {
        /* @ngInject */
        constructor() {
        }

        storeChange(item, model) {
            objectPath.set(model, 'store.name', item.title);
            objectPath.set(model, 'store.email', item.email);
            objectPath.set(model, 'store.contactNumber', item.contactNumber);
            objectPath.set(model, 'store._id', item._id);
        }
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainStoreController', ProductOrderFormMainStoreController);
}

