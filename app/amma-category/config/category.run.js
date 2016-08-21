var AmmaCategory;
(function (AmmaCategory) {
    var Config;
    (function (Config) {
        angular
            .module('amma-category')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.category.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-category/form/main/category.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaCategory.Config || (AmmaCategory.Config = {}));
})(AmmaCategory || (AmmaCategory = {}));
