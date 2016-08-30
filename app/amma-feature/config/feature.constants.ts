module AmmaFeature.Config {
    angular
        .module('amma-feature')
        .constant('FEATURE_END_POINT', 'features')
        .constant('FEATURE_BASE_EVENT_NAME', 'feature')
        .constant('FEATURE_IMAGE_TYPE', 'featureItem')
        .constant('FEATURE_FORM_EVENT_NAME', 'amma.feature.form');
}
