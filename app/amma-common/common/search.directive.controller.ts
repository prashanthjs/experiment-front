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

        /** @ngInject */
        constructor($scope, CommandService, $q) {
            this.$scope = $scope;
            this.commandService = CommandService;
            this.cancelSearch = angular.noop;
            this.$q = $q;
        }

        search = (query) => {
            let returnOnlyId = true;
            if (objectPath.has(this.$scope, 'searchReturnOnlyId')) {
                returnOnlyId = this.$scope.searchReturnOnlyId;
            }
            if (!this.pendingSearch || !this.debounceSearch()) {
                this.cancelSearch();
                return this.pendingSearch = this.$q((resolve, reject) => {
                    this.cancelSearch = reject;
                    this.commandService.search(query).then((response)=> {
                        let temp = [];
                        if (response && response.length) {
                            for (let i = 0; i < response.length; i++) {
                                if (returnOnlyId) {
                                    temp[i] = response[i]._id;
                                } else {
                                    temp[i] = response[i];
                                }
                                console.log(temp[i]);
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
