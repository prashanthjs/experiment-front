module AmmaFeature.directives {

    import FeatureCommandService = AmmaFeature.Common.FeatureCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaFeatureSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaFeatureSearch',
            controller: AmmaFeatureSearchController,
            link: (scope, element, attrs, ctrl: AmmaFeatureSearchController)=> {
                const ammaFeatureSearchModel = $parse(attrs.ammaFeatureSearch);
                ammaFeatureSearchModel.assign(scope, ctrl.search);
            }
        };

    }

    export class AmmaFeatureSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaFeatureCommandService, $q) {
            super($scope, AmmaFeatureCommandService, $q);
        }

    }

    angular
        .module('amma-feature')
        .directive('ammaFeatureSearch', AmmaFeatureSearchDirective);
}

