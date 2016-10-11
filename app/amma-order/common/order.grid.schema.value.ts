module AmmaOrder.Common{

    export const OrderGridSchemaValue = {
        dataSource: {
            pageSize: 20,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
        },
        sortable: true,
        pageable: true,
        filterable: true,
        columns: [

            {
                field: 'referenceNumber',
                title: 'Reference Number'
            },
            {
                field: 'user._id',
                title: 'User'
            },
            {
                field: 'store._id',
                title: 'Store'
            },
            {
                field: 'status',
                title: 'Order Status'
            },
            {
                command: [{
                    text: '',
                    template: '<div ng-include="\'app/amma-order/list/order.list.command.tmpl.html\'"></div>'
                }]


            }

        ]
    };
    angular.module('amma-order')
        .value('AmmaOrderGridSchemaValue', OrderGridSchemaValue);

}
