var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var UserGroupGridService = (function (_super) {
            __extends(UserGroupGridService, _super);
            /** @ngInject */
            function UserGroupGridService(AmmaUserGroupCommandService, AmmaUserGroupGridSchemaValue) {
                _super.call(this, AmmaUserGroupCommandService, AmmaUserGroupGridSchemaValue);
            }
            return UserGroupGridService;
        }(GridService));
        Common.UserGroupGridService = UserGroupGridService;
        angular.module('amma-user-group')
            .service('AmmaUserGroupGridService', UserGroupGridService);
    })(Common = AmmaUserGroup.Common || (AmmaUserGroup.Common = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
