module AmmaCategory.Config {

    angular
        .module('amma-category')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.amma-category-list', {
                url: '/categories',
                templateUrl: 'app/amma-category/list/category.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaCategoryListController',
                controllerAs: 'ammaCategoryListController',
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
            name: 'Categories',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-category-list',
                type: 'link'
            }]
        });
    }
}
