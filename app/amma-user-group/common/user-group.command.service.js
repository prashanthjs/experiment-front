var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var UserGroupCommandService = (function (_super) {
            __extends(UserGroupCommandService, _super);
            /* @ngInject */
            function UserGroupCommandService(AmmaUserGroupRestService, AmmaEventEmitterService, $q, USER_GROUP_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaUserGroupRestService, AmmaEventEmitterService, $q, USER_GROUP_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            UserGroupCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaUserGroupFormController',
                    controllerAs: 'ammaUserGroupFormController',
                    templateUrl: 'app/amma-user-group/form/user-group.form.tmpl.html',
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
            UserGroupCommandService.prototype.removeDialog = function (id, event) {
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
                    defer.resolve();
                });
                return defer.promise;
            };
            return UserGroupCommandService;
        }(CommandService));
        Common.UserGroupCommandService = UserGroupCommandService;
        angular.module('amma-user-group')
            .service('AmmaUserGroupCommandService', UserGroupCommandService);
    })(Common = AmmaUserGroup.Common || (AmmaUserGroup.Common = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
