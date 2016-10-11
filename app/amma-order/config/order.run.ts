module AmmaOrder.Config {

    angular
        .module('amma-order')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.order.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-order/form/main/order.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
