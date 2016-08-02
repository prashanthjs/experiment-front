(function () {
    'use strict';
    angular
        .module('ammaCart')
        .config(restangularConfig);
    /* @ngInject */
    function restangularConfig(RestangularProvider) {
        RestangularProvider.setRestangularFields({
            id: '_id'
        });
        RestangularProvider.addResponseInterceptor(function (data, operation, what, url) {
            var extractedData;
            extractedData = data;
            if (operation === 'getList') {
                if (data._embedded && data._embedded.result) {
                    extractedData = data._embedded.result;
                }
                else {
                    extractedData = data.results;
                }
                if (data.meta) {
                    extractedData.meta = data.meta;
                }
            }
            return extractedData;
        });
        RestangularProvider.addRequestInterceptor(function (element, operation, what, url) {
            if (operation === 'put') {
                delete element._links;
                delete element.__v;
                delete element.createdAt;
                delete element.updatedAt;
                delete element.internal;
            }
            if (operation === 'post') {
                delete element.internal;
            }
            return element;
        });
    }
})();
