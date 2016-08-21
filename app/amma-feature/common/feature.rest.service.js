var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var FeatureRestService = (function (_super) {
            __extends(FeatureRestService, _super);
            /** @ngInject */
            function FeatureRestService(Restangular, FEATURE_END_POINT) {
                _super.call(this, Restangular, FEATURE_END_POINT);
            }
            return FeatureRestService;
        }(RestService));
        Common.FeatureRestService = FeatureRestService;
        angular.module('amma-feature')
            .service('AmmaFeatureRestService', FeatureRestService);
    })(Common = AmmaFeature.Common || (AmmaFeature.Common = {}));
})(AmmaFeature || (AmmaFeature = {}));
