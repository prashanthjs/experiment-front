var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var Form;
    (function (Form) {
        var BaseController = AmmaCommon.Common.BaseController;
        var StoreFormController = (function (_super) {
            __extends(StoreFormController, _super);
            /* @ngInject */
            function StoreFormController(model, stores, $mdDialog, AmmaMessageService, AmmaStoreCommandService) {
                _super.call(this, AmmaMessageService);
                this.isNew = true;
                this.isNew = model ? false : true;
                this.model = model || {};
                this.dialogService = $mdDialog;
                this.stores = stores;
                this.commandService = AmmaStoreCommandService;
            }
            StoreFormController.prototype.cancel = function () {
                this.processImages();
                console.log(this.model.images);
                // this.dialogService.cancel();
            };
            StoreFormController.prototype.submit = function () {
                var _this = this;
                this.processImages();
                this.commandService.save(this.model).then(function (resp) {
                    _this.model = resp;
                    _this.isNew = false;
                    _this.messageService.displaySuccessMessage('Successfully saved');
                }, function (error) {
                    console.debug(error);
                    _this.messageService.displayErrorMessage('Store cannot be updated:' + error.data.message);
                });
            };
            StoreFormController.prototype.processImages = function () {
                var _this = this;
                var images = this.model.internal.images;
                this.model['images'] = [];
                angular.forEach(images, function (image) {
                    _this.model.images.push(image);
                });
            };
            return StoreFormController;
        }(BaseController));
        Form.StoreFormController = StoreFormController;
        angular
            .module('amma-store')
            .controller('AmmaStoreFormController', StoreFormController);
    })(Form = AmmaStore.Form || (AmmaStore.Form = {}));
})(AmmaStore || (AmmaStore = {}));
