var AmmaProduct;
(function (AmmaProduct) {
    var Config;
    (function (Config) {
        angular
            .module('amma-product')
            .run(runBlock);
        /* @ngInject */
        function runBlock($rootScope) {
            $rootScope.$on('amma.product.form.template', function (event, data) {
                data.content.push({
                    templateUrl: '/app/amma-product/form/main/product.form.main.tmpl.html',
                    priority: 0,
                });
            });
        }
    })(Config = AmmaProduct.Config || (AmmaProduct.Config = {}));
})(AmmaProduct || (AmmaProduct = {}));
