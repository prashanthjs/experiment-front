var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var ViewController = (function (_super) {
            __extends(ViewController, _super);
            /* @ngInject */
            function ViewController(CommandService, AmmaMessageService, $stateParams, GalleryCommandService, $state) {
                _super.call(this, AmmaMessageService);
                this.viewRoute = '';
                this.listRoute = '';
                this.commandService = CommandService;
                this.params = $stateParams;
                this.id = $stateParams.id;
                this.galleryCommandService = GalleryCommandService;
                this.$state = $state;
                this.load();
            }
            ViewController.prototype.load = function () {
                var _this = this;
                this.commandService.getById(this.id).then(function (response) {
                    _this.model = response;
                    _this.afterLoad();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot load user' + error.data.message, error);
                });
            };
            ViewController.prototype.afterLoad = function () {
            };
            ViewController.prototype.edit = function ($event) {
                var _this = this;
                var promise = this.commandService.openForm(this.id, $event);
                promise.then(function () {
                    _this.load();
                }, function () {
                    _this.load();
                });
            };
            ViewController.prototype.create = function ($event) {
                var _this = this;
                var promise = this.commandService.openForm(null, $event);
                promise.then(function (response) {
                    console.log(response);
                    if (response && response.data && response.data.id) {
                        _this.$state.go(_this.viewRoute, { id: response.data.id });
                    }
                }, function () {
                });
            };
            ViewController.prototype.remove = function ($event) {
                var _this = this;
                var promise = this.commandService.removeDialog(this.id, $event);
                promise.then(function () {
                    _this.$state.go(_this.listRoute);
                }, function (error) {
                    if (error) {
                        _this.messageService.displayErrorMessage('Cannot remove user' + error.data.message, error);
                    }
                });
            };
            ViewController.prototype.openImage = function (image, $event) {
                this.galleryCommandService.open(this.images, image, $event);
            };
            return ViewController;
        }(Common.BaseController));
        Common.ViewController = ViewController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
