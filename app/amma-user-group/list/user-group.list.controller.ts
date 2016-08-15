module AmmaUserGroup.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import UserGroupGridService = AmmaUserGroup.Common.UserGroupGridService;
    import UserGroupRestService = AmmaUserGroup.Common.UserGroupRestService;
    import UserGroupCommandService = AmmaUserGroup.Common.UserGroupCommandService;
    import ListController = AmmaCommon.Common.ListController;
    export class UserGroupListController extends ListController {

        /* @ngInject */
        constructor(AmmaUserGroupGridService:UserGroupGridService, AmmaUserGroupCommandService:UserGroupCommandService, AmmaMessageService, $state) {
            super(AmmaUserGroupGridService, AmmaUserGroupCommandService, AmmaMessageService, $state);
        }
    }

    angular
        .module('amma-user-group')
        .controller('AmmaUserGroupListController', UserGroupListController);
}

