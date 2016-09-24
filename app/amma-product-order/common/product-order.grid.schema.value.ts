module AmmaProductOrder.Common{

    export const ProductOrderGridSchemaValue = {
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
                    template: '<div ng-include="\'app/amma-product-order/list/product-order.list.command.tmpl.html\'"></div>'
                }]


            }

        ]
    };
    angular.module('amma-product-order')
        .value('AmmaProductOrderGridSchemaValue', ProductOrderGridSchemaValue);

}
