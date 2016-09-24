module AmmaProduct.Config {

    angular
        .module('amma-product')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.amma-product-list', {
                url: '/products',
                templateUrl: 'app/amma-product/list/product.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaProductListController',
                controllerAs: 'ammaProductListController',

            });

        $stateProvider
            .state('triangular.amma-product-view', {
                url: '/products/:id',
                templateUrl: 'app/amma-product/view/product.view.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaProductViewController',
                controllerAs: 'ammaProductViewController'
            });

        triMenuProvider.addMenu({
            name: 'Products',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-product-list',
                type: 'link'
            }]
        });
    }
}
