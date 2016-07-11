var seed;
(function (seed) {
    var DataService = (function () {
        function DataService() {
        }
        DataService.prototype.test = function () {
            console.log('test');
        };
        return DataService;
    }());
    seed.DataService = DataService;
    angular.module('seed-module')
        .service('dataService', DataService);
})(seed || (seed = {}));
