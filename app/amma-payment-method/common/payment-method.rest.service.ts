module AmmaPaymentMethod.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class PaymentMethodRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, PAYMENT_METHOD_END_POINT:string) {
            super(Restangular, PAYMENT_METHOD_END_POINT);
        }

    }
    angular.module('amma-payment-method')
        .service('AmmaPaymentMethodRestService', PaymentMethodRestService);
}


