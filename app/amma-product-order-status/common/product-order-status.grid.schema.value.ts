module AmmaProductOrderStatus.Common{

    export const ProductOrderStatusGridSchemaValue = {
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
                    template: '<div ng-include="\'app/amma-product-order-status/list/product-order-status.list.command.tmpl.html\'"></div>'
                }]

            }

        ]
    };
    angular.module('amma-product-order-status')
        .value('AmmaProductOrderStatusGridSchemaValue', ProductOrderStatusGridSchemaValue);

}
