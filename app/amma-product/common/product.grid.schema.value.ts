module AmmaProduct.Common{

    export const ProductGridSchemaValue = {
        dataSource: {
            pageSize: 20,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
            schema: {
                model: {
                    fields: {
                        isActive: {type: "boolean"}
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
                title: 'ID'
            },
            {
                field: 'title',
                title: 'Title'
            },
            {
                field: 'sku',
                title: 'SKU'
            },

            {
                field: 'price.sell',
                title: 'Price'
            },
            {
                field: 'isActive',
                title: 'Status',
                template: '<md-switch class="md-primary margin-0" ng-model="dataItem.isActive" aria-label="isActive?" ng-disabled="true"/>'

            },

            {
                command: [{
                    text: '',
                    template: '<div ng-include="\'app/amma-product/list/product.list.command.tmpl.html\'"></div>'
                }]

            }

        ]
    };

    angular.module('amma-product')
        .value('AmmaProductGridSchemaValue', ProductGridSchemaValue);

}
