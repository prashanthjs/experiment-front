module AmmaCategory.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class CategoryFormController extends FormBaseController {

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, CATEGORY_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, CATEGORY_FORM_EVENT_NAME);
        }

    }
    angular
        .module('amma-category')
        .controller('AmmaCategoryFormController', CategoryFormController);
}

