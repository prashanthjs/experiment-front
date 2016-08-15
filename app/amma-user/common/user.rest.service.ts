module AmmaUser.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class UserRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, USER_END_POINT:string) {
            super(Restangular, USER_END_POINT);
        }

        changePassword(id, password):ng.IPromise<any> {
            return this.restService.one(id).one('change-password').customPUT({password: password});
        }

    }

    angular.module('amma-user')
        .service('AmmaUserRestService', UserRestService);
}


