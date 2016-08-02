module AmmaCommon.directives.DialogActions {

    /** @ngInject */
    export function DialogActions($compile, $mdUtil):ng.IDirective {
        return {
            restrict: 'A',
            require: '^mdTabs',
            priority: 1000,
            link: (scope:ng.IScope, element, attrs, tabsController) => {

                const init = () => {
                    const tabsLength = tabsController.tabs.length;
                    for (let i = 0; i < tabsLength; i++) {
                        const elem = element.find('md-tab-content:eq(' + i + ')').find('.amma-dialog-actions');
                        const elemWrapper = $('<div class="dialog-actions"></div>').html(elem);
                        element.parents('md-dialog').find('md-dialog-actions').append(elemWrapper);
                    }
                };

                const apply = (index) => {
                    element.parents('md-dialog').find('md-dialog-actions').children('.dialog-actions').css('display', 'none');
                    element.parents('md-dialog').find('md-dialog-actions').children('.dialog-actions:eq(' + index + ')').css('display', '');
                };

                scope.$on('$includeContentLoaded', function () {
                    $mdUtil.nextTick(()=> {
                        init();
                        apply(tabsController.selectedIndex);
                    });
                });

                scope.$watch(()=> {
                    return tabsController.selectedIndex;
                }, (newValue, oldValue)=> {
                    if(newValue === oldValue) return;
                    console.log(newValue);
                    apply(newValue);
                });


            }

        };

    }

    angular
        .module('amma-common')
        .directive('ammaDialogActions', DialogActions);
}

