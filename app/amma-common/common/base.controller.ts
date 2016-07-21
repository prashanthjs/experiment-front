module AmmaCommon.Common {
    import MessageService = AmmaCommon.Services.MessageService;
    export class BaseController {

        protected messageService:MessageService;

        /* @ngInject */
        constructor(AmmaMessageService:MessageService) {
            this.messageService = AmmaMessageService;
        }


    }

}
