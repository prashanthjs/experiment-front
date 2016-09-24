module AmmaProductOrderStatus.Config {

    angular
        .module('amma-product-order-status')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.product-order-status.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-product-order-status/form/main/product-order-status.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
