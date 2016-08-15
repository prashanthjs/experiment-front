module AmmaUserGroup.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class UserGroupFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, USER_GROUP_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, USER_GROUP_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-user-group')
        .controller('AmmaUserGroupFormController', UserGroupFormController);
}

