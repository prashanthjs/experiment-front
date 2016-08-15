module AmmaUser.Form.Main {

    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    interface  IFormScope extends AmmaCommon.Common.IFormScope {
        ammaUserMainForm: ng.IFormController
    }


    export class UserFormMainController extends FormMainContentController {

        private userGroupCommandService;
        private storeCommandService;
        private $q: ng.IQService;
        private $mdUtil;
        protected $scope: IFormScope;
        protected $rootScope;

        public stores;
        public userGroups;
        public maxDob;

        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, AmmaUserGroupCommandService, AmmaStoreCommandService, $q, $mdUtil, $rootScope, USER_FORM_EVENT_NAME) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaUserCommandService, $rootScope, USER_FORM_EVENT_NAME);
            this.userGroupCommandService = AmmaUserGroupCommandService;
            this.storeCommandService = AmmaStoreCommandService;
            this.$q = $q;
            this.$mdUtil = $mdUtil;
            this.maxDob = new Date();
        }

        handleInit() {
            this.$q.all([this.loadUserGroups(), this.loadStores()]).then((data: any)=> {
                this.$mdUtil.nextTick(() => {
                    this.loadModel();
                });
            }, (errors)=> {
                console.log(errors);
            });
        }

        afterLoadModel(){
            if(this.model.dob){
                this.model.dob = new Date(this.model.dob);
            }
        }

        loadUserGroups() {
            let defer = this.$q.defer();

            this.userGroupCommandService.getList().then((response)=> {
                this.userGroups = response;
                defer.resolve(response);
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve User Groups:' + error.data.message, error);
                defer.reject(error.data.message);
            });
            return defer;
        }

        loadStores() {
            let defer = this.$q.defer();
            this.storeCommandService.getList().then((response)=> {
                this.stores = response;
                defer.resolve(response);
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve Stores:' + error.data.message, error);
                defer.reject(error.data.message);
            });
            return defer;
        }

        afterSubmit() {
            this.$scope.ammaUserMainForm.$setPristine();
            this.$scope.ammaUserMainForm.$setUntouched();
        }
    }
    angular
        .module('amma-user')
        .controller('AmmaUserFormMainController', UserFormMainController);
}

