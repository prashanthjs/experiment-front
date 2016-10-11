module AmmaOrderStatus.Common{

    export const OrderStatusGridSchemaValue = {
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
                field: 'frontendStatus',
                title: 'Frontend status'
            },
            {
                field: 'type',
                title: 'Type'
            },
            {
                command: [{
                    text: '',
                    template: '<div ng-include="\'app/amma-order-status/list/order-status.list.command.tmpl.html\'"></div>'
                }]

            }

        ]
    };
    angular.module('amma-order-status')
        .value('AmmaOrderStatusGridSchemaValue', OrderStatusGridSchemaValue);

}
