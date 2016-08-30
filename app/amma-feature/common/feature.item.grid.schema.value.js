var AmmaFeature;
(function (AmmaFeature) {
    var Common;
    (function (Common) {
        Common.FeatureItemGridSchema = {
            dataSource: {
                pageSize: 10,
                data: [],
            },
            sortable: true,
            pageable: true,
            filterable: true,
            columns: [
                { field: "_id", title: "Name" },
                { field: "title", title: "Title" },
                {
                    command: [{
                            text: '',
                            template: '<div ng-include="\'app/amma-feature/list/item/feature.list.item.command.tmpl.html\'"></div>'
                        }]
                }
            ]
        };
        angular.module('amma-feature')
            .value('AmmaFeatureItemGridSchemaValue', Common.FeatureItemGridSchema);
    })(Common = AmmaFeature.Common || (AmmaFeature.Common = {}));
})(AmmaFeature || (AmmaFeature = {}));
