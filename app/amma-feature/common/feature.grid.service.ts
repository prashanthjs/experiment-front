module AmmaFeature.Common {
    import GridService = AmmaCommon.Common.GridService;
    import CommandService = AmmaCommon.Common.CommandService;
    export class FeatureGridService extends GridService {
        /** @ngInject */
        constructor(AmmaFeatureCommandService:CommandService, AmmaFeatureGridSchemaValue:Object) {
            super(AmmaFeatureCommandService, AmmaFeatureGridSchemaValue);
        }
    }
    angular.module('amma-feature')
        .service('AmmaFeatureGridService', FeatureGridService);
}
