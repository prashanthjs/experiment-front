var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var ProductOrderStatusListController = (function (_super) {
            __extends(ProductOrderStatusListController, _super);
            /* @ngInject */
            function ProductOrderStatusListController(AmmaProductOrderStatusGridService, AmmaProductOrderStatusCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaProductOrderStatusGridService, AmmaProductOrderStatusCommandService, AmmaMessageService, $state);
            }
            return ProductOrderStatusListController;
        }(ListController));
        List.ProductOrderStatusListController = ProductOrderStatusListController;
        angular
            .module('amma-product-order-status')
            .controller('AmmaProductOrderStatusListController', ProductOrderStatusListController);
    })(List = AmmaProductOrderStatus.List || (AmmaProductOrderStatus.List = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
