module AmmaFeature.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class FeatureRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, FEATURE_END_POINT:string) {
            super(Restangular, FEATURE_END_POINT);
        }

    }
    angular.module('amma-feature')
        .service('AmmaFeatureRestService', FeatureRestService);
}


