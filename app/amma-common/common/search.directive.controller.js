var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var SearchDirectiveController = (function () {
            /** @ngInject */
            function SearchDirectiveController($scope, CommandService, $q) {
                var _this = this;
                this.search = function (query) {
                    var returnOnlyId = true;
                    if (objectPath.has(_this.$scope, 'searchReturnOnlyId')) {
                        returnOnlyId = _this.$scope.searchReturnOnlyId;
                    }
                    if (!_this.pendingSearch || !_this.debounceSearch()) {
                        _this.cancelSearch();
                        return _this.pendingSearch = _this.$q(function (resolve, reject) {
                            _this.cancelSearch = reject;
                            _this.commandService.search(query).then(function (response) {
                                var temp = [];
                                if (response && response.length) {
                                    for (var i = 0; i < response.length; i++) {
                                        if (returnOnlyId) {
                                            temp[i] = response[i]._id;
                                        }
                                        else {
                                            temp[i] = response[i];
                                        }
                                        console.log(temp[i]);
                                    }
                                }
                                resolve(temp);
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
