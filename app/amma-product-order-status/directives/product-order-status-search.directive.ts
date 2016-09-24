module AmmaProductOrderStatus.directives {

    import ProductOrderStatusCommandService = AmmaProductOrderStatus.Common.ProductOrderStatusCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaProductOrderStatusSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaProductOrderStatusSearch',
            controller: AmmaProductOrderStatusSearchController,
            link: (scope, element, attrs, ctrl: AmmaProductOrderStatusSearchController)=> {
                const ammaProductOrderStatusSearchModel = $parse(attrs.ammaProductOrderStatusSearch);
                ammaProductOrderStatusSearchModel.assign(scope, ctrl.search);

                let ammaProductOrderStatusSearchOnlyId = true;
                if (attrs.hasOwnProperty('ammaProductOrderStatusSearchOnlyId')) {
                    ammaProductOrderStatusSearchOnlyId = attrs.ammaProductOrderStatusSearchOnlyId === 'true' ? true : false;
                }
                scope.searchReturnOnlyId = ammaProductOrderStatusSearchOnlyId;
            }
        };

    }

    export class AmmaProductOrderStatusSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaProductOrderStatusCommandService, $q) {
            super($scope, AmmaProductOrderStatusCommandService, $q);
        }

    }

    angular
        .module('amma-product-order-status')
        .directive('ammaProductOrderStatusSearch', AmmaProductOrderStatusSearchDirective);
}

