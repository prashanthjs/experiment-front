var AmmaCommon;
(function (AmmaCommon) {
    var directives;
    (function (directives) {
        var Content;
        (function (Content) {
            /** @ngInject */
            function ContentDirective($parse) {
                return {
                    restrict: 'E',
                    link: function (scope, el, attrs, controller) {
                        scope.ammaContentEvent = attrs.ammaContentEvent;
                        scope.ammaContentData = $parse(attrs.ammaContentData)(scope);
                        controller.prepareContent();
                    },
                    templateUrl: 'app/amma-common/directives/content/content.tmpl.html',
                    controller: ContentController,
                    controllerAs: 'vm'
                };
            }
            Content.ContentDirective = ContentDirective;
            var ContentController = (function () {
                /** @ngInject */
                function ContentController($scope, $rootScope, AmmaContentService, $mdUtil) {
                    this.content = [];
                    this.$scope = $scope;
                    this.contentService = AmmaContentService;
                    this.$mdUtil = $mdUtil;
                    this.$rootScope = $rootScope;
                }
                ContentController.prototype.prepareContent = function () {
                    var _this = this;
                    var data = this.$scope.ammaContentData;
                    var eventName = this.$scope.ammaContentEvent;
                    var loadingIncludeCount = 0;
                    this.$scope.$on("$includeContentRequested", function () {
                        loadingIncludeCount++;
                    });
                    this.$scope.$on("$includeContentLoaded", function () {
                        loadingIncludeCount--;
                        if (loadingIncludeCount <= 0) {
                            _this.$rootScope.$emit(eventName + '.init', data);
                        }
                    });
                    this.$scope.$on("$includeContentError", function () {
                        loadingIncludeCount--;
                        if (loadingIncludeCount <= 0) {
                            _this.$rootScope.$emit(eventName + '.init', data);
                        }
                    });
                    this.content = this.contentService.get(eventName + '.template');
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
