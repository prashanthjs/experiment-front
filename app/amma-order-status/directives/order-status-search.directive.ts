module AmmaOrderStatus.directives {

    import OrderStatusCommandService = AmmaOrderStatus.Common.OrderStatusCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaOrderStatusSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaOrderStatusSearch',
            controller: AmmaOrderStatusSearchController,
            link: (scope, element, attrs, ctrl: AmmaOrderStatusSearchController)=> {
                const ammaOrderStatusSearchModel = $parse(attrs.ammaOrderStatusSearch);
                ammaOrderStatusSearchModel.assign(scope, ctrl.search);

                let ammaOrderStatusSearchOnlyId = true;
                if (attrs.hasOwnProperty('ammaOrderStatusSearchOnlyId')) {
                    ammaOrderStatusSearchOnlyId = attrs.ammaOrderStatusSearchOnlyId === 'true' ? true : false;
                }
                scope.searchReturnOnlyId = ammaOrderStatusSearchOnlyId;
            }
        };

    }

    export class AmmaOrderStatusSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaOrderStatusCommandService, $q) {
            super($scope, AmmaOrderStatusCommandService, $q);
        }

    }

    angular
        .module('amma-order-status')
        .directive('ammaOrderStatusSearch', AmmaOrderStatusSearchDirective);
}

