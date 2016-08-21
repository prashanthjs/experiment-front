module AmmaFeature.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import FeatureGridService = AmmaFeature.Common.FeatureGridService;
    import FeatureRestService = AmmaFeature.Common.FeatureRestService;
    import FeatureCommandService = AmmaFeature.Common.FeatureCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class FeatureListController extends ListController {

        /* @ngInject */
        constructor(AmmaFeatureGridService:FeatureGridService, AmmaFeatureCommandService:FeatureCommandService, AmmaMessageService, $state) {
            super(AmmaFeatureGridService, AmmaFeatureCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureListController', FeatureListController);
}

