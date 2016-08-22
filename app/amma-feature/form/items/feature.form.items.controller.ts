module AmmaFeature.Form.Item {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;
    import FormContentController = AmmaCommon.Common.FormContentController;

    export class FeatureFormItemController extends FormContentController {
        public model;
        public gridData;
        public gridOptions;

        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
            this.gridData = new kendo.data.ObservableArray([]);
            this.gridOptions = {
                dataSource: {
                    pageSize: 10,
                    data: this.gridData
                },
                sortable: true,
                pageable: true,
                filterable: true,
                columns: [
                    {field: "name", title: "Name"},
                    {field: "title", title: "Title"}

                ]
            };
        }

        loadModel() {
            this.model = null;
            if (this.eventData && this.eventData.id) {
                let id = this.eventData.id;
                this.loaderService.setLoaderActive(true);
                this.commandService.getById(id).then((response)=> {
                    this.model = response;
                    this.syncToGrid();
                    this.loaderService.setLoaderActive(false);
                }, (error) => {
                    this.syncToGrid();
                    this.loaderService.setLoaderActive(false);
                    this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                });
            } else {
                this.syncToGrid();
            }
        }

        syncToGrid() {
            this.gridData.splice(0, this.gridData.length);
            if (!this.model || !this.model.items || !this.model.items.length) {
                return;
            }
            else {
                for (let i = 0; i < this.model.items.length; i++) {
                    this.gridData.push(this.model.items[i]);
                }
            }
        }

        addNew($event) {
            const promise = this.dialogService.show({
                controller: 'AmmaFeatureFormItemsItemController',
                controllerAs: 'ammaFeatureFormItemsItemController',
                templateUrl: 'app/amma-feature/form/items/item/feature.form.items.item.tmpl.html',
                targetEvent: $event,
                locals: {
                    model: null
                },
                preserveScope: true,
                autoWrap: true,
                skipHide: true
            });

            promise.then((dataItem)=> {
                this.addDataItem(dataItem);
            }, ()=> {

            });
        }

        addDataItem(dataItem) {
            if (!this.model.items) {
                this.model.items = [];
            }
            this.model.items.push(dataItem);
            this.syncToGrid();
        }

        save(){
            this.loaderService.setLoaderActive(true);
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

    }

    angular
        .module('amma-feature')
        .controller('AmmaFeatureFormItemController', FeatureFormItemController);
}

