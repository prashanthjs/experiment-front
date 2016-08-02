module AmmaRole.Common {

    import CommandService = AmmaCommon.Common.CommandService;
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class RoleCommandService extends CommandService {

        /* @ngInject */
        constructor(AmmaRoleRestService:RestService, AmmaEventEmitterService:EventEmitterService, $q:ng.IQService, ROLE_BASE_EVENT_NAME:string) {
            super(AmmaRoleRestService, AmmaEventEmitterService, $q, ROLE_BASE_EVENT_NAME);

        }

    }
    angular.module('amma-role')
        .service('AmmaRoleCommandService', RoleCommandService);
}
