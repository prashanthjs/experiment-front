module AmmaProduct.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class ProductCommandService extends CommandService {

        protected dialogService;
        protected restService: ProductRestService;
        /* @ngInject */
        constructor(AmmaProductRestService:ProductRestService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService, PRODUCT_BASE_EVENT_NAME:string, $mdDialog) {
            super(AmmaProductRestService, AmmaEventEmitterService, $q, PRODUCT_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id:string, $event:any):ng.IPromise<any> {
            console.log($event);
            return this.dialogService.show({
                controller: 'AmmaProductFormController',
                controllerAs: 'ammaProductFormController',
                templateUrl: 'app/amma-product/form/product.form.tmpl.html',
                targetEvent: $event,
                locals: {
                    id: id
                },
                escapeToClose: false,
                clickOutsideToClose: false
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
                defer.reject();
            });
            return defer.promise;
        }

        changePassword(id, password):ng.IPromise<any> {
            return this.restService.changePassword(id,password);
        }

    }
    angular.module('amma-product')
        .service('AmmaProductCommandService', ProductCommandService);
}
