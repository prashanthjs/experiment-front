module AmmaUser.Config {

    angular
        .module('amma-user')
        .constant('USER_END_POINT', 'users')
        .constant('USER_BASE_EVENT_NAME', 'user')
        .constant('USER_FORM_EVENT_NAME', 'amma.user.form');
}
