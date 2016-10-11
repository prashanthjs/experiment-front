module AmmaPaymentMethod.directives {

    import PaymentMethodCommandService = AmmaPaymentMethod.Common.PaymentMethodCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaPaymentMethodSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaPaymentMethodSearch',
            controller: AmmaPaymentMethodSearchController,
            link: (scope, element, attrs, ctrl: AmmaPaymentMethodSearchController)=> {
                const ammaPaymentMethodSearchModel = $parse(attrs.ammaPaymentMethodSearch);
                ammaPaymentMethodSearchModel.assign(scope, ctrl.search);

                let ammaPaymentMethodSearchOnlyId = true;
                if (attrs.hasOwnProperty('ammaPaymentMethodSearchOnlyId')) {
                    ammaPaymentMethodSearchOnlyId = attrs.ammaPaymentMethodSearchOnlyId === 'true' ? true : false;
                }
                scope.searchReturnOnlyId = ammaPaymentMethodSearchOnlyId;
            }
        };

    }

    export class AmmaPaymentMethodSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaPaymentMethodCommandService, $q) {
            super($scope, AmmaPaymentMethodCommandService, $q);
        }

    }

    angular
        .module('amma-payment-method')
        .directive('ammaPaymentMethodSearch', AmmaPaymentMethodSearchDirective);
}

