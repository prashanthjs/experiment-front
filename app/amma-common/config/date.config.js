var AmmaCommon;
(function (AmmaCommon) {
    var Config;
    (function (Config) {
        angular
            .module('amma-common')
            .config(DateConfig);
        /* @ngInject */
        function DateConfig($mdDateLocaleProvider) {
            $mdDateLocaleProvider.formatDate = function (date) {
                return moment(date).format('DD/MM/YYYY');
            };
            $mdDateLocaleProvider.parseDate = function (dateString) {
                var m = moment(dateString, 'DD/MM/YYYY', true);
                return m.isValid() ? m.toDate() : new Date(NaN);
            };
        }
    })(Config = AmmaCommon.Config || (AmmaCommon.Config = {}));
})(AmmaCommon || (AmmaCommon = {}));
