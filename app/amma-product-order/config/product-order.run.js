var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Config;
    (function (Config) {
        angular
            .module('amma-product-order')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.product-order.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-product-order/form/main/product-order.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaProductOrder.Config || (AmmaProductOrder.Config = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
