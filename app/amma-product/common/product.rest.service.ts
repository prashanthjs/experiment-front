module AmmaProduct.Common {
    import RestService = AmmaCommon.Common.RestService;
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;

    export class ProductRestService extends RestService {

        /** @ngInject */
        constructor(Restangular:restangular.IService, PRODUCT_END_POINT:string) {
            super(Restangular, PRODUCT_END_POINT);
        }

        changePassword(id, password):ng.IPromise<any> {
            return this.restService.one(id).one('change-password').customPUT({password: password});
        }

    }

    angular.module('amma-product')
        .service('AmmaProductRestService', ProductRestService);
}


