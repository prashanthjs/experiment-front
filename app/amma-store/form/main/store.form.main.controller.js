var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var StoreFormMainController = (function (_super) {
                __extends(StoreFormMainController, _super);
                /* @ngInject */
                function StoreFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService, $rootScope, STORE_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService, $rootScope, STORE_FORM_EVENT_NAME);
                }
                StoreFormMainController.prototype.handleInit = function () {
                    this.loadStores();
                };
                StoreFormMainController.prototype.loadStores = function () {
                    var _this = this;
                    this.commandService.getList().then(function (response) {
                        _this.stores = response;
                        _this.loadModel();
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                    });
                };
                return StoreFormMainController;
            }(FormMainContentController));
            Main.StoreFormMainController = StoreFormMainController;
            angular
                .module('amma-store')
                .controller('AmmaStoreFormMainController', StoreFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaStore.Form || (AmmaStore.Form = {}));
})(AmmaStore || (AmmaStore = {}));
