module AmmaUser.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class UserFormController extends FormBaseController {
        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, USER_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, USER_FORM_EVENT_NAME);
        }
    }
    angular
        .module('amma-user')
        .controller('AmmaUserFormController', UserFormController);
}

