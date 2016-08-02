var AmmaCommon;
(function (AmmaCommon) {
    var directives;
    (function (directives) {
        var DialogActions;
        (function (DialogActions_1) {
            /** @ngInject */
            function DialogActions($compile, $mdUtil) {
                return {
                    restrict: 'A',
                    require: '^mdTabs',
                    priority: 1000,
                    link: function (scope, element, attrs, tabsController) {
                        var init = function () {
                            var tabsLength = tabsController.tabs.length;
                            for (var i = 0; i < tabsLength; i++) {
                                var elem = element.find('md-tab-content:eq(' + i + ')').find('.amma-dialog-actions');
                                var elemWrapper = $('<div class="dialog-actions"></div>').html(elem);
                                element.parents('md-dialog').find('md-dialog-actions').append(elemWrapper);
                            }
                        };
                        var apply = function (index) {
                            element.parents('md-dialog').find('md-dialog-actions').children('.dialog-actions').css('display', 'none');
                            element.parents('md-dialog').find('md-dialog-actions').children('.dialog-actions:eq(' + index + ')').css('display', '');
                        };
                        scope.$on('$includeContentLoaded', function () {
                            $mdUtil.nextTick(function () {
                                init();
                                apply(tabsController.selectedIndex);
                            });
                        });
                        scope.$watch(function () {
                            return tabsController.selectedIndex;
                        }, function (newValue, oldValue) {
                            if (newValue === oldValue)
                                return;
                            console.log(newValue);
                            apply(newValue);
                        });
                    }
                };
            }
            DialogActions_1.DialogActions = DialogActions;
            angular
                .module('amma-common')
                .directive('ammaDialogActions', DialogActions);
        })(DialogActions = directives.DialogActions || (directives.DialogActions = {}));
    })(directives = AmmaCommon.directives || (AmmaCommon.directives = {}));
})(AmmaCommon || (AmmaCommon = {}));
