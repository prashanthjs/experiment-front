module AmmaCommon.Common {

    export class GalleryController {

        public currentImage;
        public images = [];
        public $mdDialog;
        /* @ngInject */
        constructor($mdDialog, images, image) {
            this.currentImage = image;
            this.images = images;
            this.$mdDialog = $mdDialog;
        }

        next() {
            var index = this.images.indexOf(this.currentImage);
            index = index + 1 < this.images.length ? index + 1 : 0;
            this.currentImage = this.images[index];
        }

        prev() {
            var index = this.images.indexOf(this.currentImage);
            index = index - 1 < 0 ? this.images.length - 1 : index - 1;
            this.currentImage = this.images[index];
        }

    }

    angular
        .module('amma-common')
        .controller('AmmaGalleryController', GalleryController);
}

