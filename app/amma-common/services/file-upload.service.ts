module AmmaCommon.Services {

    export class FileUploadService {

        private createTokenUrl:string;
        private isValidUrl:string;
        private getListUrl:string;
        private viewUrl:string;
        private removeUrl:string;
        private uploadUrl:string;
        private uploadService;
        private httpService:ng.IHttpService;


        /** @ngInject */
        constructor(Upload,
                    $http:ng.IHttpService,
                    FILE_CREATE_TOKEN_URL:string,
                    FILE_IS_VALID_URL:string,
                    FILE_GET_LIST_URL:string,
                    FILE_VIEW_URL:string,
                    FILE_UPLOAD_URL:string,
                    FILE_REMOVE_URL:string) {

            this.httpService = $http;
            this.createTokenUrl = FILE_CREATE_TOKEN_URL;
            this.isValidUrl = FILE_IS_VALID_URL;
            this.getListUrl = FILE_GET_LIST_URL;
            this.viewUrl = FILE_VIEW_URL;
            this.uploadUrl = FILE_UPLOAD_URL;
            this.removeUrl = FILE_REMOVE_URL;
            this.uploadService = Upload;
        }

        createToken(type:string):ng.IHttpPromise<any> {
            const url = this.resolveUrl(this.createTokenUrl, {type: type});
            return this.httpService({
                method: 'GET',
                url: url
            });
        }

        getFilesList(type:string, token:string, canceler: ng.IDeferred<any>):ng.IHttpPromise<any> {

            const url = this.resolveUrl(this.getListUrl, {type: type, token: token, timeout: canceler.promise});
            return this.httpService({
                method: 'GET',
                url: url
            });
        }

        isValidCheck(type:string, token:string):ng.IHttpPromise<any> {
            const url = this.resolveUrl(this.isValidUrl, {type: type, token: token});
            return this.httpService({
                method: 'GET',
                url: url
            });
        }

        removeFile(type:string, token:string, fileName):ng.IHttpPromise<any> {
            const url = this.resolveUrl(this.removeUrl, {type: type, token: token, fileName: fileName});
            return this.httpService({
                method: 'DELETE',
                url: url
            });
        }

        upload(type:string, token:string, file):ng.IHttpPromise<any> {
            const url = this.resolveUrl(this.uploadUrl, {type: type, token: token});
            return this.uploadService.upload({
                url: url,
                data: {
                    file: file
                }
            });
        }

        viewFileUrl(type:string, token:string, fileName:string):string {
            return this.resolveUrl(this.viewUrl, {type: type, token: token, fileName: fileName});
        }

        resolveUrl(url:string, data:Object):string {
            angular.forEach(data, (value, key) => {
                url = url.replace('{' + key + '}', value);
            });
            return url;
        }

    }

    angular
        .module('amma-common')
        .service('AmmaFileUploadService', FileUploadService);
}
