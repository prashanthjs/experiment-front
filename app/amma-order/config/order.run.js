var AmmaOrder;
(function (AmmaOrder) {
    var Config;
    (function (Config) {
        angular
            .module('amma-order')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.order.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-order/form/main/order.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaOrder.Config || (AmmaOrder.Config = {}));
})(AmmaOrder || (AmmaOrder = {}));
