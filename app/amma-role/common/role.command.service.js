var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaRole;
(function (AmmaRole) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var RoleCommandService = (function (_super) {
            __extends(RoleCommandService, _super);
            /* @ngInject */
            function RoleCommandService(AmmaRoleRestService, AmmaEventEmitterService, $q, ROLE_BASE_EVENT_NAME) {
                _super.call(this, AmmaRoleRestService, AmmaEventEmitterService, $q, ROLE_BASE_EVENT_NAME);
            }
            return RoleCommandService;
        }(CommandService));
        Common.RoleCommandService = RoleCommandService;
        angular.module('amma-role')
            .service('AmmaRoleCommandService', RoleCommandService);
    })(Common = AmmaRole.Common || (AmmaRole.Common = {}));
})(AmmaRole || (AmmaRole = {}));
