module AmmaUser.View {

    import BaseController = AmmaCommon.Common.BaseController;
    import UserCommandService = AmmaUser.Common.UserCommandService;
    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;
    import ViewMainController = AmmaCommon.Common.ViewMainController;

    export class UserViewController extends ViewMainController {

        protected uploadType = 'userProfile';

        /* @ngInject */
        constructor(AmmaUserCommandService: UserCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService: GalleryCommandService, $state, $rootScope, $scope, USER_CONTENT_EVENT_NAME) {
            super(AmmaUserCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state, $rootScope, $scope, USER_CONTENT_EVENT_NAME);
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

