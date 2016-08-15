var AmmaCommon;
(function (AmmaCommon) {
    var Services;
    (function (Services) {
        var FileUploadService = (function () {
            /** @ngInject */
            function FileUploadService(Upload, $http, FILE_CREATE_TOKEN_URL, FILE_IS_VALID_URL, FILE_GET_LIST_URL, FILE_VIEW_URL, FILE_UPLOAD_URL, FILE_REMOVE_URL) {
                this.httpService = $http;
                this.createTokenUrl = FILE_CREATE_TOKEN_URL;
                this.isValidUrl = FILE_IS_VALID_URL;
                this.getListUrl = FILE_GET_LIST_URL;
                this.viewUrl = FILE_VIEW_URL;
                this.uploadUrl = FILE_UPLOAD_URL;
                this.removeUrl = FILE_REMOVE_URL;
                this.uploadService = Upload;
            }
            FileUploadService.prototype.createToken = function (type) {
                var url = this.resolveUrl(this.createTokenUrl, { type: type });
                return this.httpService({
                    method: 'GET',
                    url: url
                });
            };
            FileUploadService.prototype.getFilesList = function (type, token, canceler) {
                var url = this.resolveUrl(this.getListUrl, { type: type, token: token, timeout: canceler.promise });
                return this.httpService({
                    method: 'GET',
                    url: url
                });
            };
            FileUploadService.prototype.isValidCheck = function (type, token) {
                var url = this.resolveUrl(this.isValidUrl, { type: type, token: token });
                return this.httpService({
                    method: 'GET',
                    url: url
                });
            };
            FileUploadService.prototype.removeFile = function (type, token, fileName) {
                var url = this.resolveUrl(this.removeUrl, { type: type, token: token, fileName: fileName });
                return this.httpService({
                    method: 'DELETE',
                    url: url
                });
            };
            FileUploadService.prototype.upload = function (type, token, file) {
                var url = this.resolveUrl(this.uploadUrl, { type: type, token: token });
                return this.uploadService.upload({
                    url: url,
                    data: {
                        file: file
                    }
                });
            };
            FileUploadService.prototype.viewFileUrl = function (type, token, fileName) {
                return this.resolveUrl(this.viewUrl, { type: type, token: token, fileName: fileName });
            };
            FileUploadService.prototype.resolveUrl = function (url, data) {
                angular.forEach(data, function (value, key) {
                    url = url.replace('{' + key + '}', value);
                });
                return url;
            };
            return FileUploadService;
        }());
        Services.FileUploadService = FileUploadService;
        angular
            .module('amma-common')
            .service('AmmaFileUploadService', FileUploadService);
    })(Services = AmmaCommon.Services || (AmmaCommon.Services = {}));
})(AmmaCommon || (AmmaCommon = {}));
