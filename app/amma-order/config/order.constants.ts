module AmmaOrder.Config {
    angular
        .module('amma-order')
        .constant('ORDER_END_POINT', 'orders')
        .constant('ORDER_BASE_EVENT_NAME', 'order')
        .constant('ORDER_FORM_EVENT_NAME', 'amma.order.form')
        .constant('ORDER_CONTENT_EVENT_NAME', 'amma.order.content');
}
