var AmmaCommon;
(function (AmmaCommon) {
    var directives;
    (function (directives) {
        var Content;
        (function (Content) {
            /** @ngInject */
            function ContentDirective() {
                return {
                    restrict: 'E',
                    scope: {
                        ammaContentEvent: '@',
                        ammaContentData: '='
                    },
                    templateUrl: 'app/amma-common/directives/content/content.tmpl.html',
                    controller: ContentController,
                    controllerAs: 'vm'
                };
            }
            Content.ContentDirective = ContentDirective;
            var ContentController = (function () {
                /** @ngInject */
                function ContentController($scope, AmmaContentService) {
                    this.content = [];
                    this.$scope = $scope;
                    this.contentService = AmmaContentService;
                    this.eventName = this.$scope.ammaContentEvent;
                    this.data = this.$scope.ammaContentData;
                    this.prepareContent();
                    this.$scope.ammaContentData = this.data;
                }
                ContentController.prototype.prepareContent = function () {
                    this.content = this.contentService.get(this.eventName);
                };
                return ContentController;
            }());
            Content.ContentController = ContentController;
            angular
                .module('amma-common')
                .directive('ammaContent', ContentDirective);
        })(Content = directives.Content || (directives.Content = {}));
    })(directives = AmmaCommon.directives || (AmmaCommon.directives = {}));
})(AmmaCommon || (AmmaCommon = {}));
