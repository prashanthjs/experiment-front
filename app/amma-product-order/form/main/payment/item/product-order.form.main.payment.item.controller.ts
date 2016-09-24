module AmmaProductOrder.Form.Main.Payment.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderFormMainPaymentItemController {
        protected dialogService;
        public dataItem;
        public searchProduct;
        public stepQty = 1;
        public minQty = 1;
        public maxQty = null;

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

    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainPaymentItemController', ProductOrderFormMainPaymentItemController);
}

