module AmmaCommon.Common {

    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class RestService {

        protected restService:restangular.IElement;
        protected Restangular:restangular.IService;
        protected endPoint:string;

        /** @ngInject */
        constructor(Restangular:restangular.IService, endPoint:string) {
            this.restService = Restangular.all(endPoint);
            this.Restangular = Restangular;
            this.endPoint = endPoint;
        }

        getList = (data = {}):ng.IPromise<any> => {
            return this.restService.getList(data);
        };

        getById(id:string):ng.IPromise<any> {
            return this.restService.get(id);
        }

        removeById(id:string):ng.IPromise<any> {
            return this.restService.one(id).remove();
        }

        save(model:any, isNew = false) {
            if (isNew) {
               return this.restService.post(model);
            }
            return model.save();
        }

    }
}
