var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AmmaCategory;
(function (AmmaCategory) {
    var Common;
    (function (Common) {
        var CommandService = AmmaCommon.Common.CommandService;
        var CategoryCommandService = (function (_super) {
            __extends(CategoryCommandService, _super);
            /* @ngInject */
            function CategoryCommandService(AmmaCategoryRestService, AmmaEventEmitterService, $q, CATEGORY_BASE_EVENT_NAME, $mdDialog) {
                _super.call(this, AmmaCategoryRestService, AmmaEventEmitterService, $q, CATEGORY_BASE_EVENT_NAME);
                this.dialogService = $mdDialog;
            }
            CategoryCommandService.prototype.openForm = function (id, ev) {
                return this.dialogService.show({
                    controller: 'AmmaCategoryFormController',
                    controllerAs: 'ammaCategoryFormController',
                    templateUrl: 'app/amma-category/form/category.form.tmpl.html',
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
            CategoryCommandService.prototype.removeDialog = function (id, event) {
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
            return CategoryCommandService;
        }(CommandService));
        Common.CategoryCommandService = CategoryCommandService;
        angular.module('amma-category')
            .service('AmmaCategoryCommandService', CategoryCommandService);
    })(Common = AmmaCategory.Common || (AmmaCategory.Common = {}));
})(AmmaCategory || (AmmaCategory = {}));
