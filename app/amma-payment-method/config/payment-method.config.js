var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Config;
    (function (Config) {
        angular
            .module('amma-payment-method')
            .config(moduleConfig);
        /* @ngInject */
        function moduleConfig($stateProvider, triMenuProvider) {
            $stateProvider
                .state('triangular.amma-payment-method-list', {
                url: '/payment-methods',
                templateUrl: 'app/amma-payment-method/list/payment-method.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaPaymentMethodListController',
                controllerAs: 'ammaPaymentMethodListController',
                data: {
                    layout: {
                        toolbarSize: 'default',
                        toolbarShrink: false,
                        toolbarClass: '',
                        contentClass: '',
                        sideMenuSize: 'full',
                        footer: true
                    }
                }
            });
            triMenuProvider.addMenu({
                name: 'PaymentMethods',
                icon: 'zmdi zmdi-grade',
                type: 'dropdown',
                priority: 1.1,
                children: [{
                        name: 'List',
                        state: 'triangular.amma-payment-method-list',
                        type: 'link'
                    }]
            });
        }
    })(Config = AmmaPaymentMethod.Config || (AmmaPaymentMethod.Config = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
