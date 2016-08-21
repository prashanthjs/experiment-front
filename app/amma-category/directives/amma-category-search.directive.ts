module AmmaCategory.directives {

    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function CategorySearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaUserGroupSearch',
            controller: AmmaCategorySearchController,
            link: (scope, element, attrs: any, ctrl: any)=> {
                const ammaCategorySearchModel = $parse(attrs.ammaUserGroupSearch);
                ammaCategorySearchModel.assign(scope, ctrl.search);
            }
        };

    }

    export class AmmaCategorySearchController extends SearchDirectiveController {
        /** @ngInject */
        constructor($scope, AmmaUserGroupCommandService, $q) {
            super($scope, AmmaUserGroupCommandService, $q);
        }

    }

    angular
        .module('amma-category')
        .directive('ammaCategorySearch', CategorySearchDirective);
}

