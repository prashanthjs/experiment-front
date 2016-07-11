module AmmaCommon.directives.Tabs {

    import ContentService = AmmaCommon.Services.ContentService;
    import IContent = AmmaCommon.Services.IContent;
    /** @ngInject */
    export function TabsDirective():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                tabEventName: '@',
                tabInitTabs: '=',
                tabOptions: '='
            },
            templateUrl: 'app/amma-common/directives/tabs/tabs.tmpl.html',
            controller: TabController,
            controllerAs: 'vm'
        };

    }

    export class TabController {
        public tabs:IContent[] = [];
        public initTabs:IContent[] = [];
        public eventName:string;
        public options:any;
        private $scope;
        private contentService;

        /** @ngInject */
        constructor($scope:ng.IScope, AmmaContentService:ContentService) {
            this.$scope = $scope;
            this.contentService = AmmaContentService;
            this.initTabs = this.$scope.tabInitTabs;
            this.eventName = this.$scope.tabEventName;
            this.options = this.$scope.tabOptions;
            this.prepareTabs();
        }

        prepareTabs() {
            this.tabs = this.contentService.getTabs(this.eventName, this.options, this.initTabs);
        }
    }

    angular
        .module('amma-common')
        .directive('ammaTabs', TabsDirective);
}

