var AmmaRole;
(function (AmmaRole) {
    var Config;
    (function (Config) {
        angular
            .module('amma-role')
            .constant('ROLE_END_POINT', 'roles')
            .constant('ROLE_BASE_EVENT_NAME', 'role');
    })(Config = AmmaRole.Config || (AmmaRole.Config = {}));
})(AmmaRole || (AmmaRole = {}));
