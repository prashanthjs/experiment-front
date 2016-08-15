var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var View;
    (function (View) {
        var ViewController = AmmaCommon.Common.ViewController;
        var UserViewController = (function (_super) {
            __extends(UserViewController, _super);
            /* @ngInject */
            function UserViewController(AmmaUserCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state) {
                _super.call(this, AmmaUserCommandService, AmmaMessageService, $stateParams, AmmaGalleryCommandService, $state);
                this.uploadType = 'image';
                this.listRoute = 'triangular.amma-user-list';
                this.viewRoute = 'triangular.amma-user-view';
            }
            UserViewController.prototype.afterLoad = function () {
                var _this = this;
                this.images = null;
                if (this.model && this.model.profilePicToken) {
                    this.galleryCommandService.get(this.uploadType, this.model.profilePicToken, null)
                        .then(function (response) {
                        _this.images = response.data.files;
                        console.log(_this.images);
                    }, function (error) {
                        _this.messageService.displayErrorMessage('Cannot load images' + error.data.message, error);
                    });
                }
            };
            return UserViewController;
        }(ViewController));
        View.UserViewController = UserViewController;
        angular
            .module('amma-user')
            .controller('AmmaUserViewController', UserViewController);
    })(View = AmmaUser.View || (AmmaUser.View = {}));
})(AmmaUser || (AmmaUser = {}));
