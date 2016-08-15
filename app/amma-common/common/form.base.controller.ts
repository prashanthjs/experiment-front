module AmmaCommon.Common {

    export interface IFormScope extends ng.IScope {
        ammaContentData: {id: string};
        hideDialog();
    }

    export class FormBaseController {

        public eventName;

        protected dialogService;
        protected $scope: IFormScope;
        protected $rootScope;

        public eventData;


        /* @ngInject */
        constructor(id, $mdDialog, $scope: IFormScope, $rootScope, eventName) {
            this.eventData = {id: id};
            this.dialogService = $mdDialog;
            this.$scope = $scope;
            this.eventName = eventName;
            this.$rootScope = $rootScope;
            this.registerEvents();
            this.$scope.hideDialog = ()=> {
                this.dialogService.hide({data: this.eventData});
            };
        }

        registerEvents() {
            let unbindDataFunc = this.$rootScope.$on(this.eventName + '.data', (event, data)=> {
                this.eventData = data;
                this.handleDataChange();
            });
            this.$scope.$on('$destroy', () => {
                unbindDataFunc();
            });
        }

        handleDataChange() {

        }

    }

}

