module AmmaCategory.Config {

    angular
        .module('amma-category')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.category.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-category/form/main/category.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
