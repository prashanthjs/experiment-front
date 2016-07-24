module AmmaCommon.Services {

    export class MessageService {

        protected messageService;
        protected logService;

        /* @ngInject */
        constructor($mdToast, $log:ng.ILogService) {
            this.messageService = $mdToast;
            this.logService = $log;
        }

        displayErrorMessage(message, error = null) {
            if(error){
                this.logService.error(error);
            }
            this.displayMessage(message, 'error');
        }

        displaySuccessMessage(message, info = null) {
            if(info){
                this.logService.error(info);
            }
            this.displayMessage(message, 'success');
        }

        displayInfoMessage(message) {
            this.displayMessage(message);
        }

        displayMessage(message, type = 'info', position = 'bottom right', hideDelay = 1500) {
            this.messageService.show({
                template: '<md-toast class="md-toast ' + type + '">' + message + '</md-toast>',
                position: position,
                hideDelay: hideDelay
            });
        }

    }

    angular.module('amma-common')
        .service('AmmaMessageService', MessageService);

}
