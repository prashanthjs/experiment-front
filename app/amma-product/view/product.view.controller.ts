module AmmaProduct.View {

    import BaseController = AmmaCommon.Common.BaseController;
    import ProductCommandService = AmmaProduct.Common.ProductCommandService;
    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;
    import ViewMainController = AmmaCommon.Common.ViewMainController;

    export class ProductViewController extends ViewMainController {

        protected uploadType = 'productProfile';

        /* @ngInject */
        constructor(AmmaProductCommandService: ProductCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService: GalleryCommandService, $state, $rootScope, $scope, PRODUCT_CONTENT_EVENT_NAME, PRODUCT_PROFILE_IMAGE_TYPE) {
            super(AmmaProductCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_CONTENT_EVENT_NAME);
            this.listRoute = 'triangular.amma-product-list';
            this.viewRoute = 'triangular.amma-product-view';
            this.uploadType = PRODUCT_PROFILE_IMAGE_TYPE;

        }

        afterLoad() {
            this.images = null;
            if (this.model && this.model.imageToken) {
                this.galleryCommandService.get(this.uploadType, this.model.imageToken, null)
                    .then((response)=> {
                        this.images = response.data.files;
                    }, (error)=> {
                        this.messageService.displayErrorMessage('Cannot load images' + error.data.message, error);
                    });
            }
        }

    }

    angular
        .module('amma-product')
        .controller('AmmaProductViewController', ProductViewController);
}

