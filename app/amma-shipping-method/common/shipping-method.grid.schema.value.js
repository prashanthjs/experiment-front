var AmmaShippingMethod;
(function (AmmaShippingMethod) {
    var Common;
    (function (Common) {
        Common.ShippingMethodGridSchemaValue = {
            dataSource: {
                pageSize: 20,
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true
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
                            template: '<div ng-include="\'app/amma-shipping-method/list/shipping-method.list.command.tmpl.html\'"></div>'
                        }]
                }
            ]
        };
        angular.module('amma-shipping-method')
            .value('AmmaShippingMethodGridSchemaValue', Common.ShippingMethodGridSchemaValue);
    })(Common = AmmaShippingMethod.Common || (AmmaShippingMethod.Common = {}));
})(AmmaShippingMethod || (AmmaShippingMethod = {}));
