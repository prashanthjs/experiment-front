var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Config;
    (function (Config) {
        angular
            .module('amma-user-group')
            .constant('USER_GROUP_END_POINT', 'user-groups')
            .constant('USER_GROUP_BASE_EVENT_NAME', 'user-group');
    })(Config = AmmaUserGroup.Config || (AmmaUserGroup.Config = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
