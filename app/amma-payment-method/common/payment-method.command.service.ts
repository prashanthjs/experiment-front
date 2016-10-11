module AmmaPaymentMethod.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class PaymentMethodCommandService extends CommandService {

        protected dialogService;
        /* @ngInject */
        constructor(AmmaPaymentMethodRestService:RestService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService, PAYMENT_METHOD_BASE_EVENT_NAME:string, $mdDialog) {
            super(AmmaPaymentMethodRestService, AmmaEventEmitterService, $q, PAYMENT_METHOD_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id:string, ev:any):ng.IPromise<any> {
            return this.dialogService.show({
                controller: 'AmmaPaymentMethodFormController',
                controllerAs: 'ammaPaymentMethodFormController',
                templateUrl: 'app/amma-payment-method/form/payment-method.form.tmpl.html',
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
    angular.module('amma-payment-method')
        .service('AmmaPaymentMethodCommandService', PaymentMethodCommandService);
}
