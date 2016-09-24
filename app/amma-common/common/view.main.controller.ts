module AmmaCommon.Common {

    import GalleryCommandService = AmmaCommon.Services.GalleryCommandService;
    import CommandService = AmmaCommon.Common.CommandService;

    export class ViewMainController extends BaseController {

        protected params;
        public commandService: CommandService;
        public model;
        public images;
        protected galleryCommandService: GalleryCommandService;
        protected $state;
        public viewRoute = '';
        public listRoute = '';
        public eventName;
        protected $rootScope;
        protected $scope;
        public eventData;

        /* @ngInject */
        constructor(CommandService, AmmaMessageService, $stateParams, GalleryCommandService, $state, $rootScope, $scope, eventName) {
            super(AmmaMessageService);
            this.commandService = CommandService;
            this.params = $stateParams;
            this.eventData = $stateParams;
            this.galleryCommandService = GalleryCommandService;
            this.$state = $state;
            this.eventName = eventName;
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.load();
            this.registerEvents();
            $scope.getModel = this.getModel;
            $scope.setModel = this.setModel;
            $scope.updateModel = this.updateModel;
        }

        load() {
            this.commandService.getById(this.eventData.id).then((response)=> {
                this.model = response;
                this.eventData.model = this.model;
                this.notify(this.eventData);
                this.afterLoad();
            }, (error)=> {
                this.messageService.displayErrorMessage('Cannot load user' + error.data.message, error);
            });
        }

        afterLoad() {

        }

        edit($event) {
            const promise = this.commandService.openForm(this.eventData.id, $event);
            promise.then(()=> {
                this.load();
            }, ()=> {
                this.load();
            });
        }

        create($event) {
            const promise = this.commandService.openForm(null, $event);
            promise.then((response)=> {
                if (response && response.data && response.data.id) {
                    this.$state.go(this.viewRoute, {id: response.data.id});
                }
            }, ()=> {

            });
        }

        remove($event) {
            const promise = this.commandService.removeDialog(this.eventData.id, $event);
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

        registerEvents() {
            let unbindInitFunc = this.$rootScope.$on(this.eventName + '.init', (event, data)=> {
                this.eventData = data;
                this.handleInit();
            });

            let unbindDataFunc = this.$rootScope.$on(this.eventName + '.data', (event, data)=> {
                this.eventData = data;
                this.handleDataChange();
            });

            let unbindReloadDataFunc = this.$rootScope.$on(this.eventName + '.reload', (event, data)=> {
                this.eventData = data;
                this.handleReload();
            });

            this.$scope.$on('$destroy', () => {
                unbindInitFunc();
                unbindDataFunc();
                unbindReloadDataFunc();
            });
        }


        notify(data) {
            this.$rootScope.$emit(this.eventName + '.data', data);
        }

        handleInit() {

        }

        handleDataChange() {

        }

        handleReload() {
            this.load();
        }

        getModel = () => {
            return this.model;
        };

        setModel = (model) => {
            this.model = model;
        };

        updateModel = (key, value)=> {
            if (!this.model) {
                this.model = {};
            }
            objectPath.set(this.model, key, value);
        };
    }
}

