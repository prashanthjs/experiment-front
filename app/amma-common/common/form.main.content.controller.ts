module AmmaCommon.Common {

    export class FormMainContentController extends FormContentController {

        public id;
        public model;

        /* @ngInject */
        constructor($scope, $mdDialog, AmmaMessageService, triLoaderService, CommandService, $rootScope, eventName) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, CommandService, $rootScope, eventName);
            $scope.getModel = this.getModel;
            $scope.setModel = this.setModel;
            $scope.updateModel = this.updateModel;
        }

        handleInit() {
            this.loadModel();
        }

        loadModel() {
            this.id = null;
            this.model = {};
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

        afterLoadModel() {

        }

        submit($event, close = false) {
            this.loaderService.setLoaderActive(true);
            this.commandService.save(this.model).then((resp)=> {
                this.messageService.displaySuccessMessage('Successfully saved');
                this.loaderService.setLoaderActive(false);
                this.eventData.id = resp._id;
                this.eventData.model = resp;
                this.notify(this.eventData);
                this.afterSubmit();
                if (!close) {
                    this.loadModel();

                } else {
                    this.hide();
                }
            }, (error)=> {
                this.loaderService.setLoaderActive(false);
                this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
            });
        }

        afterSubmit() {

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

