module AmmaProductOrder.Config {

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

        $stateProvider
            .state('triangular.amma-product-order-view', {
                url: '/product-orders/:id',
                templateUrl: 'app/amma-product-order/view/product-order.view.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaProductOrderViewController',
                controllerAs: 'ammaProductOrderViewController'
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
}
