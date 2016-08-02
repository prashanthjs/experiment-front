module AmmaUser.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class UserCommandService extends CommandService {

        protected dialogService;
        /* @ngInject */
        constructor(AmmaUserRestService:RestService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService, USER_BASE_EVENT_NAME:string, $mdDialog) {
            super(AmmaUserRestService, AmmaEventEmitterService, $q, USER_BASE_EVENT_NAME);
            this.dialogService = $mdDialog;
        }


        openForm(id:string, ev:any):ng.IPromise<any> {
            return this.dialogService.show({
                controller: 'AmmaUserFormController',
                controllerAs: 'ammaUserFormController',
                templateUrl: 'app/amma-user/form/user.form.tmpl.html',
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
    angular.module('amma-user')
        .service('AmmaUserCommandService', UserCommandService);
}
