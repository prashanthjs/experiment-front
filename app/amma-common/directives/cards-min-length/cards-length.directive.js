var AmmaCommon;
(function (AmmaCommon) {
    var directives;
    (function (directives) {
        var CardsMinLength;
        (function (CardsMinLength_1) {
            /** @ngInject */
            function CardsMinLength() {
                return {
                    require: 'ngModel',
                    link: function (scope, element, attrs, ngModel) {
                        ngModel.$options = {
                            allowInvalid: true
                        };
                        scope.$watch(function () {
                            return ngModel.$modelValue && ngModel.$modelValue.length;
                        }, function () {
                            ngModel.$validate(); // validate again when array changes
                        });
                        ngModel.$validators['amma-cards-min-length'] = function () {
                            var arr = ngModel.$modelValue;
                            if (!arr) {
                                return false;
                            }
                            return arr.length > 0;
                        };
                    }
                };
            }
            CardsMinLength_1.CardsMinLength = CardsMinLength;
            angular
                .module('amma-common')
                .directive('ammaCardsMinLength', CardsMinLength);
        })(CardsMinLength = directives.CardsMinLength || (directives.CardsMinLength = {}));
    })(directives = AmmaCommon.directives || (AmmaCommon.directives = {}));
})(AmmaCommon || (AmmaCommon = {}));
