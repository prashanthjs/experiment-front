var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var UserGroupListController = (function (_super) {
            __extends(UserGroupListController, _super);
            /* @ngInject */
            function UserGroupListController(AmmaUserGroupGridService, AmmaUserGroupCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaUserGroupGridService, AmmaUserGroupCommandService, AmmaMessageService, $state);
            }
            return UserGroupListController;
        }(ListController));
        List.UserGroupListController = UserGroupListController;
        angular
            .module('amma-user-group')
            .controller('AmmaUserGroupListController', UserGroupListController);
    })(List = AmmaUserGroup.List || (AmmaUserGroup.List = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
