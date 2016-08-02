var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Config;
    (function (Config) {
        angular
            .module('amma-user-group')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.user-group.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-user-group/form/main/user-group.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaUserGroup.Config || (AmmaUserGroup.Config = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
