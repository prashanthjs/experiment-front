var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var UserGroupRestService = (function (_super) {
            __extends(UserGroupRestService, _super);
            /** @ngInject */
            function UserGroupRestService(Restangular, USER_GROUP_END_POINT) {
                _super.call(this, Restangular, USER_GROUP_END_POINT);
            }
            return UserGroupRestService;
        }(RestService));
        Common.UserGroupRestService = UserGroupRestService;
        angular.module('amma-user-group')
            .service('AmmaUserGroupRestService', UserGroupRestService);
    })(Common = AmmaUserGroup.Common || (AmmaUserGroup.Common = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
