var AmmaProductOrderStatus;
(function (AmmaProductOrderStatus) {
    var Config;
    (function (Config) {
        angular
            .module('amma-product-order-status')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.product-order-status.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-product-order-status/form/main/product-order-status.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaProductOrderStatus.Config || (AmmaProductOrderStatus.Config = {}));
})(AmmaProductOrderStatus || (AmmaProductOrderStatus = {}));
