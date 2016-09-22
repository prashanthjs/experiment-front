module AmmaCommon.Common {
    import EventEmitterService = AmmaCommon.Services.EventEmitterService;
    export class CommandService {

        protected eventName: string;
        protected restService: RestService;
        protected eventEmitterService: EventEmitterService;
        protected $q;
        protected postGetListEventName = 'post-get-list';
        protected postGetIdEventName = 'post-get-id';
        protected postRemoveEventName = 'post-remove';

        protected postCreateEventName = 'post-create';
        protected preCreateEventName = 'pre-create';
        protected preSaveEventName = 'pre-save';
        protected postSaveEventName = 'post-save';

        /* @ngInject */
        constructor(restService: RestService, eventEmitterService: EventEmitterService, $q: ng.IQService, eventName: string) {
            this.restService = restService;
            this.eventName = eventName;
            this.$q = $q;
            this.eventEmitterService = eventEmitterService;
        }

        getList = (data = {}): ng.IPromise<any> => {
            const defer = this.$q.defer();
            const dataPromise = this.restService.getList(data);
            dataPromise.then((resp: any) => {
                this.eventEmitterService.emit(this.getEventName(this.postGetListEventName), resp, (err, response)=> {
                    if (err) {
                        defer.reject(err);
                    }
                    else {
                        defer.resolve(response);
                    }
                });
            }, (resp: any) => {
                defer.reject(resp);
            });
            return defer.promise;
        };

        search = (text, limit = 5) => {

            const data = {
                filter: {
                    logic: "and",
                    filters: [{
                        "field": "_id",
                        "operator": "contains",
                        "value": text
                    }],
                },
                page: 1,
                pageSize: limit,
                skip: 0,
                take: limit
            };
            return this.getList(data);
        };

        getById(id: string): ng.IPromise<any> {
            const defer = this.$q.defer();
            const dataPromise = this.restService.getById(id);
            dataPromise.then((resp: any) => {
                this.eventEmitterService.emit(this.getEventName(this.postGetIdEventName), resp, (err, response)=> {
                    if (err) {
                        defer.reject(err);
                    }
                    else {
                        response.internal = {};
                        defer.resolve(response);
                    }
                });
            }, (resp: any) => {
                defer.reject(resp);
            });
            return defer.promise;
        }

        removeById(id: string): ng.IPromise<any> {
            const defer = this.$q.defer();
            const dataPromise = this.restService.removeById(id);

            dataPromise.then((resp: any) => {
                this.eventEmitterService.emit(this.postRemoveEventName, {
                    _id: id,
                    response: resp
                }, (err, response)=> {
                    if (err) {
                        defer.reject(err);
                    }
                    else {
                        defer.resolve(response);
                    }
                });
            }, (resp: any) => {
                defer.reject(resp);
            });
            return defer.promise;
        }

        save(model: any): ng.IPromise<any> {
            let isNew = true;
            if (model.put) {
                isNew = false;
            }
            const preEvent = isNew ? this.preCreateEventName : this.preSaveEventName;
            const postEvent = isNew ? this.postCreateEventName : this.postSaveEventName;

            const defer = this.$q.defer();

            this.eventEmitterService.emit(this.getEventName(preEvent), model, (err, reformattedModel)=> {
                if (err) {
                    defer.reject(err);
                } else {
                    let q;
                    q = this.restService.save(reformattedModel, isNew);

                    q.then((response: any)=> {
                        // internal is used as temp;
                        if (!reformattedModel.internal) {
                            reformattedModel.internal = {};
                        }
                        response.internal = reformattedModel.internal;
                        this.eventEmitterService.emit(this.getEventName(postEvent), response, (err, reformattedModel)=> {
                            if (err) {
                                defer.reject(err);
                            }
                            else {
                                defer.resolve(reformattedModel);
                            }
                        });
                    }, (responseError)=> {
                        defer.reject(responseError);
                    });
                }
            });
            return defer.promise;
        }


        protected getEventName(name = null) {
            return this.eventName + '-' + name;
        }

        openForm(id: string, ev: any): ng.IPromise<any> {
            return;
        }

        removeDialog(id: string, event): ng.IPromise<any> {
            return
        }

    }
}
