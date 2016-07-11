var AmmaCommon;
(function (AmmaCommon) {
    var Services;
    (function (Services) {
        var MessageService = (function () {
            /* @ngInject */
            function MessageService($mdToast) {
                this.messageService = $mdToast;
            }
            MessageService.prototype.displayErrorMessage = function (message) {
                this.displayMessage(message, 'error');
            };
            MessageService.prototype.displaySuccessMessage = function (message) {
                this.displayMessage(message, 'success');
            };
            MessageService.prototype.displayInfoMessage = function (message) {
                this.displayMessage(message);
            };
            MessageService.prototype.displayMessage = function (message, type, position, hideDelay) {
                if (type === void 0) { type = 'info'; }
                if (position === void 0) { position = 'bottom right'; }
                if (hideDelay === void 0) { hideDelay = 500; }
                this.messageService.show({
                    template: '<md-toast class="md-toast ' + type + '">' + message + '</md-toast>',
                    position: position,
                    hideDelay: hideDelay
                });
            };
            return MessageService;
        }());
        Services.MessageService = MessageService;
        angular.module('amma-common')
            .service('AmmaMessageService', MessageService);
    })(Services = AmmaCommon.Services || (AmmaCommon.Services = {}));
})(AmmaCommon || (AmmaCommon = {}));
