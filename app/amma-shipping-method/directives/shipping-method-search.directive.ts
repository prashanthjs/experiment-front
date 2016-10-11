module AmmaShippingMethod.directives {

    import ShippingMethodCommandService = AmmaShippingMethod.Common.ShippingMethodCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaShippingMethodSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaShippingMethodSearch',
            controller: AmmaShippingMethodSearchController,
            link: (scope, element, attrs, ctrl: AmmaShippingMethodSearchController)=> {
                const ammaShippingMethodSearchModel = $parse(attrs.ammaShippingMethodSearch);
                ammaShippingMethodSearchModel.assign(scope, ctrl.search);

                let ammaShippingMethodSearchOnlyId = true;
                if (attrs.hasOwnProperty('ammaShippingMethodSearchOnlyId')) {
                    ammaShippingMethodSearchOnlyId = attrs.ammaShippingMethodSearchOnlyId === 'true' ? true : false;
                }
                scope.searchReturnOnlyId = ammaShippingMethodSearchOnlyId;
            }
        };

    }

    export class AmmaShippingMethodSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaShippingMethodCommandService, $q) {
            super($scope, AmmaShippingMethodCommandService, $q);
        }

    }

    angular
        .module('amma-shipping-method')
        .directive('ammaShippingMethodSearch', AmmaShippingMethodSearchDirective);
}

