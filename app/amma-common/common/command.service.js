var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var CommandService = (function () {
            /* @ngInject */
            function CommandService(restService, eventEmitterService, $q, eventName) {
                var _this = this;
                this.postGetListEventName = 'post-get-list';
                this.postGetIdEventName = 'post-get-id';
                this.postRemoveEventName = 'post-remove';
                this.postCreateEventName = 'post-create';
                this.preCreateEventName = 'pre-create';
                this.preSaveEventName = 'pre-save';
                this.postSaveEventName = 'post-save';
                this.getList = function (data) {
                    if (data === void 0) { data = {}; }
                    var defer = _this.$q.defer();
                    var dataPromise = _this.restService.getList(data);
                    dataPromise.then(function (resp) {
                        _this.eventEmitterService.emit(_this.getEventName(_this.postGetListEventName), resp, function (err, response) {
                            if (err) {
                                defer.reject(err);
                            }
                            else {
                                defer.resolve(response);
                            }
                        });
                    }, function (resp) {
                        defer.reject(resp);
                    });
                    return defer.promise;
                };
                this.search = function (text, limit) {
                    if (limit === void 0) { limit = 5; }
                    var data = {
                        filter: {
                            logic: "and",
                            filters: [{
                                    "field": "_id",
                                    "operator": "contains",
                                    "value": text
                                }],
                        },
                        page: 1,
                        pageSize: limit,
                        skip: 0,
                        take: limit
                    };
                    console.log(_this.restService);
                    return _this.getList(data);
                };
                this.restService = restService;
                this.eventName = eventName;
                this.$q = $q;
                this.eventEmitterService = eventEmitterService;
            }
            CommandService.prototype.getById = function (id) {
                var _this = this;
                var defer = this.$q.defer();
                var dataPromise = this.restService.getById(id);
                dataPromise.then(function (resp) {
                    _this.eventEmitterService.emit(_this.getEventName(_this.postGetIdEventName), resp, function (err, response) {
                        if (err) {
                            defer.reject(err);
                        }
                        else {
                            response.internal = {};
                            defer.resolve(response);
                        }
                    });
                }, function (resp) {
                    defer.reject(resp);
                });
                return defer.promise;
            };
            CommandService.prototype.removeById = function (id) {
                var _this = this;
                var defer = this.$q.defer();
                var dataPromise = this.restService.removeById(id);
                dataPromise.then(function (resp) {
                    _this.eventEmitterService.emit(_this.postRemoveEventName, {
                        _id: id,
                        response: resp
                    }, function (err, response) {
                        if (err) {
                            defer.reject(err);
                        }
                        else {
                            defer.resolve(response);
                        }
                    });
                }, function (resp) {
                    defer.reject(resp);
                });
                return defer.promise;
            };
            CommandService.prototype.save = function (model) {
                var _this = this;
                var isNew = true;
                if (model.put) {
                    isNew = false;
                }
                var preEvent = isNew ? this.preCreateEventName : this.preSaveEventName;
                var postEvent = isNew ? this.postCreateEventName : this.postSaveEventName;
                var defer = this.$q.defer();
                this.eventEmitterService.emit(this.getEventName(preEvent), model, function (err, reformattedModel) {
                    if (err) {
                        defer.reject(err);
                    }
                    else {
                        var q = void 0;
                        q = _this.restService.save(reformattedModel, isNew);
                        q.then(function (response) {
                            // internal is used as temp;
                            if (!reformattedModel.internal) {
                                reformattedModel.internal = {};
                            }
                            response.internal = reformattedModel.internal;
                            _this.eventEmitterService.emit(_this.getEventName(postEvent), response, function (err, reformattedModel) {
                                if (err) {
                                    defer.reject(err);
                                }
                                else {
                                    defer.resolve(reformattedModel);
                                }
                            });
                        }, function (responseError) {
                            defer.reject(responseError);
                        });
                    }
                });
                return defer.promise;
            };
            CommandService.prototype.getEventName = function (name) {
                if (name === void 0) { name = null; }
                return this.eventName + '-' + name;
            };
            CommandService.prototype.openForm = function (id, ev) {
                return;
            };
            CommandService.prototype.removeDialog = function (id, event) {
                return;
            };
            return CommandService;
        }());
        Common.CommandService = CommandService;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
