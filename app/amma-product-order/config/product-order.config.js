var AmmaProductOrder;
(function (AmmaProductOrder) {
    var Config;
    (function (Config) {
        angular
            .module('amma-product-order')
            .config(moduleConfig);
        /* @ngInject */
        function moduleConfig($stateProvider, triMenuProvider) {
            $stateProvider
                .state('triangular.amma-product-order-list', {
                url: '/product-orders',
                templateUrl: 'app/amma-product-order/list/product-order.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaProductOrderListController',
                controllerAs: 'ammaProductOrderListController',
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
                name: 'ProductOrders',
                icon: 'zmdi zmdi-grade',
                type: 'dropdown',
                priority: 1.1,
                children: [{
                        name: 'List',
                        state: 'triangular.amma-product-order-list',
                        type: 'link'
                    }]
            });
        }
    })(Config = AmmaProductOrder.Config || (AmmaProductOrder.Config = {}));
})(AmmaProductOrder || (AmmaProductOrder = {}));
