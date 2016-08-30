module AmmaFeature.List.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import FormContentController = AmmaCommon.Common.FormContentController;
    import FeatureCommandService = AmmaFeature.Common.FeatureCommandService;

    export class FeatureListItemController extends FormContentController {
        public model;
        public gridOptions;
        public grid;
        protected commandService: FeatureCommandService;

        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME, AmmaFeatureItemGridSchemaValue) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
            this.gridOptions = AmmaFeatureItemGridSchemaValue;
        }

        loadModel() {
            this.model = null;
            if (this.eventData && this.eventData.id) {
                let id = this.eventData.id;
                this.loaderService.setLoaderActive(true);
                this.commandService.getById(id).then((response)=> {
                    this.model = response;
                    this.updateData(this.model.items);
                    this.loaderService.setLoaderActive(false);
                }, (error) => {
                    this.loaderService.setLoaderActive(false);
                    this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                });
            }
        }


        add($event) {
            this.edit(null, $event);
        }

        edit(dataItem, $event) {
            let model = null;
            if (dataItem) {
                dataItem = this.removeExtraItems(dataItem);
                model = angular.extend({}, dataItem);
            }
            const promise = this.commandService.openFeatureItemDialog(model, $event);
            promise.then((dataItem)=> {
                if (dataItem) {
                    this.addDataItem(dataItem);
                }
            }, ()=> {

            });
        }

        remove(dataItem, $event) {
            this.commandService.removeFeatureItemDialog(dataItem, $event).then((model)=> {
                this.removeDataItem(dataItem);
            }, ()=> {

            });
        }

        save() {
            this.loaderService.setLoaderActive(true);
            this.model.items = [];
            const data = this.getGridData();
            for (let i = 0; i < data.length; i++) {
                let result = this.removeExtraItems(data[i]);
                this.model.items.push(result);
            }
            this.commandService.save(this.model).then((resp)=> {
                this.messageService.displaySuccessMessage('Successfully saved');
                this.loaderService.setLoaderActive(false);
                this.eventData.model = resp;

                this.notify(this.eventData);
                this.loadModel();
            }, (error)=> {
                this.loaderService.setLoaderActive(false);
                this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
            });
        }

        protected addDataItem(dataItem) {
            dataItem = this.removeExtraItems(dataItem);
            let result = this.findDataItem(dataItem._id);
            if (result) {
                _.extend(result, dataItem);
            } else {
                this.grid.dataSource.add(dataItem);
            }
        }

        protected removeDataItem(dataItem) {
            dataItem = this.removeExtraItems(dataItem);
            this.grid.dataSource.remove(dataItem);
        }


        protected removeExtraItems(dataItem) {
            delete dataItem._events;
            delete dataItem.uid;
            return dataItem;
        }

        protected getGridData() {
            return this.grid.dataSource.data();
        }

        protected updateData(data) {
            this.grid.dataSource.data(data);
        }

        protected findDataItem(id: string) {
            let data = this.getGridData();
            return _.findWhere(data, {_id: id});
        }
    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureListItemController', FeatureListItemController);
}

