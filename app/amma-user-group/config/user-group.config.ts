module AmmaUserGroup.Config {

    angular
        .module('amma-user-group')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {
        $stateProvider
            .state('triangular.amma-user-group-list', {
                url: '/user-groups',
                templateUrl: 'app/amma-user-group/list/user-group.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaUserGroupListController',
                controllerAs: 'ammaUserGroupListController',
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
            name: 'UserGroups',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-user-group-list',
                type: 'link'
            }]
        });
    }
}
