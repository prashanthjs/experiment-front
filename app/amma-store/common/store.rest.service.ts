module AmmaStore.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class StoreRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, STORE_END_POINT:string) {
            super(Restangular, STORE_END_POINT);
        }

    }

    angular.module('amma-store')
        .service('AmmaStoreRestService', StoreRestService);
}


