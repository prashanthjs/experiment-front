module AmmaFeature.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class FeatureFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
        }

    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureFormMainController', FeatureFormMainController);
}

