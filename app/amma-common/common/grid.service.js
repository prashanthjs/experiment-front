var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var GridService = (function () {
            /** @ngInject */
            function GridService(commandService, gridOptions) {
                var _this = this;
                this.restCall = function (options) {
                    var dataPromise = _this.getCommandService().getList(options.data);
                    dataPromise.then(function (resp) {
                        var plain = resp.plain();
                        options.success(plain);
                    });
                    dataPromise.catch(function (resp) {
                        var msg = 'Issue loading asset cases:' + JSON.stringify(resp);
                        options.error(msg);
                    });
                };
                this.setCommandService(commandService);
                this.setGridOptions(gridOptions);
                this.injectRestService();
            }
            GridService.prototype.injectRestService = function () {
                this.gridOptions.dataSource['transport'] = {
                    read: this.restCall
                };
            };
            GridService.prototype.getGridOptions = function () {
                return this.gridOptions;
            };
            GridService.prototype.setGridOptions = function (gridOptions) {
                this.gridOptions = gridOptions;
            };
            GridService.prototype.setCommandService = function (commandService) {
                this.commandService = commandService;
            };
            GridService.prototype.getCommandService = function () {
                return this.commandService;
            };
            return GridService;
        }());
        Common.GridService = GridService;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
