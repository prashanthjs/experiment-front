module AmmaStore.directives {

    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function StoreSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaStoreSearch',
            controller: AmmaStoreSearchController,
            link: (scope, element, attrs, ctrl: AmmaStoreSearchController)=> {
                let ammaStoreReturnOnlyId = true;
                if (attrs.hasOwnProperty('ammaStoreReturnOnlyId')) {
                    ammaStoreReturnOnlyId = attrs.ammaStoreReturnOnlyId === 'true' ? true : false;
                }
                const ammaStoreSearchModel = $parse(attrs.ammaStoreSearch);
                ammaStoreSearchModel.assign(scope, ctrl.search);
                scope.searchReturnOnlyId = ammaStoreReturnOnlyId;
            }
        };

    }

    export class AmmaStoreSearchController extends SearchDirectiveController {
        /** @ngInject */
        constructor($scope, AmmaStoreCommandService, $q) {
            super($scope, AmmaStoreCommandService, $q);
        }

    }

    angular
        .module('amma-store')
        .directive('ammaStoreSearch', StoreSearchDirective);
}

