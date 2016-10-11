var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Config;
    (function (Config) {
        angular
            .module('amma-order-status')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.order-status.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-order-status/form/main/order-status.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaOrderStatus.Config || (AmmaOrderStatus.Config = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
