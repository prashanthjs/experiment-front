var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var Common;
    (function (Common) {
        var RestService = AmmaCommon.Common.RestService;
        var TagRestService = (function (_super) {
            __extends(TagRestService, _super);
            /** @ngInject */
            function TagRestService(Restangular, TAG_END_POINT) {
                _super.call(this, Restangular, TAG_END_POINT);
            }
            return TagRestService;
        }(RestService));
        Common.TagRestService = TagRestService;
        angular.module('amma-tag')
            .service('AmmaTagRestService', TagRestService);
    })(Common = AmmaTag.Common || (AmmaTag.Common = {}));
})(AmmaTag || (AmmaTag = {}));
