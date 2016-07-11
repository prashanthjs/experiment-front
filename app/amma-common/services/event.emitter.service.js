var AmmaCommon;
(function (AmmaCommon) {
    var Services;
    (function (Services) {
        var EventEmitterService = (function () {
            function EventEmitterService() {
                this.events = {};
            }
            EventEmitterService.prototype.on = function ($scope, event, fn) {
                var _this = this;
                if (typeof $scope === 'string') {
                    fn = event;
                    event = $scope;
                    $scope = null;
                }
                if (!this.events) {
                    this.events = {};
                }
                if (!this.events[event]) {
                    this.events[event] = [];
                }
                this.events[event].push(fn);
                if ($scope) {
                    $scope.$on('$destroy', function () {
                        _this.off(event, fn);
                    });
                }
                return this;
            };
            EventEmitterService.prototype.first = function ($scope, event, fn) {
                var _this = this;
                if (typeof $scope === 'string') {
                    fn = event;
                    event = $scope;
                    $scope = null;
                }
                if (!this.events) {
                    this.events = {};
                }
                if (!this.events[event]) {
                    this.events[event] = [];
                }
                this.events[event].unshift(fn);
                if ($scope) {
                    $scope.$on('$destroy', function () {
                        _this.off(event, fn);
                    });
                }
                return this;
            };
            EventEmitterService.prototype.once = function ($scope, event, fn) {
                if (typeof $scope === 'string') {
                    fn = event;
                    event = $scope;
                    $scope = null;
                }
                var self = this;
                var cb = function () {
                    fn.apply(this, arguments);
                    self.off(event, cb);
                };
                this.on($scope, event, cb);
                return this;
            };
            EventEmitterService.prototype.emit = function (event, options, callback) {
                if (callback) {
                    return this.emitAsync(event, options, callback);
                }
                else {
                    return this.emitSync(event, options);
                }
            };
            EventEmitterService.prototype.emitSync = function (event, options) {
                if (!this.events || !this.events[event] || !Array.isArray(this.events[event])) {
                    return;
                }
                var listeners = this.events[event].slice(0);
                for (var i = 0; i < listeners.length; i++) {
                    listeners[i].call(null, options);
                }
                return this;
            };
            EventEmitterService.prototype.emitAsync = function (event, options, callback) {
                var _this = this;
                if (!this.events || !this.events[event] || !Array.isArray(this.events[event])) {
                    return callback(null, options);
                }
                async.eachSeries(this.events[event], function (fn, next) {
                    var err;
                    if (fn.length < 2) {
                        try {
                            fn.call(_this, options);
                        }
                        catch (e) {
                            err = e;
                        }
                        return next(err, options);
                    }
                    fn.call(_this, options, next);
                }, function done(err) {
                    callback(err, options);
                });
                return this;
            };
            EventEmitterService.prototype.off = function (event, fn) {
                if (!this.events || !this.events[event] || !this.events[event].length) {
                    return this;
                }
                if (!fn) {
                    delete this.events[event];
                }
                else {
                    var index = this.events[event].indexOf(fn);
                    if (index > -1) {
                        this.events[event].splice(index, 1);
                    }
                }
                return this;
            };
            return EventEmitterService;
        }());
        Services.EventEmitterService = EventEmitterService;
        angular
            .module('amma-common')
            .service('AmmaEventEmitterService', EventEmitterService);
    })(Services = AmmaCommon.Services || (AmmaCommon.Services = {}));
})(AmmaCommon || (AmmaCommon = {}));
