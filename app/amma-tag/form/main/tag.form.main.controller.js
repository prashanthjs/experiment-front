var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var TagFormMainController = (function (_super) {
                __extends(TagFormMainController, _super);
                /* @ngInject */
                function TagFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaTagCommandService, $rootScope, TAG_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaTagCommandService, $rootScope, TAG_FORM_EVENT_NAME);
                }
                return TagFormMainController;
            }(FormMainContentController));
            Main.TagFormMainController = TagFormMainController;
            angular
                .module('amma-tag')
                .controller('AmmaTagFormMainController', TagFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaTag.Form || (AmmaTag.Form = {}));
})(AmmaTag || (AmmaTag = {}));
