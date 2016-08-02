var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaStore;
(function (AmmaStore) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var StoreCommandService = (function (_super) {
            __extends(StoreCommandService, _super);
            /* @ngInject */
            function StoreCommandService(AmmaStoreRestService, AmmaEventEmitterService, $q, STORE_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaStoreRestService, AmmaEventEmitterService, $q, STORE_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            StoreCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaStoreFormController',
                    controllerAs: 'ammaStoreFormController',
                    templateUrl: 'app/amma-store/form/store.form.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    autoWrap: true,
                    openFrom: ev,
                    locals: {
                        id: id
                    },
                    escapeToClose: false,
                    clickOutsideToClose: false,
                    fullscreen: true
                });
            };
            StoreCommandService.prototype.removeDialog = function (id, event) {
                var _this = this;
                var defer = this.$q.defer();
                var confirm = this.dialogService.confirm()
                    .title('Would you like to delete ' + id + '?')
                    .ariaLabel('Delete ' + id)
                    .targetEvent(event)
                    .ok('Yes')
                    .cancel('No');
                this.dialogService.show(confirm).then(function () {
                    _this.restService.removeById(id).then(function (response) {
                        defer.resolve(response);
                    }, function (response) {
                        defer.reject(response);
                    });
                }, function () {
                    defer.resolve();
                });
                return defer.promise;
            };
            return StoreCommandService;
        }(CommandService));
        Common.StoreCommandService = StoreCommandService;
        angular.module('amma-store')
            .service('AmmaStoreCommandService', StoreCommandService);
    })(Common = AmmaStore.Common || (AmmaStore.Common = {}));
})(AmmaStore || (AmmaStore = {}));
