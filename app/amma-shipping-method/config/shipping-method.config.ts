module AmmaShippingMethod.Config {

    angular
        .module('amma-shipping-method')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {
        $stateProvider
            .state('triangular.amma-shipping-method-list', {
                url: '/shipping-methods',
                templateUrl: 'app/amma-shipping-method/list/shipping-method.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaShippingMethodListController',
                controllerAs: 'ammaShippingMethodListController',
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
            name: 'ShippingMethods',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-shipping-method-list',
                type: 'link'
            }]
        });
    }
}
