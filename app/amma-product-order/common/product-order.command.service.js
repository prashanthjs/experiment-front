var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var ProductOrderCommandService = (function (_super) {
            __extends(ProductOrderCommandService, _super);
            /* @ngInject */
            function ProductOrderCommandService(AmmaProductOrderRestService, AmmaEventEmitterService, $q, PRODUCT_ORDER_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaProductOrderRestService, AmmaEventEmitterService, $q, PRODUCT_ORDER_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            ProductOrderCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaProductOrderFormController',
                    controllerAs: 'ammaProductOrderFormController',
                    templateUrl: 'app/amma-product-order/form/product-order.form.tmpl.html',
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
            ProductOrderCommandService.prototype.removeDialog = function (id, event) {
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
            ProductOrderCommandService.prototype.calcOrderProductPrice = function (item) {
                var qty = item.qty || 1;
                var inItems = item.inItems || [];
                var outItems = item.outItems || [];
                var sellPrice = item.price.sell || 0;
                var costPrice = item.price.cost || 0;
                var listPrice = item.price.list || 0;
                var totalSellPrice = sellPrice * qty;
                var totalListPrice = costPrice * qty;
                var totalCostPrice = listPrice * qty;
                for (var i = 0; i < inItems.length; i++) {
                    var inItem = inItems[i];
                    var inItemSellPrice = inItem.price.sell || 0;
                    var inItemCostPrice = inItem.price.cost || 0;
                    var inItemListPrice = inItem.price.list || 0;
                    totalSellPrice += inItemSellPrice * qty;
                    totalListPrice += inItemListPrice * qty;
                    totalCostPrice += inItemCostPrice * qty;
                }
                for (var i = 0; i < outItems.length; i++) {
                    var outItem = outItems[i];
                    var outItemSellPrice = outItem.price.sell || 0;
                    var outItemCostPrice = outItem.price.cost || 0;
                    var outItemListPrice = outItem.price.list || 0;
                    totalSellPrice += outItemSellPrice;
                    totalListPrice += outItemListPrice;
                    totalCostPrice += outItemCostPrice;
                }
                item.totalPrice = { sell: totalSellPrice, list: totalListPrice, cost: totalCostPrice };
            };
            ProductOrderCommandService.prototype.calcOrderPrice = function (model) {
                var inItems = model.inItems || [];
                var outItems = model.outItems || [];
                var totalSellPrice = 0;
                var totalListPrice = 0;
                var totalCostPrice = 0;
                for (var i = 0; i < inItems.length; i++) {
                    var inItem = inItems[i];
                    this.calcOrderProductPrice(inItem);
                    totalSellPrice += inItem.totalPrice.sell;
                    totalListPrice += inItem.totalPrice.list;
                    totalCostPrice += inItem.totalPrice.cost;
                }
                for (var i = 0; i < outItems.length; i++) {
                    var outItem = outItems[i];
                    var outItemSellPrice = outItem.price.sell || 0;
                    var outItemCostPrice = outItem.price.cost || 0;
                    var outItemListPrice = outItem.price.list || 0;
                    totalSellPrice += outItemSellPrice;
                    totalListPrice += outItemListPrice;
                    totalCostPrice += outItemCostPrice;
                }
                model.totalPrice = { sell: totalSellPrice, list: totalListPrice, cost: totalCostPrice };
            };
            return ProductOrderCommandService;
        }(CommandService));
        Common.ProductOrderCommandService = ProductOrderCommandService;
        angular.module('amma-product-order')
            .service('AmmaProductOrderCommandService', ProductOrderCommandService);
    })(Common = AmmaProductOrder.Common || (AmmaProductOrder.Common = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
