var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaFeature;
(function (AmmaFeature) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var FeatureCommandService = (function (_super) {
            __extends(FeatureCommandService, _super);
            /* @ngInject */
            function FeatureCommandService(AmmaFeatureRestService, AmmaEventEmitterService, $q, FEATURE_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaFeatureRestService, AmmaEventEmitterService, $q, FEATURE_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            FeatureCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaFeatureFormController',
                    controllerAs: 'ammaFeatureFormController',
                    templateUrl: 'app/amma-feature/form/feature.form.tmpl.html',
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
            FeatureCommandService.prototype.removeDialog = function (id, event) {
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
            return FeatureCommandService;
        }(CommandService));
        Common.FeatureCommandService = FeatureCommandService;
        angular.module('amma-feature')
            .service('AmmaFeatureCommandService', FeatureCommandService);
    })(Common = AmmaFeature.Common || (AmmaFeature.Common = {}));
})(AmmaFeature || (AmmaFeature = {}));
