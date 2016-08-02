var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var StoreFormController = (function (_super) {
            __extends(StoreFormController, _super);
            /* @ngInject */
            function StoreFormController(id, $mdDialog, $scope) {
                _super.call(this, id, $mdDialog, $scope);
            }
            return StoreFormController;
        }(FormBaseController));
        Form.StoreFormController = StoreFormController;
        angular
            .module('amma-store')
            .controller('AmmaStoreFormController', StoreFormController);
    })(Form = AmmaStore.Form || (AmmaStore.Form = {}));
})(AmmaStore || (AmmaStore = {}));
