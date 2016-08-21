module AmmaCategory.Config {

    angular
        .module('amma-category')
        .constant('CATEGORY_END_POINT', 'categories')
        .constant('CATEGORY_BASE_EVENT_NAME', 'category')
        .constant('CATEGORY_FORM_EVENT_NAME', 'amma.category.form');
}
