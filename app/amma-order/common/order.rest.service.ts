module AmmaOrder.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class OrderRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, ORDER_END_POINT:string) {
            super(Restangular, ORDER_END_POINT);
        }

    }
    angular.module('amma-order')
        .service('AmmaOrderRestService', OrderRestService);
}


