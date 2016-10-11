(function () {
    'use strict';

    angular
        .module('ammaCart', [
            'ui.router', 'permission',
            'triangular',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table',
            angularDragula(angular),
            'ngFileUpload',
            'restangular',
            'kendo.directives',
            'seed-module',
            'lfNgMdFileInput',
            // uncomment above to activate the example seed module
            'app.translate',
            // only need one language?  if you want to turn off translations
            // comment out or remove the 'app.translate', line above
            //    'app.permission',
            // dont need permissions?  if you want to turn off permissions
            // comment out or remove the 'app.permission', line above
            // also remove 'permission' from the first line of dependencies
            // https://github.com/Narzerus/angular-permission see here for why
            //      'app.examples'
            'ngPassword',
            'amma-common',
            'amma-store',
            'amma-user-group',
            'amma-user',
            'amma-category',
            'amma-product',
            'amma-tag',
            'amma-feature',
            'amma-shipping-method',
            'amma-order-status',
            'amma-payment-method',
            'amma-order'
        ])

        // set a constant for the API we are connecting to
        .constant('API_BASE_URL', 'http://localhost:5555/');
})();
