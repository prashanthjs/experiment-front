module AmmaProductOrder.Common{

    export const ProductOrderGridSchemaValue = {
        dataSource: {
            pageSize: 20,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
            schema: {
                model: {
                    fields: {


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
                title: 'Order Id'
            },
            {
                field: 'referenceNumber',
                title: 'Reference Number'
            },
            {
                field: 'user._id',
                title: 'user._id'
            },
            {
                field: 'store._id',
                title: 'store'
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
