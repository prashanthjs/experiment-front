module AmmaUserGroup.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class UserGroupRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, USER_GROUP_END_POINT:string) {
            super(Restangular, USER_GROUP_END_POINT);
        }

    }
    angular.module('amma-user-group')
        .service('AmmaUserGroupRestService', UserGroupRestService);
}


