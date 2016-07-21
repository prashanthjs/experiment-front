module AmmaStore.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class StoreCommandService extends CommandService {

        protected dialogService;
        /* @ngInject */
        constructor(AmmaStoreRestService:RestService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService, STORE_BASE_EVENT_NAME:string, $mdDialog) {
            super(AmmaStoreRestService, AmmaEventEmitterService, $q, STORE_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id:string, ev:any):ng.IPromise<any> {
            return this.dialogService.show({
                controller: 'AmmaStoreFormController',
                controllerAs: 'ammaStoreFormController',
                templateUrl: 'app/amma-store/form/store.form.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {
                    model: id ? this.getById(id) : null,
                    stores: this.getList()
                },
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
                defer.resolve();
            });
            return defer.promise;
        }


    }
    angular.module('amma-store')
        .service('AmmaStoreCommandService', StoreCommandService);
}
