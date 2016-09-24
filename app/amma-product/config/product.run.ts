module AmmaProduct.Config {

    angular
        .module('amma-product')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.product.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-product/form/main/product.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
