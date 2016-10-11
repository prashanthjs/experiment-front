module AmmaOrder.Form.Main.Shipping.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class OrderFormMainShippingItemController {
        protected dialogService;
        public dataItem;
        public searchShipping;

        /* @ngInject */
        constructor(dataItem, $mdDialog) {
            this.dataItem = dataItem;
            if (!this.dataItem) {
                this.dataItem = {};
            }
            this.dialogService = $mdDialog;
        }

        saveAndClose() {
            this.dialogService.hide(this.dataItem);
        }

        cancel() {
            this.dialogService.hide();
        }

        itemChange(shipping) {
            this.set('_id', shipping._id);
            this.set('title', shipping.title);
        }

        set(key, value) {
            objectPath.set(this.dataItem, key, value);
        }

    }

    angular
        .module('amma-order')
        .controller('AmmaOrderFormMainShippingItemController', OrderFormMainShippingItemController);
}

