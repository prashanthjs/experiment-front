var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var FeatureListController = (function (_super) {
            __extends(FeatureListController, _super);
            /* @ngInject */
            function FeatureListController(AmmaFeatureGridService, AmmaFeatureCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaFeatureGridService, AmmaFeatureCommandService, AmmaMessageService, $state);
            }
            return FeatureListController;
        }(ListController));
        List.FeatureListController = FeatureListController;
        angular
            .module('amma-feature')
            .controller('AmmaFeatureListController', FeatureListController);
    })(List = AmmaFeature.List || (AmmaFeature.List = {}));
})(AmmaFeature || (AmmaFeature = {}));
