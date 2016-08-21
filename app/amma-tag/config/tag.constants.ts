module AmmaTag.Config {
    angular
        .module('amma-tag')
        .constant('TAG_END_POINT', 'tags')
        .constant('TAG_BASE_EVENT_NAME', 'tag')
        .constant('TAG_FORM_EVENT_NAME', 'amma.tag.form');
}
