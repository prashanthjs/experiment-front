module AmmaOrder.Form.Main.Payment.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class OrderFormMainPaymentItemController {
        protected dialogService;
        public dataItem;
        public searchPayment;
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

        itemChange(payment) {
            console.log(payment);
            this.set('_id', payment._id);
            this.set('title', payment.title);
        }

        set(key, value) {
            objectPath.set(this.dataItem, key, value);
        }

    }

    angular
        .module('amma-order')
        .controller('AmmaOrderFormMainPaymentItemController', OrderFormMainPaymentItemController);
}

