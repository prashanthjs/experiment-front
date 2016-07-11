module AmmaCommon.Common {
    export class GridService {

        protected restService:RestService;
        protected gridOptions:Object;

        /** @ngInject */
        constructor(restService:RestService, gridOptions:Object) {
            this.setRestService(restService);
            this.setGridOptions(gridOptions);
            this.injectRestService();
        }

        restCall = (options) => {
            const dataPromise = this.getRestService().getList(options.data);
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

        setRestService(restService:RestService) {
            this.restService = restService;
        }

        getRestService():RestService {
            return this.restService;
        }
    }
}
