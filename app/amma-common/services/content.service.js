var AmmaCommon;
(function (AmmaCommon) {
    var Services;
    (function (Services) {
        var ContentService = (function () {
            /** @ngInject */
            function ContentService($rootScope) {
                this.$rootScope = $rootScope;
            }
            ContentService.prototype.get = function (eventName, initContent) {
                if (initContent === void 0) { initContent = []; }
                var content = [];
                if (initContent) {
                    content = initContent;
                }
                this.$rootScope.$emit(eventName, {
                    content: content
                });
                content.sort(this.sortFunc('priority'));
                return content;
            };
            ContentService.prototype.sortFunc = function (prop) {
                return function (a, b) {
                    if (a[prop] > b[prop]) {
                        return 1;
                    }
                    else if (a[prop] < b[prop]) {
                        return -1;
                    }
                    return 0;
                };
            };
            return ContentService;
        }());
        Services.ContentService = ContentService;
        angular
            .module('amma-common')
            .service('AmmaContentService', ContentService);
    })(Services = AmmaCommon.Services || (AmmaCommon.Services = {}));
})(AmmaCommon || (AmmaCommon = {}));
