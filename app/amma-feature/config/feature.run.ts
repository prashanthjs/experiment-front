module AmmaFeature.Config {

    angular
        .module('amma-feature')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.feature.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-feature/form/main/feature.form.main.tmpl.html',
             priority: 0,
         });

         data.content.push({
             templateUrl: '/app/amma-feature/list/item/feature.list.item.tmpl.html',
             priority: 50,
         });
     });
    }
}
