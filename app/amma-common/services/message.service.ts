module AmmaCommon.Services {

    export class MessageService {

        protected messageService;

        /* @ngInject */
        constructor($mdToast) {
            this.messageService = $mdToast;
        }

        displayErrorMessage(message) {
            this.displayMessage(message, 'error');
        }

        displaySuccessMessage(message) {
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
