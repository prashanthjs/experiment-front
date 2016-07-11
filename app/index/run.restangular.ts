(function() {
    'use strict';

    angular
        .module('ammaCart')
        .run(restangularRun);

    /* @ngInject */
    function restangularRun(Restangular:restangular.IService, API_BASE_URL, $location) {
        Restangular.setBaseUrl(API_BASE_URL);
        Restangular.setErrorInterceptor(function (resp) {
            if (resp.status === 404) {
                $location.path('/404');
            }
            return resp;
        });
    }
})();
