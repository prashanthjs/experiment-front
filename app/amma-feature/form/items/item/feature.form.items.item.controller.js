var AmmaFeature;
(function (AmmaFeature) {
    var Form;
    (function (Form) {
        var Items;
        (function (Items) {
            var Item;
            (function (Item) {
                var FeatureFormItemsItemController = (function () {
                    /* @ngInject */
                    function FeatureFormItemsItemController(model, $mdDialog) {
                        this.model = model || {};
                        this.dialogService = $mdDialog;
                    }
                    FeatureFormItemsItemController.prototype.saveAndClose = function ($event) {
                        this.dialogService.hide(this.model);
                    };
                    FeatureFormItemsItemController.prototype.cancel = function ($event) {
                        this.dialogService.hide();
                    };
                    return FeatureFormItemsItemController;
                }());
                Item.FeatureFormItemsItemController = FeatureFormItemsItemController;
                angular
                    .module('amma-feature')
                    .controller('AmmaFeatureFormItemsItemController', FeatureFormItemsItemController);
            })(Item = Items.Item || (Items.Item = {}));
        })(Items = Form.Items || (Form.Items = {}));
    })(Form = AmmaFeature.Form || (AmmaFeature.Form = {}));
})(AmmaFeature || (AmmaFeature = {}));
