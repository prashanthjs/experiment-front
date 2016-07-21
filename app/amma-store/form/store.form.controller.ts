module AmmaStore.Form {

    import BaseController = AmmaCommon.Common.BaseController;
    import StoreGridService = AmmaStore.Common.StoreGridService;
    import StoreRestService = AmmaStore.Common.StoreRestService;
    import StoreCommandService = AmmaStore.Common.StoreCommandService;
    export class StoreFormController extends BaseController {

        public model;
        public isNew = true;
        public stores;
        public dialogService;
        protected commandService;
        public images;

        /* @ngInject */
        constructor(model:Object, stores, $mdDialog, AmmaMessageService, AmmaStoreCommandService) {
            super(AmmaMessageService);
            this.isNew = model ? false : true;
            this.model = model || {};
            this.dialogService = $mdDialog;
            this.stores = stores;
            this.commandService = AmmaStoreCommandService;
        }

        cancel() {

            this.processImages();
            console.log(this.model.images);
           // this.dialogService.cancel();
        }

        submit() {
            this.processImages();
            this.commandService.save(this.model).then((resp)=> {
                this.model = resp;
                this.isNew = false;
                this.messageService.displaySuccessMessage('Successfully saved');
            }, (error)=> {
                console.debug(error);
                this.messageService.displayErrorMessage('Store cannot be updated:' + error.data.message);
            });
        }

        processImages(){
            let images = this.model.internal.images;
            this.model['images'] = [];
            angular.forEach(images, (image)=>{
                this.model.images.push(image);
            });
        }


    }
    angular
        .module('amma-store')
        .controller('AmmaStoreFormController', StoreFormController);
}

