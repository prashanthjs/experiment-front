var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaUser;
(function (AmmaUser) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var UserFormController = (function (_super) {
            __extends(UserFormController, _super);
            /* @ngInject */
            function UserFormController(id, $mdDialog, $scope, $rootScope, USER_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, USER_FORM_EVENT_NAME);
            }
            return UserFormController;
        }(FormBaseController));
        Form.UserFormController = UserFormController;
        angular
            .module('amma-user')
            .controller('AmmaUserFormController', UserFormController);
    })(Form = AmmaUser.Form || (AmmaUser.Form = {}));
})(AmmaUser || (AmmaUser = {}));
