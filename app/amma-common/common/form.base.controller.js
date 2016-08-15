var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var FormBaseController = (function () {
            /* @ngInject */
            function FormBaseController(id, $mdDialog, $scope, $rootScope, eventName) {
                var _this = this;
                this.eventData = { id: id };
                this.dialogService = $mdDialog;
                this.$scope = $scope;
                this.eventName = eventName;
                this.$rootScope = $rootScope;
                this.registerEvents();
                this.$scope.hideDialog = function () {
                    _this.dialogService.hide({ data: _this.eventData });
                };
            }
            FormBaseController.prototype.registerEvents = function () {
                var _this = this;
                var unbindDataFunc = this.$rootScope.$on(this.eventName + '.data', function (event, data) {
                    _this.eventData = data;
                    _this.handleDataChange();
                });
                this.$scope.$on('$destroy', function () {
                    unbindDataFunc();
                });
            };
            FormBaseController.prototype.handleDataChange = function () {
            };
            return FormBaseController;
        }());
        Common.FormBaseController = FormBaseController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
