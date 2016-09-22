module AmmaProduct.directives {

    import ProductCommandService = AmmaProduct.Common.ProductCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaProductSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaProductSearch',
            controller: AmmaProductSearchController,
            link: (scope, element, attrs, ctrl: AmmaProductSearchController)=> {
                let ammaProductReturnOnlyId = true;
                if (attrs.hasOwnProperty('ammaProductReturnOnlyId')) {
                    ammaProductReturnOnlyId = attrs.ammaProductReturnOnlyId === 'true' ? true : false;
                }
                const ammaProductSearchModel = $parse(attrs.ammaProductSearch);
                ammaProductSearchModel.assign(scope, ctrl.search);
                scope.searchReturnOnlyId = ammaProductReturnOnlyId;
            }
        };

    }

    export class AmmaProductSearchController extends SearchDirectiveController {
        /** @ngInject */
        constructor($scope, AmmaProductCommandService, $q) {
            super($scope, AmmaProductCommandService, $q);
        }

    }

    angular
        .module('amma-product')
        .directive('ammaProductSearch', AmmaProductSearchDirective);
}

