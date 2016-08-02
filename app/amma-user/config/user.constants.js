var AmmaUser;
(function (AmmaUser) {
    var Config;
    (function (Config) {
        angular
            .module('amma-user')
            .constant('USER_END_POINT', 'users')
            .constant('USER_BASE_EVENT_NAME', 'user');
    })(Config = AmmaUser.Config || (AmmaUser.Config = {}));
})(AmmaUser || (AmmaUser = {}));
