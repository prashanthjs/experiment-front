var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaTag;
(function (AmmaTag) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var TagCommandService = (function (_super) {
            __extends(TagCommandService, _super);
            /* @ngInject */
            function TagCommandService(AmmaTagRestService, AmmaEventEmitterService, $q, TAG_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaTagRestService, AmmaEventEmitterService, $q, TAG_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            TagCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaTagFormController',
                    controllerAs: 'ammaTagFormController',
                    templateUrl: 'app/amma-tag/form/tag.form.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    autoWrap: true,
                    openFrom: ev,
                    locals: {
                        id: id
                    },
                    escapeToClose: false,
                    clickOutsideToClose: false,
                    fullscreen: true
                });
            };
            TagCommandService.prototype.removeDialog = function (id, event) {
                var _this = this;
                var defer = this.$q.defer();
                var confirm = this.dialogService.confirm()
                    .title('Would you like to delete ' + id + '?')
                    .ariaLabel('Delete ' + id)
                    .targetEvent(event)
                    .ok('Yes')
                    .cancel('No');
                this.dialogService.show(confirm).then(function () {
                    _this.restService.removeById(id).then(function (response) {
                        defer.resolve(response);
                    }, function (response) {
                        defer.reject(response);
                    });
                }, function () {
                    defer.resolve();
                });
                return defer.promise;
            };
            return TagCommandService;
        }(CommandService));
        Common.TagCommandService = TagCommandService;
        angular.module('amma-tag')
            .service('AmmaTagCommandService', TagCommandService);
    })(Common = AmmaTag.Common || (AmmaTag.Common = {}));
})(AmmaTag || (AmmaTag = {}));
