var AmmaCategory;
(function (AmmaCategory) {
    var Common;
    (function (Common) {
        Common.CategoryGridSchemaValue = {
            dataSource: {
                pageSize: 20,
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                schema: {
                    model: {
                        fields: {
                            isActive: { type: "boolean" }
                        }
                    }
                }
            },
            sortable: true,
            pageable: true,
            filterable: true,
            columns: [
                {
                    field: '_id',
                    title: 'Name'
                },
                {
                    field: 'title',
                    title: 'Title'
                },
                {
                    field: 'isActive',
                    title: 'Status',
                    template: '<md-switch class="md-primary margin-0" ng-model="dataItem.isActive" aria-label="isActive?" ng-disabled="true"/>'
                },
                {
                    command: [{
                            text: '',
                            template: '<div ng-include="\'app/amma-category/list/category.list.command.tmpl.html\'"></div>'
                        }]
                }
            ]
        };
        angular.module('amma-category')
            .value('AmmaCategoryGridSchemaValue', Common.CategoryGridSchemaValue);
    })(Common = AmmaCategory.Common || (AmmaCategory.Common = {}));
})(AmmaCategory || (AmmaCategory = {}));
