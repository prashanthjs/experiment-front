module AmmaStore.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class StoreRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService) {
            super(Restangular, AmmaEventEmitterService, $q);
            this.endPoint = 'stores';
            this.eventName = 'store';
        }

    }

    angular.module('amma-store')
        .service('AmmaStoreRestService', StoreRestService);
}


