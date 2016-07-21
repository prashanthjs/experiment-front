var AmmaCommon;
(function (AmmaCommon) {
    var directives;
    (function (directives) {
        var Tabs;
        (function (Tabs) {
            /** @ngInject */
            function TabsDirective() {
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
            Tabs.TabsDirective = TabsDirective;
            var TabController = (function () {
                /** @ngInject */
                function TabController($scope, AmmaContentService) {
                    this.tabs = [];
                    this.initTabs = [];
                    this.$scope = $scope;
                    this.contentService = AmmaContentService;
                    this.initTabs = this.$scope.tabInitTabs;
                    this.eventName = this.$scope.tabEventName;
                    this.options = this.$scope.tabOptions;
                    this.prepareTabs();
                }
                TabController.prototype.prepareTabs = function () {
                    this.tabs = this.contentService.getTabs(this.eventName, this.options, this.initTabs);
                };
                return TabController;
            }());
            Tabs.TabController = TabController;
            angular
                .module('amma-common')
                .directive('ammaTabs', TabsDirective);
        })(Tabs = directives.Tabs || (directives.Tabs = {}));
    })(directives = AmmaCommon.directives || (AmmaCommon.directives = {}));
})(AmmaCommon || (AmmaCommon = {}));
