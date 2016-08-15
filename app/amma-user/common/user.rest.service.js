var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var UserRestService = (function (_super) {
            __extends(UserRestService, _super);
            /** @ngInject */
            function UserRestService(Restangular, USER_END_POINT) {
                _super.call(this, Restangular, USER_END_POINT);
            }
            UserRestService.prototype.changePassword = function (id, password) {
                return this.restService.one(id).one('change-password').customPUT({ password: password });
            };
            return UserRestService;
        }(RestService));
        Common.UserRestService = UserRestService;
        angular.module('amma-user')
            .service('AmmaUserRestService', UserRestService);
    })(Common = AmmaUser.Common || (AmmaUser.Common = {}));
})(AmmaUser || (AmmaUser = {}));
