module AmmaProduct.Config {

    angular
        .module('amma-product')
        .constant('PRODUCT_END_POINT', 'products')
        .constant('PRODUCT_BASE_EVENT_NAME', 'product')
        .constant('PRODUCT_PROFILE_IMAGE_TYPE', 'product')
        .constant('PRODUCT_FORM_EVENT_NAME', 'amma.product.form')
        .constant('PRODUCT_CONTENT_EVENT_NAME', 'amma.product.content');
}
