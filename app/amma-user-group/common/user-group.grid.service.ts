module AmmaUserGroup.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class UserGroupGridService extends GridService {
        /** @ngInject */
        constructor(AmmaUserGroupCommandService:CommandService, AmmaUserGroupGridSchemaValue:Object) {
            super(AmmaUserGroupCommandService, AmmaUserGroupGridSchemaValue);
        }
    }
    angular.module('amma-user-group')
        .service('AmmaUserGroupGridService', UserGroupGridService);
}
