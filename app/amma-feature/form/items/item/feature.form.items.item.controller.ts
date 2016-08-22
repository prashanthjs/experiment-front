module AmmaFeature.Form.Items.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import FormContentController = AmmaCommon.Common.FormContentController;

    export class FeatureFormItemsItemController {
        public model;
        public dialogService;
        /* @ngInject */
        constructor(model, $mdDialog) {
            this.model = model || {};
            this.dialogService = $mdDialog;
        }

        saveAndClose($event) {
            this.dialogService.hide(this.model);
        }

        cancel($event){
            this.dialogService.hide();
        }
    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureFormItemsItemController', FeatureFormItemsItemController);
}

