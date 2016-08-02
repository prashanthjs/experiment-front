var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaRole;
(function (AmmaRole) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var RoleRestService = (function (_super) {
            __extends(RoleRestService, _super);
            /** @ngInject */
            function RoleRestService(Restangular, ROLE_END_POINT) {
                _super.call(this, Restangular, ROLE_END_POINT);
            }
            return RoleRestService;
        }(RestService));
        Common.RoleRestService = RoleRestService;
        angular.module('amma-role')
            .service('AmmaRoleRestService', RoleRestService);
    })(Common = AmmaRole.Common || (AmmaRole.Common = {}));
})(AmmaRole || (AmmaRole = {}));
