var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaProduct;
(function (AmmaProduct) {
    var View;
    (function (View) {
        var ViewMainController = AmmaCommon.Common.ViewMainController;
        var ProductViewController = (function (_super) {
            __extends(ProductViewController, _super);
            /* @ngInject */
            function ProductViewController(AmmaProductCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_CONTENT_EVENT_NAME, PRODUCT_PROFILE_IMAGE_TYPE) {
                _super.call(this, AmmaProductCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_CONTENT_EVENT_NAME);
                this.uploadType = 'productProfile';
                this.listRoute = 'triangular.amma-product-list';
                this.viewRoute = 'triangular.amma-product-view';
                this.uploadType = PRODUCT_PROFILE_IMAGE_TYPE;
            }
            ProductViewController.prototype.afterLoad = function () {
                var _this = this;
                this.images = null;
                if (this.model && this.model.imageToken) {
                    this.galleryCommandService.get(this.uploadType, this.model.imageToken, null)
                        .then(function (response) {
                        _this.images = response.data.files;
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot load images' + error.data.message, error);
                    });
                }
            };
            return ProductViewController;
        }(ViewMainController));
        View.ProductViewController = ProductViewController;
        angular
            .module('amma-product')
            .controller('AmmaProductViewController', ProductViewController);
    })(View = AmmaProduct.View || (AmmaProduct.View = {}));
})(AmmaProduct || (AmmaProduct = {}));
