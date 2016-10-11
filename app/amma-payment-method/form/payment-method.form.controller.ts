module AmmaPaymentMethod.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class PaymentMethodFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, PAYMENT_METHOD_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-payment-method')
        .controller('AmmaPaymentMethodFormController', PaymentMethodFormController);
}

