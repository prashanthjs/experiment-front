module AmmaProductOrder.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class ProductOrderRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, PRODUCT_ORDER_END_POINT:string) {
            super(Restangular, PRODUCT_ORDER_END_POINT);
        }

    }
    angular.module('amma-product-order')
        .service('AmmaProductOrderRestService', ProductOrderRestService);
}


