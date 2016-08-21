var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var Common;
    (function (Common) {
        var GridService = AmmaCommon.Common.GridService;
        var TagGridService = (function (_super) {
            __extends(TagGridService, _super);
            /** @ngInject */
            function TagGridService(AmmaTagCommandService, AmmaTagGridSchemaValue) {
                _super.call(this, AmmaTagCommandService, AmmaTagGridSchemaValue);
            }
            return TagGridService;
        }(GridService));
        Common.TagGridService = TagGridService;
        angular.module('amma-tag')
            .service('AmmaTagGridService', TagGridService);
    })(Common = AmmaTag.Common || (AmmaTag.Common = {}));
})(AmmaTag || (AmmaTag = {}));
