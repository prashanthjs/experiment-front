module AmmaUser.directives {

    import UserCommandService = AmmaUser.Common.UserCommandService;
    import SearchDirectiveController = AmmaCommon.Common.SearchDirectiveController;
    /** @ngInject */
    export function AmmaUserSearchDirective($parse): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ammaUserSearch',
            controller: AmmaUserSearchController,
            link: (scope, element, attrs, ctrl: AmmaUserSearchController)=> {
                let ammaUserReturnOnlyId = true;
                if (attrs.hasOwnProperty('ammaUserReturnOnlyId')) {
                    ammaUserReturnOnlyId = attrs.ammaUserReturnOnlyId === 'true' ? true : false;
                }
                const ammaUserSearchModel = $parse(attrs.ammaUserSearch);
                ammaUserSearchModel.assign(scope, ctrl.search);
                scope.searchReturnOnlyId = ammaUserReturnOnlyId;
            }
        };

    }

    export class AmmaUserSearchController extends SearchDirectiveController {
        /** @ngInject */
        constructor($scope, AmmaUserCommandService, $q) {
            super($scope, AmmaUserCommandService, $q);
        }

    }

    angular
        .module('amma-user')
        .directive('ammaUserSearch', AmmaUserSearchDirective);
}

