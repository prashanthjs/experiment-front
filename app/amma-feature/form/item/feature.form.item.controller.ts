module AmmaFeature.Form.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import FormContentController = AmmaCommon.Common.FormContentController;

    export class FeatureFormItemController {
        public model;
        public dialogService;
        public imageType;
        public isNew = false;
        /* @ngInject */
        constructor(model, $mdDialog, FEATURE_IMAGE_TYPE) {
            this.isNew = false;
            if(!model){
                this.isNew = true;
            }
            console.log(model);
            this.model = model || {};
            this.dialogService = $mdDialog;
            this.imageType = FEATURE_IMAGE_TYPE;
        }

        saveAndClose($event) {
            this.isNew = false;
            this.dialogService.hide(this.model);

        }

        cancel($event){
            this.dialogService.hide();
        }
    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureFormItemController', FeatureFormItemController);
}

