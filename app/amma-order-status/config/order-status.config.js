var AmmaOrderStatus;
(function (AmmaOrderStatus) {
    var Config;
    (function (Config) {
        angular
            .module('amma-order-status')
            .config(moduleConfig);
        /* @ngInject */
        function moduleConfig($stateProvider, triMenuProvider) {
            $stateProvider
                .state('triangular.amma-order-status-list', {
                url: '/order-statuses',
                templateUrl: 'app/amma-order-status/list/order-status.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaOrderStatusListController',
                controllerAs: 'ammaOrderStatusListController',
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
                name: 'OrderStatuss',
                icon: 'zmdi zmdi-grade',
                type: 'dropdown',
                priority: 1.1,
                children: [{
                        name: 'List',
                        state: 'triangular.amma-order-status-list',
                        type: 'link'
                    }]
            });
        }
    })(Config = AmmaOrderStatus.Config || (AmmaOrderStatus.Config = {}));
})(AmmaOrderStatus || (AmmaOrderStatus = {}));
