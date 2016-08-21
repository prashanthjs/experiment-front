var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var List;
    (function (List) {
        var ListController = AmmaCommon.Common.ListController;
        var TagListController = (function (_super) {
            __extends(TagListController, _super);
            /* @ngInject */
            function TagListController(AmmaTagGridService, AmmaTagCommandService, AmmaMessageService, $state) {
                _super.call(this, AmmaTagGridService, AmmaTagCommandService, AmmaMessageService, $state);
            }
            return TagListController;
        }(ListController));
        List.TagListController = TagListController;
        angular
            .module('amma-tag')
            .controller('AmmaTagListController', TagListController);
    })(List = AmmaTag.List || (AmmaTag.List = {}));
})(AmmaTag || (AmmaTag = {}));
