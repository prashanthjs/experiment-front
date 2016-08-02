var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var UserGridService = (function (_super) {
            __extends(UserGridService, _super);
            /** @ngInject */
            function UserGridService(AmmaUserCommandService, AmmaUserGridSchemaValue) {
                _super.call(this, AmmaUserCommandService, AmmaUserGridSchemaValue);
            }
            return UserGridService;
        }(GridService));
        Common.UserGridService = UserGridService;
        angular.module('amma-user')
            .service('AmmaUserGridService', UserGridService);
    })(Common = AmmaUser.Common || (AmmaUser.Common = {}));
})(AmmaUser || (AmmaUser = {}));
