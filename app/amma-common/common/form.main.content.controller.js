var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var FormMainContentController = (function (_super) {
            __extends(FormMainContentController, _super);
            /* @ngInject */
            function FormMainContentController($scope, $mdDialog, AmmaMessageService, triLoaderService, CommandService, $rootScope, eventName) {
                var _this = this;
                _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, CommandService, $rootScope, eventName);
                this.getModel = function () {
                    return _this.model;
                };
                this.setModel = function (model) {
                    _this.model = model;
                };
                this.updateModel = function (key, value) {
                    if (!_this.model) {
                        _this.model = {};
                    }
                    objectPath.set(_this.model, key, value);
                };
                $scope.getModel = this.getModel;
                $scope.setModel = this.setModel;
                $scope.updateModel = this.updateModel;
            }
            FormMainContentController.prototype.handleInit = function () {
                this.loadModel();
            };
            FormMainContentController.prototype.loadModel = function () {
                var _this = this;
                this.id = null;
                this.model = {};
                if (this.eventData && this.eventData.id) {
                    this.id = this.eventData.id;
                    this.loaderService.setLoaderActive(true);
                    this.commandService.getById(this.id).then(function (response) {
                        _this.model = response;
                        _this.afterLoadModel();
                        _this.loaderService.setLoaderActive(false);
                    }, function (error) {
                        _this.loaderService.setLoaderActive(false);
                        _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                    });
                }
            };
            FormMainContentController.prototype.afterLoadModel = function () {
            };
            FormMainContentController.prototype.submit = function ($event, close) {
                var _this = this;
                if (close === void 0) { close = false; }
                this.loaderService.setLoaderActive(true);
                this.commandService.save(this.model).then(function (resp) {
                    _this.messageService.displaySuccessMessage('Successfully saved');
                    _this.loaderService.setLoaderActive(false);
                    _this.eventData.id = resp._id;
                    _this.eventData.model = resp;
                    _this.notify(_this.eventData);
                    _this.afterSubmit();
                    if (!close) {
                        _this.loadModel();
                    }
                    else {
                        _this.hide();
                    }
                }, function (error) {
                    _this.loaderService.setLoaderActive(false);
                    _this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
                });
            };
            FormMainContentController.prototype.afterSubmit = function () {
            };
            return FormMainContentController;
        }(Common.FormContentController));
        Common.FormMainContentController = FormMainContentController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
