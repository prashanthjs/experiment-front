var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var ProductOrderStatusCommandService = (function (_super) {
            __extends(ProductOrderStatusCommandService, _super);
            /* @ngInject */
            function ProductOrderStatusCommandService(AmmaProductOrderStatusRestService, AmmaEventEmitterService, $q, PRODUCT_ORDER_STATUS_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaProductOrderStatusRestService, AmmaEventEmitterService, $q, PRODUCT_ORDER_STATUS_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            ProductOrderStatusCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaProductOrderStatusFormController',
                    controllerAs: 'ammaProductOrderStatusFormController',
                    templateUrl: 'app/amma-product-order-status/form/product-order-status.form.tmpl.html',
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
            ProductOrderStatusCommandService.prototype.removeDialog = function (id, event) {
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
            return ProductOrderStatusCommandService;
        }(CommandService));
        Common.ProductOrderStatusCommandService = ProductOrderStatusCommandService;
        angular.module('amma-product-order-status')
            .service('AmmaProductOrderStatusCommandService', ProductOrderStatusCommandService);
    })(Common = AmmaProductOrderStatus.Common || (AmmaProductOrderStatus.Common = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
