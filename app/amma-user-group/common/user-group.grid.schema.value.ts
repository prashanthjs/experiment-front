module AmmaUserGroup.Common{

    export const UserGroupGridSchemaValue = {
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
                title: 'Name'
            },
            {
                field: 'title',
                title: 'Title'
            },
            {
                command: [{
                    text: '',
                    template: '<div ng-include="\'app/amma-user-group/list/user-group.list.command.tmpl.html\'"></div>'
                }]

            }

        ]
    };
    angular.module('amma-user-group')
        .value('AmmaUserGroupGridSchemaValue', UserGroupGridSchemaValue);

}
