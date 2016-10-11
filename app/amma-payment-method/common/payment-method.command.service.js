var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var PaymentMethodCommandService = (function (_super) {
            __extends(PaymentMethodCommandService, _super);
            /* @ngInject */
            function PaymentMethodCommandService(AmmaPaymentMethodRestService, AmmaEventEmitterService, $q, PAYMENT_METHOD_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaPaymentMethodRestService, AmmaEventEmitterService, $q, PAYMENT_METHOD_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            PaymentMethodCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaPaymentMethodFormController',
                    controllerAs: 'ammaPaymentMethodFormController',
                    templateUrl: 'app/amma-payment-method/form/payment-method.form.tmpl.html',
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
            PaymentMethodCommandService.prototype.removeDialog = function (id, event) {
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
            return PaymentMethodCommandService;
        }(CommandService));
        Common.PaymentMethodCommandService = PaymentMethodCommandService;
        angular.module('amma-payment-method')
            .service('AmmaPaymentMethodCommandService', PaymentMethodCommandService);
    })(Common = AmmaPaymentMethod.Common || (AmmaPaymentMethod.Common = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
