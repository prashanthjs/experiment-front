module AmmaProductOrderStatus.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class ProductOrderStatusRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, PRODUCT_ORDER_STATUS_END_POINT:string) {
            super(Restangular, PRODUCT_ORDER_STATUS_END_POINT);
        }

    }
    angular.module('amma-product-order-status')
        .service('AmmaProductOrderStatusRestService', ProductOrderStatusRestService);
}


