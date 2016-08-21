module AmmaTag.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class TagGridService extends GridService {
        /** @ngInject */
        constructor(AmmaTagCommandService:CommandService, AmmaTagGridSchemaValue:Object) {
            super(AmmaTagCommandService, AmmaTagGridSchemaValue);
        }
    }
    angular.module('amma-tag')
        .service('AmmaTagGridService', TagGridService);
}
