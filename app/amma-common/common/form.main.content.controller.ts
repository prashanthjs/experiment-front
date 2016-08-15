module AmmaCommon.Common {

    export class FormMainContentController extends FormContentController {

        public id;
        public model;

        handleInit() {
            this.loadModel();
        }

        loadModel() {
            this.id = null;
            if (this.eventData && this.eventData.id) {
                this.id = this.eventData.id;
                this.loaderService.setLoaderActive(true);
                this.commandService.getById(this.id).then((response)=> {
                    this.model = response;
                    this.afterLoadModel();
                    this.loaderService.setLoaderActive(false);
                }, (error) => {
                    this.loaderService.setLoaderActive(false);
                    this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                });
            }
        }

        afterLoadModel(){

        }

        submit() {
            this.loaderService.setLoaderActive(true);
            this.commandService.save(this.model).then((resp)=> {
                this.messageService.displaySuccessMessage('Successfully saved');
                this.loaderService.setLoaderActive(false);
                this.eventData.id = resp._id;
                this.eventData.model = resp;
                this.notify(this.eventData);
                this.loadModel();
                this.afterSubmit();
            }, (error)=> {
                this.loaderService.setLoaderActive(false);
                this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
            });
        }

        afterSubmit() {

        }
    }
}

