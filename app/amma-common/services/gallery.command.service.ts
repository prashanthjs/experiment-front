module AmmaCommon.Services {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class GalleryCommandService {

        protected dialogService;
        protected fileUploadService: FileUploadService;
        protected $q:ng.IQService;
        /* @ngInject */
        constructor($mdDialog, AmmaFileUploadService, $q) {
            this.dialogService = $mdDialog;
            this.fileUploadService = AmmaFileUploadService;
            this.$q = $q;
        }

        get(type, token, cancelPromise) {
            let canceler = cancelPromise || this.$q.defer();
            return this.fileUploadService.getFilesList(type, token, canceler);
        }

        open(images, image, $event) {
            this.dialogService.show({
                controller: 'AmmaGalleryController',
                controllerAs: 'ammaGalleryController',
                templateUrl: 'app/amma-common/common/views/gallery.tmpl.html',
                clickOutsideToClose: true,
                focusOnOpen: false,
                targetEvent: $event,
                locals: {
                    images: images,
                    image: image
                }
            });
        }

    }
    angular.module('amma-common')
        .service('AmmaGalleryCommandService', GalleryCommandService);
}
