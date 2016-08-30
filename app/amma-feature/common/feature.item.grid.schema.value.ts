module AmmaFeature.Common{

    export const FeatureItemGridSchema = {
        dataSource: {
            pageSize: 10,
            data: [],
        },
        sortable: true,
        pageable: true,
        filterable: true,
        columns: [
            {field: "_id", title: "Name"},
            {field: "title", title: "Title"},
            {
                command: [{
                    text: '',
                    template: '<div ng-include="\'app/amma-feature/list/item/feature.list.item.command.tmpl.html\'"></div>'
                }]

            }
        ]
    };
    angular.module('amma-feature')
        .value('AmmaFeatureItemGridSchemaValue', FeatureItemGridSchema);

}
