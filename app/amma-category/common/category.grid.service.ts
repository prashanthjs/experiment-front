module AmmaCategory.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class CategoryGridService extends GridService {
        /** @ngInject */
        constructor(AmmaCategoryCommandService:CommandService, AmmaCategoryGridSchemaValue:Object) {
            super(AmmaCategoryCommandService, AmmaCategoryGridSchemaValue);
        }
    }

    angular.module('amma-category')
        .service('AmmaCategoryGridService', CategoryGridService);
}
