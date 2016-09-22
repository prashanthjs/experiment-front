module AmmaProductOrder.Config {

    angular
        .module('amma-product-order')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.product-order.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-product-order/form/main/product-order.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
