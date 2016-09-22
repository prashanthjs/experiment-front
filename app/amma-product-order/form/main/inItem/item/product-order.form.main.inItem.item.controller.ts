module AmmaProductOrder.Form.Main.InItem.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderFormMainInItemItemController {
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


        itemChange(product) {

            this.stepQty = product.inventory.quantity.step || 1;
            this.minQty = product.inventory.quantity.min || 1;
            this.maxQty = product.inventory.quantity.max || null;
            if (this.maxQty === -1) {
                this.maxQty = null;
            }

            this.set('_id', product._id);
            this.set('title', product.title);
            this.set('sku', product.sku);
            this.set('price.sell', product.price.sell);
            this.set('price.cost', product.price.cost);
            this.set('price.list', product.price.list);

            this.set('shipping.weight', product.shipping.weight);
            this.set('shipping.box.length', product.shipping.box.length);
            this.set('shipping.box.width', product.shipping.box.width);
            this.set('shipping.box.height', product.shipping.box.height);
        }

        set(key, value) {
            objectPath.set(this.dataItem, key, value);
        }


        saveAndClose($event) {
            this.dialogService.hide(this.dataItem);
        }

        cancel($event) {
            this.dialogService.hide();
        }

        addInItem($event) {
            if (!objectPath.has(this.dataItem, 'inItems')) {
                this.set('inItems', []);
            }
            this.dataItem.inItems.push({});
        }

        removeInItem(key, $event) {
            this.dataItem.inItems.splice(key, 1);
        }

        addOutItem($event) {
            if (!objectPath.has(this.dataItem, 'outItems')) {
                this.set('outItems', []);
            }
            this.dataItem.outItems.push({});
        }

        removeOutItem(key, $event) {
            this.dataItem.outItems.splice(key, 1);
        }
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainInItemItemController', ProductOrderFormMainInItemItemController);
}

