module AmmaUserGroup.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class UserGroupFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope) {
            super(id, $mdDialog, $scope);
        }


    }
    angular
        .module('amma-user-group')
        .controller('AmmaUserGroupFormController', UserGroupFormController);
}

