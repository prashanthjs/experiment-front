module AmmaOrderStatus.Config {

    angular
        .module('amma-order-status')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.order-status.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-order-status/form/main/order-status.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
