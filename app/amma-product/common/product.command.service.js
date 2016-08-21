var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var ProductCommandService = (function (_super) {
            __extends(ProductCommandService, _super);
            /* @ngInject */
            function ProductCommandService(AmmaProductRestService, AmmaEventEmitterService, $q, PRODUCT_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaProductRestService, AmmaEventEmitterService, $q, PRODUCT_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            ProductCommandService.prototype.openForm = function (id, $event) {
                console.log($event);
                return this.dialogService.show({
                    controller: 'AmmaProductFormController',
                    controllerAs: 'ammaProductFormController',
                    templateUrl: 'app/amma-product/form/product.form.tmpl.html',
                    targetEvent: $event,
                    locals: {
                        id: id
                    },
                    escapeToClose: false,
                    clickOutsideToClose: false
                });
            };
            ProductCommandService.prototype.removeDialog = function (id, event) {
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
                    defer.reject();
                });
                return defer.promise;
            };
            ProductCommandService.prototype.changePassword = function (id, password) {
                return this.restService.changePassword(id, password);
            };
            return ProductCommandService;
        }(CommandService));
        Common.ProductCommandService = ProductCommandService;
        angular.module('amma-product')
            .service('AmmaProductCommandService', ProductCommandService);
    })(Common = AmmaProduct.Common || (AmmaProduct.Common = {}));
})(AmmaProduct || (AmmaProduct = {}));
