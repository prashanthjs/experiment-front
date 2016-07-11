(function() {
    'use strict';

    angular
        .module('ammaCart')
        .config(restangularConfig);

    /* @ngInject */
    function restangularConfig(RestangularProvider:restangular.IProvider) {
        RestangularProvider.setRestangularFields({
            id: '_id'
        });
        RestangularProvider.addResponseInterceptor((data:any, operation:string, what:string, url:string) => {
            let extractedData;
            extractedData = data;
            if (operation === 'getList') {
                if (data._embedded && data._embedded.result) {
                    extractedData = data._embedded.result;
                }
                if (data.meta) {
                    extractedData.meta = data.meta;
                }
            }
            return extractedData;
        });

        RestangularProvider.addRequestInterceptor((element:any, operation:string, what:string, url:string) => {
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
