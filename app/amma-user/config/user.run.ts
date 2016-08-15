module AmmaUser.Config {

    angular
        .module('amma-user')
        .run(runBlock);

    /* @ngInject */
    function runBlock($rootScope:ng.IRootScopeService) {

     $rootScope.$on('amma.user.form.template',(event, data)=>{
         data.content.push({
             templateUrl: '/app/amma-user/form/main/user.form.main.tmpl.html',
             priority: 0,
         });
         data.content.push({
             templateUrl: '/app/amma-user/form/change-password/user.form.change.password.tmpl.html',
             priority: 50
         })
     });
    }
}
