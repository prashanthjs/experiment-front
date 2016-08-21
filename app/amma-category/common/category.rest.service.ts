module AmmaCategory.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class CategoryRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, CATEGORY_END_POINT:string) {
            super(Restangular, CATEGORY_END_POINT);
        }

    }

    angular.module('amma-category')
        .service('AmmaCategoryRestService', CategoryRestService);
}


