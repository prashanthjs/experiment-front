module AmmaCategory.directives {

    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function CategorySearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaCategorySearch',
            controller: AmmaCategorySearchController,
            link: (scope, element, attrs: any, ctrl: any)=> {
                const ammaCategorySearchModel = $parse(attrs.ammaCategorySearch);
                ammaCategorySearchModel.assign(scope, ctrl.search);
            }
        };

    }

    export class AmmaCategorySearchController extends SearchDirectiveController {
        /** @ngInject */
        constructor($scope, AmmaCategoryCommandService, $q) {
            super($scope, AmmaCategoryCommandService, $q);
        }

    }

    angular
        .module('amma-category')
        .directive('ammaCategorySearch', CategorySearchDirective);
}

