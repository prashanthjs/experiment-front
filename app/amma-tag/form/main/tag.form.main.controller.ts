module AmmaTag.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class TagFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaTagCommandService, $rootScope, TAG_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaTagCommandService, $rootScope, TAG_FORM_EVENT_NAME);
        }
    }

    angular
        .module('amma-tag')
        .controller('AmmaTagFormMainController', TagFormMainController);
}

