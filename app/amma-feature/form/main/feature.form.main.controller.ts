module AmmaFeature.Form.Main {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class FeatureFormMainController extends FormMainContentController {
        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
        }

        // openSecondDialog($event) {
        //     this.dialogService.show({
        //         controllerAs: 'dialogCtrl',
        //         controller: function ($mdDialog) {
        //             this.click = ()=> {
        //                 $mdDialog.hide();
        //             }
        //         },
        //         preserveScope: true,
        //         autoWrap: true,
        //         skipHide: true,
        //         targetEvent: $event,
        //         template: '<md-dialog class="confirm"><md-conent><md-button ng-click="dialogCtrl.click()">I am in a 2nd dialog!</md-button></md-conent></md-dialog>'
        //     });
        // }
    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureFormMainController', FeatureFormMainController);
}

