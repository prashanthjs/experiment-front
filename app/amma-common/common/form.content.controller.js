var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var FormContentController = (function (_super) {
            __extends(FormContentController, _super);
            /* @ngInject */
            function FormContentController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService) {
                _super.call(this, AmmaMessageService);
                this.dialogService = $mdDialog;
                this.commandService = AmmaStoreCommandService;
                this.loaderService = triLoaderService;
                this.$scope = $scope;
            }
            FormContentController.prototype.setId = function (id) {
                this.id = id;
                this.$scope.ammaContentData.id = id;
            };
            FormContentController.prototype.init = function () {
                this.id = this.$scope.ammaContentData.id || null;
                if (this.id) {
                    this.loadModel();
                }
            };
            FormContentController.prototype.loadModel = function () {
                var _this = this;
                this.loaderService.setLoaderActive(true);
                this.commandService.getById(this.id).then(function (response) {
                    _this.model = response;
                    _this.loaderService.setLoaderActive(false);
                }, function (error) {
                    _this.loaderService.setLoaderActive(false);
                    _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                });
            };
            FormContentController.prototype.cancel = function () {
                this.dialogService.cancel();
            };
            FormContentController.prototype.submit = function () {
                var _this = this;
                this.loaderService.setLoaderActive(true);
                this.commandService.save(this.model).then(function (resp) {
                    _this.setId(resp._id);
                    _this.model = resp;
                    _this.messageService.displaySuccessMessage('Successfully saved');
                    _this.loaderService.setLoaderActive(false);
                }, function (error) {
                    _this.loaderService.setLoaderActive(false);
                    _this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
                });
            };
            return FormContentController;
        }(Common.BaseController));
        Common.FormContentController = FormContentController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
