var AmmaFeature;
(function (AmmaFeature) {
    var Config;
    (function (Config) {
        angular
            .module('amma-feature')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.feature.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-feature/form/main/feature.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaFeature.Config || (AmmaFeature.Config = {}));
})(AmmaFeature || (AmmaFeature = {}));
