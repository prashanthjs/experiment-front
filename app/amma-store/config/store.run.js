var AmmaStore;
(function (AmmaStore) {
    var Config;
    (function (Config) {
        angular
            .module('amma-store')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.store.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-store/form/main/store.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaStore.Config || (AmmaStore.Config = {}));
})(AmmaStore || (AmmaStore = {}));
