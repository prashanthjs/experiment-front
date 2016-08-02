module AmmaUserGroup.Config {

    angular
        .module('amma-user-group')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.user-group.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-user-group/form/main/user-group.form.main.tmpl.html',
             priority: 0,
         });
     });
    }
}
