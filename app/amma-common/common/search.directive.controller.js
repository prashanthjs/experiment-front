var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var SearchDirectiveController = (function () {
            /** @ngInject */
            function SearchDirectiveController($scope, CommandService, $q) {
                var _this = this;
                this.search = function (query) {
                    console.log(_this.commandService);
                    if (!_this.pendingSearch || !_this.debounceSearch()) {
                        _this.cancelSearch();
                        return _this.pendingSearch = _this.$q(function (resolve, reject) {
                            _this.cancelSearch = reject;
                            _this.commandService.search(query).then(function (response) {
                                resolve(response);
                                _this.refreshDebounce();
                            }, function () {
                                reject();
                            });
                        });
                    }
                    return _this.pendingSearch;
                };
                this.$scope = $scope;
                this.commandService = CommandService;
                this.cancelSearch = angular.noop;
                this.$q = $q;
            }
            SearchDirectiveController.prototype.refreshDebounce = function () {
                this.lastSearch = 0;
                this.pendingSearch = null;
                this.cancelSearch = angular.noop;
            };
            /**
             * Debounce if querying faster than 300ms
             */
            SearchDirectiveController.prototype.debounceSearch = function () {
                var now = new Date().getMilliseconds();
                this.lastSearch = this.lastSearch || now;
                return ((now - this.lastSearch) < 300);
            };
            return SearchDirectiveController;
        }());
        Common.SearchDirectiveController = SearchDirectiveController;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
