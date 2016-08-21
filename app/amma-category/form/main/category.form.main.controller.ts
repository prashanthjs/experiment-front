module AmmaCategory.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class CategoryFormMainController extends FormMainContentController {
        public categories;

        /* @ngInject */
        constructor($scope:IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaCategoryCommandService, $rootScope, CATEGORY_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaCategoryCommandService, $rootScope, CATEGORY_FORM_EVENT_NAME);
        }

        handleInit() {
            this.loadCategories();
        }

        loadCategories() {
            this.commandService.getList().then((response)=> {
                this.categories = response;
                this.loadModel();
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
            });
        }
    }

    angular
        .module('amma-category')
        .controller('AmmaCategoryFormMainController', CategoryFormMainController);
}

