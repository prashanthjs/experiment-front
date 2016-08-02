var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var FormBaseController = (function () {
            /* @ngInject */
            function FormBaseController(id, $mdDialog, $scope) {
                this.id = id;
                this.dialogService = $mdDialog;
                this.$scope = $scope;
                this.init();
            }
            FormBaseController.prototype.init = function () {
                var _this = this;
                this.$scope.cancelDialog = function () {
                    _this.dialogService.cancel();
                };
            };
            return FormBaseController;
        }());
        Common.FormBaseController = FormBaseController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
