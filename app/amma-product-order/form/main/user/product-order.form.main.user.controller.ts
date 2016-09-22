module AmmaProductOrder.Form.Main.User {

    import IFormScope = AmmaCommon.Common.IFormScope;
    import CommandService = AmmaCommon.Common.CommandService;
    import FormMainContentController = AmmaCommon.Common.FormMainContentController;

    export class ProductOrderFormMainUserController {
        /* @ngInject */
        constructor() {
        }

        userChange(item, model) {
            objectPath.set(model, 'user.name.firstName', item.firstName);
            objectPath.set(model, 'user.name.lastName', item.lastName);
            objectPath.set(model, 'user.name.middleName', item.middleName);
            objectPath.set(model, 'user.email', item.email);
            objectPath.set(model, 'user._id', item._id);
            objectPath.set(model, 'user.contactNumber', item.contactNumber);
            objectPath.set(model, 'address.shipping', angular.copy(item.address));
            objectPath.set(model, 'address.billing', angular.copy(item.address));
        }
    }

    angular
        .module('amma-product-order')
        .controller('AmmaProductOrderFormMainUserController', ProductOrderFormMainUserController);
}

