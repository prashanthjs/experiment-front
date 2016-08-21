var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var ViewMainController = (function (_super) {
            __extends(ViewMainController, _super);
            /* @ngInject */
            function ViewMainController(CommandService, AmmaMessageService, $stateParams, GalleryCommandService, $state, $rootScope, $scope, eventName) {
                _super.call(this, AmmaMessageService);
                this.viewRoute = '';
                this.listRoute = '';
                this.commandService = CommandService;
                this.params = $stateParams;
                this.eventData = $stateParams;
                this.galleryCommandService = GalleryCommandService;
                this.$state = $state;
                this.eventName = eventName;
                this.$rootScope = $rootScope;
                this.$scope = $scope;
                this.load();
                this.registerEvents();
            }
            ViewMainController.prototype.load = function () {
                var _this = this;
                this.commandService.getById(this.eventData.id).then(function (response) {
                    _this.model = response;
                    _this.eventData.model = _this.model;
                    _this.notify(_this.eventData);
                    _this.afterLoad();
                }, function (error) {
                    _this.messageService.displayErrorMessage('Cannot load user' + error.data.message, error);
                });
            };
            ViewMainController.prototype.afterLoad = function () {
            };
            ViewMainController.prototype.edit = function ($event) {
                var _this = this;
                var promise = this.commandService.openForm(this.eventData.id, $event);
                promise.then(function () {
                    _this.load();
                }, function () {
                    _this.load();
                });
            };
            ViewMainController.prototype.create = function ($event) {
                var _this = this;
                var promise = this.commandService.openForm(null, $event);
                promise.then(function (response) {
                    if (response && response.data && response.data.id) {
                        _this.$state.go(_this.viewRoute, { id: response.data.id });
                    }
                }, function () {
                });
            };
            ViewMainController.prototype.remove = function ($event) {
                var _this = this;
                var promise = this.commandService.removeDialog(this.eventData.id, $event);
                promise.then(function () {
                    _this.$state.go(_this.listRoute);
                }, function (error) {
                    if (error) {
                        _this.messageService.displayErrorMessage('Cannot remove user' + error.data.message, error);
                    }
                });
            };
            ViewMainController.prototype.openImage = function (image, $event) {
                this.galleryCommandService.open(this.images, image, $event);
            };
            ViewMainController.prototype.registerEvents = function () {
                var _this = this;
                var unbindInitFunc = this.$rootScope.$on(this.eventName + '.init', function (event, data) {
                    _this.eventData = data;
                    _this.handleInit();
                });
                var unbindDataFunc = this.$rootScope.$on(this.eventName + '.data', function (event, data) {
                    _this.eventData = data;
                    _this.handleDataChange();
                });
                var unbindReloadDataFunc = this.$rootScope.$on(this.eventName + '.reload', function (event, data) {
                    _this.eventData = data;
                    _this.handleReload();
                });
                this.$scope.$on('$destroy', function () {
                    unbindInitFunc();
                    unbindDataFunc();
                    unbindReloadDataFunc();
                });
            };
            ViewMainController.prototype.notify = function (data) {
                this.$rootScope.$emit(this.eventName + '.data', data);
            };
            ViewMainController.prototype.handleInit = function () {
            };
            ViewMainController.prototype.handleDataChange = function () {
            };
            ViewMainController.prototype.handleReload = function () {
                this.load();
            };
            return ViewMainController;
        }(Common.BaseController));
        Common.ViewMainController = ViewMainController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
