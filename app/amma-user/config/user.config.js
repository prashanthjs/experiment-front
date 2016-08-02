var AmmaUser;
(function (AmmaUser) {
    var Config;
    (function (Config) {
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
    })(Config = AmmaUser.Config || (AmmaUser.Config = {}));
})(AmmaUser || (AmmaUser = {}));
