module AmmaCommon.directives.Content {

    import ContentService = AmmaCommon.Services.ContentService;
    import IContent = AmmaCommon.Services.IContent;
    /** @ngInject */
    export function ContentDirective($parse): ng.IDirective {
        return {
            restrict: 'E',
            link: (scope: any, el, attrs, controller)=> {
                scope.ammaContentEvent = attrs.ammaContentEvent;
                scope.ammaContentData = $parse(attrs.ammaContentData)(scope);
                controller.prepareContent();
            },
            templateUrl: 'app/amma-common/directives/content/content.tmpl.html',
            controller: ContentController,
            controllerAs: 'vm'
        };

    }

    export class ContentController {
        public content: IContent[] = [];
        public eventName: string;
        public data: any;
        private $scope;
        private contentService: ContentService;

        private $rootScope;
        private $mdUtil;

        /** @ngInject */
        constructor($scope: ng.IScope, $rootScope, AmmaContentService: ContentService, $mdUtil) {
            this.$scope = $scope;
            this.contentService = AmmaContentService;
            this.$mdUtil = $mdUtil;
            this.$rootScope = $rootScope;
        }

        prepareContent() {
            let data = this.$scope.ammaContentData;
            let eventName = this.$scope.ammaContentEvent;
            let loadingIncludeCount = 0;

            this.$scope.$on("$includeContentRequested", ()=> {
                loadingIncludeCount++;
            });
            this.$scope.$on("$includeContentLoaded", () => {
                loadingIncludeCount--;
                if(loadingIncludeCount <=0){
                    this.$rootScope.$emit(eventName + '.init', data);
                }
            });
            this.$scope.$on("$includeContentError", () => {
                loadingIncludeCount--;
                if(loadingIncludeCount <=0){
                    this.$rootScope.$emit(eventName + '.init', data);
                }
            });
            this.content = this.contentService.get(eventName + '.template');
        }
    }

    angular
        .module('amma-common')
        .directive('ammaContent', ContentDirective);
}

