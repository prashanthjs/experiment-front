var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var ShippingMethodCommandService = (function (_super) {
            __extends(ShippingMethodCommandService, _super);
            /* @ngInject */
            function ShippingMethodCommandService(AmmaShippingMethodRestService, AmmaEventEmitterService, $q, SHIPPING_METHOD_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaShippingMethodRestService, AmmaEventEmitterService, $q, SHIPPING_METHOD_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            ShippingMethodCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaShippingMethodFormController',
                    controllerAs: 'ammaShippingMethodFormController',
                    templateUrl: 'app/amma-shipping-method/form/shipping-method.form.tmpl.html',
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
            ShippingMethodCommandService.prototype.removeDialog = function (id, event) {
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
            return ShippingMethodCommandService;
        }(CommandService));
        Common.ShippingMethodCommandService = ShippingMethodCommandService;
        angular.module('amma-shipping-method')
            .service('AmmaShippingMethodCommandService', ShippingMethodCommandService);
    })(Common = AmmaShippingMethod.Common || (AmmaShippingMethod.Common = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
