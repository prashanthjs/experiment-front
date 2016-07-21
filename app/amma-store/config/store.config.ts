module AmmaStore.Config {

    angular
        .module('amma-store')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.amma-store-list', {
                url: '/stores',
                templateUrl: 'app/amma-store/list/store.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaStoreListController',
                controllerAs: 'ammaStoreListController',
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
            name: 'Stores',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-store-list',
                type: 'link'
            }]
        });
    }
}
