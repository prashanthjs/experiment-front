var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Config;
    (function (Config) {
        angular
            .module('amma-shipping-method')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.shipping-method.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-shipping-method/form/main/shipping-method.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaShippingMethod.Config || (AmmaShippingMethod.Config = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
