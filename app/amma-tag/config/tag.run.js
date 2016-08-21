var AmmaTag;
(function (AmmaTag) {
    var Config;
    (function (Config) {
        angular
            .module('amma-tag')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.tag.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-tag/form/main/tag.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaTag.Config || (AmmaTag.Config = {}));
})(AmmaTag || (AmmaTag = {}));
