module AmmaUserGroup.Config {
    angular
        .module('amma-user-group')
        .constant('USER_GROUP_END_POINT', 'user-groups')
        .constant('USER_GROUP_BASE_EVENT_NAME', 'user-group')
        .constant('USER_GROUP_FORM_EVENT_NAME', 'amma.user-group.form');
}
