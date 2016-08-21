var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var TagFormController = (function (_super) {
            __extends(TagFormController, _super);
            /* @ngInject */
            function TagFormController(id, $mdDialog, $scope, $rootScope, TAG_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, TAG_FORM_EVENT_NAME);
            }
            return TagFormController;
        }(FormBaseController));
        Form.TagFormController = TagFormController;
        angular
            .module('amma-tag')
            .controller('AmmaTagFormController', TagFormController);
    })(Form = AmmaTag.Form || (AmmaTag.Form = {}));
})(AmmaTag || (AmmaTag = {}));
