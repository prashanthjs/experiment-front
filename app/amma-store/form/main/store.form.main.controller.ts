module AmmaStore.Form.Main {

    import FormContentController = AmmaCommon.Common.FormContentController;
    import IFormScope = AmmaCommon.Common.IFormScope;
    export class StoreFormMainController extends FormContentController {
        public stores;

        /* @ngInject */
        constructor($scope:IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService);
        }

        init() {
            super.init();
            this.loadStores();
        }

        loadStores() {
            this.commandService.getList().then((response)=> {
                this.stores = response;
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
            });
        }
    }
    angular
        .module('amma-store')
        .controller('AmmaStoreFormMainController', StoreFormMainController);
}

