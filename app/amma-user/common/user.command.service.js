var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var UserCommandService = (function (_super) {
            __extends(UserCommandService, _super);
            /* @ngInject */
            function UserCommandService(AmmaUserRestService, AmmaEventEmitterService, $q, USER_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaUserRestService, AmmaEventEmitterService, $q, USER_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            UserCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaUserFormController',
                    controllerAs: 'ammaUserFormController',
                    templateUrl: 'app/amma-user/form/user.form.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    autoWrap: true,
                    openFrom: ev,
                    locals: {
                        id: id
                    },
                    escapeToClose: false,
                    clickOutsideToClose: false,
                    fullscreen: true
                });
            };
            UserCommandService.prototype.removeDialog = function (id, event) {
                var _this = this;
                var defer = this.$q.defer();
                var confirm = this.dialogService.confirm()
                    .title('Would you like to delete ' + id + '?')
                    .ariaLabel('Delete ' + id)
                    .targetEvent(event)
                    .ok('Yes')
                    .cancel('No');
                this.dialogService.show(confirm).then(function () {
                    _this.restService.removeById(id).then(function (response) {
                        defer.resolve(response);
                    }, function (response) {
                        defer.reject(response);
                    });
                }, function () {
                    defer.reject();
                });
                return defer.promise;
            };
            UserCommandService.prototype.changePassword = function (id, password) {
                return this.restService.changePassword(id, password);
            };
            return UserCommandService;
        }(CommandService));
        Common.UserCommandService = UserCommandService;
        angular.module('amma-user')
            .service('AmmaUserCommandService', UserCommandService);
    })(Common = AmmaUser.Common || (AmmaUser.Common = {}));
})(AmmaUser || (AmmaUser = {}));
