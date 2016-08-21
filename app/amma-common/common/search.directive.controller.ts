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
            console.log(this.commandService);
            if (!this.pendingSearch || !this.debounceSearch()) {
                this.cancelSearch();
                return this.pendingSearch = this.$q((resolve, reject) => {
                    this.cancelSearch = reject;
                    this.commandService.search(query).then((response)=> {
                        resolve(response);
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
