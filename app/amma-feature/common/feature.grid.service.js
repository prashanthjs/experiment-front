var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var FeatureGridService = (function (_super) {
            __extends(FeatureGridService, _super);
            /** @ngInject */
            function FeatureGridService(AmmaFeatureCommandService, AmmaFeatureGridSchemaValue) {
                _super.call(this, AmmaFeatureCommandService, AmmaFeatureGridSchemaValue);
            }
            return FeatureGridService;
        }(GridService));
        Common.FeatureGridService = FeatureGridService;
        angular.module('amma-feature')
            .service('AmmaFeatureGridService', FeatureGridService);
    })(Common = AmmaFeature.Common || (AmmaFeature.Common = {}));
})(AmmaFeature || (AmmaFeature = {}));
