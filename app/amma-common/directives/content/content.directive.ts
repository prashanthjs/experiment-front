module AmmaCommon.directives.Content {

    import ContentService = AmmaCommon.Services.ContentService;
    import IContent = AmmaCommon.Services.IContent;
    /** @ngInject */
    export function ContentDirective():ng.IDirective {
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

    export class ContentController {
        public content:IContent[] = [];
        public eventName:string;
        public data:any;
        private $scope;
        private contentService:ContentService;

        /** @ngInject */
        constructor($scope:ng.IScope, AmmaContentService:ContentService) {
            this.$scope = $scope;
            this.contentService = AmmaContentService;
            this.eventName = this.$scope.ammaContentEvent;
            this.data = this.$scope.ammaContentData;
            this.prepareContent();
            this.$scope.ammaContentData = this.data;
        }

        prepareContent() {
            this.content = this.contentService.get(this.eventName);
        }
    }

    angular
        .module('amma-common')
        .directive('ammaContent', ContentDirective);
}

