module AmmaProductOrderStatus.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class ProductOrderStatusCommandService extends CommandService {

        protected dialogService;
        /* @ngInject */
        constructor(AmmaProductOrderStatusRestService:RestService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService, PRODUCT_ORDER_STATUS_BASE_EVENT_NAME:string, $mdDialog) {
            super(AmmaProductOrderStatusRestService, AmmaEventEmitterService, $q, PRODUCT_ORDER_STATUS_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id:string, ev:any):ng.IPromise<any> {
            return this.dialogService.show({
                controller: 'AmmaProductOrderStatusFormController',
                controllerAs: 'ammaProductOrderStatusFormController',
                templateUrl: 'app/amma-product-order-status/form/product-order-status.form.tmpl.html',
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

         removeDialog(id:string, event):ng.IPromise<any> {
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

    }
    angular.module('amma-product-order-status')
        .service('AmmaProductOrderStatusCommandService', ProductOrderStatusCommandService);
}
