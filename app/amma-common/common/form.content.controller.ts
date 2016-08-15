module AmmaCommon.Common {

    export class FormContentController extends BaseController {

        protected commandService;
        protected loaderService;
        protected dialogService;
        protected $scope: IFormScope;
        protected $rootScope: ng.IRootScopeService;

        public eventData;
        protected eventName;


        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, CommandService, $rootScope, eventName) {
            super(AmmaMessageService);
            this.dialogService = $mdDialog;
            this.commandService = CommandService;
            this.loaderService = triLoaderService;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.eventName = eventName;
            this.registerEvents();
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

            this.$scope.$on('$destroy', () => {
                unbindInitFunc();
                unbindDataFunc();
            });
        }


        notify(data) {
            this.$rootScope.$emit(this.eventName + '.data', data);
        }

        handleInit() {

        }

        handleDataChange() {

        }

        hide() {
            this.dialogService.hide({data: this.eventData});
        }
    }
}

