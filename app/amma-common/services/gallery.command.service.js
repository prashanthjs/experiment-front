var AmmaCommon;
(function (AmmaCommon) {
    var Services;
    (function (Services) {
        var GalleryCommandService = (function () {
            /* @ngInject */
            function GalleryCommandService($mdDialog, AmmaFileUploadService, $q) {
                this.dialogService = $mdDialog;
                this.fileUploadService = AmmaFileUploadService;
                this.$q = $q;
            }
            GalleryCommandService.prototype.get = function (type, token, cancelPromise) {
                var canceler = cancelPromise || this.$q.defer();
                return this.fileUploadService.getFilesList(type, token, canceler);
            };
            GalleryCommandService.prototype.open = function (images, image, $event) {
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
            };
            return GalleryCommandService;
        }());
        Services.GalleryCommandService = GalleryCommandService;
        angular.module('amma-common')
            .service('AmmaGalleryCommandService', GalleryCommandService);
    })(Services = AmmaCommon.Services || (AmmaCommon.Services = {}));
})(AmmaCommon || (AmmaCommon = {}));
