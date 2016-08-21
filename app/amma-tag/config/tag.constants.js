var AmmaTag;
(function (AmmaTag) {
    var Config;
    (function (Config) {
        angular
            .module('amma-tag')
            .constant('TAG_END_POINT', 'tags')
            .constant('TAG_BASE_EVENT_NAME', 'tag')
            .constant('TAG_FORM_EVENT_NAME', 'amma.tag.form');
    })(Config = AmmaTag.Config || (AmmaTag.Config = {}));
})(AmmaTag || (AmmaTag = {}));
