var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var Form;
    (function (Form) {
        var Main;
        (function (Main) {
            var FormMainContentController = AmmaCommon.Common.FormMainContentController;
            var FeatureFormMainController = (function (_super) {
                __extends(FeatureFormMainController, _super);
                /* @ngInject */
                function FeatureFormMainController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
                }
                return FeatureFormMainController;
            }(FormMainContentController));
            Main.FeatureFormMainController = FeatureFormMainController;
            angular
                .module('amma-feature')
                .controller('AmmaFeatureFormMainController', FeatureFormMainController);
        })(Main = Form.Main || (Form.Main = {}));
    })(Form = AmmaFeature.Form || (AmmaFeature.Form = {}));
})(AmmaFeature || (AmmaFeature = {}));
