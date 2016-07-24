module AmmaStore.Config {

    angular
        .module('amma-common')
        .constant('FILE_CREATE_TOKEN_URL', 'http://localhost:5555/file/{type}')
        .constant('FILE_IS_VALID_URL', 'http://localhost:5555/file/{type}/{token}/is-valid')
        .constant('FILE_GET_LIST_URL', 'http://localhost:5555/file/{type}/{token}')
        .constant('FILE_VIEW_URL', 'http://localhost:5555/file/{type}/{token}/{fileName}')
        .constant('FILE_UPLOAD_URL', 'http://localhost:5555/file/{type}/{token}')
        .constant('FILE_REMOVE_URL', 'http://localhost:5555/file/{type}/{token}/{fileName}');
}
