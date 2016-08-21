var AmmaTag;
(function (AmmaTag) {
    var Config;
    (function (Config) {
        angular
            .module('amma-tag')
            .config(moduleConfig);
        /* @ngInject */
        function moduleConfig($stateProvider, triMenuProvider) {
            $stateProvider
                .state('triangular.amma-tag-list', {
                url: '/tags',
                templateUrl: 'app/amma-tag/list/tag.list.tmpl.html',
                // set the controller to load for this page
                controller: 'AmmaTagListController',
                controllerAs: 'ammaTagListController',
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
                name: 'Tags',
                icon: 'zmdi zmdi-grade',
                type: 'dropdown',
                priority: 1.1,
                children: [{
                        name: 'List',
                        state: 'triangular.amma-tag-list',
                        type: 'link'
                    }]
            });
        }
    })(Config = AmmaTag.Config || (AmmaTag.Config = {}));
})(AmmaTag || (AmmaTag = {}));
