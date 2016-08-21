module AmmaTag.directives {

    import TagCommandService = AmmaTag.Common.TagCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaTagSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaTagSearch',
            controller: AmmaTagSearchController,
            link: (scope, element, attrs, ctrl: AmmaTagSearchController)=> {
                const ammaTagSearchModel = $parse(attrs.ammaTagSearch);
                ammaTagSearchModel.assign(scope, ctrl.search);
            }
        };

    }

    export class AmmaTagSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaTagCommandService, $q) {
            super($scope, AmmaTagCommandService, $q);
        }

    }

    angular
        .module('amma-tag')
        .directive('ammaTagSearch', AmmaTagSearchDirective);
}

