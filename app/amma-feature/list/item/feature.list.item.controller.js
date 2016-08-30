var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var List;
    (function (List) {
        var Item;
        (function (Item) {
            var FormContentController = AmmaCommon.Common.FormContentController;
            var FeatureListItemController = (function (_super) {
                __extends(FeatureListItemController, _super);
                /* @ngInject */
                function FeatureListItemController($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME, AmmaFeatureItemGridSchemaValue) {
                    _super.call(this, $scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaFeatureCommandService, $rootScope, FEATURE_FORM_EVENT_NAME);
                    this.gridOptions = AmmaFeatureItemGridSchemaValue;
                }
                FeatureListItemController.prototype.loadModel = function () {
                    var _this = this;
                    this.model = null;
                    if (this.eventData && this.eventData.id) {
                        var id = this.eventData.id;
                        this.loaderService.setLoaderActive(true);
                        this.commandService.getById(id).then(function (response) {
                            _this.model = response;
                            _this.updateData(_this.model.items);
                            _this.loaderService.setLoaderActive(false);
                        }, function (error) {
                            _this.loaderService.setLoaderActive(false);
                            _this.messageService.displayErrorMessage('Cannot retrieve:' + error.data.message, error);
                        });
                    }
                };
                FeatureListItemController.prototype.add = function ($event) {
                    this.edit(null, $event);
                };
                FeatureListItemController.prototype.edit = function (dataItem, $event) {
                    var _this = this;
                    var model = null;
                    if (dataItem) {
                        dataItem = this.removeExtraItems(dataItem);
                        model = angular.extend({}, dataItem);
                    }
                    var promise = this.commandService.openFeatureItemDialog(model, $event);
                    promise.then(function (dataItem) {
                        if (dataItem) {
                            _this.addDataItem(dataItem);
                        }
                    }, function () {
                    });
                };
                FeatureListItemController.prototype.remove = function (dataItem, $event) {
                    var _this = this;
                    this.commandService.removeFeatureItemDialog(dataItem, $event).then(function (model) {
                        _this.removeDataItem(dataItem);
                    }, function () {
                    });
                };
                FeatureListItemController.prototype.save = function () {
                    var _this = this;
                    this.loaderService.setLoaderActive(true);
                    this.model.items = [];
                    var data = this.getGridData();
                    for (var i = 0; i < data.length; i++) {
                        var result = this.removeExtraItems(data[i]);
                        this.model.items.push(result);
                    }
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
                FeatureListItemController.prototype.addDataItem = function (dataItem) {
                    dataItem = this.removeExtraItems(dataItem);
                    var result = this.findDataItem(dataItem._id);
                    if (result) {
                        _.extend(result, dataItem);
                    }
                    else {
                        this.grid.dataSource.add(dataItem);
                    }
                };
                FeatureListItemController.prototype.removeDataItem = function (dataItem) {
                    dataItem = this.removeExtraItems(dataItem);
                    this.grid.dataSource.remove(dataItem);
                };
                FeatureListItemController.prototype.removeExtraItems = function (dataItem) {
                    delete dataItem._events;
                    delete dataItem.uid;
                    return dataItem;
                };
                FeatureListItemController.prototype.getGridData = function () {
                    return this.grid.dataSource.data();
                };
                FeatureListItemController.prototype.updateData = function (data) {
                    this.grid.dataSource.data(data);
                };
                FeatureListItemController.prototype.findDataItem = function (id) {
                    var data = this.getGridData();
                    return _.findWhere(data, { _id: id });
                };
                return FeatureListItemController;
            }(FormContentController));
            Item.FeatureListItemController = FeatureListItemController;
            angular
                .module('amma-feature')
                .controller('AmmaFeatureListItemController', FeatureListItemController);
        })(Item = List.Item || (List.Item = {}));
    })(List = AmmaFeature.List || (AmmaFeature.List = {}));
})(AmmaFeature || (AmmaFeature = {}));
