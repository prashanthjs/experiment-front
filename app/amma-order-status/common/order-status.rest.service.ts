module AmmaOrderStatus.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class OrderStatusRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, ORDER_STATUS_END_POINT:string) {
            super(Restangular, ORDER_STATUS_END_POINT);
        }

    }
    angular.module('amma-order-status')
        .service('AmmaOrderStatusRestService', OrderStatusRestService);
}


