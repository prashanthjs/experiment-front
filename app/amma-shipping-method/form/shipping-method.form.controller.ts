module AmmaShippingMethod.Form {

    import FormBaseController = AmmaCommon.Common.FormBaseController;
    export class ShippingMethodFormController extends FormBaseController{

        /* @ngInject */
        constructor(id, $mdDialog, $scope, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME) {
            super(id, $mdDialog, $scope, $rootScope, SHIPPING_METHOD_FORM_EVENT_NAME);
        }


    }
    angular
        .module('amma-shipping-method')
        .controller('AmmaShippingMethodFormController', ShippingMethodFormController);
}

