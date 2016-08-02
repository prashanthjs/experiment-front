module AmmaRole.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class RoleRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, ROLE_END_POINT:string) {
            super(Restangular, ROLE_END_POINT);
        }

    }
    angular.module('amma-role')
        .service('AmmaRoleRestService', RoleRestService);
}


