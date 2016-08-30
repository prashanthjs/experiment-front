module AmmaFeature.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class FeatureCommandService extends CommandService {

        protected dialogService;
        /* @ngInject */
        constructor(AmmaFeatureRestService: RestService, AmmaEventEmitterService: EventEmitterService, $q: ng.IQService, FEATURE_BASE_EVENT_NAME: string, $mdDialog) {
            super(AmmaFeatureRestService, AmmaEventEmitterService, $q, FEATURE_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id: string, ev: any): ng.IPromise<any> {
            return this.dialogService.show({
                controller: 'AmmaFeatureFormController',
                controllerAs: 'ammaFeatureFormController',
                templateUrl: 'app/amma-feature/form/feature.form.tmpl.html',
                targetEvent: ev,
                preserveScope: true,
                autoWrap: true,
                skipHide: true,
                locals: {
                    id: id
                }
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

        openFeatureItemDialog(dataItem, $event) {

            return this.dialogService.show({
                controller: 'AmmaFeatureFormItemController',
                controllerAs: 'ammaFeatureFormItemController',
                templateUrl: 'app/amma-feature/form/item/feature.form.item.tmpl.html',
                targetEvent: $event,
                locals: {
                    model: dataItem
                },
                preserveScope: true,
                autoWrap: true,
                skipHide: true
            });
        }

        removeFeatureItemDialog(dataItem, event): ng.IPromise<any> {
            let id = dataItem._id || dataItem;
            const defer = this.$q.defer();
            const confirm = this.dialogService.confirm({
                preserveScope: true,
                autoWrap: true,
                skipHide: true
            }).title('Would you like to delete ' + id + '?')
                .ariaLabel('Delete ' + id)
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');
            console.log(confirm);
            this.dialogService.show(confirm).then(() => {
                defer.resolve(dataItem);
            }, () => {
                defer.reject();
            });
            return defer.promise;
        }

    }
    angular.module('amma-feature')
        .service('AmmaFeatureCommandService', FeatureCommandService);
}
