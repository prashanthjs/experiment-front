module AmmaOrder.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class OrderCommandService extends CommandService {

        protected dialogService;
        /* @ngInject */
        constructor(AmmaOrderRestService: RestService, AmmaEventEmitterService: EventEmitterService, $q: ng.IQService, ORDER_BASE_EVENT_NAME: string, $mdDialog) {
            super(AmmaOrderRestService, AmmaEventEmitterService, $q, ORDER_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id: string, ev: any): ng.IPromise<any> {
            return this.dialogService.show({
                controller: 'AmmaOrderFormController',
                controllerAs: 'ammaOrderFormController',
                templateUrl: 'app/amma-order/form/order.form.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                autoWrap: true,
                openFrom: ev,
                locals: {
                    id: id
                },
                escapeToClose: false,
                clickOutsideToClose: false,
                fullscreen: true
            });
        }

        removeDialog(id: string, event): ng.IPromise<any> {
            const defer = this.$q.defer();
            const confirm = this.dialogService.confirm()
                .title('Would you like to delete ' + id + '?')
                .ariaLabel('Delete ' + id)
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');
            this.dialogService.show(confirm).then(() => {
                this.restService.removeById(id).then((response)=> {
                    defer.resolve(response);
                }, (response) => {
                    defer.reject(response);
                });
            }, () => {
                defer.resolve();
            });
            return defer.promise;
        }


        calcOrderProductPrice(item) {
            const qty = item.qty || 1;
            const inItems = item.inItems || [];
            const outItems = item.outItems || [];

            const sellPrice = item.price.sell || 0;
            const costPrice = item.price.cost || 0;
            const listPrice = item.price.list || 0;

            let totalSellPrice = sellPrice * qty;
            let totalListPrice = costPrice * qty;
            let totalCostPrice = listPrice * qty;

            for (let i = 0; i < inItems.length; i++) {
                let inItem = inItems[i];
                let inItemSellPrice = inItem.price.sell || 0;
                let inItemCostPrice = inItem.price.cost || 0;
                let inItemListPrice = inItem.price.list || 0;
                totalSellPrice += inItemSellPrice * qty;
                totalListPrice += inItemListPrice * qty;
                totalCostPrice += inItemCostPrice * qty;
            }

            for (let i = 0; i < outItems.length; i++) {
                let outItem = outItems[i];
                let outItemSellPrice = outItem.price.sell || 0;
                let outItemCostPrice = outItem.price.cost || 0;
                let outItemListPrice = outItem.price.list || 0;
                totalSellPrice += outItemSellPrice;
                totalListPrice += outItemListPrice;
                totalCostPrice += outItemCostPrice;
            }
            item.totalPrice = {sell: totalSellPrice, list: totalListPrice, cost: totalCostPrice};
        }

        calcOrderPrice(model) {
            const inItems = model.inItems || [];
            const outItems = model.outItems || [];

            let totalSellPrice = 0;
            let totalListPrice = 0;
            let totalCostPrice = 0;

            for (let i = 0; i < inItems.length; i++) {
                let inItem = inItems[i];
                this.calcOrderProductPrice(inItem);
                totalSellPrice += inItem.totalPrice.sell;
                totalListPrice += inItem.totalPrice.list;
                totalCostPrice += inItem.totalPrice.cost;
            }

            for (let i = 0; i < outItems.length; i++) {
                let outItem = outItems[i];
                let outItemSellPrice = outItem.price.sell || 0;
                let outItemCostPrice = outItem.price.cost || 0;
                let outItemListPrice = outItem.price.list || 0;
                totalSellPrice += outItemSellPrice;
                totalListPrice += outItemListPrice;
                totalCostPrice += outItemCostPrice;
            }
            model.totalPrice = {sell: totalSellPrice, list: totalListPrice, cost: totalCostPrice};
        }

    }
    angular.module('amma-order')
        .service('AmmaOrderCommandService', OrderCommandService);
}
