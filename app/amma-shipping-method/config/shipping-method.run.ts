module AmmaShippingMethod.Config {

    angular
        .module('amma-shipping-method')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.shipping-method.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-shipping-method/form/main/shipping-method.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
