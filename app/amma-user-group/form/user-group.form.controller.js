var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUserGroup;
(function (AmmaUserGroup) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var UserGroupFormController = (function (_super) {
            __extends(UserGroupFormController, _super);
            /* @ngInject */
            function UserGroupFormController(id, $mdDialog, $scope) {
                _super.call(this, id, $mdDialog, $scope);
            }
            return UserGroupFormController;
        }(FormBaseController));
        Form.UserGroupFormController = UserGroupFormController;
        angular
            .module('amma-user-group')
            .controller('AmmaUserGroupFormController', UserGroupFormController);
    })(Form = AmmaUserGroup.Form || (AmmaUserGroup.Form = {}));
})(AmmaUserGroup || (AmmaUserGroup = {}));
