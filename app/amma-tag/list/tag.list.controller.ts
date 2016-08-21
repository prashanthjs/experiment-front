module AmmaTag.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import TagGridService = AmmaTag.Common.TagGridService;
    import TagRestService = AmmaTag.Common.TagRestService;
    import TagCommandService = AmmaTag.Common.TagCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class TagListController extends ListController {

        /* @ngInject */
        constructor(AmmaTagGridService:TagGridService, AmmaTagCommandService:TagCommandService, AmmaMessageService, $state) {
            super(AmmaTagGridService, AmmaTagCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-tag')
        .controller('AmmaTagListController', TagListController);
}

