module AmmaUser.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class UserGridService extends GridService {
        /** @ngInject */
        constructor(AmmaUserCommandService:CommandService, AmmaUserGridSchemaValue:Object) {
            super(AmmaUserCommandService, AmmaUserGridSchemaValue);
        }
    }

    angular.module('amma-user')
        .service('AmmaUserGridService', UserGridService);
}
