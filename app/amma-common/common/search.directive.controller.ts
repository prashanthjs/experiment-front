module AmmaCommon.Common {
    import CommandService = AmmaCommon.Common.CommandService;
    export class SearchDirectiveController {

        protected $scope;
        protected commandService: CommandService;
        protected pendingSearch;
        protected cancelSearch;
        protected cachedQuery;
        protected lastSearch;
        protected $q: ng.IQService;
        protected returnOnlyId;

        /** @ngInject */
        constructor($scope, CommandService, $q) {
            this.$scope = $scope;
            this.commandService = CommandService;
            this.cancelSearch = angular.noop;
            this.$q = $q;
            this.returnOnlyId = true;
            if (this.$scope.hasOwnProperty('searchReturnOnlyId')) {
                this.returnOnlyId = this.$scope.searchReturnOnlyId;
            }
        }

        search = (query) => {
            if (!this.pendingSearch || !this.debounceSearch()) {
                this.cancelSearch();
                return this.pendingSearch = this.$q((resolve, reject) => {
                    this.cancelSearch = reject;
                    this.commandService.search(query).then((response)=> {
                        let temp = [];
                        if (response && response.length) {
                            for (let i = 0; i < response.length; i++) {
                                if (this.returnOnlyId) {
                                    temp[i] = response[i]._id;
                                } else {
                                    temp[i] = response[i];
                                }
                            }
                        }
                        resolve(temp);
                        this.refreshDebounce();
                    }, () => {
                        reject();
                    });
                });
            }
            return this.pendingSearch;
        };

        refreshDebounce() {
            this.lastSearch = 0;
            this.pendingSearch = null;
            this.cancelSearch = angular.noop;
        }

        /**
         * Debounce if querying faster than 300ms
         */
        debounceSearch() {
            let now = new Date().getMilliseconds();
            this.lastSearch = this.lastSearch || now;
            return ((now - this.lastSearch) < 300);
        }

    }
}
