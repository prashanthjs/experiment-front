module AmmaUser.Config {

    angular
        .module('amma-user')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.amma-user-list', {
                url: '/users',
                templateUrl: 'app/amma-user/list/user.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaUserListController',
                controllerAs: 'ammaUserListController',

            });

        $stateProvider
            .state('triangular.amma-user-view', {
                url: '/users/:id',
                templateUrl: 'app/amma-user/view/user.view.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaUserViewController',
                controllerAs: 'ammaUserViewController'
            });

        triMenuProvider.addMenu({
            name: 'Users',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'List',
                state: 'triangular.amma-user-list',
                type: 'link'
            }]
        });
    }
}
