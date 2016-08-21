module AmmaTag.Config {

    angular
        .module('amma-tag')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.tag.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-tag/form/main/tag.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
