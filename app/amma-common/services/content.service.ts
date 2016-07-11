module AmmaCommon.Services {

    export interface IContent {
        templateUrl:string;
        priority?:number;
        data?:{};
        options?:{}
    }

    export class ContentService {

        /** @ngInject */
        constructor(private $rootScope:ng.IRootScopeService) {
        }

        public get(eventName:string, options:any, initContent:IContent[]) {
            let content:IContent[] = [];
            if (initContent) {
                content = initContent;
            }
            this.$rootScope.$emit(eventName, {
                content: content,
                options: options
            });
            content.sort(this.sortFunc('priority'));
            return content;
        }

        private sortFunc(prop) {
            return function (a, b) {
                if (a[prop] > b[prop]) {
                    return 1;
                } else if (a[prop] < b[prop]) {
                    return -1;
                }
                return 0;
            }
        }

    }


    angular
        .module('amma-common')
        .service('AmmaContentService', ContentService);
}
