module AmmaProductOrder.Form.Main.InItem {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import ProductOrderCommandService = AmmaProductOrder.Common.ProductOrderCommandService;

    export class ProductOrderFormMainInItemController {
        protected dialogService;
        protected commandService: ProductOrderCommandService;
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

            if (!model || !objectPath.has(model, 'inItems')) {
                this.$scope.updateModel('inItems', []);
            }
            if (key !== null && model && model.inItems && model.inItems[key]) {
                dataItem = angular.extend({}, model.inItems[key]);
            }
            const promise = this.openItemDialog(dataItem, $event);
            promise.then((item)=> {
                if (item) {
                    let inItems = this.$scope.getModel().inItems;

                    if (key === null) {
                        inItems.push(item);
                    } else {
                        inItems[key] = item;
                    }
                    this.$scope.updateOrderPrice();
                }
            }, ()=> {

            });
        }

        openItemDialog(dataItem, $event) {
            return this.dialogService.show({
                controller: 'AmmaProductOrderFormMainInItemItemController',
                controllerAs: 'ammaProductOrderFormMainInItemItemController',
                templateUrl: '/app/amma-product-order/form/main/inItem/item/product-order.form.main.inItem.item.tmpl.html',
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
            let dataItem = model.inItems[key];
            let id = dataItem._id;
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
                model.inItems.splice(key, 1);
                this.$scope.orderPrice();
            }, () => {

            });

        }


    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainInItemController', ProductOrderFormMainInItemController);
}

