module AmmaStore.Config {

    angular
        .module('amma-store')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.store.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-store/form/main/store.form.main.tmpl.html',
             priority: 0,
         });
         // data.content.push({
         //     templateUrl: '/app/amma-store/form/test.tmpl.html',
         //     priority: 10
         // })
     });
    }
}
