module AmmaProduct.View {

    import BaseController = AmmaCommon.Common.BaseController;
    import ProductCommandService = AmmaProduct.Common.ProductCommandService;
    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;
    import ViewMainController = AmmaCommon.Common.ViewMainController;

    export class ProductViewController extends ViewMainController {

        protected uploadType = 'productProfile';

        /* @ngInject */
        constructor(AmmaProductCommandService: ProductCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService: GalleryCommandService, $state, $rootScope, $scope, PRODUCT_CONTENT_EVENT_NAME) {
            super(AmmaProductCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, PRODUCT_CONTENT_EVENT_NAME);
            this.listRoute = 'triangular.amma-product-list';
            this.viewRoute = 'triangular.amma-product-view';

        }

        afterLoad() {
            this.images = null;
            if (this.model && this.model.profilePicToken) {
                this.galleryCommandService.get(this.uploadType, this.model.profilePicToken, null)
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

