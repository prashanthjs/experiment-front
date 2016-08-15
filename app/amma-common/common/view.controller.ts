module AmmaCommon.Common {

    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;

    export class ViewController extends BaseController {

        protected params;
        public commandService: CommandService;
        public id;
        public model;
        public images;
        protected galleryCommandService: GalleryCommandService;
        protected $state;
        public viewRoute = '';
        public listRoute = '';

        /* @ngInject */
        constructor(CommandService , AmmaMessageService, $stateParams, GalleryCommandService, $state) {
            super(AmmaMessageService);
            this.commandService = CommandService;
            this.params = $stateParams;
            this.id = $stateParams.id;
            this.galleryCommandService = GalleryCommandService;
            this.$state = $state;
            this.load();
        }

        load() {
            this.commandService.getById(this.id).then((response)=> {
                this.model = response;
                this.afterLoad();
            }, (error)=> {
                this.messageService.displayErrorMessage('Cannot load user' + error.data.message, error);
            });
        }

        afterLoad() {

        }

        edit($event) {
            const promise = this.commandService.openForm(this.id, $event);
            promise.then(()=> {
                this.load();
            }, ()=> {
                this.load();
            });
        }

        create($event) {
            const promise = this.commandService.openForm(null, $event);
            promise.then((response)=> {
                console.log(response);
                if (response && response.data && response.data.id) {
                    this.$state.go(this.viewRoute, {id: response.data.id});
                }
            }, ()=> {

            });
        }

        remove($event) {
            const promise = this.commandService.removeDialog(this.id, $event);
            promise.then(()=> {
                this.$state.go(this.listRoute);
            }, (error)=> {
                if (error) {
                    this.messageService.displayErrorMessage('Cannot remove user' + error.data.message, error);
                }
            });
        }

        openImage(image, $event) {
            this.galleryCommandService.open(this.images, image, $event);
        }
    }
}

