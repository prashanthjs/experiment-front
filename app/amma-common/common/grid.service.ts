module AmmaCommon.Common {
    export class GridService {

        protected commandService:CommandService;
        protected gridOptions:Object;

        /** @ngInject */
        constructor(commandService:CommandService, gridOptions:Object) {
            this.setCommandService(commandService);
            this.setGridOptions(gridOptions);
            this.injectRestService();
        }

        restCall = (options) => {
            const dataPromise = this.getCommandService().getList(options.data);
            dataPromise.then((resp:any) => {
                var plain:any = resp.plain();
                options.success(plain);
            });
            dataPromise.catch((resp:any) => {
                var msg = 'Issue loading asset cases:' + JSON.stringify(resp);
                options.error(msg)
            });
        };

        injectRestService() {
            this.gridOptions.dataSource['transport'] = {
                read: this.restCall
            }
        }

        getGridOptions():Object {
            return this.gridOptions;
        }

        setGridOptions(gridOptions:Object) {
            this.gridOptions = gridOptions;
        }

        setCommandService(commandService:CommandService) {
            this.commandService = commandService;
        }

        getCommandService():CommandService {
            return this.commandService;
        }
    }
}
