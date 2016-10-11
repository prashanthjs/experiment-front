var AmmaPaymentMethod;
(function (AmmaPaymentMethod) {
    var Common;
    (function (Common) {
        Common.PaymentMethodGridSchemaValue = {
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
                            template: '<div ng-include="\'app/amma-payment-method/list/payment-method.list.command.tmpl.html\'"></div>'
                        }]
                }
            ]
        };
        angular.module('amma-payment-method')
            .value('AmmaPaymentMethodGridSchemaValue', Common.PaymentMethodGridSchemaValue);
    })(Common = AmmaPaymentMethod.Common || (AmmaPaymentMethod.Common = {}));
})(AmmaPaymentMethod || (AmmaPaymentMethod = {}));
