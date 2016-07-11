module seed{

    export class DataService {

        test(){
            console.log('test');
        }
    }
    angular.module('seed-module')
        .service('dataService', DataService);

}
