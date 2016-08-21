module AmmaTag.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class TagRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, TAG_END_POINT:string) {
            super(Restangular, TAG_END_POINT);
        }

    }
    angular.module('amma-tag')
        .service('AmmaTagRestService', TagRestService);
}


