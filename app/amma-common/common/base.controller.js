var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var BaseController = (function () {
            /* @ngInject */
            function BaseController(AmmaMessageService) {
                this.messageService = AmmaMessageService;
            }
            return BaseController;
        }());
        Common.BaseController = BaseController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
