module AmmaTag.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class TagFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, TAG_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, TAG_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-tag')
        .controller('AmmaTagFormController', TagFormController);
}

