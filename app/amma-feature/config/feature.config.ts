module AmmaFeature.Config {

    angular
        .module('amma-feature')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {
        $stateProvider
            .state('triangular.amma-feature-list', {
                url: '/features',
                templateUrl: 'app/amma-feature/list/feature.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaFeatureListController',
                controllerAs: 'ammaFeatureListController',
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
            name: 'Features',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-feature-list',
                type: 'link'
            }]
        });
    }
}
