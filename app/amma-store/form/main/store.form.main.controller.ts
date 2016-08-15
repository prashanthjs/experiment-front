module AmmaStore.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class StoreFormMainController extends FormMainContentController {
        public stores;

        /* @ngInject */
        constructor($scope:IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService, $rootScope, STORE_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService, $rootScope, STORE_FORM_EVENT_NAME);
        }

        handleInit() {
            this.loadStores();
        }

        loadStores() {
            this.commandService.getList().then((response)=> {
                this.stores = response;
                this.loadModel();
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
            });
        }
    }
    angular
        .module('amma-store')
        .controller('AmmaStoreFormMainController', StoreFormMainController);
}

