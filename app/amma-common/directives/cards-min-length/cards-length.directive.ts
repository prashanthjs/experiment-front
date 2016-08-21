module AmmaCommon.directives.CardsMinLength {

    /** @ngInject */
    export function CardsMinLength(): ng.IDirective {
        return {
            require: 'ngModel',
            link: (scope, element, attrs, ngModel: any) => {
                ngModel.$options = {
                    allowInvalid: true
                };
                scope.$watch(function () {
                    return ngModel.$modelValue && ngModel.$modelValue.length;
                }, ()=> {
                    ngModel.$validate(); // validate again when array changes
                });

                ngModel.$validators['amma-cards-min-length'] = () => {
                    let arr = ngModel.$modelValue;
                    if (!arr) {
                        return false;
                    }
                    return arr.length > 0;
                };

            }
        }
    }

    angular
        .module('amma-common')
        .directive('ammaCardsMinLength', CardsMinLength);
}

