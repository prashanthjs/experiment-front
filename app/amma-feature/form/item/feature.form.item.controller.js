var AmmaFeature;
(function (AmmaFeature) {
    var Form;
    (function (Form) {
        var Item;
        (function (Item) {
            var FeatureFormItemController = (function () {
                /* @ngInject */
                function FeatureFormItemController(model, $mdDialog, FEATURE_IMAGE_TYPE) {
                    this.isNew = false;
                    this.isNew = false;
                    if (!model) {
                        this.isNew = true;
                    }
                    this.model = model || {};
                    this.dialogService = $mdDialog;
                    this.imageType = FEATURE_IMAGE_TYPE;
                }
                FeatureFormItemController.prototype.saveAndClose = function ($event) {
                    this.isNew = false;
                    this.dialogService.hide(this.model);
                };
                FeatureFormItemController.prototype.cancel = function ($event) {
                    this.dialogService.hide();
                };
                return FeatureFormItemController;
            }());
            Item.FeatureFormItemController = FeatureFormItemController;
            angular
                .module('amma-feature')
                .controller('AmmaFeatureFormItemController', FeatureFormItemController);
        })(Item = Form.Item || (Form.Item = {}));
    })(Form = AmmaFeature.Form || (AmmaFeature.Form = {}));
})(AmmaFeature || (AmmaFeature = {}));
