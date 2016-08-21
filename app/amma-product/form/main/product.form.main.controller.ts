module AmmaProduct.Form.Main {

    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    interface  IFormScope extends AmmaCommon.Common.IFormScope {
        ammaProductMainForm: ng.IFormController
    }


    export class ProductFormMainController extends FormMainContentController {

        private userGroupCommandService;
        private storeCommandService;
        private $q: ng.IQService;
        private $mdUtil;
        protected $scope: IFormScope;
        protected $rootScope;

        public stores;
        public productGroups;
        public maxDob;

        public selectedCategories = [];

        public imageType = '';

        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, AmmaUserGroupCommandService, AmmaStoreCommandService, $q, $mdUtil, $rootScope, PRODUCT_FORM_EVENT_NAME, PRODUCT_PROFILE_IMAGE_TYPE) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, $rootScope, PRODUCT_FORM_EVENT_NAME);
            this.userGroupCommandService = AmmaUserGroupCommandService;
            this.storeCommandService = AmmaStoreCommandService;
            this.$q = $q;
            this.$mdUtil = $mdUtil;
            this.maxDob = new Date();
            this.imageType = PRODUCT_PROFILE_IMAGE_TYPE;
            this.selectedCategories = [];
        }

        handleInit() {
            this.model = {categories:[]};
            this.$q.all([this.loadUserGroups(), this.loadStores()]).then((data: any)=> {
                this.$mdUtil.nextTick(() => {
                    this.loadModel();
                });
            }, (errors)=> {
                console.log(errors);
            });
        }


        loadUserGroups() {
            let defer = this.$q.defer();

            this.userGroupCommandService.getList().then((response)=> {
                this.productGroups = response;
                defer.resolve(response);
            }, (error) => {
                this.messageService.displayErrorMessage('Cannot retrieve Product Groups:' + error.data.message, error);
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
            this.$scope.ammaProductMainForm.$setPristine();
            this.$scope.ammaProductMainForm.$setUntouched();
        }
    }
    angular
        .module('amma-product')
        .controller('AmmaProductFormMainController', ProductFormMainController);
}

