module AmmaFeature.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class FeatureFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, FEATURE_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, FEATURE_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-feature')
        .controller('AmmaFeatureFormController', FeatureFormController);
}

