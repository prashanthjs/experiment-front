var AmmaCommon;
(function (AmmaCommon) {
    var Common;
    (function (Common) {
        var RestService = (function () {
            /** @ngInject */
            function RestService(Restangular, endPoint) {
                var _this = this;
                this.getList = function (data) {
                    if (data === void 0) { data = {}; }
                    return _this.restService.getList(data);
                };
                this.restService = Restangular.all(endPoint);
                this.Restangular = Restangular;
                this.endPoint = endPoint;
            }
            RestService.prototype.getById = function (id) {
                return this.restService.get(id);
            };
            RestService.prototype.removeById = function (id) {
                return this.restService.one(id).remove();
            };
            RestService.prototype.save = function (model, isNew) {
                if (isNew === void 0) { isNew = false; }
                if (isNew) {
                    return this.restService.post(model);
                }
                return model.save();
            };
            return RestService;
        }());
        Common.RestService = RestService;
    })(Common = AmmaCommon.Common || (AmmaCommon.Common = {}));
})(AmmaCommon || (AmmaCommon = {}));
