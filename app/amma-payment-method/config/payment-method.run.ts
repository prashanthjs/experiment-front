module AmmaPaymentMethod.Config {

    angular
        .module('amma-payment-method')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.payment-method.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-payment-method/form/main/payment-method.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
