module AmmaUser.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class UserRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, USER_END_POINT:string) {
            super(Restangular, USER_END_POINT);
        }

    }

    angular.module('amma-user')
        .service('AmmaUserRestService', UserRestService);
}


