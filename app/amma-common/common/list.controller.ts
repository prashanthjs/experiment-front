module AmmaCommon.Common {

    import MessageService = AmmaCommon.Services.MessageService;
    export class ListController extends BaseController {

        public gridOptions:Object;
        public grid;
        public commandService:CommandService;

        /* @ngInject */
        constructor(GridService:GridService, CommandService:CommandService, MessageService:MessageService) {
            super(MessageService);
            this.gridOptions = GridService.getGridOptions();
            this.commandService = CommandService;
        }

        edit(id:string, event) {
            const promise = this.commandService.openForm(id, event);
            promise.then(()=> {
                this.grid.dataSource.read();
            }, ()=> {
                this.grid.dataSource.read();
            });
        }

        create(event) {
            this.edit(null, event);
        }

        remove(id, $event) {
            this.commandService.removeDialog(id, $event).then(()=> {
                this.messageService.displaySuccessMessage('Successfully deleted');
                this.grid.dataSource.read();
            }, (error)=> {
                this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
            })
        }

    }

}

