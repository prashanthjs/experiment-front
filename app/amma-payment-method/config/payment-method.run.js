var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Config;
    (function (Config) {
        angular
            .module('amma-payment-method')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.payment-method.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-payment-method/form/main/payment-method.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaPaymentMethod.Config || (AmmaPaymentMethod.Config = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
