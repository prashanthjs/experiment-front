var AmmaUser;
(function (AmmaUser) {
    var Common;
    (function (Common) {
        Common.UserGridSchemaValue = {
            dataSource: {
                pageSize: 20,
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                schema: {
                    model: {
                        fields: {
                            isActive: { type: "boolean" }
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
                    title: 'userName'
                },
                {
                    field: 'firstName',
                    title: 'First Name'
                },
                {
                    field: 'lastName',
                    title: 'Last Name'
                },
                {
                    field: 'email',
                    title: 'Email'
                },
                {
                    field: 'contactNumber',
                    title: 'Contact Number'
                },
                {
                    field: 'userGroup',
                    title: 'User Group'
                },
                {
                    field: 'isActive',
                    title: 'Status',
                    template: '<md-switch class="md-primary margin-0" ng-model="dataItem.isActive" aria-label="isActive?" ng-disabled="true"/>'
                },
                {
                    command: [{
                            text: '',
                            template: '<div ng-include="\'app/amma-user/list/user.list.command.tmpl.html\'"></div>'
                        }]
                }
            ]
        };
        angular.module('amma-user')
            .value('AmmaUserGridSchemaValue', Common.UserGridSchemaValue);
    })(Common = AmmaUser.Common || (AmmaUser.Common = {}));
})(AmmaUser || (AmmaUser = {}));
