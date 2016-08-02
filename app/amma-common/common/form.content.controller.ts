module AmmaCommon.Common {

    export class FormContentController extends BaseController {

        protected commandService;
        protected loaderService;
        protected dialogService;
        protected $scope:IFormScope;

        public id;
        public model;


        /* @ngInject */
        constructor($scope:IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaStoreCommandService) {
            super(AmmaMessageService);
            this.dialogService = $mdDialog;
            this.commandService = AmmaStoreCommandService;
            this.loaderService = triLoaderService;
            this.$scope = $scope;
        }

        setId(id){
            this.id = id;
            this.$scope.ammaContentData.id = id;
        }

        init() {
            this.id = this.$scope.ammaContentData.id || null;
            if (this.id) {
                this.loadModel();
            }
        }

        loadModel() {
            this.loaderService.setLoaderActive(true);
            this.commandService.getById(this.id).then((response)=> {
                this.model = response;
                this.loaderService.setLoaderActive(false);
            }, (error) => {
                this.loaderService.setLoaderActive(false);
                this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
            });
        }

        cancel() {
            this.dialogService.cancel();
        }

        submit() {
            this.loaderService.setLoaderActive(true);
            this.commandService.save(this.model).then((resp)=> {
                this.setId(resp._id);
                this.model = resp;
                this.messageService.displaySuccessMessage('Successfully saved');
                this.loaderService.setLoaderActive(false);
            }, (error)=> {
                this.loaderService.setLoaderActive(false);
                this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
            });
        }
    }
}

