module AmmaCategory.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import CategoryGridService = AmmaCategory.Common.CategoryGridService;
    import CategoryRestService = AmmaCategory.Common.CategoryRestService;
    import CategoryCommandService = AmmaCategory.Common.CategoryCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class CategoryListController extends ListController {

        public gridOptions:Object;
        public grid;
        public commandService:CategoryCommandService;

        /* @ngInject */
        constructor(AmmaCategoryGridService:CategoryGridService, AmmaCategoryCommandService:CategoryCommandService, AmmaMessageService, $state) {
            super(AmmaCategoryGridService, AmmaCategoryCommandService, AmmaMessageService, $state);
        }

    }
    angular
        .module('amma-category')
        .controller('AmmaCategoryListController', CategoryListController);
}

