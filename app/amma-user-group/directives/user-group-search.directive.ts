module AmmaUserGroup.directives {

    import UserGroupCommandService = AmmaUserGroup.Common.UserGroupCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaUserGroupSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaUserGroupSearch',
            controller: AmmaUserGroupSearchController,
            link: (scope, element, attrs, ctrl: AmmaUserGroupSearchController)=> {
                const ammaUserGroupSearchModel = $parse(attrs.ammaUserGroupSearch);
                ammaUserGroupSearchModel.assign(scope, ctrl.search);
            }
        };

    }

    export class AmmaUserGroupSearchController extends SearchDirectiveController{
        /** @ngInject */
        constructor($scope, AmmaUserGroupCommandService, $q) {
            super($scope, AmmaUserGroupCommandService, $q);
        }

    }

    angular
        .module('amma-user-group')
        .directive('ammaUserGroupSearch', AmmaUserGroupSearchDirective);
}

