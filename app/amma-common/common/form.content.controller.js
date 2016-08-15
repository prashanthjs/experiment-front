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
            function FormContentController($scope, $mdDialog, AmmaMessageService, triLoaderService, CommandService, $rootScope, eventName) {
                _super.call(this, AmmaMessageService);
                this.dialogService = $mdDialog;
                this.commandService = CommandService;
                this.loaderService = triLoaderService;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.eventName = eventName;
                this.registerEvents();
            }
            FormContentController.prototype.registerEvents = function () {
                var _this = this;
                var unbindInitFunc = this.$rootScope.$on(this.eventName + '.init', function (event, data) {
                    _this.eventData = data;
                    _this.handleInit();
                });
                var unbindDataFunc = this.$rootScope.$on(this.eventName + '.data', function (event, data) {
                    _this.eventData = data;
                    _this.handleDataChange();
                });
                this.$scope.$on('$destroy', function () {
                    unbindInitFunc();
                    unbindDataFunc();
                });
            };
            FormContentController.prototype.notify = function (data) {
                this.$rootScope.$emit(this.eventName + '.data', data);
            };
            FormContentController.prototype.handleInit = function () {
            };
            FormContentController.prototype.handleDataChange = function () {
            };
            FormContentController.prototype.hide = function () {
                this.dialogService.hide({ data: this.eventData });
            };
            return FormContentController;
        }(Common.BaseController));
        Common.FormContentController = FormContentController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
