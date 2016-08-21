module AmmaCommon.Common {

    import MessageService = AmmaCommon.Services.MessageService;
    export class ListController extends BaseController {

        public gridOptions: Object;
        public grid;
        public commandService: CommandService;
        protected $state;
        public viewRoute = '';

        /* @ngInject */
        constructor(GridService: GridService, CommandService: CommandService, MessageService: MessageService, $state) {
            super(MessageService);
            this.gridOptions = GridService.getGridOptions();
            this.commandService = CommandService;
            this.$state = $state;
        }

        edit(id: string, $event) {
            if ($event) {
                $event.preventDefault();
            }
            const promise = this.commandService.openForm(id, $event);
            promise.then(()=> {
                this.grid.dataSource.read();
            }, ()=> {
                this.grid.dataSource.read();
            });
        }

        create($event) {

            this.edit(null, $event);
        }

        view(id: string, event) {
            this.$state.go(this.viewRoute, {id: id});
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

