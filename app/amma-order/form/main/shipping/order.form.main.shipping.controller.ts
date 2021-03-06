module AmmaOrder.Form.Main.Shipping {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import OrderCommandService = AmmaOrder.Common.OrderCommandService;

    export class OrderFormMainShippingController {
        protected dialogService;
        protected commandService: OrderCommandService;
        protected $scope;

        /* @ngInject */
        constructor($mdDialog, $scope) {
            this.dialogService = $mdDialog;
            this.$scope = $scope;
        }

        add($event) {
            this.edit(null, $event);
        }

        edit(key, $event) {
            let model = this.$scope.getModel();
            let dataItem = null;

            if (!model || !objectPath.has(model, 'shipping')) {
                this.$scope.updateModel('shipping', []);
            }
            if (key !== null && model && model.shipping && model.shipping[key]) {
                dataItem = angular.extend({}, model.shipping[key]);
            }
            const promise = this.openItemDialog(dataItem, $event);
            promise.then((item)=> {
                if (item) {
                    let inItems = this.$scope.getModel().shipping;

                    if (key === null) {
                        inItems.push(item);
                    } else {
                        inItems[key] = item;
                    }
                }
            }, ()=> {

            });
        }

        openItemDialog(dataItem, $event) {
            return this.dialogService.show({
                controller: 'AmmaOrderFormMainShippingItemController',
                controllerAs: 'ammaOrderFormMainShippingItemController',
                templateUrl: '/app/amma-order/form/main/shipping/item/order.form.main.shipping.item.tmpl.html',
                targetEvent: $event,
                locals: {
                    dataItem: dataItem
                },
                preserveScope: true,
                autoWrap: true,
                skipHide: true
            });
        }


        remove(key, event) {
            let model = this.$scope.getModel();
            let dataItem = model.shipping[key];
            let id = dataItem._id || dataItem.title;
            const confirm = this.dialogService.confirm({
                preserveScope: true,
                autoWrap: true,
                skipHide: true
            }).title('Would you like to delete ' + id + '?')
                .ariaLabel('Delete ' + id)
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');
            this.dialogService.show(confirm).then(() => {
                model.shipping.splice(key, 1);
            }, () => {

            });

        }


    }

    angular
        .module('amma-order')
        .controller('AmmaOrderFormMainShippingController', OrderFormMainShippingController);
}

