module AmmaCommon.Common {

    export interface IFormScope extends ng.IScope {
        ammaContentData:{id:string};
        cancelDialog();
    }

    export class FormBaseController {

        public id;
        protected dialogService;
        protected $scope:IFormScope;


        /* @ngInject */
        constructor(id, $mdDialog, $scope:IFormScope) {
            this.id = id;
            this.dialogService = $mdDialog;
            this.$scope = $scope;
            this.init();
        }

        init() {
            this.$scope.cancelDialog = ()=> {
                this.dialogService.cancel();
            };
        }


    }

}

