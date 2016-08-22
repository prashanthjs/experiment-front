var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var Form;
    (function (Form) {
        var Item;
        (function (Item) {
            var FormContentController = AmmaCommon.Common.FormContentController;
            var FeatureFormItemController = (function (_super) {
                __extends(FeatureFormItemController, _super);
                /* @ngInject */
                function FeatureFormItemController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
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
                            { field: "name", title: "Name" },
                            { field: "title", title: "Title" }
                        ]
                    };
                }
                FeatureFormItemController.prototype.loadModel = function () {
                    var _this = this;
                    this.model = null;
                    if (this.eventData && this.eventData.id) {
                        var id = this.eventData.id;
                        this.loaderService.setLoaderActive(true);
                        this.commandService.getById(id).then(function (response) {
                            _this.model = response;
                            _this.syncToGrid();
                            _this.loaderService.setLoaderActive(false);
                        }, function (error) {
                            _this.syncToGrid();
                            _this.loaderService.setLoaderActive(false);
                            _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                        });
                    }
                    else {
                        this.syncToGrid();
                    }
                };
                FeatureFormItemController.prototype.syncToGrid = function () {
                    this.gridData.splice(0, this.gridData.length);
                    if (!this.model || !this.model.items || !this.model.items.length) {
                        return;
                    }
                    else {
                        for (var i = 0; i < this.model.items.length; i++) {
                            this.gridData.push(this.model.items[i]);
                        }
                    }
                };
                FeatureFormItemController.prototype.addNew = function ($event) {
                    var _this = this;
                    var promise = this.dialogService.show({
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
                    promise.then(function (dataItem) {
                        _this.addDataItem(dataItem);
                    }, function () {
                    });
                };
                FeatureFormItemController.prototype.addDataItem = function (dataItem) {
                    if (!this.model.items) {
                        this.model.items = [];
                    }
                    this.model.items.push(dataItem);
                    this.syncToGrid();
                };
                FeatureFormItemController.prototype.save = function () {
                    var _this = this;
                    this.loaderService.setLoaderActive(true);
                    this.commandService.save(this.model).then(function (resp) {
                        _this.messageService.displaySuccessMessage('Successfully saved');
                        _this.loaderService.setLoaderActive(false);
                        _this.eventData.model = resp;
                        _this.notify(_this.eventData);
                        _this.loadModel();
                    }, function (error) {
                        _this.loaderService.setLoaderActive(false);
                        _this.messageService.displayErrorMessage('Cannot be updated:' + error.data.message);
                    });
                };
                return FeatureFormItemController;
            }(FormContentController));
            Item.FeatureFormItemController = FeatureFormItemController;
            angular
                .module('amma-feature')
                .controller('AmmaFeatureFormItemController', FeatureFormItemController);
        })(Item = Form.Item || (Form.Item = {}));
    })(Form = AmmaFeature.Form || (AmmaFeature.Form = {}));
})(AmmaFeature || (AmmaFeature = {}));
