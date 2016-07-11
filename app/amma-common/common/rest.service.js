var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var RestService = (function () {
            /** @ngInject */
            function RestService(Restangular, AmmaEventEmitterService, $q) {
                var _this = this;
                this.getList = function (data) {
                    if (data === void 0) { data = {}; }
                    var defer = _this.$q.defer();
                    var dataPromise = _this.getRestService().getList(data);
                    dataPromise.then(function (resp) {
                        _this.eventEmitterService.emit(_this.getEventName('post-get-list'), resp, function (err, response) {
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
                this.restangularService = Restangular;
                this.eventEmitterService = AmmaEventEmitterService;
                this.$q = $q;
            }
            RestService.prototype.getById = function (id) {
                var _this = this;
                var defer = this.$q.defer();
                var dataPromise = this.getRestService().get(id);
                dataPromise.then(function (resp) {
                    _this.eventEmitterService.emit(_this.getEventName('post-get-id'), resp, function (err, response) {
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
            RestService.prototype.removeById = function (id) {
                var _this = this;
                var defer = this.$q.defer();
                var dataPromise = this.getRestService().one(id).remove();
                dataPromise.then(function (resp) {
                    _this.eventEmitterService.emit(_this.getEventName('post-remove'), {
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
            RestService.prototype.save = function (model) {
                var _this = this;
                var isNew = true;
                if (model.put) {
                    isNew = false;
                }
                var preEvent = isNew ? 'pre-create' : 'pre-save';
                var postEvent = isNew ? 'post-create' : 'post-save';
                var defer = this.$q.defer();
                this.eventEmitterService.emit(this.getEventName(preEvent), model, function (err, options) {
                    if (err) {
                        defer.reject(err);
                    }
                    else {
                        var q = void 0;
                        if (isNew) {
                            q = _this.getRestService().post(options);
                        }
                        else {
                            q = options.put();
                        }
                        q.then(function (response) {
                            if (!options.internal) {
                                options.internal = {};
                            }
                            response.internal = options.internal;
                            _this.eventEmitterService.emit(_this.getEventName(postEvent), response, function (err, options) {
                                if (err) {
                                    defer.reject(err);
                                }
                                else {
                                    defer.resolve(options);
                                }
                            });
                        }, function (responseError) {
                            console.log(responseError);
                            defer.reject(responseError);
                        });
                    }
                });
                return defer.promise;
            };
            RestService.prototype.getRestService = function () {
                if (!this.restService) {
                    this.restService = this.restangularService.all(this.getEndPoint());
                }
                return this.restService;
            };
            RestService.prototype.getEndPoint = function () {
                return this.endPoint;
            };
            RestService.prototype.getEventName = function (name) {
                if (name === void 0) { name = null; }
                if (!name) {
                    return this.eventName;
                }
                return this.eventName + '-' + name;
            };
            return RestService;
        }());
        Common.RestService = RestService;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
