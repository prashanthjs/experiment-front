module AmmaProduct.Form.Main {

    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    interface  IFormScope extends AmmaCommon.Common.IFormScope {
        ammaProductMainForm: ng.IFormController
    }


    export class ProductFormMainController extends FormMainContentController {

        private $q: ng.IQService;
        private $mdUtil;
        protected $scope: IFormScope;
        protected $rootScope;
        public imageType = '';

        /* @ngInject */
        constructor($scope: IFormScope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, $q, $mdUtil, $rootScope, PRODUCT_FORM_EVENT_NAME, PRODUCT_PROFILE_IMAGE_TYPE) {
            super($scope, $mdDialog, AmmaMessageService, triLoaderService, AmmaProductCommandService, $rootScope, PRODUCT_FORM_EVENT_NAME);
            this.$q = $q;
            this.$mdUtil = $mdUtil;
            this.imageType = PRODUCT_PROFILE_IMAGE_TYPE;
        }

        handleInit() {
            this.model = {
                categories: [],
                features: [],
                tags: [],
                available: {
                    store: {
                        name: []
                    },
                    userGroup: []
                }
            };
            this.$mdUtil.nextTick(() => {
                this.loadModel();
            });
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

