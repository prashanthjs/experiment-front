module AmmaCommon.directives.File {

    import FileUploadService = AmmaCommon.Services.FileUploadService;
    import MessageService = AmmaCommon.Services.MessageService;
    export interface IScope extends ng.IScope {
        ammaFileToken: string;
        ammaValidFiles: any[];
    }

    /** @ngInject */
    export function AmmaFile($parse: ng.IParseService, AmmaFileUploadService: FileUploadService, AmmaMessageService: MessageService, $q: ng.IQService): ng.IDirective {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope: ng.IScope, element, attrs, ngModelController) {
                // console.log(model(scope));//to get value
                // model.assign(scope,'test');
                let tokenModel = $parse(attrs.ammaFileToken);
                const type = attrs.ammaFileType;
                const ngModel = attrs.ngModel;
                const filesModel = $parse(attrs.ammaFile);
                const busyModel = $parse(attrs.ammaFileBusy);

                const ammaFileRemoveBind = attrs.ammaFileRemoveFunc;
                const ammaFileViewUrlBind = attrs.ammaFileViewUrlFunc;
                let canceler;

                const setToken = (token: string) => {
                    tokenModel.assign(scope, token);
                };

                const getToken = () => {
                    if (!tokenModel(scope)) {
                        tokenModel.assign(scope, getUniqueToken());
                    }
                    return tokenModel(scope);
                };

                const isBusy = (bool: boolean) => {
                    busyModel.assign(scope, bool);
                };

                const setFiles = (files: any[]) => {
                    filesModel.assign(scope, files);
                };

                const getFiles = () => {
                    return filesModel(scope) || [];
                };

                const addFile = (file)=> {
                    let files = getFiles();
                    files.push(file);
                    setFiles(files);
                };
                const removeFileFromModel = (file) => {
                    let files = getFiles();
                    let index = -1;
                    for (let i = 0; i < files.length; i++) {
                        if (files[i].filename && files[i].filename === file) {
                            index = i;
                            break;
                        }
                    }
                    if (index > -1) {
                        files.splice(index, 1);
                        setFiles(files);
                    }
                };

                const upload = (file)=> {
                    const promise = AmmaFileUploadService.upload(type, getToken(), file);
                    isBusy(true);
                    promise.then((response)=> {
                        addFile(response.data.file);
                        isBusy(false);
                        AmmaMessageService.displaySuccessMessage('file uploaded successfully');
                    }, (response: any)=> {
                        AmmaMessageService.displayErrorMessage('Cannot upload file', response);
                        isBusy(false);
                    });
                };

                const getUniqueToken = () => {
                    let string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
                    return string;
                };

                const loadFiles = () => {
                    isBusy(true);
                    if (canceler) {
                        canceler.resolve();
                    }
                    canceler = $q.defer();
                    AmmaFileUploadService.getFilesList(type, getToken(), canceler).then((response: any)=> {
                        setFiles(response.data.files);
                        isBusy(false);
                    }, (response) => {
                        AmmaMessageService.displayErrorMessage('Cannot get files', response);
                        isBusy(false);
                    });
                };

                const removeFile = (file, $event) => {
                    isBusy(true);
                    if ($event) {
                        $event.preventDefault();
                    }
                    AmmaFileUploadService.removeFile(type, getToken(), file).then((response: any)=> {
                        removeFileFromModel(file);
                        ngModelController.$validate();
                        isBusy(false);
                    }, (response) => {
                        AmmaMessageService.displayErrorMessage('Cannot remove file', response);
                        isBusy(false);
                    });
                };

                const isValid = () => {
                    return AmmaFileUploadService.isValidCheck(type, getToken());
                };

                const viewFileUrl = (file: string) => {
                    return AmmaFileUploadService.viewFileUrl(type, getToken(), file);
                };

                if (ammaFileRemoveBind) {
                    $parse(ammaFileRemoveBind).assign(scope, removeFile);
                }

                if (ammaFileViewUrlBind) {
                    $parse(ammaFileViewUrlBind).assign(scope, viewFileUrl);
                }

                if (attrs.ammaFileValidator) {
                    ngModelController.$asyncValidators.ammaFileValidator = (modelValue, viewValue) => {
                        let deferred = $q.defer();
                        isValid().then((response)=> {
                            deferred.resolve(true);
                        }, (response)=> {
                            deferred.reject(response.data.message);
                        });
                        return deferred.promise;
                    };
                }

                const unbindWatch = scope.$watch(ngModel, (newValue, oldValue)=> {
                    if (newValue && newValue != oldValue) {
                        upload(newValue);
                    }
                });

                const unbindTokenWatch = scope.$watch(tokenModel, (newValue, oldValue)=> {
                    loadFiles();
                });


                scope.$on('$destroy', ()=> {
                    unbindWatch();
                    unbindTokenWatch();
                });


            }
        };

    }

    angular
        .module('amma-common')
        .directive('ammaFile', AmmaFile);
}

