var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var GalleryController = (function () {
            /* @ngInject */
            function GalleryController($mdDialog, images, image) {
                this.images = [];
                this.currentImage = image;
                this.images = images;
                this.$mdDialog = $mdDialog;
            }
            GalleryController.prototype.next = function () {
                var index = this.images.indexOf(this.currentImage);
                index = index + 1 < this.images.length ? index + 1 : 0;
                this.currentImage = this.images[index];
            };
            GalleryController.prototype.prev = function () {
                var index = this.images.indexOf(this.currentImage);
                index = index - 1 < 0 ? this.images.length - 1 : index - 1;
                this.currentImage = this.images[index];
            };
            return GalleryController;
        }());
        Common.GalleryController = GalleryController;
        angular
            .module('amma-common')
            .controller('AmmaGalleryController', GalleryController);
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
