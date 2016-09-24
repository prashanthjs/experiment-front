module AmmaProduct.List {

    import BaseController = AmmaCommon.Common.BaseController;
    import ProductGridService = AmmaProduct.Common.ProductGridService;
    import ProductRestService = AmmaProduct.Common.ProductRestService;
    import ProductCommandService = AmmaProduct.Common.ProductCommandService;
    import ListController = AmmaCommon.Common.ListController;

    export class ProductListController extends ListController {

        protected $state;
        public gridOptions: Object;
        public grid;
        public commandService: ProductCommandService;
        public viewRoute = '';


        /* @ngInject */
        constructor(AmmaProductGridService: ProductGridService, AmmaProductCommandService: ProductCommandService, AmmaMessageService, $state) {
            super(AmmaProductGridService, AmmaProductCommandService, AmmaMessageService, $state);
            this.viewRoute = 'triangular.amma-product-view';
        }

        edit(id: string, event) {
            const promise = this.commandService.openForm(id, event);
            promise.then(()=> {
                this.grid.dataSource.read();
            }, ()=> {
                this.grid.dataSource.read();
            });
        }

        create(event) {
            this.edit(null, event);
        }

        remove(id, $event) {
            this.commandService.removeDialog(id, $event).then(()=> {
                this.messageService.displaySuccessMessage('Successfully deleted');
                this.grid.dataSource.read();
            }, (error)=> {
                this.messageService.displayErrorMessage('Cannot be deleted' + error.data.message);
            })
        }

    }
    angular
        .module('amma-product')
        .controller('AmmaProductListController', ProductListController);
}

