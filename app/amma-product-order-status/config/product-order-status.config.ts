module AmmaProductOrderStatus.Config {

    angular
        .module('amma-product-order-status')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {
        $stateProvider
            .state('triangular.amma-product-order-status-list', {
                url: '/product-order-statuses',
                templateUrl: 'app/amma-product-order-status/list/product-order-status.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaProductOrderStatusListController',
                controllerAs: 'ammaProductOrderStatusListController',
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
            name: 'ProductOrderStatuss',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-product-order-status-list',
                type: 'link'
            }]
        });
    }
}
