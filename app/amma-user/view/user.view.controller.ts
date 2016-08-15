module AmmaUser.View {

    import BaseController = AmmaCommon.Common.BaseController;
    import UserCommandService = AmmaUser.Common.UserCommandService;
    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;
    import ViewController = AmmaCommon.Common.ViewController;

    export class UserViewController extends ViewController {

        protected uploadType = 'image';


        /* @ngInject */
        constructor(AmmaUserCommandService: UserCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService: GalleryCommandService, $state) {
            super(AmmaUserCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state);
            this.listRoute = 'triangular.amma-user-list';
            this.viewRoute = 'triangular.amma-user-view';

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
        .module('amma-user')
        .controller('AmmaUserViewController', UserViewController);
}

