var AmmaOrder;
(function (AmmaOrder) {
    var Config;
    (function (Config) {
        angular
            .module('amma-order')
            .config(moduleConfig);
        /* @ngInject */
        function moduleConfig($stateProvider, triMenuProvider) {
            $stateProvider
                .state('triangular.amma-order-list', {
                url: '/orders',
                templateUrl: 'app/amma-order/list/order.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaOrderListController',
                controllerAs: 'ammaOrderListController',
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
            $stateProvider
                .state('triangular.amma-order-view', {
                url: '/orders/:id',
                templateUrl: 'app/amma-order/view/order.view.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaOrderViewController',
                controllerAs: 'ammaOrderViewController'
            });
            triMenuProvider.addMenu({
                name: 'Orders',
                icon: 'zmdi zmdi-grade',
                type: 'dropdown',
                priority: 1.1,
                children: [{
                        name: 'List',
                        state: 'triangular.amma-order-list',
                        type: 'link'
                    }]
            });
        }
    })(Config = AmmaOrder.Config || (AmmaOrder.Config = {}));
})(AmmaOrder || (AmmaOrder = {}));
