var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var Form;
    (function (Form) {
        var FormBaseController = AmmaCommon.Common.FormBaseController;
        var FeatureFormController = (function (_super) {
            __extends(FeatureFormController, _super);
            /* @ngInject */
            function FeatureFormController(id, $mdDialog, $scope, $rootScope, FEATURE_FORM_EVENT_NAME) {
                _super.call(this, id, $mdDialog, $scope, $rootScope, FEATURE_FORM_EVENT_NAME);
            }
            return FeatureFormController;
        }(FormBaseController));
        Form.FeatureFormController = FeatureFormController;
        angular
            .module('amma-feature')
            .controller('AmmaFeatureFormController', FeatureFormController);
    })(Form = AmmaFeature.Form || (AmmaFeature.Form = {}));
})(AmmaFeature || (AmmaFeature = {}));
