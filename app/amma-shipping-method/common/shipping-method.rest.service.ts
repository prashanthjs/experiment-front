module AmmaShippingMethod.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class ShippingMethodRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, SHIPPING_METHOD_END_POINT:string) {
            super(Restangular, SHIPPING_METHOD_END_POINT);
        }

    }
    angular.module('amma-shipping-method')
        .service('AmmaShippingMethodRestService', ShippingMethodRestService);
}


