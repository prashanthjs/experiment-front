var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var OrderStatusCommandService = (function (_super) {
            __extends(OrderStatusCommandService, _super);
            /* @ngInject */
            function OrderStatusCommandService(AmmaOrderStatusRestService, AmmaEventEmitterService, $q, ORDER_STATUS_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaOrderStatusRestService, AmmaEventEmitterService, $q, ORDER_STATUS_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            OrderStatusCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaOrderStatusFormController',
                    controllerAs: 'ammaOrderStatusFormController',
                    templateUrl: 'app/amma-order-status/form/order-status.form.tmpl.html',
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
            OrderStatusCommandService.prototype.removeDialog = function (id, event) {
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
            return OrderStatusCommandService;
        }(CommandService));
        Common.OrderStatusCommandService = OrderStatusCommandService;
        angular.module('amma-order-status')
            .service('AmmaOrderStatusCommandService', OrderStatusCommandService);
    })(Common = AmmaOrderStatus.Common || (AmmaOrderStatus.Common = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
