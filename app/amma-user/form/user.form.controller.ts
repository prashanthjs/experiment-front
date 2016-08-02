module AmmaUser.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class UserFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope) {
            super(id, $mdDialog, $scope);
        }

    }
    angular
        .module('amma-user')
        .controller('AmmaUserFormController', UserFormController);
}

