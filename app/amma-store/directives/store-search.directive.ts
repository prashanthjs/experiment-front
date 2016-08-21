module AmmaStore.directives {

    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function StoreSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaStoreSearch',
            controller: AmmaStoreSearchController,
            link: (scope, element, attrs, ctrl: AmmaStoreSearchController)=> {
                const ammaStoreSearchModel = $parse(attrs.ammaStoreSearch);
                console.log(ctrl);
                ammaStoreSearchModel.assign(scope, ctrl.search);
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

